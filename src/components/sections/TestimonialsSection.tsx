"use client";
import { testimonials, trustStats } from "@/data/franchise";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div style={{ color: "#e7293c", fontSize: "1rem", letterSpacing: "2px" }}>
      {"★".repeat(full)}
      {half ? "½" : ""}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section style={{ background: "#f5f5f5", padding: "110px 5%", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Trusted by Franchise Partners</div>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#05080c",
              marginBottom: "1rem",
            }}
          >
            Building thriving outlets and real <span className="script">success</span> stories.
          </h2>
          <p style={{ color: "#5b5b5b", fontSize: "1.02rem", lineHeight: 1.6 }}>
            Together, our franchise partners and we are building strong local communities and stories that go beyond business.
          </p>
        </Reveal>

        {/* Testimonials */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "4.5rem" }}
          className="testi-grid"
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12} scale>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(5,8,12,0.07)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "0 1px 2px rgba(5,8,12,0.04)",
                }}
              >
                <Stars rating={t.rating} />
                <p style={{ color: "#484848", fontSize: "0.98rem", lineHeight: 1.7, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      background: "#e7293c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ color: "#05080c", fontWeight: 700, fontSize: "0.95rem" }}>{t.name}</div>
                    <div style={{ color: "#5b5b5b", fontSize: "0.82rem" }}>{t.city}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust stat row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
            borderTop: "1px solid rgba(5,8,12,0.1)",
            paddingTop: "3rem",
          }}
          className="trust-grid"
        >
          {trustStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#e7293c", lineHeight: 1, letterSpacing: "-0.02em" }}>
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div style={{ color: "#5b5b5b", fontSize: "0.78rem", marginTop: "8px", lineHeight: 1.4 }}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testi-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 28px 12px !important; }
        }
        @media (max-width: 480px) {
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
