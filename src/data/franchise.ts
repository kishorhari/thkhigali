// Franchise-recruitment content for Tikhi Gali, structured to mirror momostreet.in.
// NOTE: numbers/quotes below are EDITABLE PLACEHOLDERS — replace with your real,
// verified figures before launch.

/* ---- PAN-India network stats (Business Overview) ---- */
export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

export const networkStats: Stat[] = [
  { value: 100, suffix: "+", label: "Outlets across India" },
  { value: 30, suffix: "+", label: "Cities" },
  { value: 12, label: "States" },
];

/* ---- Chef-less model (4 large image cards) ---- */
export const chefLessModel = [
  {
    icon: "🏭",
    title: "Frozen Food Manufacturing",
    desc: "Precision-crafted, hygienic momos and starters — ensuring consistency in every single bite.",
    image: "/food/model-manufacturing.jpg",
  },
  {
    icon: "❄️",
    title: "Cold Chain Distribution",
    desc: "Seamless, temperature-controlled supply — from our central factory straight to your outlet.",
    image: "/food/model-coldchain.jpg",
  },
  {
    icon: "🧑‍🔧",
    title: "No Dependency on Skilled Labour",
    desc: "Run efficiently without relying on specialised chefs. Anyone can operate the kitchen.",
    image: "/food/model-labour.jpg",
  },
  {
    icon: "⚡",
    title: "Plug & Play Operations",
    desc: "Launch quickly with a ready-to-run, fully standardised setup and clear SOPs.",
    image: "/food/model-plugplay.jpg",
  },
];

/* ---- Franchise model (Cart / Retail) ---- */
export const franchiseModel = {
  tag: "Low Investment",
  name: "Express / Cart Model",
  type: "Retail Outlet",
  investment: "₹8 lakh",
  investmentNote: "onwards",
  roi: "8–12 months",
  location: "Commercial areas, college gates, metro exits, market streets",
  features: [
    "Low real-estate dependency",
    "Plug-and-play setup — operational in days",
    "Lean 2–3 person team, no chef required",
    "Delivery-first, high-margin format",
  ],
};

/* ---- Franchise overview pillars (tabs) ---- */
export const franchiseOverview = [
  {
    key: "Pre-Launch Support",
    title: "Pre-Launch Support",
    desc: "We assist you in setting up your outlet end-to-end — from location hunting and interior design to equipment procurement, food-delivery aggregator tie-ups, and point-of-sale system installation.",
  },
  {
    key: "Chef-Less Model",
    title: "Chef-Less Model",
    desc: "Pre-cooked food from our central kitchen and a fully standardised assembly process mean you never depend on a skilled chef — and the taste is identical at every outlet.",
  },
  {
    key: "Training Programme",
    title: "Training Programme",
    desc: "Hands-on training for you and your staff covering assembly, hygiene, billing and customer service, so your outlet runs smoothly from day one.",
  },
  {
    key: "Marketing Support",
    title: "Marketing Support",
    desc: "Launch campaigns, social-media creatives, and onboarding on Swiggy, Zomato and Magicpin — we drive footfall and orders while you focus on operations.",
  },
];

/* ---- Testimonials ---- */
export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rajat Khanna",
    city: "Delhi",
    rating: 5,
    quote:
      "The chef-less model is the real deal. I run my outlet with just two people and the taste never changes. ROI came faster than I expected.",
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad",
    rating: 5,
    quote:
      "From site selection to launch day, the Tikhi Gali team handled everything. The central supply chain means I never worry about consistency.",
  },
  {
    name: "Harsh Patel",
    city: "Mumbai",
    rating: 4.5,
    quote:
      "Low investment, strong margins and a menu customers keep coming back for. Easily the best decision I made for my food business.",
  },
];

/* ---- Trust stats row ---- */
export const trustStats: Stat[] = [
  { value: 85, suffix: "%", label: "High repeat customer rate" },
  { value: 2, suffix: " Cr+", label: "Momos served and counting" },
  { value: 4.5, decimals: 1, suffix: "★", label: "Ratings on delivery aggregators" },
  { value: 95, suffix: "%", label: "Satisfied franchise partners" },
  { value: 1200, suffix: "+", label: "Franchise applications received" },
  { value: 100, suffix: "+", label: "Outlets across India" },
];

/* ---- Gallery (self-hosted, royalty-free food photos) ---- */
export const galleryImages = [
  { src: "/food/momos-assorted.jpg", label: "Signature Momos" },
  { src: "/food/momos-steamer.jpg", label: "Steamed Fresh" },
  { src: "/food/noodles-fried.jpg", label: "Hakka Noodles" },
  { src: "/food/chilli-noodles.jpg", label: "Chilli Garlic" },
  { src: "/food/noodle-soup.jpg", label: "Hot Bowls" },
  { src: "/food/samosa.jpg", label: "Street Starters" },
  { src: "/food/burger.jpg", label: "Burgers & Snacks" },
  { src: "/food/momos-plate.jpg", label: "Tandoori Momos" },
];

/* ---- Form dropdown options ---- */
export const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chandigarh", "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala",
  "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
];

export const occupations = [
  "Food Business Owner", "Retail Shop Owner", "Salaried Professional",
  "Business Owner (Non-Food)", "Student", "Other",
];

export const investmentBudgets = ["5 - 10 lacs", "10 - 20 lacs", "20+ lacs"];

export const storeLocations = ["Owned Shop", "Rented Shop", "Yet to finalise"];
