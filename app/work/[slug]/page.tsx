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
    outcomes: ["Working authentication and account-recovery journey", "Clear separation between frontend and backend responsibilities", "REST API foundation for operational modules including incidents, personnel, sites and reports", "Database-backed architecture ready for continued development of security operations workflows"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    features: ["Login and authentication", "OTP verification", "Password recovery", "REST API integration", "Modular backend", "Database integration", "Responsive interface"],
    architecture: ["Next.js / React UI", "REST API", "Express controllers + routes", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/EugeneCodes254/secureops-platform",
    visualLabel: "SECUREOPS / OPERATIONS",
    visualLines: ["Authentication", "Security workflows", "Operations dashboard", "PostgreSQL data layer"],
  },
  "destination-bofa": {
    slug: "destination-bofa",
    title: "Destination@Bofa",
    eyebrow: "Hospitality · Luxury Beach Villas",
    summary: "A polished hospitality website for The Destination@Bofa, presenting twin beachfront villas in Bofa, Kilifi through immersive storytelling, galleries, property videos, services, rates and booking enquiries.",
    problem: "A luxury property needs more than a simple brochure page. Guests need to understand the villas, see the spaces, experience the property visually and find practical information before making an enquiry.",
    solution: "I built a responsive Next.js experience centered around the property story and guest journey. The site combines a cinematic hero, villa information, image galleries, property and villa videos, comfort services, rates and a booking enquiry section into one cohesive experience.",
    role: ["Product-focused web development", "Responsive UI implementation", "Property storytelling and information architecture", "Interactive image gallery", "Video experience integration", "Booking enquiry experience"],
    outcomes: ["Clear presentation of the twin beachfront villas", "Interactive gallery for property imagery", "Dedicated property and villa video experiences", "Structured services and rates information", "Booking enquiry flow for prospective guests"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: ["Twin villa presentation", "Beachfront property storytelling", "Image gallery", "Property tour video", "Villa Amani and Villa Raha videos", "Services and guest comforts", "Rates and booking enquiries"],
    architecture: ["Next.js / React UI", "Responsive page sections", "Interactive gallery + media state", "Video presentation layer", "Booking enquiry interface"],
    github: "https://github.com/EugeneCodes254/destination-bofa",
    visualLabel: "DESTINATION@BOFA / HOSPITALITY",
    visualLines: ["Twin beachfront villas", "Gallery + visual storytelling", "Property tour + villa videos", "Rates + booking enquiries"],
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

  bizflow: {
    slug: "bizflow",
    title: "BizFlow",
    eyebrow: "Full-Stack · SME Business Management",
    summary: "A modular business-management platform for SMEs, with a backend covering authentication, customers, products, sales, invoices, payments, expenses, suppliers and dashboard workflows.",
    problem: "Small and growing businesses often need connected workflows for sales, customers, inventory-related records, invoices, payments and expenses instead of isolated spreadsheets or disconnected tools.",
    solution: "I built a modular Express and TypeScript API backed by Prisma and PostgreSQL. The backend separates business capabilities into modules for auth, customers, products, sales, invoices, payments, expenses, suppliers and dashboard data, creating a foundation that can support a richer business-management frontend.",
    role: ["Backend architecture and API development", "Authentication and request validation", "Business module design", "Prisma/PostgreSQL integration", "API troubleshooting and database migrations"],
    outcomes: ["Database-backed SME management foundation", "Separate modules for core business workflows", "Sales, invoicing and payment API foundations", "Supplier and expense management workflows", "Dashboard data endpoints for operational visibility"],
    stack: ["Node.js", "Express.js", "TypeScript", "Prisma 7", "PostgreSQL", "Zod", "JWT"],
    features: ["Authentication", "Customer management", "Product management", "Sales", "Invoices", "Payments", "Expenses", "Suppliers", "Dashboard"],
    architecture: ["Web frontend", "Express REST API", "Module controllers + services", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/EugeneCodes254/bizflow",
    visualLabel: "BIZFLOW / SME OPERATIONS",
    visualLines: ["Sales & invoices", "Customers & products", "Payments & expenses", "PostgreSQL data layer"],
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
