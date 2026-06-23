"use client";
import Image from "next/image";
import { franchiseModel } from "@/data/franchise";
import Reveal from "@/components/ui/Reveal";

export default function FranchiseSection() {
  const m = franchiseModel;
  return (
    <section id="franchise" style={{ background: "#ffffff", padding: "110px 5%", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal style={{ marginBottom: "3rem" }}>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>Franchise Models</div>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#05080c",
              maxWidth: "640px",
            }}
          >
            A low-investment format built for <span className="script">fast</span> deployment.
          </h2>
        </Reveal>

        <Reveal scale>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "0",
              background: "#f5f5f5",
              border: "1px solid rgba(5,8,12,0.07)",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(5,8,12,0.06)",
            }}
            className="model-grid"
          >
            {/* Image */}
            <div style={{ position: "relative", minHeight: "340px" }}>
              <Image
                src="/food/momos-steamer.jpg"
                alt="Tikhi Gali outlet model"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: "#e7293c",
                  color: "#fff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "7px 16px",
                  borderRadius: "50px",
                }}
              >
                {m.tag}
              </div>
            </div>

            {/* Details */}
            <div style={{ padding: "clamp(28px, 4vw, 48px)" }}>
              <div style={{ fontSize: "0.78rem", color: "#5b5b5b", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600, marginBottom: "6px" }}>
                {m.type}
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#05080c", marginBottom: "20px" }}>{m.name}</h3>

              <div style={{ display: "flex", gap: "36px", marginBottom: "26px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#e7293c", lineHeight: 1 }}>{m.investment}</div>
                  <div style={{ fontSize: "0.8rem", color: "#5b5b5b", marginTop: "4px" }}>{m.investmentNote}</div>
                </div>
                <div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#05080c", lineHeight: 1 }}>{m.roi}</div>
                  <div style={{ fontSize: "0.8rem", color: "#5b5b5b", marginTop: "4px" }}>estimated ROI</div>
                </div>
              </div>

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#484848",
                  background: "#ffffff",
                  border: "1px solid rgba(5,8,12,0.06)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  marginBottom: "22px",
                  lineHeight: 1.5,
                }}
              >
                📍 <strong style={{ color: "#05080c", fontWeight: 600 }}>Ideal locations:</strong> {m.location}
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {m.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(231,41,60,0.12)",
                        color: "#e7293c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "#484848", fontSize: "0.92rem" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#apply" className="btn-red" style={{ marginTop: "28px" }}>
                Apply for this Model →
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 800px) { .model-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
