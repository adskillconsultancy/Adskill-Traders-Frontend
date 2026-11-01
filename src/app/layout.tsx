import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalCTA from "@/components/GlobalCTA";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AdSkill Traders — Global Trading, Sourcing & Commodity Solutions",
    template: "%s | AdSkill Traders",
  },
  description:
    "Empowering global trade, export-import logistics, wholesale commodity supply, and high-efficiency market sourcing.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased overflow-x-clip`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-clip bg-white text-gray-900 selection:bg-brand-primary/20 selection:text-brand-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <GlobalCTA />
        <Footer />
      </body>
    </html>
  );
}
