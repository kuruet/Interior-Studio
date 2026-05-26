"use client";

import { useRef, useEffect, useState } from "react";

import siteData from "@/src/data/siteData";

const footerData = siteData.footer;

// ── Usage ──────────────────────────────────────────────────────────
// import FooterSection from "@/sections/footer/FooterSection";
// <FooterSection />
//
// Place images at: /public/images/footer/footer-1.jpg … footer-6.jpg

// ── DATA ──────────────────────────────────────────────────────────

// const NAV_ITEMS = ["Home", "About", "Services", "Portfolio", "Journal", "Contact"];

// const INSTAGRAM_IMAGES = [
//   { src: "/images/footer/footer-1.jpg", alt: "Interior detail" },
//   { src: "/images/footer/footer-2.jpg", alt: "Living space" },
//   { src: "/images/footer/footer-3.jpg", alt: "Studio light" },
//   { src: "/images/footer/footer-4.jpg", alt: "Texture study" },
//   { src: "/images/footer/footer-5.jpg", alt: "Curated corner" },
//   { src: "/images/footer/footer-6.jpg", alt: "Editorial still" },
// ];

// const STUDIO_EMAIL = "hello@dwkinteriors.com";
// const INSTAGRAM_URL = "https://instagram.com";
// const FACEBOOK_URL  = "https://facebook.com";
// const PINTEREST_URL = "https://pinterest.com";
// const MARQUEE_TEXT  = "DWK INTERIORS";

// ── COLORS ────────────────────────────────────────────────────────
const BG = "#461411";
const CREAM = "#E9E1CA";

// ── ICON COMPONENTS ───────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconPinterest() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.86-2.6 1.93-2.6.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.92 1.57 1.92 1.88 0 3.14-2.4 3.14-5.24 0-2.16-1.46-3.78-4.1-3.78-2.99 0-4.85 2.23-4.85 4.71 0 .85.25 1.45.64 1.91.18.21.2.3.14.54-.05.17-.15.59-.2.76-.06.24-.25.33-.46.24-1.31-.54-1.92-1.99-1.92-3.61 0-2.67 2.25-5.84 6.72-5.84 3.6 0 5.97 2.6 5.97 5.4 0 3.7-2.05 6.46-5.07 6.46-1.01 0-1.96-.55-2.29-1.17l-.62 2.38c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

// ── MARQUEE ───────────────────────────────────────────────────────

function Marquee({ text }) {
  const repeated = Array(8).fill(`${text} — `).join("");

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: `1px solid rgba(233,225,202,0.12)`,
        borderBottom: `1px solid rgba(233,225,202,0.12)`,
        padding: "4px 0",
        position: "relative",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee-scroll 32s linear infinite",
          willChange: "transform",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', 'Blair ITC', sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: CREAM,
            // opacity: 0.32,
            lineHeight: 1,
            paddingRight: "0.5em",
            flexShrink: 0,
          }}
          aria-hidden
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}

// ── INSTAGRAM PLACEHOLDER ─────────────────────────────────────────

function InstaImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        aspectRatio: "1 / 1",
        overflow: "hidden",
        background: "rgba(70,20,17,1)",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: loaded ? 0.82 : 0,
          transition: "opacity 0.5s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.65")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.82")}
      />
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────

export default function FooterSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Jost:wght@300;400&display=swap');

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .footer-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(233,225,202,0.3);
          color: ${CREAM};
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 10px 0;
          width: 100%;
          outline: none;
          transition: border-color 0.35s ease;
        }

        .footer-input::placeholder {
          color: rgba(233,225,202,0.35);
          letter-spacing: 0.18em;
        }

        .footer-input:focus {
          border-bottom-color: rgba(233,225,202,0.65);
        }

        .footer-cta-link {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(233,225,202,0.75);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          cursor: pointer;
          background: none;
          border: none;
          transition: opacity 0.4s ease;
        }

        .footer-cta-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(70,20,17,1);
          transition: opacity 0.4s ease;
        }

        .footer-cta-link:hover {
          opacity: 0.55;
        }

        .footer-nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(233,225,202,0.6);
          text-decoration: none;
          transition: color 0.35s ease;
          display: block;
          padding: 5px 0;
        }

        .footer-nav-link:hover {
          color: rgba(233,225,202,1);
        }

        .footer-social-link {
          color: rgba(233,225,202,0.5);
          transition: color 0.35s ease;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .footer-social-link:hover {
          color: rgba(233,225,202,1);
        }

        .footer-util-link {
          font-family: 'Jost', sans-serif;
          font-size: 9.5px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(233,225,202,0.3);
          text-decoration: none;
          transition: color 0.35s ease;
        }

        .footer-util-link:hover {
          color: rgba(233,225,202,0.65);
        }

        .back-to-top {
          font-family: 'Jost', sans-serif;
          font-size: 9.5px;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(233,225,202,0.35);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.35s ease;
          padding: 0;
        }

        .back-to-top:hover {
          color: rgba(233,225,202,0.75);
        }
      `}</style>

      <footer style={{ background: BG, width: "100%" }}>

        {/* ── MAIN GRID ── */}
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            padding: "8px 40px 12px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="footer-grid"
        >

          {/* ── LEFT — Editorial notes ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', 'Didot', Georgia, serif",
                  fontSize: "clamp(34px, 3.5vw, 46px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.2,
                  color: CREAM,
                  margin: 0,
                  maxWidth: "320px",
                  letterSpacing: "0.01em",
                }}
              >
                {footerData.newsletterHeading}
              </h2>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "rgba(233,225,202,0.55)",
                  maxWidth: "300px",
                  margin: "18px 0 0",
                  letterSpacing: "0.03em",
                }}
              >
               {footerData.newsletterText}
              </p>
            </div>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "300px" }}>
              <input
                type="text"
                placeholder="Your Name"
                className="footer-input"
                aria-label="Your name"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="footer-input"
                aria-label="Email address"
              />
              <div style={{ paddingTop: "6px" }}>
                <button className="footer-cta-link" type="button">
                 {footerData.newsletterCta}
                </button>
              </div>
            </div>
          </div>

          {/* ── CENTER — Navigation + contact ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              paddingTop: "6px",
            }}
          >
            {/* Two-col nav */}
            <nav aria-label="Footer navigation">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "32px",
                }}
              >
                {footerData.navigation.map((item) => (
                  <a key={item} href="#" className="footer-nav-link">
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            {/* Email + socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <a
               href={`mailto:${footerData.email}`}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  color: "rgba(233,225,202,0.55)",
                  textDecoration: "none",
                  transition: "color 0.35s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = CREAM)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(233,225,202,0.55)")}
              >
                {footerData.email}
              </a>

              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <a href={footerData.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                  <IconInstagram />
                </a>
                <a href={footerData.socials.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href={footerData.socials.pinterest} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Pinterest">
                  <IconPinterest />
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Instagram grid ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', 'Didot', Georgia, serif",
                fontSize: "18px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(233,225,202,0.75)",
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              Follow on Instagram
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "4px",
              }}
            >
              {footerData.instagramImages.map((img) => (
                <a
                  key={img.src}
                 href={footerData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={img.alt}
                >
                  <InstaImage src={img.src} alt={img.alt} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── MARQUEE ── */}
       <Marquee text={footerData.marquee} />

        {/* ── COPYRIGHT STRIP ── */}
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            padding: "1px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "9.5px",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(233,225,202,0.28)",
              }}
            >
              {footerData.copyright}
            </span>
            <a href="#" className="footer-util-link">Privacy Policy</a>
            <a href="#" className="footer-util-link">Terms</a>
            <a href="#" className="footer-util-link">Site Credit</a>
          </div>

          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to the top"
          >
            Back to the top ↑
          </button>
        </div>

      </footer>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 52px 28px 40px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            padding: 40px 20px 32px !important;
          }
        }
      `}</style>
    </>
  );
}