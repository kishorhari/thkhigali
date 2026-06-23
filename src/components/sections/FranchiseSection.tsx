"use client";
import { useState } from "react";
import { franchiseFormats, roiData } from "@/data/menu";
import Reveal from "@/components/ui/Reveal";

export default function FranchiseSection() {
  const [activeFormat, setActiveFormat] = useState<"express" | "cafe">("cafe");

  const roi = roiData[activeFormat];

  return (
    <section
      id="franchise"
      style={{
        background: "linear-gradient(135deg, #0D0402 0%, #1F0705 50%, #0D0402 100%)",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: "radial-gradient(rgba(232,160,32,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Business Opportunity
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
            Franchise{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Models &amp; ROI
            </span>
          </h2>
          <p style={{ color: "#6a4a2a", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Low investment, high margins, full support — choose the format that fits you and see the numbers for yourself.
          </p>
        </Reveal>

        {/* Format Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "800px", margin: "0 auto 4rem" }} className="format-grid">
          {franchiseFormats.map((f, idx) => {
            const isActive = (activeFormat === "express" ? "Express" : "Café") === f.name;
            return (
              <Reveal key={f.name} delay={idx * 0.1}>
                <div
                  onClick={() => setActiveFormat(f.name === "Express" ? "express" : "cafe")}
                  style={{
                    background: isActive ? "rgba(192,57,43,0.12)" : "rgba(255,255,255,0.04)",
                    border: `2px solid ${isActive ? "#C0392B" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "24px",
                    padding: "32px 28px",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.border = "2px solid rgba(232,160,32,0.4)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.border = "2px solid rgba(255,255,255,0.08)"; }}
                >
                  {f.popular && (
                    <div style={{ position: "absolute", top: "16px", right: "16px", background: "#E8A020", color: "#0D0402", fontSize: "0.65rem", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
                      Recommended
                    </div>
                  )}
                  <div style={{ fontWeight: 800, fontSize: "1.3rem", color: "#fff", marginBottom: "6px" }}>{f.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#8a6040", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>{f.format}</div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: "#F5C518",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {f.investment}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#6a4a2a", marginBottom: "20px" }}>*may vary by area</div>
                  <div style={{ fontSize: "0.82rem", color: "#8a6040", marginBottom: "12px", fontWeight: 700 }}>📐 {f.area}</div>
                  <ul style={{ listStyle: "none" }}>
                    {f.features.map((feat) => (
                      <li key={feat} style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ color: "#27AE60", fontSize: "0.9rem" }}>✓</span>
                        <span style={{ color: "#9a7050", fontSize: "0.85rem" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ROI Table */}
        <Reveal delay={0.1}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 900, color: "#fff" }}>
                📊 Sample ROI — {activeFormat === "express" ? "Express" : "Café"} Format
              </h3>
              <p style={{ color: "#6a4a2a", fontSize: "0.82rem", marginTop: "4px" }}>*Projections may vary by area and location</p>
            </div>

            {[
              { section: "Sales Projections", color: "#C0392B", rows: [
                { label: "Forecasted Daily Sales", val: `₹${roi.dailySales.toLocaleString("en-IN")}` },
                { label: "Monthly Revenue", val: `₹${roi.monthlyRevenue.toLocaleString("en-IN")}` },
                { label: "Gross Margin (70%)", val: `₹${roi.grossMargin.toLocaleString("en-IN")}`, highlight: true },
              ]},
              { section: "Expense Projections", color: "#E67E22", rows: [
                { label: "Rent", val: `₹${roi.expenses.rent.toLocaleString("en-IN")}` },
                { label: "Salary", val: `₹${roi.expenses.salary.toLocaleString("en-IN")}` },
                { label: "Electricity / Gas", val: `₹${roi.expenses.electricity.toLocaleString("en-IN")}` },
                { label: "Miscellaneous", val: `₹${roi.expenses.misc.toLocaleString("en-IN")}` },
                { label: "Total Expenses", val: `₹${roi.expenses.total.toLocaleString("en-IN")}`, bold: true },
              ]},
              { section: "P&L Projections", color: "#27AE60", rows: [
                { label: "Gross Margin", val: `₹${roi.grossMargin.toLocaleString("en-IN")}` },
                { label: "Total Expenses", val: `₹${roi.expenses.total.toLocaleString("en-IN")}` },
                { label: "Monthly Profit", val: `₹${roi.monthlyProfit.toLocaleString("en-IN")}`, highlight: true },
                { label: "Annual Profit", val: `₹${roi.annualProfit.toLocaleString("en-IN")}`, gold: true, bold: true },
              ]},
            ].map(({ section, color, rows }) => (
              <div key={section}>
                <div style={{ background: color, padding: "12px 28px" }}>
                  <span style={{ fontWeight: 800, color: "#fff", fontSize: "0.9rem", letterSpacing: "0.5px" }}>{section}</span>
                </div>
                {rows.map(({ label, val, highlight, gold, bold }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "14px 28px",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      background: gold ? "rgba(232,160,32,0.06)" : "transparent",
                    }}
                  >
                    <span style={{ color: "#9a7050", fontSize: "0.9rem", fontWeight: bold ? 700 : 400 }}>{label}</span>
                    <span style={{ color: gold ? "#F5C518" : highlight ? "#27AE60" : "#c4a882", fontWeight: bold || highlight || gold ? 800 : 600, fontSize: gold ? "1.05rem" : "0.9rem" }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA to application form */}
        <Reveal delay={0.15} style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="#apply"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg,#C0392B,#E67E22)",
              color: "#fff",
              padding: "16px 40px",
              borderRadius: "50px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              fontFamily: "'Baloo 2', sans-serif",
              boxShadow: "0 8px 30px rgba(192,57,43,0.45)",
            }}
          >
            Apply for this Format →
          </a>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .format-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
