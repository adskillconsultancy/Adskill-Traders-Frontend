"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Search,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Export Products",
    href: "/products",
    children: [
      { label: "All Export Categories", href: "/products" },
      { label: "Apparel & Clothing", href: "/products/apparel-clothing-export" },
      { label: "Fashion & Fine Jewellery", href: "/products/fashion-jewelry-accessories" },
      { label: "Footwear & Shoes", href: "/products/footwear-leather-export" },
      { label: "Fashion & Lifestyle Goods", href: "/products/lifestyle-fashion-accessories" },
      { label: "BD to USA Trade Solutions", href: "/products/cross-border-trade-logistics" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Global Network", href: "/about/network" },
      { label: "Quality Assurance", href: "/about/quality" },
    ],
  },
  { label: "Sourcing & Trade", href: "/sourcing" },
  { label: "BD-USA Trade Hub", href: "/trade-hub" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  const NavContent = (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src="/adskilltraders.png"
          alt="AdSkill Traders"
          width={240}
          height={60}
          className="h-13 sm:h-14 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center h-full" role="list">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <li key={link.label} className="relative group h-full flex items-center">
              {link.children ? (
                <>
                  <div
                    className={cn(
                      "group/btn flex items-center gap-1.5 px-4 h-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer relative select-none",
                      isActive
                        ? "bg-[#141414] text-white shadow-md z-10 [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),50%_100%,0_calc(100%-12px))] pb-3 pt-3"
                        : "text-gray-800 hover:text-brand-dark hover:bg-[#F3EFE6] hover:[clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),50%_100%,0_calc(100%-12px))] hover:pb-3 hover:pt-3"
                    )}
                    aria-haspopup="true"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={13}
                      className="transition-transform group-hover/btn:rotate-180 opacity-70"
                    />
                  </div>
                  <div className="absolute left-0 top-[calc(100%+2px)] pt-1 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="w-68 p-2 bg-white rounded-xl shadow-xl border border-gray-100 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group/item flex items-center justify-between px-3.5 py-2.5 text-xs font-medium text-gray-700 hover:text-brand-dark hover:bg-brand-primary/10 rounded-lg transition-all"
                        >
                          <span className="group-hover/item:translate-x-1 transition-transform">
                            {child.label}
                          </span>
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity text-brand-primary"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "group/link flex items-center px-4 h-full text-xs font-bold uppercase tracking-wider transition-all duration-200 relative select-none",
                    isActive
                      ? "bg-[#141414] text-white shadow-md z-10 [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),50%_100%,0_calc(100%-12px))] pb-3 pt-3"
                      : "text-gray-800 hover:text-brand-dark hover:bg-[#F3EFE6] hover:[clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),50%_100%,0_calc(100%-12px))] hover:pb-3 hover:pt-3"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* Right Action CTA & Phone */}
      <div className="hidden lg:flex items-center gap-5">
        <a href="tel:+14255407996" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-primary/15 text-brand-dark group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300">
            <Phone size={15} strokeWidth={2.5} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
              SUPPORT
            </span>
            <span className="text-xs font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
              +1 425-540-7996
            </span>
          </div>
        </a>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-dark hover:bg-brand-teal shadow-md shadow-brand-dark/15 hover:shadow-lg transition-all hover:-translate-y-0.5"
        >
          Get Started
          <ArrowRight className="w-4 h-4 text-brand-primary" />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden p-2 text-gray-800 hover:text-brand-primary transition-colors"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );

  return (
    <>
      <header className="relative w-full z-40 bg-white shadow-xs">
        {/* Top Info Bar */}
        <div className="hidden md:block bg-brand-dark text-gray-200 text-xs py-2 px-4 border-b border-white/10">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@adskilltraders.com"
                className="flex items-center gap-1.5 hover:text-brand-primary transition-colors"
              >
                <Mail size={13} className="text-brand-primary" />
                info@adskilltraders.com
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-brand-primary" />
                37-13 74th Street, New York, NY
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Bangladesh to USA Direct Export Corridor: Clothing, Jewellery, Shoes & Fashion
              </span>
            </div>
          </div>
        </div>

        {/* Primary Nav */}
        <nav aria-label="Main Navigation">{NavContent}</nav>

        {/* Mobile Nav Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gray-800"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 py-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-1.5 text-xs text-gray-600 hover:text-brand-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-sm font-semibold text-gray-800 hover:text-brand-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center py-2.5 rounded-lg text-sm font-bold text-white bg-brand-dark hover:bg-brand-teal"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Header on scroll */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md transition-transform duration-300 hidden lg:block",
          isSticky ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav aria-label="Sticky Navigation">{NavContent}</nav>
      </div>
    </>
  );
}
