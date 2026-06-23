"use client";
import Link from "next/link";
import Image from "next/image";

const tickerItems = [
  "🥟 Steamed Momos",
  "🔥 Fried Momos",
  "🍢 Tandoori Momos",
  "🍜 Hakka Noodles",
  "🥣 Manchurian",
  "🍚 Fried Rice",
  "🧋 Mojitos & Shakes",
  "🌶️ No MSG · No Palm Oil · No Artificial Flavours",
  "🏪 Franchise Available — ₹8 Lacs onwards",
];

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0D0402 0%, #2A0A02 45%, #0D0402 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: "72px",
        }}
      >
        {/* Animated bg orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "0",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: "radial-gradient(rgba(232,160,32,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 5%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(245,197,24,0.1)",
                border: "1px solid rgba(245,197,24,0.3)",
                borderRadius: "50px",
                padding: "6px 18px",
                marginBottom: "1.5rem",
                animation: "fadeInUp 0.5s ease both",
              }}
            >
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#F5C518", letterSpacing: "2px", textTransform: "uppercase" }}>
                🌶️ Franchise Opportunity — ₹8 Lacs Onwards
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#fff",
                marginBottom: "1.2rem",
                animation: "fadeInUp 0.6s ease both",
              }}
            >
              India&apos;s Fastest Growing
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #F5C518, #E8A020, #E74C3C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Indo-Chinese
              </span>
              <span style={{ color: "#E74C3C" }}>QSR Chain.</span>
            </h1>

            <p
              style={{
                color: "#c4a882",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "480px",
                animation: "fadeInUp 0.7s ease both",
              }}
            >
              A centralised supply chain and a proven chef-less model that guarantee fresh, consistent, high-margin food at every Tikhi Gali outlet. Own a franchise and grow with us.
            </p>

            {/* USP tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "2.5rem",
                animation: "fadeInUp 0.8s ease both",
              }}
            >
              {["🚫 No MSG", "🌿 No Palm Oil", "🎨 No Artificial Flavours", "👨‍🍳 Chef-Less Model"].map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#d4c4a0",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    padding: "6px 14px",
                    borderRadius: "20px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", animation: "fadeInUp 0.9s ease both" }}>
              <Link
                href="/#franchise"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg,#C0392B,#E67E22)",
                  color: "#fff",
                  padding: "16px 36px",
                  borderRadius: "50px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(192,57,43,0.5)",
                  transition: "all 0.3s",
                  fontFamily: "'Baloo 2', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 50px rgba(192,57,43,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(192,57,43,0.5)";
                }}
              >
                Apply for Franchise →
              </Link>
              <Link
                href="/menu"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "2px solid #E8A020",
                  color: "#E8A020",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  fontFamily: "'Baloo 2', sans-serif",
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
                Explore Menu 🍜
              </Link>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {[
                { num: "100+", label: "Menu Items" },
                { num: "₹8L", label: "Franchise From" },
                { num: "70%", label: "Gross Margin" },
                { num: "4.3★", label: "Rated Online" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      color: "#F5C518",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ color: "#6a4a2a", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — food visual */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              position: "relative",
            }}
          >
            {/* Central glowing plate */}
            <div
              style={{
                width: "380px",
                height: "380px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #3A1208 0%, #1A0804 60%, #0D0402 100%)",
                border: "3px solid rgba(232,160,32,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10rem",
                boxShadow: "0 0 80px rgba(192,57,43,0.2), 0 0 160px rgba(232,160,32,0.08), 0 40px 100px rgba(0,0,0,0.5)",
                animation: "float 4s ease-in-out infinite",
                position: "relative",
              }}
            >
              🥟
              {/* Orbiting badges */}
              {[
                { emoji: "🔥", top: "5%", right: "0%", label: "Hot" },
                { emoji: "🌶️", bottom: "10%", left: "-5%", label: "Spicy" },
                { emoji: "🍜", top: "35%", right: "-10%", label: "Noodles" },
              ].map(({ emoji, label, ...pos }) => (
                <div
                  key={label}
                  style={{
                    position: "absolute",
                    ...pos,
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(26,8,4,0.9)",
                    border: "2px solid rgba(232,160,32,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>

            {/* Logo below plate */}
            <Image
              src="/logo.png"
              alt="Tikhi Gali"
              width={200}
              height={80}
              style={{ height: "70px", width: "auto", objectFit: "contain", opacity: 0.9 }}
            />
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "#5a3e2a",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            animation: "pulse2 2s ease-in-out infinite",
          }}
        >
          <span>Scroll</span>
          <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, #5a3e2a, transparent)" }} />
        </div>
      </section>

      {/* TICKER */}
      <div
        style={{
          background: "linear-gradient(90deg, #C0392B 0%, #E67E22 50%, #C0392B 100%)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "14px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "ticker 35s linear infinite",
          }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ display: "inline-block", margin: "0 30px" }}>
              <span style={{ fontWeight: 800, fontSize: "0.9rem", color: "#fff", letterSpacing: "0.5px" }}>{item}</span>
              <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 20px" }}>•</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
