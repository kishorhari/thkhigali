"use client";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { indianStates, occupations, investmentBudgets, storeLocations } from "@/data/franchise";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#ffffff",
  border: "1px solid rgba(5,8,12,0.16)",
  borderRadius: "12px",
  padding: "13px 16px",
  color: "#05080c",
  fontFamily: "inherit",
  fontSize: "0.95rem",
  outline: "none",
};
const selectStyle: React.CSSProperties = { ...inputStyle, appearance: "auto" };
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "#05080c",
  marginBottom: "7px",
};

const empty = {
  name: "", phone: "", email: "", city: "", state: "",
  occupation: "", budget: "", storeLocation: "", message: "",
};

export default function EnquiryForm() {
  const [data, setData] = useState(empty);
  const [submitted, setSubmitted] = useState(false);

  function set(k: keyof typeof empty, v: string) {
    setData((d) => ({ ...d, [k]: v }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.name || !data.phone || !data.email || !data.city) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setData(empty);
  }

  return (
    <section id="apply" style={{ background: "#ffffff", padding: "110px 5%", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(circle, rgba(231,41,60,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Franchise Opportunity</div>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#05080c",
              marginBottom: "0.8rem",
            }}
          >
            Start your <span className="script">franchise</span> journey today
          </h2>
          <p style={{ color: "#5b5b5b", fontSize: "1rem" }}>
            Fill in the application and our franchise team will reach out within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.1} scale>
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#f5f5f5",
              border: "1px solid rgba(5,8,12,0.08)",
              borderRadius: "28px",
              padding: "clamp(28px, 5vw, 48px)",
              boxShadow: "0 20px 50px rgba(5,8,12,0.06)",
            }}
          >
            {submitted && (
              <div style={{ background: "rgba(231,41,60,0.1)", border: "1px solid rgba(231,41,60,0.4)", borderRadius: "12px", padding: "16px 20px", marginBottom: "22px", color: "#c0182b", fontWeight: 600 }}>
                ✅ Thank you! Our franchise team will contact you within 24 hours.
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="fr">
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input type="text" placeholder="Your name" value={data.name} onChange={(e) => set("name", e.target.value)} required style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Contact Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" value={data.phone} onChange={(e) => set("phone", e.target.value)} required style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="fr">
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" placeholder="you@example.com" value={data.email} onChange={(e) => set("email", e.target.value)} required style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>City *</label>
                <input type="text" placeholder="City" value={data.city} onChange={(e) => set("city", e.target.value)} required style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="fr">
              <div>
                <label style={labelStyle}>State *</label>
                <select value={data.state} onChange={(e) => set("state", e.target.value)} required style={selectStyle}>
                  <option value="">Select a State</option>
                  {indianStates.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Occupation *</label>
                <select value={data.occupation} onChange={(e) => set("occupation", e.target.value)} required style={selectStyle}>
                  <option value="">Select your occupation</option>
                  {occupations.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="fr">
              <div>
                <label style={labelStyle}>Investment Budget *</label>
                <select value={data.budget} onChange={(e) => set("budget", e.target.value)} required style={selectStyle}>
                  <option value="">Select your budget</option>
                  {investmentBudgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Store Location *</label>
                <select value={data.storeLocation} onChange={(e) => set("storeLocation", e.target.value)} required style={selectStyle}>
                  <option value="">Select store location</option>
                  {storeLocations.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="Tell us about your preferred location or any questions..."
                value={data.message}
                onChange={(e) => set("message", e.target.value)}
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                background: "#e7293c",
                color: "#fff",
                padding: "16px",
                border: "none",
                borderRadius: "14px",
                fontFamily: "inherit",
                fontSize: "1.02rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#c0182b";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#e7293c";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Submit Application
            </button>
          </form>
        </Reveal>
      </div>

      <style>{`@media (max-width: 560px) { .fr { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
