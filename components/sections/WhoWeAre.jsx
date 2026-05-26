// components/AboutSection.jsx

import siteData from "@/src/data/siteData"; 

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap');

        .about-section {
          background-color: #F6F7F2;
          width: 100%;
        }

        .about-inner {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 700px;
        }

        .about-left {
          width: 50%;
          height: 700px;
          flex-shrink: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 64px 64px 64px 64px;
        }

        .about-right {
          width: 50%;
          height: 700px;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .about-right img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .about-heading {
          font-family: 'Ivy Presto Display Thin Italic', 'Cormorant Garamond', serif;
          font-size: 47px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.2;
          letter-spacing: 0.01em;
          color: rgba(0,0,0,1);
        }

        .about-label {
          font-family: 'Blair ITC', serif;
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(0,0,0,0.55);
        }

        .about-body {
          font-family: 'Blair ITC', serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.85;
          color: rgba(0,0,0,0.65);
          letter-spacing: 0.01em;
        }

        .about-cta {
          font-family: 'Blair ITC', serif;
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          line-height: 2;
          color: rgba(0,0,0,1);
          text-decoration: none;
          transition: color 0.5s, letter-spacing 0.5s;
          display: inline-block;
          border-bottom: 1px solid rgba(0,0,0,0.25);
          padding-bottom: 1px;
        }

        .about-cta:hover {
          color: rgba(0,0,0,0.45);
          letter-spacing: 0.2em;
        }

        @media (max-width: 768px) {
          .about-inner {
            flex-direction: column;
            height: auto;
          }
          .about-left {
            width: 100%;
            height: auto;
            padding: 60px 28px 52px;
          }
          .about-right {
            width: 100%;
            height: 480px;
            position: relative;
          }
          .about-heading {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-inner">

          {/* LEFT */}
          <div className="about-left">

            <div>
              <span className="about-label">{siteData.about.label}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              <div className="about-heading" style={{ maxWidth: "460px" }}>
                {siteData.about.heading}
              </div>
              <p className="about-body" style={{ maxWidth: "440px", margin: 0 }}>
                {siteData.about.body}
              </p>
            </div>

            <div>
              <a href="href={siteData.about.ctaLink}" className="about-cta">{siteData.about.ctaText}</a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="about-right">
            <img
  src={siteData.about.image}
  alt="Interior designer portrait"
/>
          </div>

        </div>
      </section>
    </>
  );
}