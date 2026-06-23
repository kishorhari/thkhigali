"use client";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 16px",
  color: "#fff",
  fontFamily: "'Baloo 2',sans-serif",
  fontSize: "0.95rem",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.78rem",
  fontWeight: 700,
  color: "#c4a882",
  marginBottom: "6px",
  letterSpacing: "0.5px",
};

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  occupation: "",
  budget: "",
  message: "",
};

export default function EnquiryForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function set(key: keyof typeof emptyForm, value: string) {
    setFormData((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData(emptyForm);
  }

  return (
    <section
      id="apply"
      style={{
        background: "linear-gradient(135deg, #0D0402 0%, #1F0705 50%, #0D0402 100%)",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: "radial-gradient(rgba(232,160,32,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Take The First Step
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
            Apply For A{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Franchise
            </span>
          </h2>
          <p style={{ color: "#8a6040", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Fill in your details and our franchise team will reach out within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(232,160,32,0.15)",
              borderRadius: "30px",
              padding: "clamp(28px, 5vw, 48px)",
            }}
          >
            {submitted && (
              <div style={{ background: "rgba(39,174,96,0.15)", border: "1px solid rgba(39,174,96,0.4)", borderRadius: "12px", padding: "16px 20px", marginBottom: "24px", color: "#27AE60", fontWeight: 700 }}>
                ✅ Thank you! Our franchise team will contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => set("name", e.target.value)} required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Mobile *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => set("phone", e.target.value)} required style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>Email</label>
                <input type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => set("email", e.target.value)} style={inputStyle} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
                <div>
                  <label style={labelStyle}>Preferred City *</label>
                  <input type="text" placeholder="City" value={formData.city} onChange={(e) => set("city", e.target.value)} required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>State</label>
                  <input type="text" placeholder="State" value={formData.state} onChange={(e) => set("state", e.target.value)} style={inputStyle} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
                <div>
                  <label style={labelStyle}>Occupation</label>
                  <input type="text" placeholder="e.g. Business owner" value={formData.occupation} onChange={(e) => set("occupation", e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Investment Budget</label>
                  <select value={formData.budget} onChange={(e) => set("budget", e.target.value)} style={{ ...inputStyle, background: "#1A0804" }}>
                    <option value="">Select</option>
                    <option>₹8–10 Lacs (Express)</option>
                    <option>₹10–15 Lacs (Café)</option>
                    <option>₹15 Lacs+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell us about your preferred location or any questions..."
                  value={formData.message}
                  onChange={(e) => set("message", e.target.value)}
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical" }}
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
                Submit Application 🚀
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
