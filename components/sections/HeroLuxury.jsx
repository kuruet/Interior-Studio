"use client";

import { useState, useEffect, useRef } from "react";

// ─── Images: luxury interior photography (Unsplash) ──────────────────────────
const HERO_IMAGES = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Luxury interior project"
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Modern architectural interior"
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Warm editorial living space"
  },
  {
    src: "/images/hero/hero-4.jpg",
    alt: "Minimal premium bedroom"
  },
  {
    src: "/images/hero/hero-5.jpg",
    alt: "Luxury residential design"
  }
];

const NAV_LEFT  = ["Projects", "About"];
const NAV_RIGHT = ["Process", "Contact"];
const SLIDE_DURATION = 6000; // ms per slide

export default function LuxuryHero() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide]   = useState(null);
  const [scrolled, setScrolled]     = useState(false);
  const [loaded, setLoaded]         = useState(false);
  const intervalRef = useRef(null);

  // Initial load fade-in
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  // Scroll detection for navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance slider
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide(s => {
        setPrevSlide(s);
        return (s + 1) % HERO_IMAGES.length;
      });
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (i) => {
    if (i === activeSlide) return;
    setPrevSlide(activeSlide);
    setActiveSlide(i);
    startTimer();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Manrope:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream:  #F6F1EB;
          --sand:   #E7DED2;
          --text:   #1F1F1B;
          --accent: #B89D7A;
          --dark:   #4B4036;
          --white:  #FDFAF6;
        }

        html, body { overflow-x: hidden; background: var(--cream); }

        /* ════════════════════════════════════════
           NAVBAR
        ════════════════════════════════════════ */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          padding: 0 2.5rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.5s ease, backdrop-filter 0.5s ease;
        }
        .navbar.scrolled {
          background: rgba(246,241,235,0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 0.5px solid rgba(184,157,122,0.18);
        }
        .nav-group {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          flex: 1;
        }
        .nav-group.right { justify-content: flex-end; }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 300;
          letter-spacing: 0.18em;
          color: var(--white);
          text-decoration: none;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.4s;
        }
        .navbar.scrolled .nav-logo { color: var(--text); }
        .nav-logo-divider {
          width: 1px; height: 22px;
          background: rgba(253,250,246,0.4);
          transition: background 0.4s;
        }
        .navbar.scrolled .nav-logo-divider { background: rgba(31,31,27,0.22); }

        .nav-link {
          font-family: 'Manrope', sans-serif;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(253,250,246,0.8);
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }
        .navbar.scrolled .nav-link { color: rgba(31,31,27,0.68); }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0; right: 100%;
          height: 0.5px;
          background: var(--accent);
          transition: right 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover { color: var(--white); }
        .navbar.scrolled .nav-link:hover { color: var(--text); }
        .nav-link:hover::after { right: 0; }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
          z-index: 60;
        }
        .hamburger span {
          display: block;
          width: 24px; height: 1px;
          background: var(--white);
          transition: transform 0.35s, opacity 0.25s, background 0.4s;
          transform-origin: center;
        }
        .navbar.scrolled .hamburger span { background: var(--text); }
        .hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* ── Mobile Menu ── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 45;
          background: var(--dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.8rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-overlay.open { opacity: 1; pointer-events: all; }
        .mobile-nav-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 300;
          letter-spacing: 0.06em;
          color: var(--sand);
          text-decoration: none;
          transition: color 0.3s;
        }
        .mobile-nav-link:hover { color: var(--accent); }
        .mobile-divider {
          width: 40px; height: 0.5px;
          background: rgba(231,222,210,0.22);
        }
        .mobile-studio-name {
          font-family: 'Manrope', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(231,222,210,0.3);
        }

        /* ════════════════════════════════════════
           HERO
        ════════════════════════════════════════ */
        .hero {
          position: relative;
          width: 100vw;
          height: 100dvh;
          min-height: 600px;
          overflow: hidden;
          background: var(--dark);
        }

        /* ── Fullscreen Slide ── */
        .slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
          z-index: 0;
        }
        .slide.active {
          opacity: 1;
          z-index: 1;
        }
        /* Outgoing slide stays visible briefly during crossfade */
        .slide.leaving {
          opacity: 0;
          z-index: 0;
          transition: opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          /* Subtle Ken Burns zoom — resets each slide */
          animation: kenburns 8s ease-out forwards;
        }
        @keyframes kenburns {
          from { transform: scale(1.06); }
          to   { transform: scale(1.0);  }
        }

        /* ── Overlay ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background:
            linear-gradient(to bottom, rgba(31,31,27,0.22) 0%, transparent 30%),
            linear-gradient(to top,    rgba(31,31,27,0.60) 0%, transparent 55%),
            linear-gradient(to right,  rgba(75,64,54,0.25) 0%, transparent 50%);
          pointer-events: none;
        }

        /* ── Hero Content ── */
        .hero-content {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 0 1.5rem 5.5rem;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.2s 0.4s ease, transform 1.2s 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
          pointer-events: none;
        }
        .hero-content.loaded {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .hero-eyebrow {
          font-family: 'Manrope', sans-serif;
          font-size: 0.62rem;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.1rem;
        }
        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7.5vw, 6.5rem);
          font-weight: 300;
          line-height: 1.06;
          letter-spacing: 0.04em;
          color: var(--white);
          max-width: 820px;
          margin-bottom: 1.6rem;
        }
        .hero-heading em {
          font-style: italic;
          color: var(--sand);
        }
        .hero-body {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.9;
          letter-spacing: 0.03em;
          color: rgba(231,222,210,0.7);
          max-width: 460px;
          margin-bottom: 2.4rem;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--white);
          text-decoration: none;
          border: 0.5px solid rgba(253,250,246,0.38);
          padding: 0.85rem 2.2rem;
          transition: border-color 0.35s, background 0.35s;
        }
        .hero-cta:hover {
          background: var(--accent);
          border-color: var(--accent);
        }
        .cta-arrow { transition: transform 0.3s; }
        .hero-cta:hover .cta-arrow { transform: translateX(4px); }

        /* ── Slide Counter ── */
        .slide-counter {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .dot-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 4px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          color: rgba(231,222,210,0.42);
          transition: color 0.35s;
        }
        .dot-btn.active { color: rgba(253,250,246,0.92); }
        .dot-btn:hover  { color: rgba(253,250,246,0.65); }
        .dot-line {
          display: block;
          width: 18px; height: 0.5px;
          background: rgba(231,222,210,0.25);
          transition: width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.35s;
          flex-shrink: 0;
        }
        .dot-btn.active .dot-line {
          width: 30px;
          background: var(--accent);
        }

        /* ── Progress bar ── */
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          background: var(--accent);
          z-index: 6;
          transform-origin: left;
          opacity: 0.55;
        }
        .progress-bar.running {
          animation: progress var(--duration, 6000ms) linear forwards;
        }
        @keyframes progress {
          from { width: 0; }
          to   { width: 100%; }
        }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 768px) {
          .nav-group   { display: none !important; }
          .hamburger   { display: flex; }
          .navbar      { padding: 0 1.25rem; }
          .hero-body   { display: none; }
          .hero-content { padding: 0 1.25rem 5.5rem; }
          .hero-heading { font-size: clamp(2.4rem, 9vw, 3.8rem); }
        }
        @media (max-width: 480px) {
          .hero-heading { font-size: clamp(2.2rem, 10.5vw, 3rem); }
        }
        @media (min-width: 769px) {
          .mobile-overlay { display: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="nav-group">
          {NAV_LEFT.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
        </div>

        <a href="#" className="nav-logo" aria-label="Atelier Rova home">
          A<span className="nav-logo-divider" aria-hidden="true" />R
        </a>

        <div className="nav-group right">
          {NAV_RIGHT.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
        </div>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-overlay${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        {[...NAV_LEFT, ...NAV_RIGHT].map((l, i) => (
          <a
            key={l}
            href="#"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 55}ms` : "0ms" }}
          >
            {l}
          </a>
        ))}
        <div className="mobile-divider" aria-hidden="true" />
        <span className="mobile-studio-name">Atelier Rova</span>
      </div>

      {/* ══════════════════════════════════════
          HERO — FULLSCREEN CINEMATIC SLIDER
      ══════════════════════════════════════ */}
      <section className="hero" aria-label="Hero — fullscreen cinematic slider">

        {/* ── Background Slides (only one visible at a time) ── */}
        {HERO_IMAGES.map((item, i) => (
          <div
            key={i}
            className={`slide${i === activeSlide ? " active" : ""}`}
            aria-hidden={i !== activeSlide}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* ── Warm Overlay ── */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* ── Progress bar ── */}
        <div
          key={activeSlide}
          className="progress-bar running"
          style={{ "--duration": `${SLIDE_DURATION}ms` }}
          aria-hidden="true"
        />

        {/* ── Hero Content (stable above slides) ── */}
        <div className={`hero-content${loaded ? " loaded" : ""}`}>
          <p className="hero-eyebrow">Interior Design Studio</p>

          <h1 className="hero-heading">
            Designing spaces<br />
            with <em>warmth,</em><br />
            clarity &amp; intention.
          </h1>

          <p className="hero-body">
            We craft environments where architecture, light, and material meet in quiet harmony — spaces that hold memory, inspire stillness, and speak to who you are.
          </p>

          <a href="#" className="hero-cta">
            View our work
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* ── Slide Counter Dots ── */}
        <div className="slide-counter" role="tablist" aria-label="Image navigation">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeSlide}
              aria-label={`Slide ${i + 1}`}
              className={`dot-btn${i === activeSlide ? " active" : ""}`}
              onClick={() => goToSlide(i)}
            >
              <span className="dot-line" aria-hidden="true" />
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

      </section>
    </>
  );
}