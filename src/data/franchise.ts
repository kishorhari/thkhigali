// Franchise-recruitment content for Tikhi Gali.
// Edit these numbers/quotes to match your real, verified business figures.

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

export const growthStats: Stat[] = [
  { value: 100, suffix: "+", label: "Menu Items" },
  { value: 70, suffix: "%", label: "Gross Margin" },
  { value: 8, prefix: "₹", suffix: "L", label: "Investment From" },
  { value: 4.3, decimals: 1, suffix: "★", label: "Rated Online" },
];

// Operational benefits — the "Chef-Less Model" pillar from the reference site.
export const chefLessModel = [
  {
    icon: "👨‍🍳",
    title: "No Chef Needed",
    desc: "Pre-cooked at our central kitchen and assembled fresh on-site. No skilled chef, no recipe guesswork.",
  },
  {
    icon: "📦",
    title: "Centralised Supply Chain",
    desc: "A single dedicated warehouse supplies every outlet, with stringent quality checks at every step.",
  },
  {
    icon: "⚡",
    title: "Fast & Consistent",
    desc: "Standardised SOPs mean the same taste, the same speed, in every Tikhi Gali — every single time.",
  },
  {
    icon: "💸",
    title: "Lower Running Costs",
    desc: "Lean 2–3 person teams and zero chef salaries keep your monthly expenses low and margins high.",
  },
];

// Franchise support — the four-pillar "Franchise Overview" block.
export const supportPillars = [
  {
    icon: "🚀",
    title: "Pre-Launch Support",
    desc: "Site selection, layout design, licensing guidance and full setup assistance before you open the shutters.",
  },
  {
    icon: "🎓",
    title: "Training Programme",
    desc: "Hands-on staff training on assembly, hygiene, POS and customer service — so you run smoothly from day one.",
  },
  {
    icon: "📣",
    title: "Marketing Support",
    desc: "Launch campaigns, social media creatives and aggregator onboarding (Swiggy, Zomato, Magicpin) handled for you.",
  },
  {
    icon: "📊",
    title: "Tech & Operations",
    desc: "POS software, delivery integrations and a live business dashboard to track sales and stay in control.",
  },
];

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    city: "Noida",
    rating: 5,
    quote:
      "The chef-less model is the real deal. I run my outlet with just two staff and the taste never changes. ROI came faster than I expected.",
  },
  {
    name: "Ankita Verma",
    city: "Ghaziabad",
    rating: 5,
    quote:
      "From site selection to launch day, the Tikhi Gali team handled everything. The central supply chain means I never worry about consistency.",
  },
  {
    name: "Imran Khan",
    city: "Greater Noida",
    rating: 4.5,
    quote:
      "Low investment, strong margins and a menu customers keep coming back for. Best decision I made for my food business.",
  },
];

// Gallery tiles — swap emoji/labels for real outlet & food photos when available.
export const galleryTiles = [
  { emoji: "🥟", label: "Steamed Momos", accent: "#C0392B" },
  { emoji: "🔥", label: "Tandoori Momos", accent: "#E67E22" },
  { emoji: "🍜", label: "Hakka Noodles", accent: "#E8A020" },
  { emoji: "🏪", label: "Express Outlet", accent: "#8B1A0E" },
  { emoji: "🍢", label: "Street Starters", accent: "#27AE60" },
  { emoji: "🍚", label: "Fried Rice", accent: "#C0392B" },
  { emoji: "🧋", label: "Shakes & Mojitos", accent: "#E8A020" },
  { emoji: "🍔", label: "Burgers & Snacks", accent: "#E67E22" },
  { emoji: "☕", label: "Café Format", accent: "#8B1A0E" },
];
