"use client";

const TRUSTED_LOGOS = [
  { id: "architectural-digest", name: "Architectural Digest", component: LogoAD },
  { id: "elle-decor", name: "Elle Décor", component: LogoElle },
  { id: "vogue-living", name: "Vogue Living", component: LogoVogue },
  { id: "house-garden", name: "House & Garden", component: LogoHouseGarden },
  { id: "wallpaper", name: "Wallpaper*", component: LogoWallpaper },
];

function LogoAD() {
  return (
    <svg width="130" height="40" viewBox="0 0 130 40" fill="none" aria-label="Architectural Digest">
      <text x="65" y="15" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="8.5" letterSpacing="3.8" fill="#1a1916" fontWeight="300">ARCHITECTURAL</text>
      <text x="65" y="33" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="19" letterSpacing="2.5" fill="#1a1916" fontWeight="300">DIGEST</text>
    </svg>
  );
}

function LogoElle() {
  return (
    <svg width="100" height="40" viewBox="0 0 100 40" fill="none" aria-label="Elle Décor">
      <text x="50" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="23" letterSpacing="5" fill="#1a1916" fontWeight="400" fontStyle="italic">ELLE</text>
      <text x="50" y="36" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="8.5" letterSpacing="4.5" fill="#1a1916" fontWeight="300">DÉCOR</text>
    </svg>
  );
}

function LogoVogue() {
  return (
    <svg width="112" height="40" viewBox="0 0 112 40" fill="none" aria-label="Vogue Living">
      <text x="56" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="22" letterSpacing="3" fill="#1a1916" fontWeight="400">VOGUE</text>
      <text x="56" y="36" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="8" letterSpacing="5.5" fill="#1a1916" fontWeight="300">LIVING</text>
    </svg>
  );
}

function LogoHouseGarden() {
  return (
    <svg width="108" height="40" viewBox="0 0 108 40" fill="none" aria-label="House & Garden">
      <text x="54" y="14" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="14" letterSpacing="2" fill="#1a1916" fontWeight="300">House</text>
      <text x="54" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="8" letterSpacing="2" fill="rgba(197,170,138,1)" fontWeight="300">&amp;</text>
      <text x="54" y="36" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="14" letterSpacing="2" fill="#1a1916" fontWeight="300">Garden</text>
    </svg>
  );
}

function LogoWallpaper() {
  return (
    <svg width="118" height="40" viewBox="0 0 118 40" fill="none" aria-label="Wallpaper*">
      <text x="52" y="26" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="16" letterSpacing="2" fill="#1a1916" fontWeight="400">WALLPAPER</text>
      <text x="106" y="20" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="14" fill="rgba(197,170,138,1)" fontWeight="300">*</text>
    </svg>
  );
}

function LogoInteriorDesign() {
  return (
    <svg width="88" height="52" viewBox="0 0 88 52" fill="none" aria-label="Interior Design">
      <text x="44" y="17" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="8" letterSpacing="4" fill="#1a1916" fontWeight="300">INTERIOR</text>
      <circle cx="44" cy="24" r="1.5" fill="rgba(197,170,138,0.9)" />
      <text x="44" y="42" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Didot', Georgia, serif" fontSize="18" letterSpacing="2.5" fill="#1a1916" fontWeight="300">DESIGN</text>
    </svg>
  );
}

export default function Trust() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');
        .trust-logo { opacity: 0.72; transition: opacity 0.45s ease; }
        .trust-logo:hover { opacity: 0.92; }
        .trust-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <section style={{ background: "#F6F7F2", width: "100%" }}>

        {/* ── SECTION 1 — TRUSTED BY THE BEST ── */}
        <div style={{
          height: "203px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          overflow: "hidden",
        }}>
          {/* label */}
          <p style={{
            fontFamily: "'Cormorant Garamond', 'Didot', Georgia, serif",
            fontSize: "11px",
            lineHeight: "1.7",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 400,
            textAlign: "center",
            color: "rgba(197,170,138,1)",
            margin: "0 0 22px 0",
          }}>
            Trusted By The Best
          </p>

          {/* logo row */}
          <div
            className="trust-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "nowrap",
              overflowX: "auto",
              scrollbarWidth: "none",
              maxWidth: "1200px",
              width: "100%",
            }}
          >
            {TRUSTED_LOGOS.map((logo, i) => {
              const Logo = logo.component;
              return (
                <div key={logo.id} style={{ display: "flex", alignItems: "center" }}>
                  <div className="trust-logo" style={{ padding: "0 44px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Logo />
                  </div>
                  {i < TRUSTED_LOGOS.length - 1 && (
                    <div style={{ width: "1px", height: "28px", background: "rgba(30,28,26,0.11)", flexShrink: 0 }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 2 — DESIGNER OF THE YEAR FINALIST ── */}
        <div style={{
          height: "142px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}>
          <div className="trust-logo" style={{ marginBottom: "14px" }}>
            <LogoInteriorDesign />
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', 'Didot', Georgia, serif",
            fontSize: "11px",
            lineHeight: "1.7",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 400,
            textAlign: "center",
            color: "rgba(197,170,138,1)",
            margin: 0,
          }}>
            Designer of the year finalist 2023 &amp; 2025
          </p>
        </div>

      </section>
    </>
  );
}