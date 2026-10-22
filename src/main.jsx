import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Boxes, Code2, Command, FileText, Layers3, Menu, Smartphone, Wrench, X } from 'lucide-react';
import './style.css';

const profileUrl = 'https://www.linkedin.com/in/somilsomi/';
const companyUrl = 'https://www.linkedin.com/company/dyvona/';

const services = [
  {
    n: '01',
    title: 'Launch Website',
    tag: 'WEBSITES',
    text: 'A clear, responsive website for a new business, portfolio, or product. Includes a polished landing page, key sections, enquiry links, and basic technical SEO setup.',
    icon: FileText,
    tone: 'peach',
    price: '₹9,999',
    priceNote: 'starting price',
    status: 'Discuss a website'
  },
  {
    n: '02',
    title: 'Business Website',
    tag: 'MULTI-PAGE',
    text: 'A complete web presence with a consistent design, multiple pages, service or product information, mobile-friendly layouts, and a straightforward contact journey.',
    icon: Smartphone,
    tone: 'lilac',
    price: '₹19,999',
    priceNote: 'starting price',
    status: 'Discuss your website'
  },
  {
    n: '03',
    title: 'Web App or MVP',
    tag: 'CUSTOM SOFTWARE',
    text: 'Turn a workflow or product idea into working software. Scope may include authentication, dashboards, database-backed features, APIs, and user-facing flows.',
    icon: Command,
    tone: 'lime',
    price: '₹39,999',
    priceNote: 'starting price',
    status: 'Discuss your app'
  }
];

const projects = [
  {
    n: '01',
    title: 'Orbital PDF Studio',
    type: 'BROWSER-BASED TOOL',
    text: 'A local-first PDF workspace for reading, annotating, organizing pages, and exporting documents in the browser.',
    href: 'https://orbital-pdf-studio.vercel.app/',
    link: 'Explore PDF Studio',
    tone: 'peach'
  },
  {
    n: '02',
    title: 'Orbital Document Studio',
    type: 'DOCUMENT EDITOR',
    text: 'A browser-based writing workspace with rich-text editing, document imports, local autosave, and export options.',
    href: 'https://orbital-document-studio.vercel.app/',
    link: 'Explore Document Studio',
    tone: 'lilac'
  },
  {
    n: '03',
    title: 'CodeMeet',
    type: 'COLLABORATIVE WEB APP',
    text: 'A shared workspace bringing video meetings, screen sharing, live code collaboration, and chat together.',
    href: 'https://codemeet.dyvona.in/',
    link: 'Explore CodeMeet',
    tone: 'lime'
  }
];

function App() {
  const [menu, setMenu] = React.useState(false);

  return (
    <>
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Dyvona home">
          <img className="brand-logo" src="/favicon.svg" alt="" />
          <span>dyvona<span className="dot">.</span></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a onClick={() => setMenu(false)} href="#services">Services</a>
          <a onClick={() => setMenu(false)} href="#work">Selected work</a>
          <a onClick={() => setMenu(false)} href="#process">Our process</a>
          <a onClick={() => setMenu(false)} href="#contact">Start a project <ArrowUpRight size={15} /></a>
        </nav>
        <span className="nav-note"><i /> Independent software studio</span>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> WE DESIGN AND BUILD SOFTWARE</div>
            <h1>From a good idea to <span className="serif">working</span> <span className="underlined">software.</span></h1>
            <p className="hero-sub">Dyvona builds thoughtful websites, web applications, and MVPs for people turning an idea or business workflow into a useful digital product.</p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#services">Explore development services <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#work">See selected work <span>↓</span></a>
            </div>
            <div className="hero-foot"><span>BUILT AROUND YOUR NEEDS</span><span>SCOPED BEFORE WE START</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract colorful dimensional shapes representing software taking shape">
            <div className="art-grid" />
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="art-ring" />
            <div className="art-cube"><div className="cube-top" /><div className="cube-left" /><div className="cube-right" /></div>
            <div className="art-spark">✳</div>
            <div className="art-caption"><span>IDEA → INTERFACE</span><b>Make it usable.</b></div>
            <div className="floating-note">Plan. Build. Refine. <span>↗</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Development services">
          <div className="ticker-track"><span>WEBSITES <b>✳</b> WEB APPLICATIONS <b>✳</b> PRODUCT MVPs <b>✳</b> DASHBOARDS & WORKFLOWS <b>✳</b> WEBSITES <b>✳</b> WEB APPLICATIONS <b>✳</b></span></div>
        </section>

        <section className="products wrap" id="services">
          <div className="section-head">
            <div>
              <div className="eyebrow">01 / DEVELOPMENT SERVICES</div>
              <h2>Start with the right scope.<br /><span className="serif">Build what you need.</span></h2>
            </div>
            <p>From a focused website to a custom web application, we keep the scope clear and build toward a concrete outcome. Every project gets a proposal based on requirements.</p>
          </div>
          <div className="product-grid">
            {services.map((service) => (
              <article className={'product-card ' + service.tone} key={service.n}>
                <div className="card-top"><span>{service.n} / {service.tag}</span><span className="card-icon"><service.icon size={23} /></span></div>
                <div className="card-illustration"><div className="illustration-shape"><service.icon size={48} strokeWidth={1.25} /></div><span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="tiny-star">✳</span></div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <div className="card-pricing"><strong>{service.price}</strong><span>{service.priceNote}</span></div>
                  <p>{service.text}</p>
                  <a href="#contact" className="card-link">{service.status}<ArrowUpRight size={17} /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="offer-disclaimer">Indicative starting prices, not fixed quotes. Final cost depends on requirements, content, integrations, and complexity. Domain, hosting, paid APIs, app-store fees, and ongoing support are quoted separately where applicable.</p>
        </section>

        <section className="manifesto" id="process">
          <div className="manifesto-inner wrap">
            <div className="manifesto-label"><span className="manifesto-symbol">d.</span><span>02 / HOW WE BUILD</span></div>
            <div className="manifesto-copy">
              <h2>Useful software.<br /><span className="serif">Thought through.</span></h2>
              <p>Good development starts with understanding the problem, not jumping straight into code. We clarify the users, essential features, constraints, and what a successful first version needs to do.</p>
              <p>Then we design, develop, test, and refine the agreed scope. You get clear trade-offs and a working product—not vague promises or features nobody asked for.</p>
              <a href="https://github.com/somildholakia" target="_blank" rel="noreferrer" className="text-link">Explore the code and projects <ArrowUpRight size={16} /></a>
            </div>
            <div className="manifesto-stamp">PLAN<br /><span>BUILD</span><b>✳</b></div>
          </div>
        </section>

        <section className="work wrap" id="work">
          <div className="eyebrow">03 / SELECTED BUILDS</div>
          <div className="work-heading">
            <h2>Real projects.<br /><span className="serif">Working software.</span></h2>
            <p>A look at products and applications built across document workflows and collaborative development.</p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <article className={'work-card ' + project.tone} key={project.n}>
                <div className="work-card-top"><span>{project.n} / {project.type}</span><Code2 size={20} /></div>
                <div className="work-mark"><Layers3 size={38} strokeWidth={1.2} /><span className="work-mark-dot">✳</span></div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href={project.href} target="_blank" rel="noreferrer" className="work-link">{project.link}<ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="services wrap">
          <div className="eyebrow">04 / A SIMPLE, COLLABORATIVE PROCESS</div>
          <h2>Clear steps.<br /><span className="serif">No guesswork.</span></h2>
          <div className="service-list">
            <div><span>01</span><Wrench /><h3>Understand the problem</h3><p>Agree on your users, priorities, must-have features, timeline, and constraints.</p><ArrowUpRight /></div>
            <div><span>02</span><Layers3 /><h3>Design and build</h3><p>Develop in clear milestones, share progress, and review working software as it takes shape.</p><ArrowUpRight /></div>
            <div><span>03</span><Boxes /><h3>Test and hand over</h3><p>Check the agreed workflows, launch the product, and document any agreed support or next steps.</p><ArrowUpRight /></div>
          </div>
        </section>

        <section className="contact wrap" id="contact">
          <div className="contact-card">
            <div className="contact-deco">✳</div>
            <div className="eyebrow">HAVE A WEBSITE OR APP IN MIND?</div>
            <h2>Let's turn the idea<br /><span className="serif">into something real.</span></h2>
            <p>Share what you want to build, who it is for, and the problem it should solve. We'll discuss the requirements and suggest a sensible first scope before work begins.</p>
            <div className="contact-links">
              <a className="btn btn-dark" href={profileUrl} target="_blank" rel="noreferrer">Discuss a project <ArrowUpRight size={17} /></a>
              <a className="btn btn-outline" href="https://github.com/somildholakia" target="_blank" rel="noreferrer"><Code2 size={17} /> Explore GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a className="brand" href="#top"><img className="brand-logo" src="/favicon.svg" alt="" /><span>dyvona<span className="dot">.</span></span></a>
        <span>Websites, web apps, and thoughtfully built software.</span>
        <div><a href={companyUrl} aria-label="LinkedIn company page">in ↗</a><a href="https://github.com/somildholakia" aria-label="GitHub"><Code2 size={17} /></a><span>© {new Date().getFullYear()} Dyvona</span></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
