"use client";
import Image from "next/image";
import { chefLessModel } from "@/data/franchise";
import Reveal from "@/components/ui/Reveal";

export default function ChefLessSection() {
  return (
    <section style={{ background: "#f5f5f5", padding: "110px 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal style={{ maxWidth: "820px", marginBottom: "3.5rem" }}>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>Chef-less Model</div>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#05080c",
            }}
          >
            No chef needed. Just a smart, system-driven kitchen that works{" "}
            <span className="script">seamlessly</span> every time.
          </h2>
        </Reveal>

        {/* Large 2-column image cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
          className="model-cards"
        >
          {chefLessModel.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1} scale>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(5,8,12,0.07)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 10px rgba(5,8,12,0.04)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 24px 60px rgba(5,8,12,0.12)";
                  const img = el.querySelector("img");
                  if (img) (img as HTMLElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 10px rgba(5,8,12,0.04)";
                  const img = el.querySelector("img");
                  if (img) (img as HTMLElement).style.transform = "scale(1)";
                }}
              >
                {/* Text top */}
                <div style={{ padding: "34px 34px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "rgba(231,41,60,0.1)",
                        border: "1px solid rgba(231,41,60,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#e7293c", lineHeight: 1.15 }}>
                      {c.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "1rem", color: "#5b5b5b", lineHeight: 1.6, maxWidth: "440px" }}>{c.desc}</p>
                </div>

                {/* Image fills bottom */}
                <div style={{ position: "relative", flex: 1, minHeight: "260px", margin: "0 16px 16px", borderRadius: "18px", overflow: "hidden" }}>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 820px) 90vw, 45vw"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { .model-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
