import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Tikhi Gali | Spicy Street Style Chinese & Momos",
  description:
    "Best street-style spicy Indo-Chinese food experience in Noida. Momos, Noodles, Starters & more at Tikhi Gali — Street Style Chinese, Desi Spice.",
  keywords: "tikhi gali, momos noida, street food noida, chinese food noida, franchise",
  openGraph: {
    title: "Tikhi Gali | Street Style Chinese, Desi Spice",
    description: "Bold flavours, real spice — Noida's favourite street food destination",
    url: "https://tikhigali.com",
    siteName: "Tikhi Gali",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Mea+Culpa&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
