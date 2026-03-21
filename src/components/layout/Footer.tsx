"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = ["Home", "About Us", "Menu", "Franchise", "Contact"];
const menuHighlights = ["Steamed Momos", "Fried Momos", "Tandoori Momos", "Chowmein", "Manchurian", "Shakes"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050100",
        borderTop: "1px solid rgba(232,160,32,0.15)",
      }}
    >
      {/* Chilli wave border */}
      <div
        style={{
          height: "24px",
          background: "linear-gradient(90deg,#C0392B,#E67E22,#C0392B)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "12px",
            background: "#050100",
            clipPath: "polygon(0 100%, 2% 0, 4% 100%, 6% 0, 8% 100%, 10% 0, 12% 100%, 14% 0, 16% 100%, 18% 0, 20% 100%, 22% 0, 24% 100%, 26% 0, 28% 100%, 30% 0, 32% 100%, 34% 0, 36% 100%, 38% 0, 40% 100%, 42% 0, 44% 100%, 46% 0, 48% 100%, 50% 0, 52% 100%, 54% 0, 56% 100%, 58% 0, 60% 100%, 62% 0, 64% 100%, 66% 0, 68% 100%, 70% 0, 72% 100%, 74% 0, 76% 100%, 78% 0, 80% 100%, 82% 0, 84% 100%, 86% 0, 88% 100%, 90% 0, 92% 100%, 94% 0, 96% 100%, 98% 0, 100% 100%)",
          }}
        />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 5% 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="grid-cols-1 md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Tikhi Gali"
              width={160}
              height={60}
              style={{ height: "56px", width: "auto", objectFit: "contain", marginBottom: "16px" }}
            />
            <p style={{ color: "#6a4a2a", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "20px" }}>
              Noida&apos;s favourite street-style Indo-Chinese destination. Bold flavours, real spice, genuine smiles.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["f", "ig", "yt", "wa"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "1px solid rgba(232,160,32,0.25)",
                    color: "#E8A020",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#E8A020";
                    el.style.color = "#0D0402";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "transparent";
                    el.style.color = "#E8A020";
                  }}
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ fontWeight: 800, fontSize: "0.85rem", color: "#c4a882", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link
                    href={l === "Home" ? "/" : l === "Menu" ? "/menu" : l === "About Us" ? "/about" : `/#${l.toLowerCase()}`}
                    style={{ color: "#5a3e2a", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E8A020")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5a3e2a")}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h5 style={{ fontWeight: 800, fontSize: "0.85rem", color: "#c4a882", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
              Our Menu
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {menuHighlights.map((l) => (
                <li key={l}>
                  <Link
                    href="/menu"
                    style={{ color: "#5a3e2a", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E8A020")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5a3e2a")}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontWeight: 800, fontSize: "0.85rem", color: "#c4a882", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
              Contact
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "📍", val: "H30, Sector 22, Noida – 201301" },
                { icon: "📞", val: "+91 9540494775", href: "tel:+919540494775" },
                { icon: "✉️", val: "info@tikhigali.com", href: "mailto:info@tikhigali.com" },
                { icon: "🕐", val: "11 AM – 11 PM, Daily" },
              ].map(({ icon, val, href }) => (
                <div key={val} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.9rem" }}>{icon}</span>
                  {href ? (
                    <a href={href} style={{ color: "#5a3e2a", fontSize: "0.85rem", textDecoration: "none" }}>
                      {val}
                    </a>
                  ) : (
                    <span style={{ color: "#5a3e2a", fontSize: "0.85rem" }}>{val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "24px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ color: "#3a2010", fontSize: "0.82rem" }}>
            © 2025 Tikhi Gali. All rights reserved. | Street Style Chinese, Desi Spice.
          </span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" style={{ color: "#3a2010", fontSize: "0.82rem", textDecoration: "none" }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
