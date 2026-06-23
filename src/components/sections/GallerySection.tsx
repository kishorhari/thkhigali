"use client";
import { galleryTiles } from "@/data/franchise";
import Reveal from "@/components/ui/Reveal";

export default function GallerySection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0F0503 0%, #1A0804 100%)",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            A Taste Of The Brand
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3.2rem)",
              fontWeight: 900,
              color: "#fff",
            }}
          >
            What You&apos;ll{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Serve
            </span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
          className="gallery-grid"
        >
          {galleryTiles.map((t, i) => (
            <Reveal key={t.label} delay={(i % 3) * 0.08} direction="up">
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: `radial-gradient(circle at center, ${t.accent}22 0%, #0D0402 75%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.35s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(1.03)";
                  el.style.border = `1px solid ${t.accent}88`;
                  el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.55), 0 0 40px ${t.accent}33`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(1)";
                  el.style.border = "1px solid rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5rem)",
                    transition: "transform 0.35s",
                    filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))",
                  }}
                >
                  {t.emoji}
                </span>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "28px 18px 14px",
                    background: "linear-gradient(to top, rgba(13,4,2,0.92), transparent)",
                    color: "#f0d9c0",
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    letterSpacing: "0.3px",
                  }}
                >
                  {t.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 460px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
