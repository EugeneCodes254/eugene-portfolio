"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const projects = [
  {
    title: "SecureOps Platform",
    category: "Full-Stack / Security Operations",
    featured: true,
    description: "A security operations management MVP built for a security company, combining a Next.js frontend with a Node.js/Express API, Prisma and PostgreSQL. The current dashboard includes quick actions for incident reporting, personnel, sites and reports.",
    highlights: ["Authentication + account recovery", "OTP verification", "REST API integration", "Modular backend architecture"],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    href: "https://github.com/EugeneCodes254/secureops-platform",
    live: "https://secureops-platform.vercel.app",
    caseStudy: "/work/secureops",
  },
  {
    title: "Mobile POS & Billing App",
    category: "Mobile / Retail Technology",
    description: "An offline-first Flutter POS application for retail checkout, inventory management, barcode scanning and Bluetooth thermal receipt printing.",
    highlights: ["Offline-first with Hive", "Barcode / QR scanning", "Bluetooth thermal printing", "Clean Architecture"],
    stack: ["Flutter", "Dart", "BLoC", "Hive", "GetIt", "GoRouter"],
    href: "https://github.com/EugeneCodes254/flutter_billing_app",
    caseStudy: "/work/mobile-pos-billing",
  },
  {
    title: "Destination@Bofa",
    category: "Hospitality / Luxury Property",
    description: "A polished luxury beachfront villa website for The Destination@Bofa in Bofa, Kilifi, presenting the twin villas, gallery, property videos, services, rates and booking enquiries.",
    highlights: ["Luxury villa presentation", "Image gallery + property videos", "Responsive guest experience", "Booking enquiry flow"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/EugeneCodes254/destination-bofa",
    caseStudy: "/work/destination-bofa",
  },
  {
    title: "BizFlow",
    category: "SME Business Management",
    status: "Backend foundation in active development",
    description: "A business management platform for SMEs with authentication, customers, products, sales, invoices, payments, expenses, suppliers and dashboard workflows. Its backend foundation is under active development.",
    highlights: ["Express API", "Prisma 7 + PostgreSQL", "Sales & invoicing", "Customers, suppliers & expenses"],
    stack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
    href: "https://github.com/EugeneCodes254/bizflow",
    caseStudy: "/work/bizflow",
  },
  {
    title: "Kannopy Holdings",
    category: "Business Web Application",
    description: "A modern business web application built with Next.js and a production-oriented stack including authentication, database tooling, forms, charts and email integration.",
    highlights: ["Next.js 16", "Drizzle ORM + PostgreSQL", "Authentication", "Forms, charts & email"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Drizzle", "Zod"],
    href: "https://github.com/EugeneCodes254/kannopy-holdings",
  },
  {
    title: "Mayban Insurance",
    category: "Insurance / Corporate Web",
    description: "A responsive insurance-focused web project using modern Next.js and React tooling, with email integration for business communication.",
    highlights: ["Responsive corporate UI", "Next.js + React", "Tailwind CSS", "Email integration"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Resend"],
    href: "https://github.com/EugeneCodes254/mayban-insurance",
  },
  {
    title: "Briannofamily",
    category: "Web / Digital Presence",
    description: "A Next.js web project created as a dedicated digital presence, demonstrating experience delivering polished, content-driven websites.",
    highlights: ["Next.js", "Responsive experience", "Modern React stack"],
    stack: ["Next.js", "React", "TypeScript"],
    href: "https://github.com/EugeneCodes254/briannofamily",
  },
  {
    title: "Cancer Website",
    category: "Informational Web",
    description: "A responsive informational website project focused on clear content presentation and accessible user experience.",
    highlights: ["Responsive design", "Content-focused UI", "Modern Next.js foundation"],
    stack: ["Next.js", "React", "CSS", "Responsive Design"],
    href: "https://github.com/EugeneCodes254/cancer-website-main",
  },
  {
    title: "Privamax Security",
    category: "Security / Web",
    description: "A public security-focused web project demonstrating experience creating digital experiences for security-related organizations.",
    highlights: ["Security-focused branding", "Modern web stack", "Responsive presentation"],
    stack: ["Next.js", "React", "TypeScript"],
    href: "https://github.com/EugeneCodes254/privamax-security",
  },
];

const skills = [
  "JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js", "Express.js", "Django",
  "Tailwind CSS", "PostgreSQL", "Prisma", "Drizzle ORM", "SQL", "Pandas", "REST APIs", "Flutter",
  "Dart", "BLoC", "Hive", "Git", "GitHub", "Vercel", "Zod", "Playwright",
];

const projectFilters = ["All", "Web", "Business", "Mobile", "Security"];

const services = [
  ["Web Development", "Responsive websites and modern web applications built around real business needs."],
  ["Full-Stack Systems", "Frontend, APIs, authentication and database-backed workflows from one development partner."],
  ["E-commerce & Business Tools", "Customer-facing commerce experiences and internal systems for day-to-day operations."],
  ["AI & Data Support", "AI evaluation, annotation, data validation and quality-focused technical workflows."],
];

const projectVisuals = {
  secureops: <div className="project-preview secureops-preview" aria-hidden="true"><div className="preview-window"><div className="preview-top"><span>SECUREOPS</span><b>SECURITY OPERATIONS</b></div><div className="preview-grid"><div className="preview-nav"><i/><i/><i/><i/></div><div className="preview-main"><div className="preview-main-head"><strong>Operations Dashboard</strong><span>LIVE</span></div><div className="preview-stats"><b><strong>24</strong><small>Personnel</small></b><b><strong>08</strong><small>Incidents</small></b><b><strong>96%</strong><small>Attendance</small></b></div><div className="preview-bars"><i/><i/><i/><i/></div></div></div></div></div>,
  bofa: <div className="project-preview bofa-preview" aria-hidden="true"><div className="bofa-panel"><span>THE DESTINATION@BOFA</span><strong>BEACHFRONT<br/>LIVING</strong><i>BOFA · KILIFI</i></div><div className="bofa-line"/></div>,
  bizflow: <div className="project-preview bizflow-preview" aria-hidden="true"><div className="bizflow-window"><div className="preview-top"><span>BIZFLOW</span><b>BUSINESS MANAGEMENT</b></div><div className="bizflow-content"><strong>Business Overview</strong><div><span><b>KES 482K</b>Revenue</span><span><b>128</b>Sales</span><span><b>36</b>Customers</span></div><i/><i/></div></div></div>,
};

const buildVisuals = {
  secureops: <div className="build-visual secureops-visual" aria-hidden="true"><div className="visual-glow" /><div className="visual-shell"><div className="mini-top"><span>SECUREOPS</span><b>OPERATIONS</b></div><div className="mini-body"><div className="mini-side"><i /><i /><i /><i /></div><div className="mini-main"><div className="mini-title">Security Operations</div><div className="mini-metrics"><span><b>24</b> Guards</span><span><b>08</b> Incidents</span><span><b>96%</b> Attendance</span></div><div className="mini-lines"><i /><i /><i /></div></div></div></div></div>,
  bizflow: <div className="build-visual bizflow-visual" aria-hidden="true"><div className="brand-orb bizflow-orb"><b>B</b><i /><i /><i /></div><div className="build-visual-copy"><span>SME BUSINESS PLATFORM</span><strong>Run Your Business Smarter</strong><small>Sales · Inventory · Customers · Reports</small></div></div>,
  chamaos: <div className="build-visual chamaos-visual" aria-hidden="true"><div className="community-mark"><span /><span /><span /><span /><span /></div><div className="build-visual-copy"><span>BUILT FOR KENYA</span><strong>ChamaOS</strong><small>People · Savings · Investments · Communities</small></div></div>,
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = projects.slice(1).filter((project) => {
    if (activeFilter === "All") return true;
    const text = `${project.title} ${project.category} ${project.description}`.toLowerCase();
    const map: Record<string, string[]> = {
      Web: ["web", "website", "digital presence", "informational", "insurance"],
      Business: ["business", "sme", "pos"],
      Mobile: ["mobile", "pos"],
      Security: ["security"],
    };
    return map[activeFilter].some((term) => text.includes(term));
  });

  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top">Eugene<span>.</span></a>
          <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#current-builds">Builds</a><a href="#contact">Contact</a></div><details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><div className="mobile-nav-panel"><a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#current-builds">Builds</a><a href="#contact">Contact</a></div></details>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">SOFTWARE DEVELOPER · TECHNOLOGY & CYBERSECURITY</div>
            <h1>I build <span>digital solutions that move businesses forward.</span></h1>
            <p>I&apos;m Eugene Kinyangi, a software developer and technology professional specializing in full-stack development, business systems, cybersecurity and AI & data workflows. I build practical digital products that turn complex business needs into secure, usable technology.</p>
            <div className="actions"><a className="button primary" href="#work">Explore my work ↓</a><a className="button" href="mailto:kinyangie@gmail.com">Hire me</a><a className="button" href="mailto:kinyangie@gmail.com?subject=Request%20for%20CV">Request CV</a><a className="button" href="https://github.com/EugeneCodes254">GitHub ↗</a></div>
          </div>
          <aside className="hero-card hero-command">
            <div className="hero-card-top"><span className="status-dot" /> SYSTEM STATUS <b>LIVE</b></div>
            <div className="hero-command-title">Technology stack & focus</div>
            <div className="hero-command-list">
              <div><span>01</span><strong>Full-Stack Development</strong><i>ACTIVE</i></div>
              <div><span>02</span><strong>Business Systems</strong><i>BUILDING</i></div>
              <div><span>03</span><strong>Cybersecurity</strong><i>SECURE</i></div>
              <div><span>04</span><strong>AI & Data</strong><i>READY</i></div>
            </div>
            <div className="hero-command-footer"><span>KENYA · REMOTE</span><strong>OPEN TO SELECT PROJECTS</strong></div>
          </aside>
        </div>
      </header>

      <div className="proof-strip"><div className="container proof-strip-inner"><span>FULL-STACK</span><i /> <span>WEB APPS</span><i /> <span>BUSINESS SYSTEMS</span><i /> <span>AI & DATA</span><i /> <span>MOBILE</span></div></div>
      <div className="tech-strip"><div className="container"><span>TECHNOLOGIES I WORK WITH</span><div>{["Next.js","React","TypeScript","Node.js","Python","Java","PostgreSQL","Flutter"].map((item) => <b key={item}>{item}</b>)}</div></div></div>

      <section id="about"><div className="container"><div className="section-label">01 — About</div><h2>Building technology with purpose.</h2><p className="section-intro"><strong>I&apos;m Eugene Kinyangi — a software developer and technology professional focused on building secure, practical digital solutions for real-world businesses.</strong></p><p className="section-intro">With a background in Computer Science and hands-on experience across full-stack development, business systems, cybersecurity, AI and data workflows, I turn ideas and operational challenges into software that is designed to be useful, scalable and maintainable.</p><p className="section-intro">My work spans modern web applications, business management platforms, e-commerce solutions, mobile applications and security-focused systems. I take a product-minded approach to development — understanding the problem first, designing the right solution, engineering the underlying technology and delivering an experience that works for the people using it.</p><p className="section-intro"><strong>I don&apos;t just build software. I build solutions around the problems that matter.</strong></p><div className="identity-card"><div className="identity-avatar">EK</div><div><span className="identity-kicker">EUGENE KINYANGI</span><h3>Software Developer · Cyber Security Engineer & Consultant</h3><p>Full-stack development · Cyber security · Business systems · AI & Data</p><div className="identity-links"><a href="mailto:kinyangie@gmail.com">Email</a><a href="https://github.com/EugeneCodes254" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></div><div className="brand-card"><div className="brand-mark">TS</div><div><span className="brand-kicker">TECH SOLUTIONS</span><strong>Ideas · Solutions · A Better Tomorrow</strong><p>A technology brand focused on building practical digital products, business systems and modern software solutions.</p></div></div><div className="stats"><div className="stat"><strong>15+</strong><span>General websites</span></div><div className="stat"><strong>3+</strong><span>E-commerce projects</span></div><div className="stat"><strong>10+</strong><span>Public GitHub projects</span></div><div className="stat"><strong>Full-stack</strong><span>Frontend → API → database</span></div></div><div className="grid two-up"><article className="card"><h3>Engineering</h3><p>Modern React/Next.js interfaces, REST APIs, authentication, PostgreSQL databases, ORM tooling, deployment and practical debugging.</p></article><article className="card"><h3>AI & Data</h3><p>Hands-on exposure to AI annotation/evaluation, data validation and quality workflows, supported by Python and Pandas skills.</p></article></div></div></section>

      <section id="work"><div className="container"><div className="section-label">02 — Selected work</div><h2>Projects that show range.</h2><p className="section-intro">Instead of listing every repository, these are the projects that best demonstrate the breadth of my work—from production-oriented business APIs to mobile and security systems.</p><div className="featured-project"><div className="featured-project-copy"><span className="project-kicker">Featured project · Case study</span><h3>SecureOps Platform</h3><p>A full-stack security operations management MVP combining authentication, account recovery, APIs, database integration and a modular backend.</p><div className="tags">{projects[0].stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div><div className="project-actions"><a className="button primary" href={projects[0].caseStudy}>Read case study →</a><a className="text-link" href={projects[0].href} target="_blank" rel="noreferrer">View repository ↗</a></div></div><div className="featured-project-visual">{projectVisuals.secureops}</div><div className="featured-points"><div className="featured-status">LIVE DEVELOPMENT BUILD</div>{projects[0].highlights.map((item) => <div key={item}>✓ {item}</div>)}<a className="text-link" href={projects[0].live} target="_blank" rel="noreferrer">Open SecureOps ↗</a></div></div><div className="project-filter" role="tablist" aria-label="Filter projects">{projectFilters.map((filter) => <button className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)} key={filter} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div><div className="grid projects-grid">{filteredProjects.map((project) => (<a className="card project-card" href={project.caseStudy || project.href} target={project.caseStudy ? undefined : "_blank"} rel={project.caseStudy ? undefined : "noreferrer"} key={project.title}>{project.title === "Mobile POS & Billing App" && <div className="project-image"><Image src="/projects/mobile-pos.png" alt="Mobile POS and billing hardware solution" width={1200} height={800} loading="lazy" /></div>}\{project.title === "Destination@Bofa" ? projectVisuals.bofa : project.title === "BizFlow" ? projectVisuals.bizflow : null\}<div className="project-meta"><span>{project.category}</span><span>{project.status ? "IN DEVELOPMENT" : "↗"}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-highlights">{project.highlights.map((item) => <span key={item}>{item}</span>)}</div><div className="tags">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>{project.status && <div className="project-status">{project.status}</div>}{project.caseStudy && <div className="case-study-link">Read detailed case study →</div>}</a>))}</div><div className="center-action"><span className="project-count">{filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"} shown</span><a className="button" href="https://github.com/EugeneCodes254?tab=repositories">See all GitHub repositories →</a></div></div></section>

      <section id="what-i-build"><div className="container"><div className="section-label">03 — What I build</div><h2>From idea to working product.</h2><p className="section-intro">I build around the problem first, then choose the technology that makes the solution useful, secure and maintainable.</p><div className="build-pillars"><article><span>01</span><h3>Business platforms</h3><p>Management systems, dashboards, workflows and internal tools that help organizations operate better.</p></article><article><span>02</span><h3>Digital experiences</h3><p>Corporate websites, e-commerce platforms and web applications designed around real users and business goals.</p></article><article><span>03</span><h3>Mobile products</h3><p>Operational and retail applications that work in the field, including offline-first workflows and device integrations.</p></article><article><span>04</span><h3>Security-focused systems</h3><p>Authentication, access control and security-aware architecture built into the product rather than added later.</p></article></div></div></section>

      <section id="services"><div className="container"><div className="section-label">04 — What I can do</div><h2>Useful software, not just pretty pages.</h2><p className="section-intro">I combine software engineering and security thinking to build digital products around real business needs.</p><div className="grid services-grid">{services.map(([title, description]) => <article className="card" key={title}><span className="service-number">0{services.findIndex(([t]) => t === title) + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="client-solutions"><div><span className="solution-kicker">BUILT FOR BUSINESS</span><h3>What I can build for you</h3><p>From customer-facing websites to internal business systems, I focus on practical solutions that can grow with the organization.</p></div><div className="solution-list"><div><b>Business Management Systems</b><span>Sales · inventory · customers · payments · reporting</span></div><div><b>Websites & Web Applications</b><span>Corporate sites · portals · dashboards · custom platforms</span></div><div><b>E-commerce Solutions</b><span>Online stores · product management · business workflows</span></div><div><b>Mobile Applications</b><span>Business and operational apps for mobile users</span></div></div></div></div></section>

      <section id="philosophy"><div className="container philosophy-section"><div className="section-label">05 — Engineering philosophy</div><div className="philosophy-grid"><div><h2>I don&apos;t build technology for technology&apos;s sake.</h2><p className="section-intro">Good software should solve a real problem, feel clear to the people using it and leave the business in a better position than where it started.</p></div><div className="philosophy-points"><article><span>01</span><div><h3>Understand the problem</h3><p>Start with the business, users, constraints and desired outcome.</p></div></article><article><span>02</span><div><h3>Build for reality</h3><p>Prefer practical, maintainable solutions over unnecessary complexity.</p></div></article><article><span>03</span><div><h3>Design for what&apos;s next</h3><p>Leave room for growth without over-engineering the first version.</p></div></article></div></div></div></section>

      <section id="experience"><div className="container"><div className="section-label">06 — Experience</div><h2>How I&apos;ve been building.</h2><div className="timeline"><div className="timeline-item"><h3>Freelance Software Developer</h3><p>Client & personal projects · Kenya</p><p>Developed websites, e-commerce projects and custom systems; handled requirements, implementation, troubleshooting, testing and delivery.</p></div><div className="timeline-item"><h3>AI & Data Workflows</h3><p>Annotation · Evaluation · Data Quality</p><p>Built practical familiarity with human-in-the-loop AI workflows, output evaluation, data validation, quality review and pipeline verification.</p></div><div className="timeline-item"><h3>BSc Computer Science</h3><p>Mount Kenya University · 2026</p><p>Building a broad technical foundation across software engineering, programming, databases, data and computing systems.</p></div></div></div></section>

      <section id="process"><div className="container"><div className="section-label">07 — Process</div><h2>From idea to working product.</h2><p className="section-intro">A simple, practical workflow designed to keep projects clear, testable and focused on the actual problem.</p><div className="process-grid"><article className="process-step"><span>01</span><h3>Understand</h3><p>Clarify the goal, users, requirements and constraints before writing the first line of code.</p></article><article className="process-step"><span>02</span><h3>Build</h3><p>Design the interface, APIs and data flow around a maintainable technical foundation.</p></article><article className="process-step"><span>03</span><h3>Validate</h3><p>Test the important workflows, fix edge cases and make sure the experience works across devices.</p></article><article className="process-step"><span>04</span><h3>Deliver</h3><p>Deploy, document the result and leave the project in a state that can continue to grow.</p></article></div><div className="why-card"><div><span className="solution-kicker">WHY WORK WITH ME</span><h3>Business-first. Full-stack. Security-minded.</h3></div><div className="why-points"><span><b>Business-first thinking</b>Solutions built around the actual problem.</span><span><b>Full-stack capability</b>Frontend, APIs, databases and deployment.</span><span><b>Security-minded development</b>Security considered throughout the build.</span><span><b>Practical communication</b>Clear requirements, progress and deliverables.</span></div></div></div></section>

      <section id="security"><div className="container"><div className="section-label">08 — Cyber Security</div><h2>Security is part of the solution.</h2><p className="section-intro">As a cyber security engineer and consultant, I help organizations think about security alongside their technology—not as an afterthought.</p><div className="security-grid"><article className="security-card"><span>01</span><h3>Security Assessment</h3><p>Review applications and digital workflows to identify practical security weaknesses and improvement areas.</p></article><article className="security-card"><span>02</span><h3>Web & Application Security</h3><p>Security-minded development and hardening considerations for modern web applications.</p></article><article className="security-card"><span>03</span><h3>Security Awareness</h3><p>Practical cybersecurity awareness and guidance for teams and organizations.</p></article><article className="security-card"><span>04</span><h3>Security Consulting</h3><p>Translate technical security concerns into clear, actionable steps for a business.</p></article></div></div></section><section id="current-builds"><div className="container"><div className="section-label">07 — Current builds</div><div className="builds-heading"><div><h2>Ideas become products when you build them.</h2><p className="section-intro">These are the products I’m actively developing — each born from a real-world problem and built with the goal of becoming a practical, scalable solution.</p></div><div className="builds-count"><strong>03</strong><span>ACTIVE BUILDS</span></div></div><div className="grid current-build-grid"><article className="card current-build"><div className="build-badge">IN DEVELOPMENT</div>{buildVisuals.secureops}<div className="build-copy"><div className="build-meta"><span>PRODUCT</span><b>Security operations</b></div><h3>SecureOps</h3><p>A security operations management platform being developed to centralize guard management, attendance, GPS tracking, incident reporting and operational workflows.</p><div className="tags"><span className="tag">Next.js</span><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">PostgreSQL</span></div><Link className="case-study-link" href="/work/secureops">Explore SecureOps case study →</Link></div></article><article className="card current-build"><div className="build-badge">BACKEND IN DEVELOPMENT</div>{buildVisuals.bizflow}<div className="build-copy"><div className="build-meta"><span>PRODUCT</span><b>SME operations</b></div><h3>BizFlow</h3><p>An SME business-management platform with a modular API covering sales, invoices, payments, products, customers, suppliers, expenses and dashboard data.</p><div className="tags"><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">Prisma</span><span className="tag">PostgreSQL</span></div><Link className="case-study-link" href="/work/bizflow">Explore BizFlow case study →</Link></div></article><article className="card current-build"><div className="build-badge">IN DEVELOPMENT</div>{buildVisuals.chamaos}<div className="build-copy"><div className="build-meta"><span>PRODUCT</span><b>Group management</b></div><h3>ChamaOS</h3><p>A Kenyan-focused digital platform being developed to support practical chama and group-management workflows, with a focus on people, savings, investments and stronger communities.</p><div className="tags"><span className="tag">Java</span><span className="tag">Spring Boot</span><span className="tag">PostgreSQL</span><span className="tag">REST APIs</span></div></div></article></div></div></section>

      <section id="skills"><div className="container"><div className="section-label">10 — Toolkit</div><h2>Technologies I work with.</h2><p className="section-intro">A practical stack spanning web engineering, mobile development, data and modern developer tooling.</p><div className="skills">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></div></section>

      <section id="contact" className="contact"><div className="container"><div className="section-label">11 — Contact</div><div className="availability"><span><i /> AVAILABLE FOR SELECT PROJECTS</span><b>REMOTE · KENYA · WORLDWIDE</b></div><h2>Have a problem worth solving?</h2><p>Let&apos;s turn the idea into working software. I&apos;m open to remote software development, AI/data evaluation, data-quality and freelance opportunities. Have a project, contract or collaboration in mind?</p><div className="actions" style={{justifyContent:"center"}}><a className="button primary" href="mailto:kinyangie@gmail.com">kinyangie@gmail.com</a><a className="button" href="https://github.com/EugeneCodes254">GitHub ↗</a></div></div></section>

      <footer><div className="container footer-inner"><div><strong>Eugene<span>.</span></strong><small>Software Developer · Mombasa, Kenya</small></div><div className="footer-links"><a href="mailto:kinyangie@gmail.com">Email</a><a href="https://github.com/EugeneCodes254" target="_blank" rel="noreferrer">GitHub ↗</a></div><small>© 2026 Eugene Kinyangi</small></div></footer>
    </main>
  );
}
