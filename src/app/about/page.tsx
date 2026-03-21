import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tikhi Gali — Street Style Chinese, Desi Spice",
  description: "Learn about Tikhi Gali — our story, values, and the bold Indo-Chinese QSR brand shaping Noida's street food scene.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0D0402 0%, #2A0A02 50%, #0D0402 100%)",
          paddingTop: "140px",
          paddingBottom: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: "radial-gradient(rgba(232,160,32,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "0 5%" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Who We Are
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            The{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020,#E74C3C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Tikhi Gali
            </span>{" "}
            Story
          </h1>
          <p style={{ color: "#8a6040", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            A vibrant Chinese QSR brand born from India&apos;s love for bold, spicy, flavourful street food.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ background: "#0D0402", padding: "80px 5%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Brand story */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
              marginBottom: "100px",
            }}
            className="about-page-grid"
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(1.8rem,3vw,2.5rem)",
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Indo-Chinese Cuisine,
                <span style={{ color: "#F5C518", display: "block" }}>Reimagined for India.</span>
              </h2>
              <p style={{ color: "#9a7050", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.2rem" }}>
                Tikhi Gali is a vibrant Chinese QSR brand inspired by India&apos;s love for bold, spicy, and flavourful street food. Rooted in the essence of Indo-Chinese cuisine, we bring together the perfect blend of traditional Chinese cooking techniques with desi flavours that suit the Indian palate.
              </p>
              <p style={{ color: "#9a7050", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.2rem" }}>
                From sizzling noodles and flavourful rice bowls to juicy momos and signature street-style specials, every dish at Tikhi Gali is crafted to deliver high taste, quick service, and consistent quality. Our menu is designed to cater to everyday cravings — offering food that is affordable, delicious, and made for repeat consumption.
              </p>
              <p style={{ color: "#9a7050", lineHeight: 1.85, fontSize: "1rem" }}>
                Built on a scalable QSR model, Tikhi Gali focuses on operational efficiency, standardized recipes, and strong unit economics. Whether it&apos;s dine-in, takeaway, or delivery, the brand is designed to perform across formats and locations.
              </p>
            </div>
            <div
              style={{
                background: "radial-gradient(circle at center, #2A0E02 0%, #0D0402 100%)",
                borderRadius: "30px",
                padding: "60px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(232,160,32,0.15)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/logo.png"
                alt="Tikhi Gali"
                width={320}
                height={200}
                style={{ width: "100%", maxWidth: "300px", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Our Promise */}
          <div style={{ marginBottom: "100px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(1.8rem,3vw,2.5rem)",
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                The{" "}
                <span style={{ color: "#F5C518" }}>Tikhi Gali</span> Promise
              </h2>
              <p style={{ color: "#6a4a2a", fontSize: "0.95rem" }}>Clean food. Bold taste. Every time.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="promise-grid">
              {[
                { icon: "🚫", title: "No Added MSG", desc: "Zero MSG across all our dishes — real flavour from real ingredients.", color: "#C0392B" },
                { icon: "🌿", title: "No Palm Oil", desc: "We use healthier oils in every preparation, every day.", color: "#27AE60" },
                { icon: "🎨", title: "No Artificial Flavours", desc: "Every dish gets its flavour from spices, not chemicals.", color: "#E8A020" },
                { icon: "👨‍🍳", title: "Chef-Less Model", desc: "Pre-cooked at our central unit, assembled fresh — consistent every single time.", color: "#E67E22" },
                { icon: "📦", title: "Dedicated Supply Chain", desc: "Centralized warehouse with stringent QA so every outlet delivers the same taste.", color: "#8B1A0E" },
                { icon: "📱", title: "Tech Enabled", desc: "POS software, delivery app integrations, and dashboard for business insights.", color: "#F5C518" },
              ].map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "20px",
                    padding: "28px 24px",
                    borderTop: `3px solid ${v.color}`,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "14px" }}>{v.icon}</span>
                  <h4 style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "8px" }}>{v.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#7a5030", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Store formats */}
          <div style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(1.8rem,3vw,2.5rem)",
                  fontWeight: 900,
                  color: "#fff",
                }}
              >
                Our{" "}
                <span style={{ color: "#F5C518" }}>Store Formats</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "700px", margin: "0 auto" }} className="formats-grid">
              {[
                {
                  name: "Express",
                  emoji: "🏪",
                  desc: "Delivery & Takeaway format. Area: 120–200 sq. ft.",
                  investment: "₹8 Lacs*",
                  color: "#C0392B",
                },
                {
                  name: "Café",
                  emoji: "☕",
                  desc: "Delivery, Takeaway & Dine-In. Area: 200–300 sq. ft.",
                  investment: "₹10 Lacs*",
                  color: "#E8A020",
                  recommended: true,
                },
              ].map((f) => (
                <div
                  key={f.name}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `2px solid ${f.color}44`,
                    borderRadius: "24px",
                    padding: "36px 28px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {f.recommended && (
                    <div style={{ position: "absolute", top: "16px", right: "16px", background: "#E8A020", color: "#0D0402", fontSize: "0.65rem", fontWeight: 800, padding: "4px 12px", borderRadius: "20px" }}>
                      Recommended
                    </div>
                  )}
                  <div style={{ fontSize: "3rem", marginBottom: "12px" }}>{f.emoji}</div>
                  <div style={{ fontWeight: 800, fontSize: "1.3rem", color: "#fff", marginBottom: "8px" }}>{f.name}</div>
                  <div style={{ fontSize: "0.87rem", color: "#8a6040", marginBottom: "16px", lineHeight: 1.5 }}>{f.desc}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 900, color: "#F5C518" }}>{f.investment}</div>
                  <div style={{ fontSize: "0.72rem", color: "#5a3e2a", marginTop: "4px" }}>*may vary by area</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(192,57,43,0.12), rgba(230,126,34,0.08))",
              border: "1px solid rgba(192,57,43,0.2)",
              borderRadius: "30px",
              padding: "60px 40px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
              Ready to be part of the Tikhi Gali family?
            </h3>
            <p style={{ color: "#9a7050", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
              Whether you want to taste our food or own an outlet — we&apos;re just one click away.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/menu"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg,#C0392B,#E67E22)",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontFamily: "'Baloo 2',sans-serif",
                }}
              >
                View Our Menu
              </Link>
              <Link
                href="/#franchise"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "2px solid #E8A020",
                  color: "#E8A020",
                  padding: "12px 32px",
                  borderRadius: "50px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontFamily: "'Baloo 2',sans-serif",
                }}
              >
                Franchise Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-page-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .promise-grid { grid-template-columns: 1fr 1fr !important; }
          .formats-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .promise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
