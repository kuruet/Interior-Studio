// components/FeaturedProjects.jsx
"use client";

import projects from "@/src/data/projects"; 
import { useState } from "react";

// const PROJECTS = [
//   {
//     title: "Minimalist Urban Sanctuary",
//     image: "/images/projects/project-1.jpg",
//     cta: "View Project",
//     href: "#project-1",
//     testimonial: "Working with DWK was the most effortless design experience we've ever had. Every detail felt considered, every space felt like us.",
//     author: "Jenn — Alberta",
//   },
//   {
//     title: "Extravagance in the Prairies",
//     image: "/images/projects/project-2.jpg",
//     cta: "View Project",
//     href: "#project-2",
//     testimonial: "They understood exactly what we wanted before we could even articulate it. The result was beyond anything we imagined.",
//     author: "Marcus & Claire — Saskatchewan",
//   },
//   {
//     title: "Modern Japandi Escape",
//     image: "/images/projects/project-3.jpg",
//     cta: "View Project",
//     href: "#project-3",
//     testimonial: "DWK brought an extraordinary level of care, craft, and calm to our renovation. We will never work with anyone else.",
//     author: "Sofia — British Columbia",
//   },
// ];

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const count = projects.length;

  function navigate(dir) {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + count) % count);
      setFading(false);
    }, 500);
  }

  function goTo(idx) {
    if (idx === active || fading) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 500);
  }

  const prev = (active - 1 + count) % count;
  const next = (active + 1) % count;
  const current = projects[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap');

        .fp-section {
          width: 100%;
          height: 1328px;
          position: relative;
          overflow: hidden;
          background-color: #373229;
        }

        .fp-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .fp-divider-top {
          width: 100%;
          height: 1px;
          background-color: rgba(233,225,202,0.15);
          flex-shrink: 0;
        }

        .fp-label {
          font-family: 'Blair ITC', serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(233,225,202,1);
          line-height: 1.7;
          text-align: center;
          margin-top: 76px;
        }

        .fp-arrows {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 36px;
        }

        .fp-arrow {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          transition: opacity 0.4s ease;
          flex-shrink: 0;
        }

        .fp-arrow:hover { opacity: 1; }
        .fp-arrow svg { width: 30px; height: 30px; display: block; }
        .fp-arrow.left { transform: rotate(180deg); }

        .fp-titles {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;
          margin-top: 28px;
          width: 100%;
          padding: 0 40px;
          box-sizing: border-box;
        }

        .fp-title-inactive {
          font-family: 'Ivy Presto Display Thin Italic', 'Cormorant Garamond', serif;
          font-size: 37px;
          line-height: 1.3;
          letter-spacing: 0.01em;
          font-weight: 400;
          font-style: italic;
          text-align: center;
          color: rgba(233,225,202,1);
          opacity: 0.1;
          cursor: pointer;
          transition: opacity 0.4s ease;
          white-space: nowrap;
          flex-shrink: 0;
          max-width: 280px;
          overflow: hidden;
          text-overflow: ellipsis;
          border: none;
          background: transparent;
          padding: 0;
        }

        .fp-title-inactive:hover { opacity: 0.25; }

        .fp-title-active {
          font-family: 'Ivy Presto Display Thin Italic', 'Cormorant Garamond', serif;
          font-size: 37px;
          line-height: 1.3;
          letter-spacing: 0.01em;
          font-weight: 400;
          font-style: italic;
          text-align: center;
          color: rgba(233,225,202,1);
          opacity: 1;
          flex-shrink: 0;
          transition: opacity 0.5s ease;
        }

        /* IMAGE STRIP */
        .fp-images-strip {
          position: relative;
          width: 100%;
          height: 500px;
          margin-top: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* shared image card */
        .fp-img-card {
          position: absolute;
          overflow: hidden;
          transition: opacity 1s ease;
        }

        /* CENTER */
        .fp-img-center {
          width: 400px;
          height: 500px;
          z-index: 3;
          left: 50%;
          transform: translateX(-50%);
          opacity: 1;
        }

        .fp-img-center.fading { opacity: 0; }

        /* LEFT */
        .fp-img-left {
          width: 320px;
          height: 400px;
          z-index: 1;
          right: calc(50% + 200px + 40px);
          top: 50px;
          opacity: 0.18;
          cursor: pointer;
          transition: opacity 0.6s ease;
        }

        .fp-img-left:hover { opacity: 0.32; }
        .fp-img-left.fading { opacity: 0; }

        /* RIGHT */
        .fp-img-right {
          width: 320px;
          height: 400px;
          z-index: 1;
          left: calc(50% + 200px + 40px);
          top: 50px;
          opacity: 0.18;
          cursor: pointer;
          transition: opacity 0.6s ease;
        }

        .fp-img-right:hover { opacity: 0.32; }
        .fp-img-right.fading { opacity: 0; }

        .fp-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .fp-cta-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
        }

        .fp-cta {
          font-family: 'Blair ITC', serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(233,225,202,1);
          text-decoration: none;
          text-align: center;
          transition: opacity 0.4s ease;
        }

        .fp-cta:hover { opacity: 0.45; }

        .fp-cta-line {
          width: 40px;
          height: 1px;
          background-color: rgba(233,225,202,0.2);
        }

        .fp-testimonial-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          margin-top: 88px;
          padding: 0 40px;
          max-width: 720px;
        }

        .fp-quote {
          font-family: 'Ivy Presto Display Thin Italic', 'Cormorant Garamond', serif;
          font-size: 30px;
          line-height: 1.3;
          text-align: center;
          color: rgba(233,225,202,1);
          font-weight: 400;
          font-style: italic;
          width: 662px;
          max-width: 100%;
          transition: opacity 1s ease;
        }

        .fp-quote.fading { opacity: 0; }

        .fp-author {
          font-family: 'Blair ITC', serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(233,225,202,0.5);
          text-align: center;
          transition: opacity 1s ease;
        }

        .fp-author.fading { opacity: 0; }

        @media (max-width: 1024px) {
          .fp-img-left,
          .fp-img-right {
            width: 220px;
            height: 320px;
          }
        }

        @media (max-width: 768px) {
          .fp-section { height: auto; padding-bottom: 80px; }
          .fp-img-left,
          .fp-img-right { display: none; }
          .fp-img-center {
            position: relative;
            left: auto;
            transform: none;
            width: 100%;
            height: 320px;
          }
          .fp-images-strip {
            width: 100%;
            height: 320px;
            padding: 0 28px;
            box-sizing: border-box;
          }
          .fp-titles { gap: 24px; padding: 0 20px; }
          .fp-title-inactive { font-size: 20px; max-width: 120px; }
          .fp-title-active { font-size: 24px; }
          .fp-quote { font-size: 22px; width: 100%; }
          .fp-testimonial-wrap { margin-top: 52px; padding: 0 28px; }
        }
      `}</style>

      <section className="fp-section">
        <div className="fp-inner">

          <div className="fp-divider-top" />
          <div className="fp-label">Featured Work</div>

          <div className="fp-arrows">
            <button className="fp-arrow left" onClick={() => navigate(-1)} aria-label="Previous project">
              <svg viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="14" stroke="rgba(233,225,202,0.5)" strokeWidth="0.8"/>
                <path d="M12 15h7M16 12l3 3-3 3" stroke="rgba(233,225,202,0.9)" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="fp-arrow right" onClick={() => navigate(1)} aria-label="Next project">
              <svg viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="14" stroke="rgba(233,225,202,0.5)" strokeWidth="0.8"/>
                <path d="M12 15h7M16 12l3 3-3 3" stroke="rgba(233,225,202,0.9)" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="fp-titles">
            <button className="fp-title-inactive" onClick={() => goTo(prev)}>
              {projects[prev].title}
            </button>
            <div className="fp-title-active" style={{ opacity: fading ? 0 : 1 }}>
              {current.title}
            </div>
            <button className="fp-title-inactive" onClick={() => goTo(next)}>
              {projects[next].title}
            </button>
          </div>

          {/* Three-image strip */}
          <div className="fp-images-strip">

            {/* LEFT preview */}
            <div
              className={`fp-img-card fp-img-left${fading ? " fading" : ""}`}
              onClick={() => goTo(prev)}
            >
              <img src={projects[prev].image} alt={projects[prev].title} />
            </div>

            {/* CENTER active */}
            <div className={`fp-img-card fp-img-center${fading ? " fading" : ""}`}>
              <img src={current.image} alt={current.title} />
            </div>

            {/* RIGHT preview */}
            <div
              className={`fp-img-card fp-img-right${fading ? " fading" : ""}`}
              onClick={() => goTo(next)}
            >
              <img src={projects[next].image} alt={projects[next].title} />
            </div>

          </div>

          <div className="fp-cta-wrap">
            <a href={current.href} className="fp-cta">{current.cta}</a>
            <div className="fp-cta-line" />
          </div>

          <div className="fp-testimonial-wrap">
            <div className={`fp-quote${fading ? " fading" : ""}`}>{current.testimonial}</div>
            <div className={`fp-author${fading ? " fading" : ""}`}>{current.author}</div>
          </div>

        </div>
      </section>
    </>
  );
}