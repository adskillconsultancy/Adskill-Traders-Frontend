"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  ArrowUpRight,
  Shirt,
  Sparkles,
  Footprints,
  Watch,
  Anchor,
  Layers,
  CheckCircle,
  Gem,
  PackageCheck,
  ShieldCheck,
  PlaneTakeoff,
  Factory,
} from "lucide-react";

interface ExportItem {
  id: string;
  name: string;
  category: string;
  spec: string;
  badge: string;
  href: string;
  icon: any;
}

const EXPORT_CATEGORIES = [
  "All Export Lines",
  "Apparel & Knitwear",
  "Jewellery & Gems",
  "Leather & Footwear",
  "Fashion Accessories",
  "Cargo & Customs",
];

const EXPORT_PRODUCTS: ExportItem[] = [
  {
    id: "rmg-knitwear",
    name: "Cotton Knitwear & T-Shirts",
    category: "Apparel & Knitwear",
    spec: "100% Combed Cotton / OEKO-TEX 100",
    badge: "High Demand",
    href: "/products/apparel-clothing-export",
    icon: Shirt,
  },
  {
    id: "denim-jeans",
    name: "Denim Jeans & Heavy Twill",
    category: "Apparel & Knitwear",
    spec: "Rigid & Stretch Denim / Laser Washed",
    badge: "OEM / Private Label",
    href: "/products/apparel-clothing-export",
    icon: Layers,
  },
  {
    id: "gold-jewelry",
    name: "Gold-Plated Artisan Jewellery",
    category: "Jewellery & Gems",
    spec: "18k Micron Plated / Anti-Tarnish",
    badge: "Handcrafted",
    href: "/products/fashion-jewelry-accessories",
    icon: Sparkles,
  },
  {
    id: "gemstone-craft",
    name: "Fine Gemstone & Brass Necklaces",
    category: "Jewellery & Gems",
    spec: "Lead & Nickel Free / Lab Tested",
    badge: "US Boutique Ready",
    href: "/products/fashion-jewelry-accessories",
    icon: Gem,
  },
  {
    id: "leather-shoes",
    name: "Handmade Leather Dress Shoes",
    category: "Leather & Footwear",
    spec: "Full Grain Leather / Goodyear Welted",
    badge: "Export Grade",
    href: "/products/footwear-leather-export",
    icon: Footprints,
  },
  {
    id: "sneakers-casual",
    name: "Vulcanized & Casual Sneakers",
    category: "Leather & Footwear",
    spec: "Eco Rubber Soles / Custom Branding",
    badge: "Volume Supply",
    href: "/products/footwear-leather-export",
    icon: PackageCheck,
  },
  {
    id: "lifestyle-bags",
    name: "Artisan Leather Bags & Totes",
    category: "Fashion Accessories",
    spec: "Vegetable Tanned Leather / Brass Hardware",
    badge: "Designer Line",
    href: "/products/lifestyle-fashion-accessories",
    icon: Watch,
  },
  {
    id: "silk-scarves",
    name: "Handwoven Scarves & Stoles",
    category: "Fashion Accessories",
    spec: "Traditional Muslin & Silk Blends",
    badge: "Heritage Craft",
    href: "/products/lifestyle-fashion-accessories",
    icon: Sparkles,
  },
  {
    id: "fcl-ocean-cargo",
    name: "FCL / LCL Ocean Container Freight",
    category: "Cargo & Customs",
    spec: "Chittagong Port to New York / Savannah",
    badge: "Direct Route",
    href: "/products/cross-border-trade-logistics",
    icon: Anchor,
  },
  {
    id: "air-express-cargo",
    name: "Air Express Dispatch & Clearing",
    category: "Cargo & Customs",
    spec: "Dhaka Airport to JFK / Direct Customs",
    badge: "3-5 Days Transit",
    href: "/products/cross-border-trade-logistics",
    icon: PlaneTakeoff,
  },
  {
    id: "woven-shirts",
    name: "Formal Woven Shirts & Tops",
    category: "Apparel & Knitwear",
    spec: "Poplin, Oxford & Dobby Weaves",
    badge: "WRAPS Certified",
    href: "/products/apparel-clothing-export",
    icon: Shirt,
  },
  {
    id: "quality-audit",
    name: "AQL 2.5 Factory Inspection",
    category: "Cargo & Customs",
    spec: "Pre-Shipment Container Loading Audits",
    badge: "Zero Compromise",
    href: "/products/cross-border-trade-logistics",
    icon: ShieldCheck,
  },
];

export default function ExportSnapshotSection() {
  const [activeTab, setActiveTab] = useState("All Export Lines");

  const filteredProducts =
    activeTab === "All Export Lines"
      ? EXPORT_PRODUCTS
      : EXPORT_PRODUCTS.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-[#f5f8fc] relative overflow-hidden">
      {/* Background Decorative Blur & Grid */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark/70 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              Direct Bangladesh To USA Trade
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight">
              Export <span className="text-brand-primary">Snapshot</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
              A curated snapshot of premium wholesale categories manufactured in Bangladesh, certified to US retail standards, and shipped door-to-door.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-gray-200/80 shadow-xs">
            <Factory className="w-4 h-4 text-brand-primary" />
            <div className="text-xs">
              <span className="font-bold text-brand-dark">40+ Audited Factories</span>
              <span className="text-gray-400 mx-1.5">•</span>
              <span className="text-gray-600">Duty-Efficient US Clearance</span>
            </div>
          </div>
        </div>

        {/* Big White Card Container (Clean Modern Snapshot Panel) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-200/70">
          {/* Card Top Bar: Icon + Export Title + View All Link */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-brand-dark text-white flex items-center justify-center shadow-md">
                <Send className="w-5 h-5 -rotate-12 text-brand-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
                    Export Categories
                  </h3>
                  <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-primary/15 text-brand-dark uppercase tracking-wider">
                    {filteredProducts.length} Active Lines
                  </span>
                </div>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Verified sourcing across Apparel, Jewellery, Footwear & Logistics
                </p>
              </div>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-dark hover:text-brand-primary transition-colors group"
            >
              <span>View All Export Catalog</span>
              <ArrowUpRight className="w-4 h-4 text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-6 pb-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {EXPORT_CATEGORIES.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer select-none ${
                    isSelected
                      ? "bg-brand-dark text-white shadow-md shadow-brand-dark/20 scale-[1.02]"
                      : "bg-[#F5F7FA] text-gray-700 hover:bg-brand-primary/10 hover:text-brand-dark"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid of Clean Product Item Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredProducts.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-brand-primary/15 border border-slate-200/80 group-hover:border-brand-primary/30 flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Icon className="w-4 h-4 text-brand-dark group-hover:text-brand-dark transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors truncate">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                        {item.spec}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="hidden xl:inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-600 group-hover:border-brand-primary/30">
                      {item.badge}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-transparent group-hover:bg-brand-primary/20 flex items-center justify-center text-gray-400 group-hover:text-brand-dark transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Footer Info Strip */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Full compliance with US Consumer Product Safety Commission (CPSC) & FDA standards</span>
            </div>

            <Link
              href="/contact"
              className="font-bold text-brand-dark hover:text-brand-primary transition-colors inline-flex items-center gap-1"
            >
              Request Custom Export Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
