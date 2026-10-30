import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Leaf, Sparkles, Compass, ExternalLink } from 'lucide-react';
import './styles.css';

const projects = [
  { number: '01', category: 'AI · NETWORKING · DIGITAL TWIN', title: 'Intelligent Wi-Fi Fault Diagnosis', description: 'A diagnostic system that learns from network telemetry, tests scenarios in a digital twin, and recommends practical recovery steps.', tags: ['Python', 'FastAPI', 'Random Forest', 'RAG'], link: 'https://github.com/kaushikbargaway/wifi-fault-diagnosis.git' },
  { number: '02', category: 'BACKEND · SYSTEM DESIGN', title: 'LinkForge', description: 'A URL-shortening and analytics platform built with a clean Java backend and persistent storage.', tags: ['Java', 'Spring Boot', 'MySQL', 'JPA'], link: 'https://github.com/kaushikbargaway/linkforge.git' },
  { number: '03', category: 'GENERATIVE AI · RETRIEVAL', title: 'Healthcare Symptom Analysis', description: 'A hybrid retrieval-augmented application designed to provide context-aware symptom information and triage guidance.', tags: ['LangChain', 'FAISS', 'Python', 'LLM'], link: 'https://github.com/kaushikbargaway' },
  { number: '04', category: 'FULL STACK · WEB', title: 'Movies & TV Library', description: 'A web experience for exploring movies and television, bringing together a responsive interface and media data.', tags: ['React', 'Node.js', 'Express', 'MongoDB'], link: 'https://github.com/kaushikbargaway' },
];
const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: 'easeOut' } } };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const goTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return <main>
    <section className="hero" id="home">
      <div className="forest-bg" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={e => {e.preventDefault(); goTo('home')}}><span className="brand-icon"><Leaf size={17}/></span> KK<span className="brand-dot">.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Projects', 'Journey', 'Contact'].map((item) => <button key={item} onClick={() => goTo(item.toLowerCase())}>{item}</button>)}
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <button className="top-cta" onClick={() => goTo('contact')}>Let’s connect <ArrowUpRight size={15}/></button>
      </header>

      <div className="hero-content">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="eyebrow"><span className="eyebrow-line"/> A DEVELOPER IN A WORLD OF POSSIBILITIES</motion.div>
        <motion.h1 initial="hidden" animate="show" variants={{...fadeUp, show: {...fadeUp.show, transition: { delay: .12, duration: .8 }}}}>Curious minds<br/>grow <em>everywhere.</em></motion.h1>
        <motion.p className="hero-copy" initial="hidden" animate="show" variants={{...fadeUp, show: {...fadeUp.show, transition: { delay: .25, duration: .7 }}}}>I’m Kaushik — an engineer exploring the intersection of software, AI, and ideas that make a difference.</motion.p>
        <motion.div className="hero-actions" initial="hidden" animate="show" variants={{...fadeUp, show: {...fadeUp.show, transition: { delay: .36, duration: .7 }}}}>
          <button className="button button-light" onClick={() => goTo('projects')}>Explore my work <ArrowDown size={16}/></button>
          <button className="text-link" onClick={() => goTo('about')}>A little about me <ArrowUpRight size={16}/></button>
        </motion.div>
      </div>
      <div className="hero-bottom"><span><span className="status-dot"/> OPEN TO WHAT’S NEXT</span><span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={13}/></span><span className="hero-coordinates">12°58' N · 77°35' E</span></div>
      <div className="hero-caption">A little more wonder.<br/>A little less ordinary.</div>
    </section>

    <section className="intro section-pad" id="about">
      <motion.div className="section-kicker" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}><Leaf size={16}/> THE PERSON BEHIND THE PIXELS</motion.div>
      <motion.div className="intro-grid" initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} variants={fadeUp}>
        <h2>Building with logic.<br/><em>Thinking with wonder.</em></h2>
        <div className="intro-text"><p>I’m a software engineering student at BNMIT, Bengaluru, fascinated by how thoughtful engineering can turn complex problems into useful experiences.</p><p>From backend systems to machine learning and retrieval-augmented AI, I enjoy following a question deep into the woods — then finding a way to make the answer work in the real world.</p><button className="inline-link" onClick={() => goTo('journey')}>Follow my journey <ArrowUpRight size={16}/></button></div>
      </motion.div>
      <div className="values-row"><div><span>01</span><strong>Curiosity first</strong><p>Ask better questions. Keep learning.</p></div><div><span>02</span><strong>Build with purpose</strong><p>Make useful things, not just noise.</p></div><div><span>03</span><strong>Grow in the open</strong><p>Share, collaborate, improve.</p></div></div>
    </section>

    <section className="projects section-pad" id="projects">
      <div className="projects-heading"><div><div className="section-kicker"><Sparkles size={15}/> SELECTED FIELD NOTES</div><h2>Things I’ve <em>grown.</em></h2></div><p>A few experiments, systems, and ideas shaped by curiosity and a lot of iteration.</p></div>
      <div className="project-list">{projects.map((p, i) => <motion.article className={'project-row ' + (activeProject === i ? 'expanded' : '')} key={p.number} initial="hidden" whileInView="show" viewport={{once:true, amount:.15}} variants={fadeUp}>
        <button className="project-main" onClick={() => setActiveProject(activeProject === i ? null : i)} aria-expanded={activeProject === i}>
          <span className="project-num">{p.number}</span><span className="project-title-wrap"><small>{p.category}</small><strong>{p.title}</strong></span><span className="project-arrow"><ArrowUpRight size={21}/></span>
        </button>
        <AnimatePresence>{activeProject === i && <motion.div className="project-detail" initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}}><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a href={p.link} target="_blank" rel="noreferrer" className="inline-link">Explore repository <ExternalLink size={14}/></a></motion.div>}</AnimatePresence>
      </motion.article>)}</div>
      <div className="projects-footnote"><Compass size={15}/> MORE PATHS ARE BEING EXPLORED <span>↗</span></div>
    </section>

    <section className="journey section-pad" id="journey">
      <div className="journey-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-leaf"><Leaf size={72} strokeWidth={.8}/></div><span className="art-label">STAY<br/>GROUNDED</span></div>
      <div className="journey-copy"><div className="section-kicker"><Compass size={15}/> THE PATH SO FAR</div><h2>Always becoming.<br/><em>Never standing still.</em></h2><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><small>2023 — 2027</small><strong>B.E. Information Science & Engineering</strong><p>BNM Institute of Technology · Bengaluru</p></div><div className="timeline-item"><span className="timeline-dot"/><small>SEP 2026 — PRESENT</small><strong>Project Trainee · LPSC, ISRO</strong><p>Working with Python, machine learning, data processing, and technical research.</p></div><div className="timeline-item"><span className="timeline-dot"/><small>ALONG THE WAY</small><strong>Community, collaboration & building</strong><p>IEEE ITS Student Chapter Secretary · BNMIT ACM Student Chapter Treasurer · Hackathon organiser.</p></div></div></div>
    </section>

    <section className="toolkit section-pad"><div className="section-kicker"><Sparkles size={15}/> WHAT I BRING TO THE TRAIL</div><h2>A growing <em>toolkit.</em></h2><div className="toolkit-grid"><div><small>01 / ENGINEERING</small><strong>Java · Python · JavaScript</strong><p>APIs, backend development, data structures, and system fundamentals.</p></div><div><small>02 / INTELLIGENCE</small><strong>AI · ML · RAG</strong><p>Machine learning, retrieval pipelines, embeddings, and applied LLM systems.</p></div><div><small>03 / THE BUILD</small><strong>React · FastAPI · SQL</strong><p>From interactive interfaces to services, databases, and developer tooling.</p></div></div></section>

    <footer className="contact section-pad" id="contact"><div className="contact-glow"/><div className="section-kicker"><Mail size={15}/> YOUR TURN TO SAY HELLO</div><h2>Have a good idea?<br/><em>Let’s find a way.</em></h2><p>Always happy to talk about technology, research, collaborations, or the next interesting problem.</p><a className="button button-light email-button" href="mailto:kaushikbargaway@gmail.com">Write me a note <ArrowUpRight size={16}/></a><div className="footer-bottom"><a className="brand" href="#home"><span className="brand-icon"><Leaf size={16}/></span> KK<span className="brand-dot">.</span></a><span>MADE WITH CURIOSITY · BENGALURU, INDIA</span><div className="socials"><a href="https://github.com/kaushikbargaway" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:kaushikbargaway@gmail.com" aria-label="Email"><Mail size={17}/></a></div></div></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
