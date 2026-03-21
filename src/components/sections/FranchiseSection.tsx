"use client";
import { useState } from "react";
import { franchiseFormats, roiData } from "@/data/menu";

export default function FranchiseSection() {
  const [activeFormat, setActiveFormat] = useState<"express" | "cafe">("cafe");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const roi = roiData[activeFormat];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", phone: "", email: "", city: "", budget: "", message: "" });
  }

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
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            Own a{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Tikhi Gali
            </span>{" "}
            Franchise
          </h2>
          <p style={{ color: "#6a4a2a", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Join one of UP&apos;s fastest-growing street food QSR brands. Low investment, high margins, full support — from setup to success.
          </p>
        </div>

        {/* Format Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "800px", margin: "0 auto 4rem" }}>
          {franchiseFormats.map((f) => {
            const isActive = (activeFormat === "express" ? "Express" : "Café") === f.name;
            return (
              <div
                key={f.name}
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
            );
          })}
        </div>

        {/* ROI Table */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "4rem",
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

        {/* Enquiry form */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(232,160,32,0.15)",
            borderRadius: "30px",
            padding: "48px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>
            Franchise Enquiry
          </h3>
          <p style={{ color: "#8a6040", fontSize: "0.9rem", marginBottom: "32px" }}>
            Fill in your details and our team will reach out within 24 hours.
          </p>

          {submitted && (
            <div style={{ background: "rgba(39,174,96,0.15)", border: "1px solid rgba(39,174,96,0.4)", borderRadius: "12px", padding: "16px 20px", marginBottom: "24px", color: "#27AE60", fontWeight: 700 }}>
              ✅ Thank you! We&apos;ll contact you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              {[
                { id: "name", label: "Full Name *", placeholder: "Your name", type: "text" },
                { id: "phone", label: "Mobile *", placeholder: "+91 XXXXX XXXXX", type: "tel" },
              ].map(({ id, label, placeholder, type }) => (
                <div key={id}>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#c4a882", marginBottom: "6px", letterSpacing: "0.5px" }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={formData[id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                    required={label.includes("*")}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      color: "#fff",
                      fontFamily: "'Baloo 2',sans-serif",
                      fontSize: "0.95rem",
                      outline: "none",
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#c4a882", marginBottom: "6px", letterSpacing: "0.5px" }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "12px 16px", color: "#fff", fontFamily: "'Baloo 2',sans-serif", fontSize: "0.95rem", outline: "none" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#c4a882", marginBottom: "6px" }}>City *</label>
                <input
                  type="text"
                  placeholder="Your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "12px 16px", color: "#fff", fontFamily: "'Baloo 2',sans-serif", fontSize: "0.95rem", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#c4a882", marginBottom: "6px" }}>Format Interest</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{ width: "100%", background: "#1A0804", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "12px 16px", color: "#fff", fontFamily: "'Baloo 2',sans-serif", fontSize: "0.95rem", outline: "none" }}
                >
                  <option value="">Select</option>
                  <option>Express (₹8 Lacs)</option>
                  <option>Café (₹10 Lacs)</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#c4a882", marginBottom: "6px" }}>Message</label>
              <textarea
                placeholder="Tell us about your preferred location or any questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "12px 16px", color: "#fff", fontFamily: "'Baloo 2',sans-serif", fontSize: "0.95rem", outline: "none", resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#C0392B,#E67E22)",
                color: "#fff",
                padding: "16px",
                border: "none",
                borderRadius: "14px",
                fontFamily: "'Baloo 2',sans-serif",
                fontSize: "1.05rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 8px 30px rgba(192,57,43,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 50px rgba(192,57,43,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(192,57,43,0.4)";
              }}
            >
              Submit Enquiry 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
