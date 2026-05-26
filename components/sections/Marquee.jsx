// components/MarqueeStrip.jsx

const ITEMS = Array(12).fill("Distinct By Design, Personal By Choice");

export default function MarqueeStrip() {
  return (
    <>
      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll 100s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div
        className="w-full overflow-hidden flex items-center"
        style={{ height: "50px", backgroundColor: "#4F322A" }}
      >
        <div className="marquee-track flex items-center whitespace-nowrap">

          {/* First set */}
          {ITEMS.map((text, i) => (
            <span key={`a-${i}`} className="flex items-center shrink-0">
              <span
                className="uppercase shrink-0"
                style={{
                  fontFamily: "'Blair ITC', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "2px",
                  color: "#CBD7AD",
                  padding: "0 36px",
                  lineHeight: 1,
                }}
              >
                {text}
              </span>
              <span
                style={{
                  color: "#CBD7AD",
                  fontSize: "7px",
                  opacity: 0.35,
                  flexShrink: 0,
                }}
              >
                &mdash;
              </span>
            </span>
          ))}

          {/* Duplicate set — required for seamless loop */}
          {ITEMS.map((text, i) => (
            <span key={`b-${i}`} className="flex items-center shrink-0">
              <span
                className="uppercase shrink-0"
                style={{
                  fontFamily: "'Blair ITC', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "2px",
                  color: "#CBD7AD",
                  padding: "0 36px",
                  lineHeight: 1,
                }}
              >
                {text}
              </span>
              <span
                style={{
                  color: "#CBD7AD",
                  fontSize: "7px",
                  opacity: 0.35,
                  flexShrink: 0,
                }}
              >
                &mdash;
              </span>
            </span>
          ))}

        </div>
      </div>
    </>
  );
}