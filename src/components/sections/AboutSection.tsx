"use client";
import Image from "next/image";
import Link from "next/link";
import { brandValues } from "@/data/menu";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(135deg, #0F0503 0%, #1A0804 100%)",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative chilli pattern bg */}
      <div
        style={{
          position: "absolute",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "20rem",
          opacity: 0.02,
          pointerEvents: "none",
        }}
      >
        🌶️
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "80px",
          }}
          className="about-grid"
        >
          {/* Logo visual side */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "radial-gradient(circle at center, #2A0E02 0%, #0D0402 100%)",
                borderRadius: "30px",
                padding: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(232,160,32,0.15)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                minHeight: "380px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at center, rgba(192,57,43,0.1) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/logo.png"
                alt="Tikhi Gali"
                width={320}
                height={160}
                style={{ width: "100%", maxWidth: "320px", height: "auto", objectFit: "contain", position: "relative", zIndex: 1 }}
              />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#C0392B,#E67E22)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 12px 40px rgba(192,57,43,0.5)",
                fontFamily: "'Playfair Display',serif",
              }}
            >
              <span style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>4.3</span>
              <span style={{ fontSize: "1rem" }}>★★★★</span>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "1px", textAlign: "center" }}>RATED</span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Our Story
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "1.2rem",
                lineHeight: 1.15,
              }}
            >
              About{" "}
              <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Tikhi Gali
              </span>
            </h2>
            <p style={{ color: "#9a7050", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Tikhi Gali is a vibrant Chinese QSR brand inspired by India&apos;s love for bold, spicy, and flavourful street food. Rooted in the essence of Indo-Chinese cuisine, we bring together the perfect blend of traditional Chinese cooking techniques with desi flavours that suit the Indian palate.
            </p>
            <p style={{ color: "#9a7050", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              From sizzling noodles and flavourful rice bowls to juicy momos and signature street-style specials — every dish is crafted to deliver high taste, quick service, and consistent quality. Our menu is designed to cater to everyday cravings — affordable, delicious, and made for repeat consumption.
            </p>

            {/* Key facts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2rem" }}>
              {[
                { icon: "🏪", text: "Available in Express & Café formats" },
                { icon: "🤝", text: "Dine-in, Takeaway & Delivery formats" },
                { icon: "📱", text: "Listed on Magicpin, Swiggy & Zomato" },
                { icon: "🌏", text: "Expanding across UP & NCR" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                  }}
                >
                  <span style={{ fontSize: "1.3rem" }}>{icon}</span>
                  <span style={{ color: "#c4a882", fontWeight: 600, fontSize: "0.9rem" }}>{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg,#C0392B,#E67E22)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: 800,
                fontSize: "0.95rem",
                textDecoration: "none",
                fontFamily: "'Baloo 2',sans-serif",
                transition: "all 0.3s",
              }}
            >
              Read Full Story →
            </Link>
          </div>
        </div>

        {/* Brand values grid */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(1.5rem,3vw,2.2rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "0.5rem",
            }}
          >
            What Makes Us{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Different
            </span>
          </h3>
          <p style={{ color: "#6a4a2a", fontSize: "0.95rem" }}>The Tikhi Gali promise — to every plate, every time.</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {brandValues.map((v, i) => (
            <div
              key={v.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "28px 24px",
                transition: "all 0.3s",
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.border = "1px solid rgba(232,160,32,0.3)";
                el.style.transform = "translateY(-4px)";
                el.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.border = "1px solid rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "14px" }}>{v.icon}</span>
              <h4 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", marginBottom: "8px" }}>{v.title}</h4>
              <p style={{ fontSize: "0.87rem", color: "#7a5030", lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
