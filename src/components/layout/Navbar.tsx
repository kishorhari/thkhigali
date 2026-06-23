"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.35s ease",
          background: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(5,8,12,0.08)" : "1px solid transparent",
          padding: "0 max(5%, 20px)",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Tikhi Gali"
            width={200}
            height={134}
            style={{ height: "62px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden md:flex">
          <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none" }}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    color: "#05080c",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e7293c")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#05080c")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#apply"
            style={{
              background: "#e7293c",
              color: "#fff",
              padding: "11px 24px",
              borderRadius: "50px",
              fontWeight: 600,
              fontSize: "0.92rem",
              textDecoration: "none",
              transition: "all 0.25s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#c0182b";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 30px rgba(231,41,60,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#e7293c";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Apply for Franchise →
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#05080c", cursor: "pointer" }}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          top: "76px",
          left: 0,
          right: 0,
          zIndex: 999,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(5,8,12,0.08)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-120%)",
          transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          padding: "1rem 0",
        }}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              padding: "14px 5%",
              color: "#05080c",
              fontWeight: 500,
              fontSize: "1.05rem",
              textDecoration: "none",
              borderBottom: "1px solid rgba(5,8,12,0.06)",
            }}
          >
            {l.label}
          </Link>
        ))}
        <div style={{ padding: "16px 5% 8px" }}>
          <Link
            href="/#apply"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              background: "#e7293c",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "50px",
              fontWeight: 600,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Apply for Franchise →
          </Link>
        </div>
      </div>
    </>
  );
}
