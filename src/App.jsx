/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 7c.85 0 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.61c0 .26.18.57.69.47A10 10 0 0 0 12 2Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5.37 3.5a2.12 2.12 0 1 1 0 4.24 2.12 2.12 0 0 1 0-4.24ZM3.58 9h3.58v11.5H3.58V9Zm5.82 0h3.43v1.57h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.32 2.4 4.32 5.52v6.28h-3.58v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.4V9Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />
  </svg>
);

const CodeIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const projects = [
  { number: "01", title: "AI Assessment Extraction & Answer Mapping", type: "Full-stack AI application", description: "A complete assessment workflow that uses Gemini Vision to extract questions and handwritten answers, match them despite ordering differences, and return per-question grading with feedback.", tech: ["FastAPI", "Next.js", "Gemini Vision", "Pydantic"], link: "https://github.com/Upendra23397/AI-Based-Assessment-Extraction-Answer-Mapping" },
  { number: "02", title: "AI-Powered RAG Book Assistant", type: "Document intelligence", description: "A context-aware PDF question answering system with document ingestion, chunking, embeddings, semantic retrieval, prompt templates, and an interactive Streamlit interface.", tech: ["Python", "LangChain", "ChromaDB", "Google Gemini"], link: "https://github.com/Upendra23397/RAG-BOOK-ASSISTANT" },
  { number: "03", title: "Next Word Predictor", type: "Natural language processing", description: "An LSTM model trained on 26,000+ text samples with a complete tokenization and sequence pipeline. The Streamlit app returns the top five suggestions with confidence scores.", tech: ["Python", "TensorFlow", "LSTM", "Streamlit"], link: "https://github.com/Upendra23397/Next_Word_Predictor-LSTM" }
];

const skillGroups = [
  { label: "AI & machine learning", items: ["Machine Learning", "Deep Learning", "NLP", "LSTM / RNN", "Generative AI", "LLMs", "RAG"] },
  { label: "Libraries & frameworks", items: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face", "LangChain", "Pandas", "NumPy"] },
  { label: "Build & deployment", items: ["FastAPI", "Flask", "Next.js", "Pydantic", "REST APIs", "Docker", "Streamlit"] },
  { label: "Data & foundations", items: ["SQL", "EDA", "Data Cleaning", "Feature Engineering", "Data Visualization", "Statistics", "Linear Algebra", "C++"] }
];

export default function Portfolio() {
  const links = [
    { label: "GitHub", href: "https://github.com/Upendra23397", icon: GithubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/upendra-chauhan-9488232a5/", icon: LinkedinIcon },
    { label: "LeetCode", href: "https://leetcode.com/u/upendrachauhan/", icon: CodeIcon },
    { label: "GFG", href: "https://www.geeksforgeeks.org/profile/letmecook?tab=activity", icon: CodeIcon },
    { label: "Email", href: "mailto:up26445208@gmail.com", icon: MailIcon }
  ];

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <nav className="nav-wrap"><a className="brand" href="#top" aria-label="Upendra Chauhan home">UC<span>.</span></a><div className="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a><a className="nav-resume" href="https://drive.google.com/uc?export=download&id=1nW1EuMG54BLniJdIOS-YQ2GnRyMI7Q6M" target="_blank" rel="noreferrer">Resume ↗</a></div><a className="availability" href="mailto:up26445208@gmail.com"><span />Open to opportunities</a></nav>

      <section id="top" className="hero section-wrap"><motion.div className="hero-copy" {...reveal}><p className="eyebrow">Computer Science & AI undergraduate</p><h1>Building useful intelligence from <em>messy data.</em></h1><p className="hero-summary">I&apos;m Upendra Chauhan, an AI-focused developer turning ideas into reliable, data-driven applications across the machine learning lifecycle.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight /></a><a className="button button-secondary" href="https://drive.google.com/uc?export=download&id=1nW1EuMG54BLniJdIOS-YQ2GnRyMI7Q6M" target="_blank" rel="noreferrer" download>Download resume <ArrowUpRight /></a><a className="text-link" href="mailto:up26445208@gmail.com">Let&apos;s talk <ArrowUpRight /></a></div><div className="social-row">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel="noreferrer"><Icon />{label}</a>)}</div></motion.div><motion.div className="hero-aside" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}><div className="portrait-frame"><img src="/profile.jpg" alt="Upendra Chauhan" /></div><div className="hero-note"><strong>Currently</strong><span>Crafting AI systems that are clear, testable, and genuinely helpful.</span></div></motion.div></section>

      <section id="about" className="section-wrap about-grid"><motion.div {...reveal}><p className="section-kicker">01 / About</p><h2>Curious by default.<br /><em>Practical by design.</em></h2></motion.div><motion.div className="about-copy" {...reveal}><p>My work sits at the intersection of software engineering, analytics, and applied AI. I enjoy taking a problem from raw data and unclear requirements to a deployed experience people can use.</p><p>Along the way, I have built NLP systems, retrieval-augmented applications, and vision-powered assessment workflows while strengthening the fundamentals that make them dependable.</p><div className="stat-row"><div><strong>400+</strong><span>LeetCode problems</span></div><div><strong>150+</strong><span>GeeksforGeeks problems</span></div><div><strong>26k+</strong><span>NLP training samples</span></div></div></motion.div></section>

      <section id="experience" className="section-wrap timeline-section"><motion.div {...reveal}><p className="section-kicker">02 / Experience</p><h2>Learning by <em>shipping.</em></h2></motion.div><div className="timeline"><motion.article className="timeline-item" {...reveal}><div className="timeline-date">2026<br /><span>Remote</span></div><div><p className="role-company">AirDawg Labs <span>Caudal AI Labs Pvt Ltd</span></p><h3>AI Systems Evaluation Intern</h3><p>Completed 10 AI model evaluation tasks involving prompt engineering, structured testing, and analytical review of LLM outputs, with 4 tasks accepted into the evaluation pipeline.</p><p>Produced documentation to strengthen system reliability, safety, and performance, and collaborated with Operations on evaluation guidelines and quality standards.</p></div></motion.article><motion.article className="timeline-item" {...reveal}><div className="timeline-date">2025<br /><span>Remote</span></div><div><p className="role-company">Code Alpha</p><h3>Machine Learning Intern</h3><p>Engineered and deployed three end-to-end machine learning projects spanning preprocessing, feature engineering, model training, evaluation, and deployment.</p><p>Used Python, Pandas, NumPy, Scikit-learn, TensorFlow, and Streamlit while documenting workflows and presenting technical findings to mentors.</p></div></motion.article></div></section>

      <section className="section-wrap education-section"><motion.div {...reveal}><p className="section-kicker">03 / Education</p><h2>Foundations for<br /><em>the next build.</em></h2></motion.div><motion.div className="education-card" {...reveal}><span className="education-year">2022 - 2026</span><h3>Galgotias College of Engineering and Technology</h3><p>B.Tech in Computer Science and Artificial Intelligence</p><strong>CGPA: 7.48 / 10</strong><hr /><span className="education-year">Class XII - CBSE</span><h3>St. Xavier&apos;s High School, Ghosi, Mau</h3><strong>75.4%</strong></motion.div></section>

      <section id="projects" className="section-wrap projects-section"><motion.div className="section-heading" {...reveal}><div><p className="section-kicker">04 / Selected work</p><h2>Projects with a<br /><em>point of view.</em></h2></div><p>From sequence models to multimodal assessment, each build is a study in making AI useful beyond the demo.</p></motion.div><div className="project-list">{projects.map((project) => <motion.article className="project-item" key={project.number} {...reveal}><span className="project-number">{project.number}</span><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight /></a></motion.article>)}</div></section>

      <section id="skills" className="section-wrap skills-section"><motion.div {...reveal}><p className="section-kicker">05 / Toolkit</p><h2>Tools for turning<br /><em>questions into systems.</em></h2></motion.div><div className="skill-grid">{skillGroups.map((group) => <motion.div className="skill-group" key={group.label} {...reveal}><h3>{group.label}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.div>)}</div></section>

      <section id="certifications" className="section-wrap certification-row"><div><p className="section-kicker">06 / Certifications</p><h2>Always <em>learning.</em></h2></div><div className="cert-list"><p><strong>Data Analytics</strong><span>Deloitte & Intellipaat</span></p><p><strong>Database Programming with SQL</strong><span>Oracle</span></p><p><strong>Data Science and Machine Learning</strong><span>CodeWithHarry</span></p><p><strong><a href="https://intellipaat.com/academy/certificate-link/?Yz00NTQwJnU9MjgyOTA3JmV4dD0x" target="_blank" rel="noreferrer">Deep Learning</a></strong><span>Intellipaat</span></p></div></section>

      <section id="contact" className="contact-section section-wrap"><motion.div {...reveal}><p className="section-kicker">07 / Contact</p><h2>Have a problem<br />worth <em>solving?</em></h2><a className="contact-email" href="mailto:up26445208@gmail.com">up26445208@gmail.com <ArrowUpRight /></a></motion.div><motion.div className="contact-meta" {...reveal}><p>Greater Noida, Uttar Pradesh</p><a href="tel:+919555661055">+91 95556 61055</a><p>Available for conversations about AI, machine learning, and thoughtful software.</p></motion.div></section>

      <footer><span>Copyright 2026 Upendra Chauhan</span><span>Built with curiosity & care</span><a href="#top">Back to top ^</a></footer>
    </main>
  );
}
