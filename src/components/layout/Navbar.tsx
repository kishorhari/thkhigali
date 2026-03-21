"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Franchise", href: "/#franchise" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
          transition: "all 0.4s",
          background: scrolled
            ? "rgba(13,4,2,0.97)"
            : "linear-gradient(to bottom, rgba(13,4,2,0.9), transparent)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(232,160,32,0.2)" : "none",
          padding: "0 5%",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Tikhi Gali"
            width={160}
            height={60}
            style={{ height: "52px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.2rem",
            listStyle: "none",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="nav-link"
                style={{
                  color: pathname === l.href ? "#E8A020" : "#f0d9c0",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  letterSpacing: "0.3px",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#franchise"
              style={{
                background: "linear-gradient(135deg,#C0392B,#E67E22)",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "50px",
                fontWeight: 800,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(-2px)";
                (e.target as HTMLElement).style.boxShadow = "0 8px 30px rgba(192,57,43,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(192,57,43,0.4)";
              }}
            >
              Get Franchise 🌶️
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#E8A020", cursor: "pointer" }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          top: "72px",
          left: 0,
          right: 0,
          zIndex: 999,
          background: "rgba(13,4,2,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "2px solid rgba(232,160,32,0.2)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-110%)",
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
              color: "#f0d9c0",
              fontWeight: 700,
              fontSize: "1.05rem",
              textDecoration: "none",
              borderBottom: "1px solid rgba(232,160,32,0.08)",
            }}
          >
            {l.label}
          </Link>
        ))}
        <div style={{ padding: "16px 5% 8px" }}>
          <Link
            href="/#franchise"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              background: "linear-gradient(135deg,#C0392B,#E67E22)",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "50px",
              fontWeight: 800,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Get Franchise 🌶️
          </Link>
        </div>
      </div>
    </>
  );
}
