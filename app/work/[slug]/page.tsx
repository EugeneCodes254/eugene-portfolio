import Link from "next/link";

type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  role: string[];
  outcomes: string[];
  stack: string[];
  features: string[];
  architecture: string[];
  github: string;
  visualLabel: string;
  visualLines: string[];
};

const caseStudies: Record<string, CaseStudy> = {
  secureops: {
    slug: "secureops",
    title: "SecureOps Platform",
    eyebrow: "Full-Stack · Security Operations",
    summary: "A security operations management MVP designed to centralize authentication, workflows and security-company operations in one web application.",
    problem: "Security teams need more than a brochure website. They need secure access, structured workflows and a foundation that can grow into a complete operations platform without turning the codebase into a monolith.",
    solution: "I built a full-stack foundation with a Next.js frontend, Node.js/Express API and Prisma/PostgreSQL data layer. The authentication experience includes login, OTP verification, account recovery and password reset flows, while the backend is organized into maintainable modules.",
    role: ["Product-focused UI development", "Frontend and backend integration", "Authentication workflows", "API and database integration", "Architecture and troubleshooting"],
    outcomes: ["Working authentication and account-recovery journey", "Clear separation between frontend and backend responsibilities", "REST API foundation for future operational modules", "Database-backed architecture ready for continued development"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    features: ["Login and authentication", "OTP verification", "Password recovery", "REST API integration", "Modular backend", "Database integration", "Responsive interface"],
    architecture: ["Next.js / React UI", "REST API", "Express controllers + routes", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/EugeneCodes254/secureops-platform",
    visualLabel: "SECUREOPS / OPERATIONS",
    visualLines: ["Authentication", "Security workflows", "Operations dashboard", "PostgreSQL data layer"],
  },
  "mobile-pos-billing": {
    slug: "mobile-pos-billing",
    title: "Mobile POS & Billing App",
    eyebrow: "Mobile · Retail Technology",
    summary: "An offline-first Flutter POS application for fast retail checkout, inventory management, barcode scanning and Bluetooth thermal receipt printing.",
    problem: "Small retailers cannot always depend on a reliable internet connection at the point of sale. Checkout also needs to be fast, simple and connected to inventory and receipt hardware.",
    solution: "I designed the application around an offline-first workflow. Products and transactions can live on-device with Hive, cashiers can scan barcodes with the camera, totals are calculated locally and completed sales can be sent directly to a Bluetooth thermal printer.",
    role: ["Mobile application development", "Feature-first architecture", "Offline data persistence", "Barcode scanning integration", "Bluetooth printer integration"],
    outcomes: ["Checkout can continue without active internet", "Barcode/QR scanning reduces manual product entry", "Receipts can be printed directly from supported thermal printers", "Clean Architecture keeps features separated and testable"],
    stack: ["Flutter", "Dart", "BLoC", "Hive", "GetIt", "GoRouter", "fpdart", "mobile_scanner"],
    features: ["Product management", "Barcode / QR scanning", "Cart and checkout", "Receipt generation", "Bluetooth thermal printing", "Offline-first storage", "Shop settings"],
    architecture: ["Presentation / BLoC", "Domain / use cases", "Data / repositories", "Hive local storage", "Hardware integrations"],
    github: "https://github.com/EugeneCodes254/flutter_billing_app",
    visualLabel: "RETAIL POS / OFFLINE",
    visualLines: ["Scan product", "Build cart", "Calculate total", "Print receipt"],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  return {
    title: study ? `${study.title} | Eugene Kinyangi` : "Project | Eugene Kinyangi",
    description: study?.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <main className="case-page">
        <div className="container not-found"><p className="eyebrow">404</p><h1>Project not found.</h1><Link className="button primary" href="/#work">Back to work</Link></div>
      </main>
    );
  }

  return (
    <main className="case-page">
      <nav className="nav"><div className="container nav-inner"><Link className="logo" href="/#top">Eugene<span>.</span></Link><div className="nav-links"><Link href="/#about">About</Link><Link href="/#work">Work</Link><Link href="/#services">Services</Link><Link href="/#skills">Skills</Link><Link href="/#contact">Contact</Link></div></div></nav>

      <header className="case-hero"><div className="container"><Link className="back-link" href="/#work">← Back to selected work</Link><div className="eyebrow">{study.eyebrow}</div><h1>{study.title}</h1><p>{study.summary}</p><div className="actions"><a className="button primary" href={study.github} target="_blank" rel="noreferrer">View source on GitHub ↗</a><Link className="button" href="/#contact">Discuss a project</Link></div></div></header>

      <section className="case-section"><div className="container case-grid"><div><div className="section-label">01 — The project</div><h2>The challenge</h2><p>{study.problem}</p><h2>What I built</h2><p>{study.solution}</p></div><div className="case-visual"><div className="window-bar"><span></span><span></span><span></span><b>{study.visualLabel}</b></div><div className="visual-body"><div className="visual-sidebar"><i></i><i></i><i></i><i></i></div><div className="visual-content"><div className="visual-heading">{study.title}</div>{study.visualLines.map((line, index) => <div className="visual-row" key={line}><span>0{index + 1}</span><strong>{line}</strong><em>✓</em></div>)}</div></div></div></div></section>

      <section className="case-section alt"><div className="container"><div className="section-label">02 — Features</div><h2>What the product does.</h2><div className="feature-grid">{study.features.map((feature, index) => <article className="feature-box" key={feature}><span>0{index + 1}</span><h3>{feature}</h3><p>Built as part of the project workflow with a focus on reliability, usability and maintainable implementation.</p></article>)}</div></div></section>

      <section className="case-section"><div className="container"><div className="case-two-col"><div><div className="section-label">03 — My contribution</div><h2>What I worked on.</h2><ul className="check-list">{study.role.map((item) => <li key={item}>✓ {item}</li>)}</ul></div><div><div className="section-label">04 — Result</div><h2>What it demonstrates.</h2><ul className="check-list">{study.outcomes.map((item) => <li key={item}>✓ {item}</li>)}</ul></div></div></div></section>

      <section className="case-section alt"><div className="container"><div className="section-label">05 — Architecture</div><h2>How it is put together.</h2><div className="architecture">{study.architecture.map((layer, index) => <div className="architecture-step" key={layer}><span>0{index + 1}</span><strong>{layer}</strong>{index < study.architecture.length - 1 && <b>↓</b>}</div>)}</div><div className="tags case-tags">{study.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></section>

      <section className="case-cta"><div className="container"><div className="section-label">06 — Explore</div><h2>Want to see the implementation?</h2><p>The source repository contains the project structure, technical decisions and ongoing development work.</p><div className="actions" style={{justifyContent:"center"}}><a className="button primary" href={study.github} target="_blank" rel="noreferrer">Open GitHub repository ↗</a><Link className="button" href="/#work">More projects</Link></div></div></section>
      <footer><div className="container footer-inner"><span>© 2026 Eugene Kinyangi</span><span>Mombasa, Kenya · Software Developer</span></div></footer>
    </main>
  );
}
