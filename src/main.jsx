import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Boxes, Code2, Command, FileText, Layers3, Menu, Sparkles, Wrench, X } from 'lucide-react';
import './style.css';

const profileUrl = 'https://www.linkedin.com/in/somilsomi/';
const companyUrl = 'https://www.linkedin.com/company/dyvona/';

const offers = [
  {
    n: '01',
    title: 'Profile Clarity Sprint',
    tag: 'ONE-TIME',
    text: 'Make it clear who you help, what you know, and why someone should trust you. Includes a LinkedIn headline and About rewrite, Featured-section recommendations, and a profile call-to-action review.',
    icon: FileText,
    tone: 'peach',
    price: '₹2,499',
    priceNote: 'one-time',
    status: 'Discuss this offer'
  },
  {
    n: '02',
    title: 'Four-Post Content Pilot',
    tag: 'START HERE',
    text: 'Turn your expertise into four thoughtful, original LinkedIn posts in your voice. Includes two content themes, one revision per post, and a two-week posting plan.',
    icon: Sparkles,
    tone: 'lilac',
    price: '₹4,999',
    priceNote: 'one-time',
    status: 'Discuss this offer'
  },
  {
    n: '03',
    title: 'Monthly LinkedIn Presence',
    tag: 'ONGOING',
    text: 'Stay visible without starting from a blank page every week. Includes eight original post drafts, a monthly theme plan, and a short review call. You approve every post before it goes live.',
    icon: Command,
    tone: 'lime',
    price: '₹7,999',
    priceNote: 'per month',
    status: 'Discuss this offer'
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
          <a onClick={() => setMenu(false)} href="#offers">Packages</a>
          <a onClick={() => setMenu(false)} href="#approach">Our approach</a>
          <a onClick={() => setMenu(false)} href="#contact">Work with us <ArrowUpRight size={15} /></a>
        </nav>
        <span className="nav-note"><i /> LinkedIn personal branding</span>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> LINKEDIN PERSONAL BRANDING, BUILT WITH CARE</div>
            <h1>Make your expertise <span className="serif">impossible</span> <span className="underlined">to miss.</span></h1>
            <p className="hero-sub">We help founders, consultants, and professionals turn what they know into clear positioning and thoughtful LinkedIn content — without copy-paste hooks or fake virality.</p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#offers">Explore packages <ArrowUpRight size={17} /></a>
              <a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">Message Somil <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-foot"><span>CONTENT THAT SOUNDS LIKE YOU</span><span>NO VIRALITY PROMISES</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract colorful shapes representing ideas becoming a clear personal brand">
            <div className="art-grid" />
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="art-ring" />
            <div className="art-cube"><div className="cube-top" /><div className="cube-left" /><div className="cube-right" /></div>
            <div className="art-spark">✳</div>
            <div className="art-caption"><span>IDEAS → IDENTITY</span><b>Show what you know.</b></div>
            <div className="floating-note">Less noise. More you. <span>↗</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Dyvona services">
          <div className="ticker-track"><span>PROFILE POSITIONING <b>✳</b> LINKEDIN CONTENT <b>✳</b> PERSONAL BRANDING <b>✳</b> FOUNDER STORYTELLING <b>✳</b> PROFILE POSITIONING <b>✳</b> LINKEDIN CONTENT <b>✳</b></span></div>
        </section>

        <section className="products wrap" id="offers">
          <div className="section-head">
            <div><div className="eyebrow">01 / START WITH A CLEAR OFFER</div><h2>Small, focused engagements.<br /><span className="serif">Real work. No hype.</span></h2></div>
            <p>Start with a profile refresh, test four posts, or build a consistent monthly rhythm. Pick the smallest step that helps you move forward.</p>
          </div>
          <div className="product-grid">
            {offers.map((offer) => (
              <article className={'product-card ' + offer.tone} key={offer.n}>
                <div className="card-top"><span>{offer.n} / {offer.tag}</span><span className="card-icon"><offer.icon size={23} /></span></div>
                <div className="card-illustration"><div className="illustration-shape"><offer.icon size={48} strokeWidth={1.25} /></div><span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="tiny-star">✳</span></div>
                <div className="card-content">
                  <h3>{offer.title}</h3>
                  <div className="card-pricing"><strong>{offer.price}</strong><span>{offer.priceNote}</span></div>
                  <p>{offer.text}</p>
                  <a href="#contact" className="card-link">{offer.status}<ArrowUpRight size={17} /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="offer-disclaimer">Pilot pricing while we refine the process. No guaranteed reach, follower growth, leads, or virality. Scope is confirmed before work starts.</p>
        </section>

        <section className="manifesto" id="approach">
          <div className="manifesto-inner wrap">
            <div className="manifesto-label"><span className="manifesto-symbol">d.</span><span>02 / A NOTE ON HOW WE WORK</span></div>
            <div className="manifesto-copy">
              <h2>Good content starts<br />with <span className="serif">a point of view.</span></h2>
              <p>Your profile and posts should help the right people understand what you do, what you believe, and how you think. We begin with your experience and perspective — not a recycled content template.</p>
              <p>Dyvona is an early-stage studio. We're testing these focused offers with real conversations and careful execution, not pretending to have a stack of client case studies we don't have yet.</p>
              <a href={companyUrl} target="_blank" rel="noreferrer" className="text-link">Follow Dyvona's journey <ArrowUpRight size={16} /></a>
            </div>
            <div className="manifesto-stamp">BUILT AROUND<br /><span>YOUR VOICE</span><b>✳</b></div>
          </div>
        </section>

        <section className="services wrap">
          <div className="eyebrow">03 / A SIMPLE, COLLABORATIVE PROCESS</div>
          <h2>From your expertise<br />to <span className="serif">a stronger presence.</span></h2>
          <div className="service-list">
            <div><span>01</span><Wrench /><h3>Find the signal</h3><p>Clarify the audience, your strongest ideas, and the action your profile should encourage.</p><ArrowUpRight /></div>
            <div><span>02</span><Layers3 /><h3>Write in your voice</h3><p>Turn real experience into useful posts. You review and approve drafts before anything is published.</p><ArrowUpRight /></div>
            <div><span>03</span><Boxes /><h3>Learn and improve</h3><p>Review consistency, relevant engagement, profile interest, and useful conversations — not vanity metrics alone.</p><ArrowUpRight /></div>
          </div>
        </section>

        <section className="contact wrap" id="contact">
          <div className="contact-card">
            <div className="contact-deco">✳</div>
            <div className="eyebrow">READY TO TEST A SMALL FIRST STEP?</div>
            <h2>Let's build a presence<br /><span className="serif">that feels like you.</span></h2>
            <p>Tell us what you do, who you want to reach, and what you want LinkedIn to help with. We'll start by finding the right-sized pilot — no long retainer required.</p>
            <div className="contact-links">
              <a className="btn btn-dark" href={profileUrl} target="_blank" rel="noreferrer">Message Somil on LinkedIn <ArrowUpRight size={17} /></a>
              <a className="btn btn-outline" href={companyUrl} target="_blank" rel="noreferrer">Follow Dyvona <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a className="brand" href="#top"><img className="brand-logo" src="/favicon.svg" alt="" /><span>dyvona<span className="dot">.</span></span></a>
        <span>Personal branding. Thoughtful content. Built in public.</span>
        <div><a href={companyUrl} aria-label="LinkedIn company page">in ↗</a><a href="https://github.com/somildholakia" aria-label="GitHub"><Code2 size={17} /></a><span>© {new Date().getFullYear()} Dyvona</span></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
