"use client";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #0F0503 0%, #1A0804 100%)",
        padding: "100px 5%",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: "#C0392B", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Find Us
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
            Get In{" "}
            <span style={{ background: "linear-gradient(135deg,#F5C518,#E8A020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Touch
            </span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: "📍", label: "Address", val: "H30, Sector 22, Noida\nUttar Pradesh – 201301", href: null },
              { icon: "📞", label: "Phone", val: "+91 9540494775", href: "tel:+919540494775" },
              { icon: "✉️", label: "Email", val: "info@tikhigali.com", href: "mailto:info@tikhigali.com" },
              { icon: "🌐", label: "Website", val: "tikhigali.com", href: "https://tikhigali.com" },
              { icon: "🕐", label: "Timings", val: "Monday – Sunday\n11:00 AM – 11:00 PM", href: null },
            ].map(({ icon, label, val, href }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  borderTop: "3px solid #E8A020",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.borderColor = "#C0392B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderColor = "#E8A020";
                }}
              >
                <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#C0392B", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ color: "#c4a882", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", whiteSpace: "pre-line" }}
                    >
                      {val}
                    </a>
                  ) : (
                    <div style={{ color: "#c4a882", fontWeight: 700, fontSize: "0.95rem", whiteSpace: "pre-line" }}>{val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "2px solid rgba(232,160,32,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              height: "460px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5388219!2d77.3410!3d28.5725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f12c2ed63b%3A0x6b3b1bc3b4b0b!2sSector%2022%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tikhi Gali Location"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
