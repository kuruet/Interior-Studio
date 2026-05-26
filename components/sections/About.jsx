// "use client";

// import { useEffect, useRef, useState } from "react";

// // ─── Philosophy Keywords ──────────────────────────────────────────────────────
// const PHILOSOPHY_PILLARS = [
//   { label: "Material Honesty",  note: "Every surface chosen with intention." },
//   { label: "Spatial Calm",      note: "Rooms that restore, not exhaust." },
//   { label: "Warm Minimalism",   note: "Restraint balanced with warmth." },
//   { label: "Timeless Form",     note: "Spaces that outlast every trend." },
// ];

// // ─── Reveal hook ─────────────────────────────────────────────────────────────
// function useReveal(threshold = 0.07) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }

// // ─── Shared type tokens ───────────────────────────────────────────────────────
// const SERIF = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
// const SANS  = { fontFamily: "'Manrope', sans-serif" };

// // ─── Reveal wrapper (render-prop style) ──────────────────────────────────────
// function Reveal({ delay = 0, className = "", children }) {
//   const [ref, visible] = useReveal();
//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-[1600ms] ease-[cubic-bezier(0.22,0.44,0.40,0.96)] ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[12px]"
//       } ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function StudioPhilosophy() {
//   return (
//     <section
//       className="bg-[#F8F4EE] px-6 md:px-14 lg:px-24 xl:px-32 py-24 md:py-32 lg:py-44"
//       aria-label="Studio Philosophy"
//       style={{ scrollBehavior: "smooth" }}
//     >

//       {/* ── Section Label ── */}
//       <Reveal delay={60}>
//         <div className="flex items-center gap-5 mb-16 md:mb-20 lg:mb-24">
//           <div className="h-px w-8 bg-[#B89D7A]" />
//           <p
//             className="text-[9px] uppercase tracking-[0.32em] text-[#B89D7A]"
//             style={SANS}
//           >
//             The Studio
//           </p>
//         </div>
//       </Reveal>

//       {/* ── Main Editorial Split Layout ── */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center mb-24 md:mb-32 lg:mb-40">

//         {/* Left — Text Column */}
//         <div className="lg:col-span-5 lg:pr-16">

//           {/* Heading */}
//           <Reveal delay={100}>
//             <h2
//               className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1F1F1B] leading-[1.2] mb-8 md:mb-10"
//               style={{ ...SERIF, letterSpacing: "-0.015em" }}
//             >
//               Designing spaces<br />
//               that feel deeply<br />
//               <em>lived in.</em>
//             </h2>
//           </Reveal>

//           {/* Body Copy — first paragraph */}
//           <Reveal delay={220}>
//             <p
//               className="text-[13px] text-[#4B4036] leading-[1.95] font-light mb-6"
//               style={SANS}
//             >
//               We are a Mumbai-based interior design studio working across
//               residential, hospitality, and commercial spaces. Our practice
//               is rooted in a belief that great interiors are never just visual —
//               they are felt.
//             </p>
//           </Reveal>

//           {/* Body Copy — second paragraph */}
//           <Reveal delay={320}>
//             <p
//               className="text-[13px] text-[#4B4036] leading-[1.95] font-light mb-10 md:mb-12"
//               style={SANS}
//             >
//               Each project begins with listening — to a client's rhythm of life,
//               the way light moves through a room, the textures that quietly
//               anchor a space. We work slowly, deliberately, and with deep
//               attention to what remains when everything unnecessary is removed.
//             </p>
//           </Reveal>

//           {/* Divider + signature */}
//           <Reveal delay={420}>
//             <div className="flex items-center gap-5">
//               <div className="h-px w-10 bg-[#B89D7A]" />
//               <p
//                 className="text-[10px] uppercase tracking-[0.24em] text-[#B89D7A]"
//                 style={SANS}
//               >
//                 Founded 2016 &nbsp;·&nbsp; Mumbai
//               </p>
//             </div>
//           </Reveal>

//         </div>

//         {/* Right — Image Column */}
//         <div className="lg:col-span-6 lg:col-start-7">
//           <Reveal delay={160}>
//             <div className="group relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
//               <img
//                 src="/images/about/about-studio.jpg"
//                 alt="Studio workspace with warm light"
//                 loading="lazy"
//                 className="w-full h-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.025]"
//               />
//               {/* Very subtle bottom tint — grounds the image */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1B]/08 via-transparent to-transparent pointer-events-none" />
//             </div>
//           </Reveal>

//           {/* Image caption */}
//           <Reveal delay={360}>
//             <p
//               className="mt-4 text-[9px] uppercase tracking-[0.24em] text-[#B89D7A] text-right"
//               style={SANS}
//             >
//               Studio, Bandra West
//             </p>
//           </Reveal>
//         </div>

//       </div>

//       {/* ── Philosophy Pillars ── */}
//       <Reveal delay={80}>
//         <div className="border-t border-[#E7DED2] pt-14 md:pt-16 lg:pt-20">

//           {/* Pillars label */}
//           <p
//             className="text-[9px] uppercase tracking-[0.30em] text-[#B89D7A] mb-10 md:mb-12"
//             style={SANS}
//           >
//             Our Principles
//           </p>

//           {/* Four pillars — horizontal on desktop, 2-col on tablet, stacked on mobile */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-12">
//             {PHILOSOPHY_PILLARS.map((pillar, i) => (
//               <Reveal key={pillar.label} delay={120 + i * 80}>
//                 <div>
//                   {/* Subtle index number */}
//                   <p
//                     className="text-[9px] text-[#B89D7A] mb-3"
//                     style={{ ...SANS, letterSpacing: "0.12em" }}
//                   >
//                     {String(i + 1).padStart(2, "0")}
//                   </p>
//                   <h4
//                     className="text-base lg:text-lg font-light text-[#1F1F1B] leading-snug mb-2"
//                     style={{ ...SERIF, letterSpacing: "-0.01em" }}
//                   >
//                     {pillar.label}
//                   </h4>
//                   <p
//                     className="text-[11px] text-[#4B4036] leading-[1.85] font-light"
//                     style={SANS}
//                   >
//                     {pillar.note}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//         </div>
//       </Reveal>

//       {/* ── Closing Quote ── */}
//       <Reveal delay={80}>
//         <div className="mt-20 md:mt-24 lg:mt-28 border-t border-[#E7DED2] pt-14 md:pt-16 lg:pt-20 max-w-2xl mx-auto text-center">
//           <p
//             className="text-2xl md:text-3xl font-light italic text-[#1F1F1B] leading-[1.4]"
//             style={{ ...SERIF, letterSpacing: "-0.01em" }}
//           >
//             "A room should feel like the best version<br className="hidden md:block" /> of whoever lives in it."
//           </p>
//           <p
//             className="mt-5 text-[9px] uppercase tracking-[0.26em] text-[#B89D7A]"
//             style={SANS}
//           >
//             Studio Principle
//           </p>
//         </div>
//       </Reveal>

//     </section>
//   );
// }