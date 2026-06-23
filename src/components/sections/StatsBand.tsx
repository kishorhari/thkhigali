"use client";
import { growthStats } from "@/data/franchise";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function StatsBand() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1A0804 0%, #2A0A02 50%, #1A0804 100%)",
        padding: "72px 5%",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(232,160,32,0.12)",
        borderBottom: "1px solid rgba(232,160,32,0.12)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "radial-gradient(rgba(232,160,32,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
        className="stats-grid"
      >
        {growthStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(2.4rem,5vw,3.4rem)",
                fontWeight: 900,
                color: "#F5C518",
                lineHeight: 1,
              }}
            >
              <Counter
                to={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
              />
            </div>
            <div
              style={{
                color: "#c4a882",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: "10px",
              }}
            >
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 36px 16px !important; }
        }
      `}</style>
    </section>
  );
}
