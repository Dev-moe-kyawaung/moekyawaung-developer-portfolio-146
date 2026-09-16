import { useEffect, useState } from "react";

/** Background drifting embers, low-density, deterministic to avoid hydration cost. */
export function EmberField({ count = 32, className = "" }: { count?: number; className?: string }) {
  // Generate once on mount to keep SSR/CSR stable.
  const [embers, setEmbers] = useState<
    { left: number; size: number; delay: number; duration: number; drift: number }[]
  >([]);

  useEffect(() => {
    const next = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 20,
      duration: 14 + Math.random() * 18,
      drift: (Math.random() - 0.5) * 30,
    }));
    setEmbers(next);
  }, [count]);

  return (
    <div className={`ember-field ${className}`} aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            // Drift via CSS custom property consumed by keyframes is heavy; instead we vary the X via the keyframes' translate3d.
            // Using an inline style transform won't override the keyframe transform, so we keep it simple:
            // the horizontal motion is the keyframe's translate3d component which we modulate by left%.
          }}
        />
      ))}
    </div>
  );
}
