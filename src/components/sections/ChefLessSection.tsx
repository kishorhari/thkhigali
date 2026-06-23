"use client";
import { chefLessModel } from "@/data/franchise";
import Reveal from "@/components/ui/Reveal";

export default function ChefLessSection() {
  return (
    <section
      style={{
        background: "#0D0402",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(232,160,32,0.4), transparent)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Why It Works
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
            The{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Chef-Less
            </span>{" "}
            Model
          </h2>
          <p style={{ color: "#6a4a2a", fontSize: "1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Our biggest advantage — consistent, high-quality food without depending on a skilled chef at every outlet.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {chefLessModel.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                  padding: "32px 26px",
                  height: "100%",
                  transition: "all 0.3s",
                  borderTop: "3px solid #C0392B",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.background = "rgba(255,255,255,0.06)";
                  el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "2.6rem", display: "block", marginBottom: "16px" }}>{c.icon}</span>
                <h4 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", marginBottom: "10px" }}>{c.title}</h4>
                <p style={{ fontSize: "0.88rem", color: "#8a6040", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
