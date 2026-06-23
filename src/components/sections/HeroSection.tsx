"use client";
import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/data/franchise";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "radial-gradient(120% 80% at 75% 0%, rgba(231,41,60,0.10) 0%, transparent 55%), #ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 5%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "3.5rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left — copy */}
        <div>
          <div className="reveal eyebrow" style={{ marginBottom: "1.4rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e7293c", display: "inline-block" }} />
            Franchise Opportunity
          </div>

          <h1
            className="reveal"
            style={{
              animationDelay: "0.08s",
              fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#05080c",
              marginBottom: "1.4rem",
            }}
          >
            India&apos;s Fastest Growing{" "}
            <span className="script">Momos</span> &amp; Chinese Chain
          </h1>

          <p
            className="reveal"
            style={{
              animationDelay: "0.16s",
              color: "#5b5b5b",
              fontSize: "1.12rem",
              lineHeight: 1.65,
              maxWidth: "480px",
              marginBottom: "2.2rem",
            }}
          >
            Centralised supply chain and proven systems that guarantee fresh, hygienic momos at every franchise location.
          </p>

          <div className="reveal" style={{ animationDelay: "0.24s", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/#apply" className="btn-red">
              Apply for Franchise →
            </Link>
            <Link href="/menu" className="btn-ghost">
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Right — hero food image */}
        <div className="reveal reveal--scale hero-visual" style={{ animationDelay: "0.2s", position: "relative" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(5,8,12,0.08)",
              boxShadow: "0 40px 90px rgba(5,8,12,0.18), 0 0 70px rgba(231,41,60,0.12)",
              aspectRatio: "4 / 5",
            }}
            className="floaty"
          >
            <Image
              src="/food/momos-assorted.jpg"
              alt="Assorted Tikhi Gali momos"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-18px",
              left: "-18px",
              background: "#e7293c",
              color: "#fff",
              borderRadius: "18px",
              padding: "16px 22px",
              boxShadow: "0 16px 40px rgba(231,41,60,0.4)",
            }}
          >
            <div style={{ fontSize: "1.6rem", fontWeight: 800, lineHeight: 1 }}>₹8L</div>
            <div style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.92, marginTop: "2px" }}>investment onwards</div>
          </div>
        </div>
      </div>

      {/* Marquee food strip */}
      <div style={{ marginTop: "auto", paddingTop: "48px", overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
        <div style={{ display: "flex", width: "max-content" }} className="marquee-track">
          {[...galleryImages, ...galleryImages].map((g, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: "160px",
                height: "110px",
                borderRadius: "14px",
                overflow: "hidden",
                margin: "0 8px",
                border: "1px solid rgba(5,8,12,0.08)",
                flexShrink: 0,
              }}
            >
              <Image src={g.src} alt={g.label} fill sizes="160px" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-visual { max-width: 420px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  );
}
