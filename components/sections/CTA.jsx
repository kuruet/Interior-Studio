"use client";

// Usage:
// import CTASection from "@/sections/cta/CTASection";
// <CTASection />
//
// Place your video at: /public/videos/interior-cta.mp4

const WHATSAPP_URL =
  "https://wa.me/919999999999?text=Hi,%20I%20came%20across%20your%20website%20and%20would%20love%20to%20discuss%20a%20project.";

const VIDEO_SRC = "/videos/interior-cta.mp4";

export default function CTASection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Jost:wght@300;400&display=swap');

        .cta-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(233, 225, 202, 0.75);
          margin: 0;
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', 'Didot', 'Bodoni MT', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 50px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.35;
          text-align: center;
          color: rgba(233, 225, 202, 1);
          max-width: 700px;
          margin: 0 auto;
          letter-spacing: 0.01em;
        }

        .cta-link {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(233, 225, 202, 0.85);
          text-decoration: none;
          position: relative;
          transition: color 0.4s ease, opacity 0.4s ease;
          padding-bottom: 3px;
        }

        .cta-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: rgba(233, 225, 202, 0.6);
          transition: width 0.5s ease;
        }

        .cta-link:hover {
          color: rgba(233, 225, 202, 1);
        }

        .cta-link:hover::after {
          width: 100%;
        }
      `}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* ── Background video ── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {/* ── Warm dark overlay ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "#373229",
            opacity: 0.82,
            zIndex: 1,
          }}
        />

        {/* ── Content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "28px",
            padding: "80px 24px",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Label */}
          <p className="cta-label">Get In Touch</p>

          {/* Heading */}
          <h2 className="cta-heading">
            Looking for refined interiors and a process that respects your time?
          </h2>

          {/* Divider */}
          <div
            aria-hidden="true"
            style={{
              width: "150px",
              height: "1px",
              background: "rgba(233,225,202,0.25)",
              flexShrink: 0,
            }}
          />

          {/* CTA link */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </>
  );
}