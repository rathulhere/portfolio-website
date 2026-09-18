import { useEffect } from 'react';

const socials = {
  linkedin: 'https://www.linkedin.com/in/rathulrajeev',
  github: 'https://github.com/rathulhere',
  instagram: 'https://www.instagram.com/raathlll?stkn=MXFzNnF1eGxjbXk3Nw==',
};

function Project({ number, title, description, stack, kind, children }) {
  return <article className="project reveal">
    <div className={`project-visual ${kind}`}>{children}</div>
    <div className="project-info"><div><p className="project-num">{number}</p><h2>{title}</h2></div><div className="project-copy"><p>{description}</p><ul>{stack.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
  </article>;
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.style.animationPlayState = 'running'; observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    const items = document.querySelectorAll('.section .reveal, .contact .reveal');
    items.forEach((item) => { item.style.animationPlayState = 'paused'; observer.observe(item); });
    return () => observer.disconnect();
  }, []);

  return <><div className="noise" />
    <header className="topbar"><a className="brand" href="#home" aria-label="Rathul Rajeev home">RR<span>•</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="/rathulrajeev-cv.pdf" download>CV ↓</a><a href="#contact">Contact</a></nav><div className="top-actions"><a className="social-mini" href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a><span className="availability"><i /> Open to work</span></div></header>
    <main>
      <section className="hero" id="home"><p className="eyebrow reveal">MERN STACK DEVELOPER <span>/</span> INDIA</p><div className="hero-title reveal"><h1>I build useful<br /><em>web experiences.</em></h1><p className="intro">Full-stack developer crafting responsive products with React, Next.js, Node.js, and a thoughtful eye for the details that make software feel good to use.</p></div><div className="hero-bottom reveal"><a href="#work" className="scroll-link">Explore selected work <span>↓</span></a></div></section>
      <section className="marquee" aria-label="Core technologies"><div>REACT <b>✦</b> NEXT.JS <b>✦</b> NODE.JS <b>✦</b> TYPESCRIPT <b>✦</b> MONGODB <b>✦</b> POSTGRESQL <b>✦</b> REACT <b>✦</b> NEXT.JS <b>✦</b> NODE.JS <b>✦</b> TYPESCRIPT <b>✦</b> MONGODB <b>✦</b> POSTGRESQL <b>✦</b></div></section>
      <section className="work section" id="work"><div className="section-heading reveal"><p className="eyebrow">01 / SELECTED WORK</p><p>Projects built around real user flows, clean interfaces, and dependable backend logic.</p></div>
        <Project number="01" title={<>Commerce,<br />made simple.</>} description="A full-stack shopping experience with a practical focus: secure accounts, product management, cart logic, checkout, and orders." stack={['Next.js & React', 'Node.js & Express', 'PostgreSQL & Redux']} kind="commerce-art"><div className="window"><div className="windowbar"><span /><span /><span /></div><div className="shop"><aside><b>shopco</b><small>New in</small><small>Categories</small><small>Sale</small></aside><div className="product"><div className="shoe" /><div><small>RUNNING / 01</small><h3>Move with<br />purpose.</h3><button>Explore</button></div></div></div></div><span className="art-label">FULL-STACK E-COMMERCE</span></Project>
        <Project number="02" title={<>Workflows that<br />stay in flow.</>} description="A CRM team project where I developed email, meetings, and attachments modules, turning REST data into responsive interfaces." stack={['Next.js & TypeScript', 'Material UI & REST APIs', 'Git collaboration']} kind="crm-art"><div className="crm-window"><div className="crm-nav"><b>⌘ lumen</b><span>⌕</span><span>◌</span></div><div className="crm-body"><aside><small>WORKSPACE</small><b>Overview</b><b>Leads</b><b className="active">Meetings</b><b>Messages</b></aside><div className="meetings"><div className="crumb">Meetings / September</div><h3>Good morning, Rathul.</h3><div className="meeting-card"><span className="avatar">JM</span><div><b>Product sync</b><small>Today · 10:30 AM</small></div><em>Join meeting</em></div><div className="meeting-card pale"><span className="avatar">AT</span><div><b>Client onboarding</b><small>Tomorrow · 02:00 PM</small></div></div></div></div></div><span className="art-label">CRM / TEAM PROJECT</span></Project>
        <Project number="03" title={<>Service, booked<br />without friction.</>} description="An online car service booking platform that makes registration and appointment scheduling straightforward for customers." stack={['React.js', 'Node.js & Express', 'MongoDB & REST APIs']} kind="auto-art"><div className="auto-card"><div className="auto-copy"><span>YOUR CAR DESERVES</span><h3>better<br />care.</h3><button>Book a service →</button></div><div className="car"><div className="car-top" /><div className="car-body" /><i /><i /></div></div><span className="art-label">CAR SERVICE PLATFORM</span></Project>
      </section>
      <section className="about section" id="about"><div className="section-heading reveal"><p className="eyebrow">02 / ABOUT ME</p></div><div className="about-grid reveal"><h2>A practical developer with a curiosity for how things work.</h2><div><p>I am Rathul Rajeev, a full-stack developer based in India. I enjoy taking a product from a first idea to a responsive, maintainable application - with clear code and careful problem solving along the way.</p><p>My project-based MERN training gave me experience with team workflows, feature branches, code reviews, and translating UI designs into working software.</p></div></div><div className="skills reveal">{[['FRONTEND', 'Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'], ['BACKEND', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth'], ['DATA & TOOLS', 'MongoDB', 'PostgreSQL', 'MySQL', 'Git / GitHub']].map(([label, ...skills]) => <div key={label}><p className="eyebrow">{label}</p>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>)}</div></section>
      <section className="experience section reveal"><p className="eyebrow">03 / BACKGROUND</p><div className="timeline">{[['2025 — 2026', 'Full Stack Web Development', 'Project-based MERN training · Kozhikode, Kerala'], ['2025', 'Cyber Security Intern', 'Atmic Systemics Private Limited · Bangalore'], ['2022 — 2025', 'Bachelor of Computer Applications', 'Bengaluru North University']].map(([date, role, place]) => <div key={role}><p>{date}</p><h3>{role}</h3><span>{place}</span></div>)}</div></section>
      <section className="contact" id="contact"><p className="eyebrow reveal">04 / GET IN TOUCH</p><h2 className="reveal">Have something<br />in <em>mind?</em></h2><p className="email reveal">rathulrajeev2@gmail.com</p><p className="contact-note reveal">Currently open to developer opportunities and thoughtful collaborations.</p></section>
    </main>
    <footer><a className="brand" href="#home">RR<span>•</span></a><p>© {new Date().getFullYear()} Rathul Rajeev</p><div><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={socials.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
