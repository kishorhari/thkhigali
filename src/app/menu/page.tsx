"use client";
import { useState } from "react";
import Image from "next/image";
import { menuData, itemImage, type MenuItem } from "@/data/menu";

const categories = [
  { id: "momos", label: "🥟 Momos" },
  { id: "starters", label: "🍢 Starters" },
  { id: "mains", label: "🍜 Main Course" },
  { id: "noodles", label: "🍝 Noodles & Rice" },
  { id: "snacks", label: "🍔 Snacks & More" },
  { id: "beverages", label: "🧋 Beverages" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

type FilterType = "all" | "veg" | "nonveg";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("momos");
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");

  const catData = menuData[activeCategory];

  return (
    <>
      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)",
          paddingTop: "120px",
          paddingBottom: "60px",
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
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: "#e7293c", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            What We Serve
          </div>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              fontWeight: 900,
              color: "#05080c",
              marginBottom: "1rem",
            }}
          >
            Our{" "}
            <span style={{ background: "linear-gradient(135deg,#e7293c,#e7293c,#e7293c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Full Menu
            </span>
          </h1>
          <p style={{ color: "#5b5b5b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            100+ dishes crafted with bold Indo-Chinese flavours, zero MSG, zero palm oil.
          </p>

          {/* Search */}
          <div style={{ maxWidth: "420px", margin: "0 auto", position: "relative" }}>
            <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "1.1rem" }}>🔍</span>
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(5,8,12,0.07)",
                border: "1px solid rgba(5,8,12,0.16)",
                borderRadius: "50px",
                padding: "14px 20px 14px 44px",
                color: "#05080c",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* Sticky category tabs */}
      <div
        style={{
          position: "sticky",
          top: "76px",
          zIndex: 100,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(5,8,12,0.08)",
          overflowX: "auto",
        }}
      >
        <div style={{ display: "flex", gap: "0", maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "18px 24px",
                border: "none",
                background: "none",
                color: activeCategory === cat.id ? "#e7293c" : "#5b5b5b",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                borderBottom: `3px solid ${activeCategory === cat.id ? "#e7293c" : "transparent"}`,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Veg/NonVeg filter */}
      <div
        style={{
          background: "#ffffff",
          padding: "24px 5%",
          borderBottom: "1px solid #05080c",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ color: "#5b5b5b", fontSize: "0.85rem", fontWeight: 700 }}>Filter:</span>
          {(["all", "veg", "nonveg"] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "7px 20px",
                borderRadius: "50px",
                border: `1px solid ${filter === f ? (f === "veg" ? "#27AE60" : f === "nonveg" ? "#e7293c" : "#e7293c") : "rgba(5,8,12,0.14)"}`,
                background: filter === f ? (f === "veg" ? "rgba(39,174,96,0.15)" : f === "nonveg" ? "rgba(192,57,43,0.15)" : "rgba(232,160,32,0.15)") : "transparent",
                color: filter === f ? (f === "veg" ? "#27AE60" : f === "nonveg" ? "#e7293c" : "#e7293c") : "#5b5b5b",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "0.82rem",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {f === "veg" && <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27AE60", display: "inline-block" }} />}
              {f === "nonveg" && <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#e7293c", display: "inline-block" }} />}
              {f === "all" ? "All Items" : f === "veg" ? "Veg Only" : "Non-Veg Only"}
            </button>
          ))}
        </div>
      </div>

      {/* Menu content */}
      <div style={{ background: "#ffffff", minHeight: "60vh", padding: "48px 5% 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {catData.subcategories.map((sub) => {
            const items = sub.items.filter((item: MenuItem) => {
              const matchFilter = filter === "all" || (filter === "veg" && item.veg) || (filter === "nonveg" && !item.veg);
              const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase());
              return matchFilter && matchSearch;
            });
            if (items.length === 0) return null;

            return (
              <div key={sub.id} style={{ marginBottom: "56px" }}>
                {/* Subcategory header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid #f5f5f5",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "32px",
                      borderRadius: "3px",
                      background: sub.color,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: "#05080c",
                    }}
                  >
                    {sub.label}
                  </h3>
                  <div
                    style={{
                      background: `${sub.color}22`,
                      border: `1px solid ${sub.color}44`,
                      borderRadius: "20px",
                      padding: "3px 12px",
                      color: sub.color,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                    }}
                  >
                    {items.length} items
                  </div>
                </div>

                {/* Items grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(5,8,12,0.08)",
                        borderRadius: "16px",
                        padding: "18px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${sub.color}55`;
                        e.currentTarget.style.background = "#f5f5f5";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(5,8,12,0.08)";
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div style={{ display: "flex", gap: "14px", alignItems: "center", flex: 1 }}>
                        {/* Dish thumbnail */}
                        <div
                          style={{
                            position: "relative",
                            width: "60px",
                            height: "60px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            flexShrink: 0,
                            border: "1px solid rgba(5,8,12,0.08)",
                          }}
                        >
                          <Image
                            src={itemImage(item.name, sub.id)}
                            alt={item.name}
                            fill
                            sizes="60px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        {/* Veg/NonVeg indicator */}
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            border: `2px solid ${item.veg ? "#27AE60" : "#e7293c"}`,
                            borderRadius: "4px",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: item.veg ? "#27AE60" : "#e7293c",
                            }}
                          />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: "#484848", fontSize: "0.92rem", lineHeight: 1.3 }}>{item.name}</div>
                          {"qty" in item && item.qty && (
                            <div style={{ fontSize: "0.72rem", color: "#5b5b5b", marginTop: "2px" }}>{item.qty as string}</div>
                          )}
                          {"badge" in item && item.badge && (
                            <span style={{ fontSize: "0.65rem", background: "#e7293c", color: "#fff", padding: "2px 8px", borderRadius: "10px", fontWeight: 700, marginTop: "4px", display: "inline-block" }}>
                              {item.badge as string}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "1.15rem",
                          fontWeight: 900,
                          color: "#e7293c",
                          flexShrink: 0,
                        }}
                      >
                        ₹{item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}