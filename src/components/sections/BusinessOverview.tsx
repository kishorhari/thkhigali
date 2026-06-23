"use client";
import Image from "next/image";
import { networkStats, galleryImages } from "@/data/franchise";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function BusinessOverview() {
  return (
    <section style={{ background: "#ffffff", padding: "110px 5%", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <Reveal style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>
            Business Overview
          </div>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#05080c",
            }}
          >
            Serving quality <span className="script">momos</span>, building a network of successful franchise partners across India.
          </h2>
        </Reveal>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "4rem",
          }}
          className="biz-stats"
        >
          {networkStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} scale>
              <div
                style={{
                  background: "#f5f5f5",
                  border: "1px solid rgba(5,8,12,0.06)",
                  borderRadius: "24px",
                  padding: "38px 28px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "clamp(2.6rem,6vw,4rem)", fontWeight: 800, color: "#e7293c", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div style={{ color: "#5b5b5b", fontSize: "0.92rem", fontWeight: 500, marginTop: "12px" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Photo gallery grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "180px",
            gap: "14px",
          }}
          className="biz-gallery"
        >
          {galleryImages.map((g, i) => {
            const span = i === 0 || i === 5;
            return (
              <Reveal
                key={g.src}
                delay={(i % 4) * 0.06}
                scale
                style={{ gridColumn: span ? "span 2" : "span 1", gridRow: span ? "span 2" : "span 1" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid rgba(5,8,12,0.06)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) (img as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) (img as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={g.src}
                    alt={g.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,8,12,0.78), transparent 55%)" }} />
                  <div style={{ position: "absolute", left: "16px", bottom: "14px", color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                    {g.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .biz-stats { grid-template-columns: 1fr !important; }
          .biz-gallery { grid-template-columns: 1fr 1fr !important; grid-auto-rows: 150px !important; }
        }
      `}</style>
    </section>
  );
}
