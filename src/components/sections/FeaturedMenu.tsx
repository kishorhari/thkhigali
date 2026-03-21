"use client";
import Link from "next/link";
import { featuredItems } from "@/data/menu";

export default function FeaturedMenu() {
  return (
    <section
      id="featured"
      style={{
        background: "#0D0402",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bg decoration */}
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Must Try
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
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#F5C518,#E8A020)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fan Favourites
            </span>
          </h2>
          <p style={{ color: "#6a4a2a", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            Dishes people come back to again and again — bold, unapologetic, unforgettable.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {featuredItems.map((item, idx) => (
            <div
              key={item.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "24px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s",
                cursor: "default",
                animationDelay: `${idx * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-8px)";
                el.style.border = "1px solid rgba(232,160,32,0.3)";
                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(192,57,43,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.border = "1px solid rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Glow bg */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg,#C0392B,#E8A020,#C0392B)",
                }}
              />

              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: item.badge === "New" ? "#E8A020" : item.badge === "Bestseller" ? "#C0392B" : "#27AE60",
                  color: "#fff",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  padding: "4px 12px",
                  borderRadius: "20px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {item.badge}
              </div>

              {/* Veg/NonVeg dot */}
              <div style={{ position: "absolute", top: "48px", right: "16px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: `2px solid ${item.veg ? "#27AE60" : "#C0392B"}`,
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: item.veg ? "#27AE60" : "#C0392B",
                    }}
                  />
                </div>
              </div>

              <span style={{ fontSize: "3.5rem", display: "block", marginBottom: "16px" }}>{item.emoji}</span>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8a6040", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                {item.category}
              </div>
              <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "#fff", marginBottom: "8px" }}>{item.name}</div>
              <div style={{ fontSize: "0.87rem", color: "#7a5030", lineHeight: 1.5, marginBottom: "20px" }}>{item.desc}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "#F5C518",
                  }}
                >
                  ₹{item.price}
                </div>
                <span style={{ fontSize: "0.8rem", color: "#5a3e2a", fontWeight: 600 }}>6 pcs</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link
            href="/menu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "2px solid rgba(232,160,32,0.4)",
              color: "#E8A020",
              padding: "14px 36px",
              borderRadius: "50px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s",
              fontFamily: "'Baloo 2',sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#E8A020";
              (e.currentTarget as HTMLElement).style.color = "#0D0402";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#E8A020";
            }}
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
