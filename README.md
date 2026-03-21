# 🌶️ Tikhi Gali — Official Website

**Street Style Chinese, Desi Spice**  
Production-ready Next.js 14 website for [tikhigali.com](https://tikhigali.com)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | **Next.js 14** (App Router, SSR) |
| Styling | **Tailwind CSS** + inline styles |
| Animations | CSS keyframes + Framer Motion ready |
| Language | **TypeScript** |
| Fonts | Playfair Display + Baloo 2 (Google Fonts) |
| Icons | Lucide React |

---

## Project Structure

```
tikhigali/
├── public/
│   └── logo.png                  ← Your Tikhi Gali logo
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Root layout (Navbar + Footer + WhatsApp)
│   │   ├── globals.css           ← Design system, CSS variables
│   │   ├── page.tsx              ← Homepage (all sections assembled)
│   │   ├── menu/
│   │   │   └── page.tsx          ← Full filterable menu page
│   │   └── about/
│   │       └── page.tsx          ← Brand story + values page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        ← Sticky nav + mobile hamburger
│   │   │   └── Footer.tsx        ← Full footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx   ← Hero + ticker marquee
│   │   │   ├── FeaturedMenu.tsx  ← 6 fan favourite cards
│   │   │   ├── AboutSection.tsx  ← Brand story + values
│   │   │   ├── FranchiseSection.tsx ← Formats + ROI + enquiry form
│   │   │   └── ContactSection.tsx   ← Contact cards + map
│   │   └── ui/
│   │       └── WhatsAppFloat.tsx ← Floating WhatsApp button
│   ├── data/
│   │   └── menu.ts               ← ALL menu data (100+ items), franchise data, ROI
│   └── lib/
│       └── utils.ts              ← cn() utility
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Quick Start

### 1. Install dependencies
```bash
npm install
# or
yarn install
```

### 2. Add your logo
Place your logo file at:
```
public/logo.png
```

### 3. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Featured Menu, About, Franchise, Contact |
| `/menu` | Full filterable menu (6 categories, 100+ items, Veg/NonVeg filter, Search) |
| `/about` | Brand story, values, store formats, franchise CTA |

---

## Customizing Content

All content is data-driven. Edit `src/data/menu.ts` to:
- Add/edit/remove menu items and prices
- Update franchise formats and investment amounts
- Change ROI projections
- Edit brand value propositions

---

## Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel --prod
```
Set custom domain: `tikhigali.com` in Vercel dashboard.

### Netlify
```bash
npm run build
# Upload .next folder or connect GitHub repo
```

### Traditional Hosting (cPanel/Hostinger)
```bash
npm run build
# Use Node.js hosting or export as static:
# Add: output: 'export' to next.config.js
npm run build  # generates /out folder
```

---

## Franchise Form Integration

The form currently stores state locally. To receive actual enquiries, integrate one of:

**Option A — EmailJS (free, no backend)**
```bash
npm install emailjs-com
```
Add your EmailJS service ID in `FranchiseSection.tsx`.

**Option B — Formspree**
Replace `handleSubmit` with a POST to `https://formspree.io/f/YOUR_ID`.

**Option C — Next.js API route**
Create `src/app/api/franchise/route.ts` with NodeMailer/SendGrid.

---

## SEO

Meta tags configured in `src/app/layout.tsx`:
- Title: `Tikhi Gali | Spicy Street Style Chinese & Momos`
- Description, keywords, Open Graph all set
- Update `metadataBase` URL to `https://tikhigali.com`

---

## WhatsApp Integration

WhatsApp button links to: `https://wa.me/919540494775`  
Pre-filled message can be edited in `src/components/ui/WhatsAppFloat.tsx`.

---

## Color System

| Variable | Value | Usage |
|----------|-------|-------|
| brand-red | `#C0392B` | Primary CTA, accents |
| brand-red2 | `#E74C3C` | Hover states |
| brand-yellow | `#F5C518` | Prices, highlights |
| brand-gold | `#E8A020` | Section labels |
| brand-orange | `#E67E22` | Gradients |
| brand-dark | `#0D0402` | Page background |

---

**© 2025 Tikhi Gali. Street Style Chinese, Desi Spice.**
