const projects = [
  {
    title: "SecureOps Platform",
    category: "Full-Stack / Security Operations",
    featured: true,
    description: "A security operations management MVP built for a security company, combining a Next.js frontend with a Node.js/Express API, Prisma and PostgreSQL.",
    highlights: ["Authentication + account recovery", "OTP verification", "REST API integration", "Modular backend architecture"],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    href: "https://github.com/EugeneCodes254/secureops-platform",
  },
  {
    title: "Mobile POS & Billing App",
    category: "Mobile / Retail Technology",
    description: "An offline-first Flutter POS application for retail checkout, inventory management, barcode scanning and Bluetooth thermal receipt printing.",
    highlights: ["Offline-first with Hive", "Barcode / QR scanning", "Bluetooth thermal printing", "Clean Architecture"],
    stack: ["Flutter", "Dart", "BLoC", "Hive", "GetIt", "GoRouter"],
    href: "https://github.com/EugeneCodes254/flutter_billing_app",
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

const services = [
  ["Web Development", "Responsive websites and modern web applications built around real business needs."],
  ["Full-Stack Systems", "Frontend, APIs, authentication and database-backed workflows from one development partner."],
  ["E-commerce & Business Tools", "Customer-facing commerce experiences and internal systems for day-to-day operations."],
  ["AI & Data Support", "AI evaluation, annotation, data validation and quality-focused technical workflows."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top">Eugene<span>.</span></a>
          <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Software Developer · Mombasa, Kenya</div>
            <h1>I build <span>useful software</span> for real-world problems.</h1>
            <p>I&apos;m Eugene Kinyangi, a Computer Science developer building full-stack web applications, business systems, e-commerce experiences and practical AI/data workflows.</p>
            <div className="actions"><a className="button primary" href="#work">Explore my work ↓</a><a className="button" href="mailto:kinyangie@gmail.com">Hire me</a><a className="button" href="https://github.com/EugeneCodes254">GitHub ↗</a></div>
          </div>
          <aside className="hero-card">
            <div className="hero-card-top"><span className="status-dot" /> Available for remote opportunities</div>
            <div className="hero-card-line"><span>Focus</span><strong>Web · Data · AI</strong></div>
            <div className="hero-card-line"><span>Based in</span><strong>Mombasa, Kenya</strong></div>
            <div className="hero-card-line"><span>Open to</span><strong>Freelance · Remote</strong></div>
          </aside>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="section-label">01 — About</div>
          <h2>Developer with a practical mindset.</h2>
          <p className="section-intro">I&apos;ve worked on client and personal projects across websites, e-commerce, business applications, mobile software and security-focused systems. I enjoy taking a requirement from an idea to a working product—designing the interface, wiring the backend, working with data and deploying the result.</p>
          <div className="stats"><div className="stat"><strong>15+</strong><span>General websites</span></div><div className="stat"><strong>3+</strong><span>E-commerce projects</span></div><div className="stat"><strong>7+</strong><span>Public GitHub projects</span></div><div className="stat"><strong>Full-stack</strong><span>Frontend → API → database</span></div></div>
          <div className="grid two-up"><article className="card"><h3>Engineering</h3><p>Modern React/Next.js interfaces, REST APIs, authentication, PostgreSQL databases, ORM tooling, deployment and practical debugging.</p></article><article className="card"><h3>AI & Data</h3><p>Hands-on exposure to AI annotation/evaluation, data validation and quality workflows, supported by Python and Pandas skills.</p></article></div>
        </div>
      </section>

      <section id="work">
        <div className="container">
          <div className="section-label">02 — Selected work</div>
          <h2>Projects that show range.</h2>
          <p className="section-intro">Instead of listing every repository, these are the projects that best demonstrate the breadth of my work. Each card links directly to the source code.</p>
          <div className="featured-project">
            <div><span className="project-kicker">Featured project</span><h3>SecureOps Platform</h3><p>A full-stack security operations management MVP combining authentication, account recovery, APIs, database integration and a modular backend.</p><div className="tags">{projects[0].stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>
            <div className="featured-points">{projects[0].highlights.map((item) => <div key={item}>✓ {item}</div>)}<a className="text-link" href={projects[0].href} target="_blank" rel="noreferrer">View repository →</a></div>
          </div>
          <div className="grid projects-grid">
            {projects.slice(1).map((project) => (
              <a className="card project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-meta"><span>{project.category}</span><span>↗</span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="project-highlights">{project.highlights.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="tags">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              </a>
            ))}
          </div>
          <div className="center-action"><a className="button" href="https://github.com/EugeneCodes254?tab=repositories">See all GitHub repositories →</a></div>
        </div>
      </section>

      <section id="services">
        <div className="container"><div className="section-label">03 — What I can do</div><h2>Useful software, not just pretty pages.</h2><div className="grid services-grid">{services.map(([title, description]) => <article className="card" key={title}><span className="service-number">0{services.findIndex(([t]) => t === title) + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div>
      </section>

      <section id="experience">
        <div className="container"><div className="section-label">04 — Experience</div><h2>How I&apos;ve been building.</h2><div className="timeline"><div className="timeline-item"><h3>Freelance Software Developer</h3><p>Client & personal projects · Kenya</p><p>Developed websites, e-commerce projects and custom systems; handled requirements, implementation, troubleshooting, testing and delivery.</p></div><div className="timeline-item"><h3>AI & Data Workflows</h3><p>Annotation · Evaluation · Data Quality</p><p>Built practical familiarity with human-in-the-loop AI workflows, output evaluation, data validation, quality review and pipeline verification.</p></div><div className="timeline-item"><h3>BSc Computer Science</h3><p>Mount Kenya University · 2026</p><p>Building a broad technical foundation across software engineering, programming, databases, data and computing systems.</p></div></div></div>
      </section>

      <section id="skills"><div className="container"><div className="section-label">05 — Toolkit</div><h2>Technologies I work with.</h2><p className="section-intro">A practical stack spanning web engineering, mobile development, data and modern developer tooling.</p><div className="skills">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></div></section>

      <section id="contact" className="contact"><div className="container"><div className="section-label">06 — Contact</div><h2>Let&apos;s build something useful.</h2><p>I&apos;m open to remote software development, AI/data evaluation, data-quality and freelance opportunities. Have a project, contract or collaboration in mind?</p><div className="actions" style={{justifyContent:"center"}}><a className="button primary" href="mailto:kinyangie@gmail.com">kinyangie@gmail.com</a><a className="button" href="https://github.com/EugeneCodes254">GitHub ↗</a></div></div></section>

      <footer><div className="container footer-inner"><span>© 2026 Eugene Kinyangi</span><span>Mombasa, Kenya · Software Developer</span></div></footer>
    </main>
  );
}
