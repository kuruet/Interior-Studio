// components/DWKIntro.jsx
//
// Exact reconstruction of the DWK Interiors intro section.
// Typography tuned to match Ivy Presto Display Thin Italic rendering behavior.
//
// Required in your _document.js or layout.tsx <Head>:
// <link
//   href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@1,300&family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap"
//   rel="stylesheet"
// />

 
"use client";

import siteData from "@/src/data/siteData";


import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const fade = (visible, delay) => ({
  opacity:    visible ? 1 : 0,
  transform:  visible ? "translateY(0)" : "translateY(8px)",
  transition: `opacity 1.8s cubic-bezier(0.19,1,0.22,1) ${delay}ms,
               transform 1.8s cubic-bezier(0.19,1,0.22,1) ${delay}ms`,
});

// Smoothing applied to all text nodes for the airy, soft luxury rendering
const SMOOTH = {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

export default function DWKIntro() {
  const [r1, v1] = useReveal();
  const [r2, v2] = useReveal();
  const [r3, v3] = useReveal();
  const [r4, v4] = useReveal();

  return (
    <section
      aria-label="Brand Introduction"
      style={{ backgroundColor: "#E9E1CA" }}
      // Fixed height exactly matching reference; auto on mobile
      className="w-full h-[571px] max-sm:h-auto max-sm:min-h-[460px] max-sm:py-16
                 flex items-center justify-center overflow-hidden"
    >
      <div
        className="flex flex-col items-center text-center w-full max-w-[860px] px-6"
        style={{ marginTop: "-12px" }}
      >

        {/* 1 · Label */}
        <p
          ref={r1}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "11px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "19px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7C3623",
            marginBottom: "22px",
            ...SMOOTH,
            ...fade(v1, 60),
          }}
        >
          {siteData.intro.label}
        </p>

        {/* 2 · Main editorial statement
              — Cormorant (weight 300 italic) is the closest Google Font
                analog to Ivy Presto Display Thin Italic's hairline strokes
                and fashion-editorial presence.
              — font-synthesis: none prevents browser from artificially
                thickening the italic, preserving the thin, airy quality.
              — antialiased smoothing gives the soft, floating luxury feel. */}
        <p
          ref={r2}
          style={{
            fontFamily: "'Cormorant', 'Cormorant Garamond', 'Ivy Presto Display', Georgia, serif",
            fontSize: "47px",
            fontWeight: 300,
            fontStyle: "italic",
            fontSynthesis: "none",
            lineHeight: 1.2,
            letterSpacing: "0.0001em",
            color: "rgba(0,0,0,1)",
            textAlign: "center",
            maxWidth: "760px",
            marginBottom: "44px",
            textRendering: "optimizeLegibility",
            ...SMOOTH,
            ...fade(v2, 180),
          }}
          className="text-[28px] leading-[1.2] md:text-[47px]"
        >
          {siteData.intro.statement}
        </p>

        {/* 3 · Divider */}
        <div
          ref={r3}
          role="separator"
          style={{
            width: "188px",
            height: "1px",
            backgroundColor: "#1a1a1a",
            marginBottom: "14px",
            ...fade(v3, 340),
          }}
        />

        {/* 4 · CTA */}
        <a
          ref={r4}
          href="/services"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "11px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "19px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#000000",
            textDecoration: "none",
            display: "inline-block",
            transition: "opacity 0.3s ease",
            pointerEvents: "auto",
            ...SMOOTH,
            ...fade(v4, 420),
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.5"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
        >
          Let's Work Together
        </a>

      </div>
    </section>
  );
}