import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import { Line, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { archNodes, archLinks, type ArchNode, type ArchNodeId } from "../../data/portfolio";

// Map palette names → hex for three.js materials
const COLORS: Record<ArchNode["color"], string> = {
  signal: "#ff7a2f",
  cyan: "#4fd1e6",
  ink: "#9fb2d6",
};

// Convert grid [col,row] into 3D world position (isometric-ish plane on XZ).
function worldPos(pos: [number, number]): [number, number, number] {
  const [col, row] = pos;
  const spacingX = 2.4;
  const spacingZ = 2.6;
  // center the grid roughly around origin
  return [(col - 1.5) * spacingX, 0, (row - 0.5) * spacingZ];
}

function NodeMesh({
  node,
  selected,
  hovered,
  onSelect,
  onHover,
  reduced,
}: {
  node: ArchNode;
  selected: boolean;
  hovered: boolean;
  onSelect: (id: ArchNodeId) => void;
  onHover: (id: ArchNodeId | null) => void;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  const base = worldPos(node.pos);
  const color = COLORS[node.color];
  const { invalidate } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    const active = selected || hovered;
    const targetY = active ? 0.55 : 0;
    if (reduced) {
      // No continuous animation — snap to the resting/active height.
      ref.current.position.y = targetY;
      return;
    }
    // Smooth lift on hover/select
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.15);
    // Gentle idle bob
    const bob = Math.sin(state.clock.elapsedTime * 1.2 + node.pos[0]) * 0.04;
    ref.current.position.y += bob * 0.15;
  });

  // In demand (reduced-motion) mode, request a render when interaction state flips.
  useEffect(() => {
    if (reduced) invalidate();
  }, [reduced, selected, hovered, invalidate]);

  return (
    <group position={base}>
      {/* base pad */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.36, 0]}>
        <planeGeometry args={[1.9, 1.9]} />
        <meshBasicMaterial color={color} transparent opacity={selected ? 0.16 : 0.06} />
      </mesh>

      {/* pillar under the block */}
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[0.06, 0.6, 0.06]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>

      <group ref={ref}>
        <RoundedBox
          args={[1.4, 0.5, 1.4]}
          radius={0.08}
          smoothness={3}
          onClick={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation();
            onSelect(node.id);
          }}
          onPointerOver={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            onHover(node.id);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            onHover(null);
            document.body.style.cursor = "auto";
          }}
        >
          <meshStandardMaterial
            color={selected || hovered ? color : "#16233f"}
            emissive={color}
            emissiveIntensity={selected ? 0.6 : hovered ? 0.35 : 0.12}
            metalness={0.3}
            roughness={0.45}
          />
        </RoundedBox>

        {/* wireframe edge overlay for blueprint feel */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1.42, 0.52, 1.42)]} />
          <lineBasicMaterial color={color} transparent opacity={selected || hovered ? 0.9 : 0.4} />
        </lineSegments>

        {/* selection ring */}
        {selected && (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.28, 0]}>
            <ringGeometry args={[0.95, 1.02, 32]} />
            <meshBasicMaterial color={color} transparent opacity={0.8} side={THREE.DoubleSide} />
          </mesh>
        )}
      </group>
    </group>
  );
}

function Links({ activeId }: { activeId: ArchNodeId | null }) {
  const byId = useMemo(() => Object.fromEntries(archNodes.map((n) => [n.id, n])), []);
  return (
    <>
      {archLinks.map(([a, b], i) => {
        const na = byId[a];
        const nb = byId[b];
        if (!na || !nb) return null;
        const pa = worldPos(na.pos);
        const pb = worldPos(nb.pos);
        const isActive = activeId === a || activeId === b;
        return (
          <Line
            key={i}
            points={[
              [pa[0], -0.1, pa[2]],
              [pb[0], -0.1, pb[2]],
            ]}
            color={isActive ? "#ff7a2f" : "#294170"}
            lineWidth={isActive ? 2 : 1}
            transparent
            opacity={isActive ? 0.9 : 0.5}
            dashed={false}
          />
        );
      })}
    </>
  );
}

function Rig({ reduced }: { reduced: boolean }) {
  useFrame((state) => {
    if (reduced) return;
    const t = state.clock.elapsedTime;
    // Very subtle parallax orbit
    state.camera.position.x = Math.sin(t * 0.12) * 0.6 + 7;
    state.camera.position.z = Math.cos(t * 0.12) * 0.6 + 7;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ArchScene({
  selected,
  onSelect,
  reduced,
}: {
  selected: ArchNodeId | null;
  onSelect: (id: ArchNodeId | null) => void;
  reduced: boolean;
}) {
  const [hovered, setHovered] = useState<ArchNodeId | null>(null);
  const activeId = selected ?? hovered;

  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [7, 6.5, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      onPointerMissed={() => onSelect(null)}
      frameloop={reduced ? "demand" : "always"}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 10, 4]} intensity={1.1} color="#cfe0ff" />
      <pointLight position={[-4, 4, -4]} intensity={40} color="#ff7a2f" distance={20} />

      <Rig reduced={reduced} />
      <Links activeId={activeId} />

      {archNodes.map((node) => (
        <NodeMesh
          key={node.id}
          node={node}
          selected={selected === node.id}
          hovered={hovered === node.id}
          onSelect={onSelect}
          onHover={setHovered}
          reduced={reduced}
        />
      ))}
    </Canvas>
  );
}
