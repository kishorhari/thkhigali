"use client";
import { testimonials } from "@/data/franchise";
import Reveal from "@/components/ui/Reveal";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div style={{ color: "#F5C518", fontSize: "1rem", letterSpacing: "2px" }}>
      {"★".repeat(full)}
      {half ? "½" : ""}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1A0804 0%, #0D0402 100%)",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "-40px",
          fontSize: "16rem",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      >
        ❝
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Partner Stories
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3.2rem)",
              fontWeight: 900,
              color: "#fff",
            }}
          >
            Loved By Our{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Franchise Partners
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#8a6040", fontSize: "0.95rem" }}>
            Rated <strong style={{ color: "#F5C518" }}>4.5★+</strong> by partners across UP &amp; NCR
          </span>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.border = "1px solid rgba(232,160,32,0.3)";
                  el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.border = "1px solid rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                }}
              >
                <Stars rating={t.rating} />
                <p style={{ color: "#c4a882", fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic", flex: 1 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#C0392B,#E67E22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.92rem" }}>{t.name}</div>
                    <div style={{ color: "#6a4a2a", fontSize: "0.8rem", fontWeight: 600 }}>📍 {t.city}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
