// ============================================================================
// PORTFOLIO CONTENT — Moe Kyaw Aung
// Real bio content. Sample metrics clearly labeled.
// ============================================================================

export const profile = {
  name: "Moe Kyaw Aung",
  role: "Senior Android Engineer",
  tagline: "Code with culture. Build with purpose.",
  intro:
    "Senior Android Engineer with 3+ years building high-performance mobile applications in Kotlin, Jetpack Compose, MVVM/MVI, and Clean Architecture — backed by 82+ programming certifications across 9 categories and full-stack depth across Firebase, REST APIs, Python, and AI/ML.",
  location: "Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭",
  email: "hello@moekyawaung.dev",
  phone: "+95 9 889 000 889",
  backupPhone: "+959 666 000 050",
  github: "https://github.com/Dev-moe-kyawaung",
  githubShort: "Dev-moe-kyawaung",
  linkedin: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1",
  youtube: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG",
  vimeo: "https://vimeo.com/user252414232",
  bsky: "https://bsky.app/profile/moekyawaung96.bsky.social",
  tumblr: "https://www.tumblr.com/moekyawaung",
  flickr: "https://www.flickr.com/people/204037451@N06",
  paypal: "https://paypal.me/my/profile",
  resumeUrl: "#",
  status: "Open to Work · Senior Android & Full-Stack Roles",
  portraitUrl: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  languages: "Burmese 🇲🇲 · English 🌐 · Kotlin ☕",
  focus: {
    Mobile: "Kotlin · Jetpack Compose · MVVM · Clean Arch",
    Backend: "Firebase · REST APIs · Python",
    Security: "Ethical Hacking · Cybersecurity",
    AI_ML: "Claude API · TFLite · On-Device ML",
  },
  currentlyBuilding: "MoekyawTranslator — AI Translation App",
  certifications: "40+ certs · Google Developers Launchpad",
  philosophy: "Code with culture. Build with purpose.",
};

// ============================================================================
// IMPACT METRICS — sample sizes, clearly labeled
// ============================================================================
export const metrics = [
  { label: "Programming certifications", value: "82+", note: "Programming Hub · 9 categories" },
  { label: "Skill categories", value: "9", note: "Prog · Web · Mobile · DB · AI · Security · Blockchain · SE · Business" },
  { label: "Years of development", value: "3+", note: "Continuous learning & building" },
  { label: "Apps & projects shipped", value: "25+", note: "Across web, mobile, AI, security" },
  { label: "Languages & platforms", value: "20+", note: "Kotlin · Python · JS/TS · Java · Rust · Go · Flutter…" },
  { label: "Google Launchpad certs", value: "40+", note: "Google Developers Launchpad" },
];

// ============================================================================
// ARCHITECTURE MAP — nodes & links (Moe's stack)
// ============================================================================
export type ArchNodeId =
  | "clients"
  | "gateway"
  | "services"
  | "queue"
  | "cache"
  | "database"
  | "observability";

export interface ArchNode {
  id: ArchNodeId;
  label: string;
  short: string;
  pos: [number, number];
  color: "signal" | "cyan" | "ink";
  tech: string[];
  note: string;
  metric: string;
}

export const archNodes: ArchNode[] = [
  {
    id: "clients",
    label: "Client Apps",
    short: "Android · Compose · Web",
    pos: [0, 0],
    color: "ink",
    tech: ["Kotlin", "Jetpack Compose", "MVVM/MVI", "Material 3", "Coroutines"],
    note:
      "Modern Android clients built with Jetpack Compose, MVVM/MVI patterns, Clean Architecture, and offline-first design. Kotlin-first mindset, multi-module structure, Coroutines + Kotlin Flow, Material 3 theming.",
    metric: "Mobile-first · Compose UI · offline-ready",
  },
  {
    id: "gateway",
    label: "API Gateway",
    short: "Retrofit · OkHttp · Firebase",
    pos: [1, 0],
    color: "signal",
    tech: ["Retrofit", "OkHttp", "Firebase Auth", "REST APIs"],
    note:
      "Local-first networking with Retrofit and OkHttp for REST APIs; Firebase for Auth, Firestore, Cloud Messaging, and Crashlytics. Secure, observable client-server communication with proper error handling and token refresh.",
    metric: "REST + Firebase · auth · crashlytics",
  },
  {
    id: "services",
    label: "Business Services",
    short: "Clean Arch · Coroutines · Flow",
    pos: [2, 0],
    color: "cyan",
    tech: ["Kotlin Coroutines", "Kotlin Flow", "Hilt/Dagger", "Repository", "UseCases"],
    note:
      "Domain-bounded services using Clean Architecture: data / domain / presentation layers. Repository pattern abstracts data sources, UseCases encapsulate business logic, and Coroutines + Kotlin Flow power async streams cleanly.",
    metric: "Modular · testable · observable",
  },
  {
    id: "queue",
    label: "Event Bus",
    short: "Kotlin Flow · StateFlow · Channels",
    pos: [2, 1],
    color: "cyan",
    tech: ["StateFlow", "SharedFlow", "Channels", "Coroutines", "Reactive streams"],
    note:
      "Kotlin Flow + StateFlow/SharedFlow as the reactive backbone for UI state and events. Channels for one-shot events and coroutine channels for inter-component messaging. Predictable, cancelable streams.",
    metric: "Reactive UI · side effects · streams",
  },
  {
    id: "cache",
    label: "Cache Layer",
    short: "Room · DataStore · in-memory",
    pos: [3, 0],
    color: "signal",
    tech: ["Room Database", "DataStore", "ViewModel", "LiveData → Flow"],
    note:
      "Room for persistent structured data with proper DAOs and relations; DataStore for preferences. ViewModels hold UI state, bridging data and presentation. Local caching enables offline-first UX and fast cold starts.",
    metric: "Offline-first · fast · persistent",
  },
  {
    id: "database",
    label: "Data Stores",
    short: "Firestore · Room · SQLite",
    pos: [3, 1],
    color: "ink",
    tech: ["Firestore", "Room", "SQLite", "DataStore"],
    note:
      "Cloud Firestore for real-time sync and scalable NoSQL, Room/SQLite for local structured persistence. Data migrations handled carefully. Firebase security rules + local encryption where appropriate.",
    metric: "Cloud sync · local persist · real-time",
  },
  {
    id: "observability",
    label: "Observability",
    short: "Crashlytics · Analytics · Tests",
    pos: [1, 1],
    color: "signal",
    tech: ["Firebase Crashlytics", "Firebase Analytics", "Timber", "JUnit/Espresso/MockK"],
    note:
      "Crashlytics for crash reporting and analytics, Timber for clean structured logging in debug builds. Testing strategy (JUnit, Espresso, MockK, UI/instrumentation tests) to catch regressions. CI feedback via GitHub Actions/Azure DevOps.",
    metric: "Crash reports · analytics · CI feedback",
  },
];

export const archLinks: [ArchNodeId, ArchNodeId][] = [
  ["clients", "gateway"],
  ["gateway", "services"],
  ["gateway", "observability"],
  ["services", "queue"],
  ["services", "cache"],
  ["services", "database"],
  ["queue", "database"],
  ["cache", "database"],
  ["services", "observability"],
];

// ============================================================================
// CASE STUDIES / SELECTED SYSTEMS
// ============================================================================
export interface CaseStudy {
  id: string;
  title: string;
  domain: string;
  timeframe: string;
  role: string;
  summary: string;
  problem: string;
  approach: string[];
  outcomes: { label: string; value: string }[];
  stack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "pulsesync",
    title: "PulseSync — Real-time Sync Platform",
    domain: "Android · Backend · Real-time Sync",
    timeframe: "2025",
    role: "Senior Android Engineer · Full-stack contributor",
    summary:
      "Advanced multi-module Android application demonstrating senior-level architecture, Firebase backend integration, offline-first design, and a full CI/CD pipeline with GitHub Actions.",
    problem:
      "Real-world apps need robust offline support, conflict resolution, and clean architecture to handle real usage. Simple monolithic Android apps don't scale in production and quickly become unmaintainable.",
    approach: [
      "Multi-module architecture with Clean Architecture — clear separation of data, domain, and presentation layers.",
      "Firebase backend: Authentication for user management, Firestore for real-time data sync, robust offline-first local caching with sync reconciliation.",
      "Kotlin Coroutines + Flow for reactive async streams; Room for local persistence with proper schema migrations.",
      "MVVM/MVI presentation layer with Jetpack Compose UI and proper state hoisting for predictable behavior.",
      "Full CI/CD pipeline with GitHub Actions, automated testing, and Fastlane-style release automation.",
    ],
    outcomes: [
      { label: "Architecture", value: "Multi-module · Clean Arch" },
      { label: "Sync", value: "Firebase real-time + offline-first" },
      { label: "CI/CD", value: "GitHub Actions · automated" },
      { label: "Testing", value: "JUnit · Espresso · MockK" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "MVVM/MVI", "Firebase", "Room", "Retrofit", "Coroutines/Flow", "GitHub Actions"],
  },
  {
    id: "video-player",
    title: "Video Player App",
    domain: "Android · Media · Compose UI",
    timeframe: "2025",
    role: "Senior Android Engineer",
    summary:
      "Modern Android video player built with Jetpack Compose, featuring robust media playback, clean UI, and modern architecture patterns with lifecycle-aware playback and Material 3 design.",
    problem:
      "Media apps require careful lifecycle handling, state management across playback states, and polished UI — legacy implementations often lead to playback crashes and poor user experience.",
    approach: [
      "Jetpack Compose UI with modern Material 3 design and smooth playback transitions.",
      "Proper lifecycle-aware media playback with ExoPlayer/Media3 integration and robust state handling.",
      "Clean Architecture separating UI, domain, and data layers for testability and maintainability.",
      "State hoisting and unidirectional data flow for predictable playback state across lifecycle events.",
    ],
    outcomes: [
      { label: "Playback", value: "Robust · lifecycle-aware" },
      { label: "UI", value: "Jetpack Compose · Material 3" },
      { label: "Architecture", value: "Clean Arch · testable" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Media3/ExoPlayer", "Clean Architecture", "ViewModel"],
  },
  {
    id: "pos-ultimate",
    title: "POS Ultimate — Point of Sale System",
    domain: "Android · Business · Full-featured App",
    timeframe: "2024–2025",
    role: "Senior Android Engineer",
    summary:
      "Full-featured Point of Sale system demonstrating business-domain depth, clean architecture, and robust local data handling with modern Android patterns — business domains like cart, pricing, and inventory handled with confidence.",
    problem:
      "POS apps need reliable local data storage, fast UI, complex business logic (cart, pricing, inventory), and must work in varied connectivity conditions — often in retail environments where reliability is critical.",
    approach: [
      "Full-featured POS with cart management, product catalog, receipt generation, and reliable local data persistence.",
      "Clean Architecture with clear separation of business logic (cart, pricing, inventory) from UI layer.",
      "Room database for reliable local storage with proper schema migrations and data integrity.",
      "Modern Kotlin patterns: Coroutines, Flow, repository pattern for clean data access and testability.",
      "Offline-first consideration for retail environments where connectivity may be unreliable.",
    ],
    outcomes: [
      { label: "Business logic", value: "Full POS feature set" },
      { label: "Data", value: "Room · reliable local storage" },
      { label: "Architecture", value: "Clean Architecture · modular" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Room", "Clean Architecture", "Coroutines/Flow", "ViewModel"],
  },
];

// ============================================================================
// ADR-STYLE ARCHITECTURE DECISIONS
// ============================================================================
export interface ADR {
  id: string;
  number: string;
  title: string;
  status: "Adopted" | "Trial" | "Superseded";
  context: string;
  decision: string;
  tradeoff: string;
}

export const adrs: ADR[] = [
  {
    id: "adr-001",
    number: "ADR-001",
    title: "Kotlin-first, Jetpack Compose UI, Clean Architecture",
    status: "Adopted",
    context:
      "Early Android apps often used XML layouts, Activity-heavy logic, and tight coupling — hard to test, maintain, and scale as the app grows.",
    decision:
      "Kotlin-first codebase with Jetpack Compose for UI, Clean Architecture (data / domain / presentation), and MVVM/MVI patterns. Coroutines + Kotlin Flow for async, Room/DataStore for local storage.",
    tradeoff:
      "Compose has a learning curve and Compose-heavy apps can ship slightly larger UI bundles — but the payoff is modern tooling, preview-driven development, and far better testability and state management.",
  },
  {
    id: "adr-002",
    number: "ADR-002",
    title: "Firebase + REST hybrid backend",
    status: "Adopted",
    context:
      "Mobile apps need authentication, real-time sync, cloud storage, and crash reporting — reimplementing all of this server-side is expensive and slow early on.",
    decision:
      "Firebase (Auth, Firestore, Cloud Messaging, Crashlytics, Analytics) for rapid, production-grade mobile backend capabilities; Retrofit + OkHttp for REST APIs where external services or custom server logic are needed.",
    tradeoff:
      "Firebase vendor lock-in risk — accepted for speed and capability, with a clean repository abstraction so the backend layer can be replaced or extended as needs grow.",
  },
  {
    id: "adr-003",
    number: "ADR-003",
    title: "Offline-first with local cache",
    status: "Adopted",
    context:
      "Network is unreliable on mobile; apps that require fresh connectivity on every screen feel broken in real-world usage.",
    decision:
      "Local Room cache + DataStore for preferences; data flows: remote → local → UI, with retry/backoff strategies. Firebase offline persistence where appropriate.",
    tradeoff:
      "More data-sync complexity and potential conflict handling — worth it for a resilient, responsive user experience that works everywhere.",
  },
  {
    id: "adr-004",
    number: "ADR-004",
    title: "Full CI/CD and automated testing culture",
    status: "Adopted",
    context:
      "Manual builds and releases slow teams down and introduce human error; untested code hides regressions until users find them.",
    decision:
      "GitHub Actions / Azure DevOps pipelines for build, test, and release automation. JUnit + Espresso + MockK + UI/instrumentation tests; Fastlane-style release automation.",
    tradeoff:
      "Setup and maintenance cost for pipelines and comprehensive test suites — amortized quickly by faster, safer releases and fewer production bugs.",
  },
  {
    id: "adr-005",
    number: "ADR-005",
    title: "AI/ML integration via Python + on-device TFLite",
    status: "Trial",
    context:
      "Modern apps increasingly need AI features — translation, image understanding, recommendations — and the right approach depends on latency, privacy, and cost constraints.",
    decision:
      "Python for backend/AI work (Claude API, LLM-powered apps). TensorFlow Lite for on-device ML where offline capability, user privacy, or low latency matter more than heavy server-side compute.",
    tradeoff:
      "On-device ML increases app size and needs careful model selection and updates — great for targeted use cases, not a universal replacement for server-side AI.",
  },
];

// ============================================================================
// RELIABILITY DASHBOARD — sample data, clearly labeled
// ============================================================================
export const appMetrics = [
  { name: "Apps shipped", target: "20+", actual: "25+", latencyP99: "Across platforms" },
  { name: "Certifications", target: "50+", actual: "82+", latencyP99: "9 categories" },
  { name: "Platform coverage", target: "Android", actual: "Android + Web + Backend", latencyP99: "Full-stack" },
  { name: "CI/CD maturity", target: "Automated", actual: "GitHub Actions + Fastlane", latencyP99: "CI feedback" },
];

export type SloRowData = { name: string; target: number; actual: number; latencyP99: string };
export const slos: SloRowData[] = appMetrics.map((m) => ({
  name: m.name,
  target: parseFloat(m.target.toString()) || 99.0,
  actual: parseFloat(m.actual.toString()) || 99.0,
  latencyP99: m.latencyP99,
}));

export const uptimeTrend = [30, 45, 55, 62, 68, 72, 76, 78, 80, 81, 82, 82];
export const deployFreq = [30, 45, 55, 62, 68, 72, 76, 78, 80, 81, 82, 82];

export type DistRow = { p: string; ms: number };
export const certDistribution = [
  { label: "Programming", pct: 13 },
  { label: "Web Dev", pct: 13 },
  { label: "Mobile/App", pct: 7 },
  { label: "Databases", pct: 6 },
  { label: "AI & Data", pct: 11 },
  { label: "Security/DevOps", pct: 10 },
  { label: "Blockchain", pct: 4 },
  { label: "Software Eng", pct: 7 },
  { label: "Business", pct: 11 },
];
export const latencyDist: DistRow[] = certDistribution.map((d) => ({ p: `${d.label} ${d.pct}%`, ms: d.pct }));

export type Incident = { date: string; title: string; severity: string; learning: string };
export const incidents: Incident[] = [
  {
    date: "2025-04",
    title: "Sample: offline-sync conflict under poor connectivity",
    severity: "SEV-3",
    learning: "A real-world sync conflict can surface under poor connectivity. Always test merge/conflict logic under simulated flaky networks.",
  },
  {
    date: "2025-01",
    title: "Sample: CI pipeline flakiness",
    severity: "SEV-2",
    learning: "Flaky tests hide real regressions. Invest in stable, fast test suites and quarantine flaky tests aggressively.",
  },
];

export const certTrend = [30, 45, 55, 62, 68, 72, 76, 78, 80, 81, 82, 82];

// ============================================================================
// TECHNICAL LEADERSHIP
// ============================================================================
export interface LeadershipCard {
  title: string;
  points: string[];
  icon: string;
}

export const leadershipCards: LeadershipCard[] = [
  {
    title: "Mentoring & growth",
    icon: "users",
    points: [
      "Built and shared Clean Architecture / MVVM patterns as reusable templates for newer developers.",
      "Documented CI/CD and Firebase setup so teammates can onboard projects faster.",
      "Believe in continuous learning: 82+ certs and constant skill expansion across the stack.",
    ],
  },
  {
    title: "Roadmaps & strategy",
    icon: "map",
    points: [
      "Treat each app as a small product: define the problem, pick the right stack, and ship iteratively.",
      "Balance native Android depth with full-stack breadth — Firebase, REST APIs, Python, AI/ML.",
      "Plan for maintainability: modular architecture, CI, and testing from the start.",
    ],
  },
  {
    title: "Security & quality mindset",
    icon: "shield",
    points: [
      "Ethical hacking and cybersecurity study informs a defensive mindset — auth, secure storage, input handling, secure API communication.",
      "Testable architecture (Clean Arch, MVVM, JUnit/Espresso/MockK) as a first-class habit, not an afterthought.",
      "Observability via Firebase Crashlytics + Analytics to learn from real usage and crashes.",
    ],
  },
];

// ============================================================================
// APPS & OPEN SOURCE
// ============================================================================
export interface AppCategory {
  emoji: string;
  name: string;
  desc: string;
}

export const appCategories: AppCategory[] = [
  { emoji: "📱", name: "Social Dashboard", desc: "Real-time social media analytics dashboard" },
  { emoji: "📱", name: "PWA App", desc: "Progressive web application with offline support" },
  { emoji: "📊", name: "Admin Dashboard", desc: "Clean admin panel with data visualization" },
  { emoji: "📈", name: "Stock Market", desc: "Real-time stock tracking and market analysis" },
  { emoji: "🎮", name: "Game Collection", desc: "Portfolio of casual games" },
  { emoji: "🎵", name: "Music Player", desc: "Modern music player with smooth playback" },
  { emoji: "💬", name: "Chat App", desc: "Real-time messaging with clean UI" },
  { emoji: "⚽", name: "World Cup", desc: "Tournament tracker and bracket viewer" },
  { emoji: "🛒", name: "E-commerce", desc: "Full online store with cart and checkout" },
  { emoji: "💼", name: "Portfolio", desc: "Personal portfolio showcasing work" },
  { emoji: "💰", name: "Money Tracker", desc: "Personal finance and expense tracker" },
  { emoji: "🌤️", name: "Weather", desc: "Weather forecast with location services" },
  { emoji: "💸", name: "Crypto", desc: "Cryptocurrency prices and trends" },
  { emoji: "📝", name: "Todo", desc: "Task management with clean UI" },
  { emoji: "🎯", name: "Video Player", desc: "Modern video playback with Compose UI" },
  { emoji: "🎯", name: "LEGEND!", desc: "Flagship senior-level Android application" },
];

export interface Repo {
  name: string;
  desc: string;
  lang: string;
  stars: string;
  href: string;
}

export const openSourceRepos: Repo[] = [
  {
    name: "PulseSync",
    desc: "Multi-module Android app showcasing Clean Architecture, Firebase backend, offline-first sync, and full CI/CD with GitHub Actions.",
    lang: "Kotlin",
    stars: "Featured",
    href: "https://github.com/Dev-moe-kyawaung/pulsesync-android",
  },
  {
    name: "Video Player App",
    desc: "Modern Android video player with Jetpack Compose UI, lifecycle-aware playback, and clean architecture.",
    lang: "Kotlin",
    stars: "Featured",
    href: "https://github.com/moekyawaung-tech/video-player",
  },
  {
    name: "Social Dashboard",
    desc: "New social dashboard app with Firebase-backed real-time features and modern Compose UI.",
    lang: "Kotlin",
    stars: "Featured",
    href: "https://github.com/moekyawaung-tech/social-dashboard",
  },
  {
    name: "POS Ultimate Pro Max",
    desc: "Full-featured Point of Sale system demonstrating business-domain depth, clean architecture, and robust local data handling.",
    lang: "Kotlin",
    stars: "Featured",
    href: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
  },
  {
    name: "Job Portal App",
    desc: "Android job portal with REST API integration, clean architecture, and modern UI patterns.",
    lang: "Kotlin",
    stars: "Featured",
    href: "https://github.com/moekyawaung-tech/Job-Portal-App",
  },
];

export interface WritingItem {
  title: string;
  outlet: string;
  year: string;
  href: string;
}

export const writingItems: WritingItem[] = [
  {
    title: "Build with culture, code with purpose",
    outlet: "Personal philosophy",
    year: "always",
    href: "#",
  },
  {
    title: "Clean Architecture on Android: data / domain / presentation",
    outlet: "Engineering notes",
    year: "2025",
    href: "#",
  },
  {
    title: "Firebase + REST: hybrid backends for Android apps",
    outlet: "Engineering notes",
    year: "2025",
    href: "#",
  },
  {
    title: "Jetpack Compose & MVVM: a modern Android foundation",
    outlet: "Engineering notes",
    year: "2025",
    href: "#",
  },
];

// ============================================================================
// BACKWARD-COMPATIBLE ALIASES (for components using old names)
// ============================================================================
export const leadership = leadershipCards;
export const openSource = openSourceRepos;
export const writing = writingItems;

// ============================================================================
// NAV
// ============================================================================
export const navLinks = [
  { label: "Cores", href: "#projects" },
  { label: "Decisions", href: "#decisions" },
  { label: "Reliability", href: "#reliability" },
  { label: "Leadership", href: "#leadership" },
  { label: "Open source", href: "#open-source" },
  { label: "Contact", href: "#contact" },
];
