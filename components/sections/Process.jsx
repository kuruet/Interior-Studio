// components/ExperienceSection.jsx

import siteData from "@/src/data/siteData";


export default function ExperienceSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap');

        .exp-section {
          background-color: #F6F7F2;
          width: 100%;
          height: 727px;
          position: relative;
          overflow: hidden;
        }

        .exp-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
        }

        /* LEFT — true 50%, image fills it entirely */
        .exp-left {
          position: relative;
          width: 50%;
          height: 100%;
          flex-shrink: 0;
          overflow: hidden;
        }

        .exp-image-wrap {
          position: absolute;
          top: 0;
          left: -8%;
          width: 116%;
          height: 100%;
        }

        .exp-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        .exp-divider-vertical {
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background-color: rgba(0,0,0,0.12);
          z-index: 2;
        }

        /* RIGHT — editorial text */
        .exp-right {
          width: 50%;
          flex-shrink: 0;
          height: 100%;
          box-sizing: border-box;
          padding: 0 64px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .exp-divider-top {
          width: 100%;
          height: 1px;
          background-color: rgba(0,0,0,0.12);
          flex-shrink: 0;
        }

        .exp-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding: 52px 0 0 0;
          flex: 1;
        }

        .exp-label {
          font-family: 'Blair ITC', serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.7;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(124,54,35,1);
          text-align: left;
        }

        .exp-heading {
          font-family: 'Ivy Presto Display Thin Italic', 'Cormorant Garamond', serif;
          font-size: 47px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.2;
          letter-spacing: 0.01em;
          color: rgba(0,0,0,1);
          text-align: left;
          max-width: 420px;
        }

        .exp-body {
          font-family: 'Jost', sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.01em;
          color: rgba(0,0,0,1);
          text-align: left;
          max-width: 460px;
        }

        .exp-cta-wrap {
          padding: 28px 0 52px 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
          flex-shrink: 0;
        }

        .exp-divider-cta {
          width: 100%;
          height: 1px;
          background-color: rgba(0,0,0,0.12);
        }

        .exp-cta {
          font-family: 'Blair ITC', serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 2;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,0,0,1);
          text-decoration: none;
          text-align: left;
          display: inline-block;
          transition: color 0.5s, letter-spacing 0.5s;
        }

        .exp-cta:hover {
          color: rgba(0,0,0,0.4);
          letter-spacing: 0.2em;
        }

        @media (max-width: 768px) {
          .exp-section {
            height: auto;
            overflow: visible;
          }
          .exp-inner {
            flex-direction: column;
            height: auto;
          }
          .exp-left {
            width: 100%;
            height: 420px;
            overflow: hidden;
            order: 2;
          }
          .exp-image-wrap {
            left: 0;
            width: 100%;
          }
          .exp-divider-vertical {
            display: none;
          }
          .exp-right {
            width: 100%;
            height: auto;
            padding: 52px 28px 0;
            order: 1;
          }
          .exp-heading {
            font-size: 32px;
            max-width: 100%;
          }
          .exp-body {
            max-width: 100%;
          }
          .exp-cta-wrap {
            padding: 28px 0 44px;
          }
        }
      `}</style>

      <section className="exp-section">
        <div className="exp-inner">

          {/* LEFT — full 50%, image with subtle editorial overflow */}
          <div className="exp-left">
            <div className="exp-image-wrap">
              <img
               src={siteData.experience.image}
                alt="Luxury interior space"
              />
            </div>
            <div className="exp-divider-vertical" />
          </div>

          {/* RIGHT — editorial text */}
          <div className="exp-right">
            <div className="exp-divider-top" />

            <div className="exp-content">
              <span className="exp-label">{siteData.experience.label}</span>

              <div className="exp-heading">
               {siteData.experience.heading}
              </div>

              <p className="exp-body" style={{ whiteSpace: "pre-line" }}>
  {siteData.experience.body}
</p>
            </div>

            <div className="exp-cta-wrap">
              <div className="exp-divider-cta" />
              <a href={siteData.experience.ctaLink} className="exp-cta">
               {siteData.experience.ctaText}
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}