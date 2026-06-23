"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PHONE = "+91 95404 94775";
const EMAIL = "info@tikhigali.com";
const ADDRESS = "Office No 1205, 12th Floor, Supernova Astralis, Sector 94, Noida, Uttar Pradesh – 201313";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Franchise", href: "/#franchise" },
  { label: "Apply Now", href: "/#apply" },
];

const menuLinks = ["Steamed Momos", "Tandoori Momos", "Hakka Noodles", "Manchurian", "Burgers", "Shakes"];

function CopyChip({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }
  return (
    <button
      onClick={copy}
      style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px",
        background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, fontFamily: "inherit",
      }}
      title="Click to copy"
    >
      <span style={{ fontSize: "0.72rem", color: "#8a8a8e", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>{label}</span>
      <span style={{ color: "#05080c", fontWeight: 600, fontSize: "1.02rem", display: "flex", alignItems: "center", gap: "8px" }}>
        {value}
        <span style={{ fontSize: "0.72rem", color: copied ? "#e7293c" : "#aaa9ad", fontWeight: 600 }}>{copied ? "Copied!" : "Copy"}</span>
      </span>
    </button>
  );
}

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#ffffff", borderTop: "1px solid rgba(5,8,12,0.08)" }}>
      {/* thin red accent */}
      <div style={{ height: "4px", background: "#e7293c" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 5% 36px" }}>
        {/* Contact band */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "32px",
            alignItems: "center",
            paddingBottom: "44px",
            borderBottom: "1px solid rgba(5,8,12,0.08)",
          }}
          className="foot-top"
        >
          <div>
            <h3 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#05080c", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "10px" }}>
              Get in <span className="script">touch</span>
            </h3>
            <p style={{ color: "#5b5b5b", fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "440px" }}>
              Questions about a franchise or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <CopyChip label="Phone" value={PHONE} />
            <CopyChip label="Email" value={EMAIL} />
          </div>
        </div>

        {/* Link grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.3fr", gap: "40px", padding: "44px 0 36px" }}
          className="foot-grid"
        >
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="Tikhi Gali" width={240} height={160} style={{ height: "78px", width: "auto", objectFit: "contain", marginBottom: "16px" }} />
            <p style={{ color: "#5b5b5b", fontSize: "0.92rem", lineHeight: 1.65, maxWidth: "300px", marginBottom: "18px" }}>
              India&apos;s fastest growing momos &amp; Indo-Chinese QSR chain. Bold flavours, proven systems, real margins.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "1px solid rgba(5,8,12,0.15)", borderRadius: "50px", padding: "9px 18px",
                color: "#05080c", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e7293c"; e.currentTarget.style.color = "#e7293c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(5,8,12,0.15)"; e.currentTarget.style.color = "#05080c"; }}
            >
              Instagram ↗
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h5 style={{ fontWeight: 700, fontSize: "0.78rem", color: "#8a8a8e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Quick Links</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ color: "#5b5b5b", fontSize: "0.92rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e7293c")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5b5b5b")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu highlights */}
          <div>
            <h5 style={{ fontWeight: 700, fontSize: "0.78rem", color: "#8a8a8e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Our Menu</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
              {menuLinks.map((l) => (
                <li key={l}>
                  <Link href="/menu" style={{ color: "#5b5b5b", fontSize: "0.92rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e7293c")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5b5b5b")}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h5 style={{ fontWeight: 700, fontSize: "0.78rem", color: "#8a8a8e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Visit / Corporate Office</h5>
            <p style={{ color: "#5b5b5b", fontSize: "0.92rem", lineHeight: 1.7 }}>{ADDRESS}</p>
            <p style={{ color: "#5b5b5b", fontSize: "0.92rem", marginTop: "10px" }}>Open daily · 11:00 AM – 11:00 PM</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingTop: "24px", borderTop: "1px solid rgba(5,8,12,0.06)", flexWrap: "wrap", gap: "12px",
          }}
        >
          <span style={{ color: "#8a8a8e", fontSize: "0.82rem" }}>© 2026 Tikhi Gali. All rights reserved.</span>
          <Link href="#" style={{ color: "#8a8a8e", fontSize: "0.82rem", textDecoration: "none" }}>Privacy Policy</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .foot-top { grid-template-columns: 1fr !important; gap: 24px !important; }
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 460px) {
          .foot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
