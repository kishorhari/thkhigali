"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { franchiseOverview } from "@/data/franchise";
import Reveal from "@/components/ui/Reveal";

export default function SupportPillars() {
  const [active, setActive] = useState(0);
  const current = franchiseOverview[active];

  return (
    <section style={{ background: "#ffffff", padding: "110px 5%", position: "relative" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Franchise Overview</div>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#05080c",
            }}
          >
            What makes a Tikhi Gali franchise <span className="script">unique?</span>
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "2.5rem" }}>
          {franchiseOverview.map((p, i) => (
            <button
              key={p.key}
              onClick={() => setActive(i)}
              style={{
                padding: "11px 22px",
                borderRadius: "50px",
                border: `1px solid ${active === i ? "#e7293c" : "rgba(5,8,12,0.15)"}`,
                background: active === i ? "#e7293c" : "transparent",
                color: active === i ? "#fff" : "#5b5b5b",
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.25s",
              }}
            >
              {p.title}
            </button>
          ))}
        </Reveal>

        {/* Panel */}
        <Reveal delay={0.15}>
          <div
            style={{
              background: "#f5f5f5",
              border: "1px solid rgba(5,8,12,0.08)",
              borderRadius: "28px",
              padding: "clamp(32px, 5vw, 56px)",
              minHeight: "200px",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ fontSize: "0.8rem", color: "#e7293c", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>
                  0{active + 1} / 0{franchiseOverview.length}
                </div>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#05080c", marginBottom: "16px" }}>
                  {current.title}
                </h3>
                <p style={{ fontSize: "1.05rem", color: "#5b5b5b", lineHeight: 1.7, maxWidth: "720px" }}>
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
