"use client";
import { supportPillars } from "@/data/franchise";
import Reveal from "@/components/ui/Reveal";

export default function SupportPillars() {
  return (
    <section
      style={{
        background: "#0D0402",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orb */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            We&apos;ve Got Your Back
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3.2rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            End-to-End{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Franchise Support
            </span>
          </h2>
          <p style={{ color: "#6a4a2a", fontSize: "1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            From the day you sign up to the day you open — and every day after — our team is with you.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {supportPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} direction={i % 2 === 0 ? "up" : "down"}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(232,160,32,0.12)",
                  borderRadius: "24px",
                  padding: "34px 28px",
                  height: "100%",
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.border = "1px solid rgba(232,160,32,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.border = "1px solid rgba(232,160,32,0.12)";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(192,57,43,0.25), rgba(230,126,34,0.15))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    marginBottom: "18px",
                  }}
                >
                  {p.icon}
                </div>
                <h4 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", marginBottom: "10px" }}>{p.title}</h4>
                <p style={{ fontSize: "0.88rem", color: "#8a6040", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
