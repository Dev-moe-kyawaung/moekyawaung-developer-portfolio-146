// ============================================================================
// FLAGSHIP PORTFOLIO CONTENT — Moe Kyaw Aung
// Native Android expertise · architecture · performance · design systems ·
// large-scale realtime transit data.
// Client names anonymized in client-style format.
// ============================================================================

export const heroMetrics = [
  { value: 3, suffix: "+", label: "years senior Android" },
  { value: 25, suffix: "+", label: "apps shipped to production" },
  { value: 82, suffix: "+", label: "technical certifications" },
  { value: 99.9, suffix: "%", label: "crash-free across the fleet", decimals: 1 },
];

export const specRows = [
  { label: "Core", value: "Kotlin · Coroutines · Flow" },
  { label: "Architecture", value: "Clean · Multi-module · Hilt" },
  { label: "Performance", value: "240ms cold start · 0.3% jank" },
  { label: "Realtime", value: "2.4M events/day · GTFS-RT" },
  { label: "Release", value: "99.9% crash-free · CI gates" },
];

export const specMeters = [
  { label: "Frame pacing", pct: 96, note: "60fps sustained" },
  { label: "Startup path", pct: 92, note: "budget 400ms" },
  { label: "Memory discipline", pct: 88, note: "no leaks, 30d soak" },
];

export const disciplines = [
  {
    id: "architecture",
    index: "01",
    title: "Architecture leadership",
    tagline: "Systems your team can still understand in two years.",
    capabilities: [
      "Clean Architecture with enforced module boundaries",
      "Multi-module Gradle builds with dependency rules",
      "Dependency injection strategy (Hilt) and API surface design",
      "Incremental migration plans for legacy Java/XML estates",
    ],
    meter: { label: "Depth", pct: 95 },
    note: "Architecture is judged by the cost of the next change, not the elegance of the diagram.",
  },
  {
    id: "performance",
    index: "02",
    title: "Performance engineering",
    tagline: "Startup, frames, memory, and size — measured, budgeted, enforced.",
    capabilities: [
      "Cold-start tracing and startup-path reduction",
      "Frame pacing analysis and jank elimination",
      "Memory profiling, leak hunts, and 30-day soak tests",
      "APK size budgets and resource optimization wired into CI",
    ],
    meter: { label: "Depth", pct: 93 },
    note: "A performance win you cannot reproduce in CI will be lost by next quarter.",
  },
  {
    id: "design-systems",
    index: "03",
    title: "Design-system thinking",
    tagline: "One visual language, compiled once, used everywhere.",
    capabilities: [
      "Material 3 theming with design-token pipelines",
      "Jetpack Compose component libraries with contracts",
      "Dark/light and dynamic-color strategies that survive rebrands",
      "Preview-driven workflow so design review happens in code",
    ],
    meter: { label: "Depth", pct: 89 },
    note: "Tokens are the API between design and engineering — version them like code.",
  },
  {
    id: "realtime",
    index: "04",
    title: "Realtime & transit data",
    tagline: "Millions of moving positions, one calm screen.",
    capabilities: [
      "GTFS / GTFS-RT protobuf ingestion and normalization",
      "WebSocket sync with backoff, deltas, and idempotent upserts",
      "Offline timetables fused with live predictions",
      "Battery-aware update policies for always-on feeds",
    ],
    meter: { label: "Depth", pct: 87 },
    note: "Realtime is a trust product: the moment a prediction lies, users stop looking.",
  },
  {
    id: "security",
    index: "05",
    title: "Security & release craft",
    tagline: "Hardened builds, honest pipelines, calm releases.",
    capabilities: [
      "MASVS-informed threat modeling and hardening checklists",
      "Keystore-backed storage, auth flows, and API protection",
      "Signing, Play Integrity, and release-train automation",
      "GitHub Actions gates: tests, lint, size, and security scans",
    ],
    meter: { label: "Depth", pct: 85 },
    note: "Security work pays off silently — that's the point.",
  },
];

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  role: string;
  brief: string;
  challenge: string;
  architecture: { layer: string; body: string }[];
  performance: { value: string; label: string; note: string }[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  quote: { text: string; by: string };
  repo: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "sawadee-transit",
    index: "01",
    title: "Sawadee Transit",
    client: "Bangkok metropolitan transit consortium",
    sector: "Transit · Realtime data",
    year: "2024",
    role: "Lead Android Engineer",
    brief:
      "A commuter companion for Bangkok's rail, bus, and river network — live arrivals, service alerts, and offline timetables for half a million daily riders.",
    challenge:
      "GTFS-RT feeds arrive in bursts: 2.4M vehicle positions a day. Naive polling drained batteries and dropped frames on mid-range devices. Trains disappear underground, so the app had to feel alive with no signal at all — stale data presented confidently is worse than no data.",
    architecture: [
      {
        layer: "Ingestion",
        body: "GTFS-RT protobuf decoded off the main thread, normalized into delta events, deduplicated by vehicle ID with a bounded LRU.",
      },
      {
        layer: "Sync engine",
        body: "WebSocket with exponential backoff; idempotent upserts into Room; last-write-wins with vector clocks for alert propagation.",
      },
      {
        layer: "Domain",
        body: "Static schedules fused with realtime deltas into a single predicted-arrival model, cached for 90 seconds with confidence decay.",
      },
      {
        layer: "Presentation",
        body: "Compose map rendering derived Flow state at 60fps, with predictive prefetch of the rider's next two stations.",
      },
    ],
    performance: [
      { value: "240ms", label: "Cold start", note: "from splash to first prediction" },
      { value: "0.3%", label: "Frame jank · p95", note: "live map, mid-range devices" },
      { value: "−38%", label: "Battery vs. polling baseline", note: "delta sync + adaptive cadence" },
      { value: "9.8MB", label: "APK size · −52%", note: "resource shrinking + vector assets" },
    ],
    outcomes: [
      { value: "500k", label: "monthly riders in five months" },
      { value: "4.8★", label: "Play Store rating" },
      { value: "99.9%", label: "crash-free sessions" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "GTFS-RT", "Protobuf", "WebSocket", "Room", "WorkManager", "Hilt"],
    quote: {
      text: "The arrival board on my phone is now more trustworthy than the one on the platform.",
      by: "Rider review, Play Store",
    },
    repo: "https://github.com/Dev-moe-kyawaung",
  },
  {
    id: "pulse-ledger",
    index: "02",
    title: "Pulse Ledger",
    client: "Regional fintech",
    sector: "Payments · Offline-first",
    year: "2023",
    role: "Senior Android Engineer",
    brief:
      "A payments app where balances, transfers, and receipts had to stay correct through patchy connectivity across three countries.",
    challenge:
      "Users saw stale balances, duplicated transfers, and manual refresh loops. The monolithic codebase made every sync fix risky, and support was drowning in 'where is my money' tickets.",
    architecture: [
      {
        layer: "Boundaries",
        body: "Re-architected into multi-module Clean Architecture; repository contracts isolated Firebase, local storage, and sync policy.",
      },
      {
        layer: "Sync core",
        body: "Offline-first engine with idempotent writes, deterministic conflict resolution, and background reconciliation on reconnect.",
      },
      {
        layer: "Identity & data",
        body: "Firebase Auth with token refresh at the network layer; Firestore realtime flows mirrored into Room for instant offline reads.",
      },
      {
        layer: "Confidence",
        body: "GitHub Actions CI with unit, UI, and integration tests; every sync change landed behind a regression suite.",
      },
    ],
    performance: [
      { value: "−68%", label: "Sync-related tickets", note: "first quarter after release" },
      { value: "99.9%", label: "Crash-free sessions", note: "30-day rolling" },
      { value: "310ms", label: "Cold start", note: "budget 400ms" },
      { value: "5×", label: "Feature delivery speed", note: "module boundaries paid off" },
    ],
    outcomes: [
      { value: "3", label: "countries rolled out" },
      { value: "0", label: "duplicate-transfer incidents" },
      { value: "5×", label: "faster delivery" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "MVVM/MVI", "Firebase", "Room", "Retrofit", "GitHub Actions"],
    quote: {
      text: "Moe rebuilt our sync layer in a quarter. Support tickets dropped and the team finally trusted the data on screen.",
      by: "Product Lead, regional fintech",
    },
    repo: "https://github.com/Dev-moe-kyawaung/pulsesync-android",
  },
  {
    id: "ironwood-pos",
    index: "03",
    title: "Ironwood POS",
    client: "National retail chain",
    sector: "Retail · Point of sale",
    year: "2022",
    role: "Senior Android Engineer",
    brief:
      "A point-of-sale system for 120+ registers that had to survive network outages, low-end hardware, and the Friday-evening rush.",
    challenge:
      "Registers depended on a live network — outages meant lost sales. The old POS launched slowly, stuttered on entry-level hardware, and every update risked bricking a store floor.",
    architecture: [
      {
        layer: "Transaction core",
        body: "Offline-first transaction model with local persistence and a deterministic upload queue that replayed cleanly on reconnect.",
      },
      {
        layer: "Register surface",
        body: "Single-screen Compose workflow for cashiers — glanceable, glove-friendly, operable in under two taps per line item.",
      },
      {
        layer: "Hardware fit",
        body: "Startup path cut to essentials; memory ceilings tuned for 2GB devices; frame budgets enforced on the scan loop.",
      },
      {
        layer: "Trust",
        body: "Role-based access, encrypted local shift data, audit trails, and staged rollouts per store cluster.",
      },
    ],
    performance: [
      { value: "0.8s", label: "Cold start · from 2.1s", note: "entry-level hardware" },
      { value: "0", label: "Lost transactions", note: "during recorded outages" },
      { value: "120+", label: "Registers deployed", note: "staged by cluster" },
      { value: "−41%", label: "Memory footprint", note: "30-day soak verified" },
    ],
    outcomes: [
      { value: "120+", label: "store registers" },
      { value: "0.8s", label: "launch on low-end" },
      { value: "0", label: "lost transactions" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Clean Architecture", "Security"],
    quote: {
      text: "The POS went from a liability during outages to the fastest thing on the sales floor.",
      by: "Operations Director, national retail chain",
    },
    repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
  },
];

export const timeline = [
  {
    period: "2024 — Present",
    role: "Senior Android Consultant",
    org: "MKA Studio · Independent",
    place: "Yangon ↔ Bangkok",
    body: "Architecture reviews, performance rescues, and flagship builds for transit, fintech, and retail clients. Coaching teams on Clean Architecture, Compose migration, and release discipline.",
    tags: ["Consulting", "Architecture", "Coaching"],
  },
  {
    period: "2022 — 2024",
    role: "Senior Android Engineer",
    org: "Regional fintech",
    place: "Remote",
    body: "Owned the payments client: offline-first sync engine, Firebase integration, and the CI pipeline that made releases boring. Mentored four engineers to mid-level.",
    tags: ["Fintech", "Offline-first", "Firebase"],
  },
  {
    period: "2021 — 2022",
    role: "Android Engineer",
    org: "Retail technology",
    place: "Bangkok",
    body: "Built Ironwood POS across 120+ registers. Learned what performance means when the hardware is cheap, the network is unreliable, and the queue is long.",
    tags: ["POS", "Performance", "Hardware"],
  },
  {
    period: "2019 — 2021",
    role: "Mobile Developer",
    org: "Digital agency",
    place: "Bangkok",
    body: "Shipped twelve client apps across media, travel, and commerce. Earned release discipline the hard way — every Friday deploy, every store review, every hotfix.",
    tags: ["Agency", "12 apps", "Release craft"],
  },
];

export const writing = [
  {
    date: "Nov 2025",
    title: "Frame pacing is a product feature",
    outlet: "mka.engineering",
    read: "9 min",
  },
  {
    date: "Aug 2025",
    title: "GTFS-RT without tears: decoding transit feeds on a phone",
    outlet: "mka.engineering",
    read: "14 min",
  },
  {
    date: "May 2025",
    title: "Offline-first is an architecture, not a flag",
    outlet: "Droidcon · Talk",
    read: "32 min",
  },
  {
    date: "Feb 2025",
    title: "A Compose migration playbook that doesn't freeze the roadmap",
    outlet: "mka.engineering",
    read: "11 min",
  },
];

export const manifestoFacts = [
  { label: "Base", value: "Tachileik, Myanmar ↔ Bangkok, Thailand" },
  { label: "Focus", value: "Native Android · Kotlin-first" },
  { label: "Currently", value: "MoekyawTranslator — on-device AI translation" },
  { label: "Languages", value: "Burmese · English · Kotlin" },
  { label: "Certifications", value: "82+ across nine disciplines" },
  { label: "Status", value: "Selecting Q3 2026 engagements" },
];

export const certMarquee = [
  "Kotlin",
  "Jetpack Compose",
  "Coroutines",
  "Flow",
  "Hilt",
  "Room",
  "WorkManager",
  "Media3",
  "Firebase",
  "GTFS-RT",
  "Protobuf",
  "Material 3",
  "Espresso",
  "MockK",
  "GitHub Actions",
  "Play Integrity",
];
