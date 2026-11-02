"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Factory, ShieldCheck, Ship } from "lucide-react";

export default function FlightScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 300vh scroll container matching Galvoria's .animate-container-ship { height: 300vh; }
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll tracking matching Galvoria scrub
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // =========================================================================
  // EXACT PLAYWRIGHT-MEASURED TIMINGS:
  // - Total scroll distance is 2700 - 900 = 1800px.
  // - Cards animate in from p = 0.05 to 0.25 (scroll ~1100-1450px)
  // - Airplane crosses screen from p = 0.20 to 0.60 (scroll ~1380-2100px)
  // - Dark services section reveals from p = 0.48 to 0.65 (scroll ~1950-2250px)
  // - Dark services section stays pinned, visible & fully interactive from p = 0.65 to 1.0!
  // =========================================================================

  // Airplane travels across screen from -96vw to 130vw
  const travelX = useTransform(
    smoothProgress,
    [0, 0.20, 0.60, 1],
    ["-96vw", "-96vw", "130vw", "130vw"]
  );

  // Cards entrance animation (staggered translateY & opacity)
  const card1Y = useTransform(smoothProgress, [0.05, 0.22], ["80%", "0%"]);
  const card1Opacity = useTransform(smoothProgress, [0.05, 0.22], [0, 1]);

  const card2Y = useTransform(smoothProgress, [0.08, 0.26], ["80%", "0%"]);
  const card2Opacity = useTransform(smoothProgress, [0.08, 0.26], [0, 1]);

  const card3Y = useTransform(smoothProgress, [0.12, 0.30], ["80%", "0%"]);
  const card3Opacity = useTransform(smoothProgress, [0.12, 0.30], [0, 1]);

  // Dark service section fade-in matching Galvoria's exact timing
  // Reveals as the plane finishes its journey across the screen
  const darkSectionOpacity = useTransform(
    smoothProgress,
    [0.48, 0.65],
    [0, 1]
  );

  const darkSectionPointer = useTransform(
    smoothProgress,
    (v) => (v > 0.55 ? "auto" : "none")
  );

  // Bangladesh to USA B2B Wholesale Trading & Export Advantages
  const features = [
    {
      icon: Factory,
      title: "Direct BD Factory Sourcing",
      desc: "Direct partnership with certified RMG factories, textile mills, and artisan workshops across Bangladesh without middleman markups.",
    },
    {
      icon: ShieldCheck,
      title: "AQL 2.5 Quality Assurance",
      desc: "Rigorous on-site pre-shipment inspections, material testing, and strict US compliance certifications for garments, jewelry, and shoes.",
    },
    {
      icon: Ship,
      title: "USA Port Clearance & Logistics",
      desc: "Door-to-door ocean & air cargo dispatch from Chittagong & Dhaka straight into major USA distribution ports with full customs handling.",
    },
  ];

  const darkServices = [
    {
      title: "RMG & Apparel Export",
      desc: "Knitwear, denim, activewear, and woven apparel tailored for US retail brands and department chains.",
      img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Fashion & Fine Jewellery",
      desc: "Artisan-crafted brass, gold-plated, and gemstone fashion jewelry with lead and nickel-free certifications.",
      img: "/jewellery-export.jpg",
    },
    {
      title: "Footwear & Leather Goods",
      desc: "Genuine leather shoes, casual sneakers, and handcrafted bags engineered for American retail durability.",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Cross-Border Trade Logistics",
      desc: "FCL/LCL ocean freight, time-critical air shipments, and automated US Customs tariff clearances.",
      img: "/logistics-trade.jpg",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="animate-container-ship relative h-[300vh] w-full bg-[#f3f1ec] overflow-clip"
    >
      {/* Sticky viewport frame pinned at top */}
      <div className="about-services-grouping sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">

        {/* ========================================================================= */}
        {/* LAYER 1: .about-section-home (Light Tan Background & Galvoria Content)    */}
        {/* Contains the white content cards AND the airplane motion rig              */}
        {/* ========================================================================= */}
        <div className="about-section-home absolute inset-0 w-full h-full bg-[#f3f1ec] pt-20 pb-12 lg:pt-24 lg:pb-16 px-6 sm:px-12 lg:px-24 flex flex-col justify-start pointer-events-auto z-0">
          
          {/* Header Row */}
          <div className="max-w-[1440px] w-full mx-auto mb-8 lg:mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-primary uppercase mb-3">
              <span className="text-brand-primary">✦</span>
              THE ADSKILL DIFFERENCE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#191919] tracking-tight max-w-4xl leading-[1.1]">
              Bangladesh to USA Direct Export Hub
            </h2>
            <p className="mt-3.5 text-base text-[#616161] max-w-3xl font-normal leading-relaxed">
              We connect certified Bangladesh apparel mills, jewelry artisans, and footwear manufacturers directly with USA retail chains, distributors, and private brands.
            </p>
          </div>

          {/* Cards + CTA Row: Moved higher up to fill empty space naturally */}
          <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#e5e3dc] hover:bg-brand-dark hover:text-white text-[#141414] text-sm font-semibold transition-all duration-300 mb-2 shrink-0 group"
            >
              <span>More About Us</span>
              <div className="w-6 h-6 rounded-full bg-brand-dark text-white flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 3 Cards positioned comfortably higher */}
            <div className="cards-about flex flex-col sm:flex-row gap-[22px] w-full lg:w-auto">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                const cardY = idx === 0 ? card1Y : idx === 1 ? card2Y : card3Y;
                const cardOpacity = idx === 0 ? card1Opacity : idx === 1 ? card2Opacity : card3Opacity;

                return (
                  <motion.div
                    key={idx}
                    style={{
                      y: cardY,
                      opacity: cardOpacity,
                    }}
                    className="card-about w-full sm:w-[288px] rounded-[13px] bg-white p-[22px] shadow-sm border border-[#e5e3dc] flex flex-col justify-between min-h-[256px]"
                  >
                    <div>
                      {/* Icon container with brand primary gold background */}
                      <div className="w-[72px] h-[72px] rounded-[13px] bg-brand-primary flex items-center justify-center text-white mb-6 shadow-sm">
                        <IconComponent className="w-9 h-9 stroke-[1.75]" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#141414] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs text-[#616161] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* AIRPLANE & BRAND NAVY CURVED RIG (.animate-wrap-grouping)                  */}
          {/* Placed inside .about-section-home at zIndex: 12                            */}
          {/* - Travels from -96vw to 130vw                                             */}
          {/* - .bg-animate: 4800px square, 272px radius, rotated 45deg, left: -5440px */}
          {/* - Uses brand-dark navy #002856 from global colors                         */}
          {/* ========================================================================= */}
          <motion.div
            style={{
              x: travelX,
            }}
            className="animate-wrap-grouping absolute inset-0 pointer-events-none z-12 block"
          >
            <div className="animate-wrap absolute inset-0 w-full h-full flex items-center justify-start pointer-events-none">
              
              {/* .bg-animate: Signature Deep Navy (#002856) */}
              <div
                className="bg-animate absolute pointer-events-none overflow-clip"
                style={{
                  width: "4800px",
                  height: "4800px",
                  borderRadius: "272px",
                  backgroundColor: "#002856",
                  top: "calc(50% - 2400px)",
                  left: "-5440px",
                  transform: "rotate(45deg)",
                  transformOrigin: "2400px 2400px",
                }}
              />

              {/* .animate-img-wrap */}
              <div
                className="animate-img-wrap relative shrink-0 z-10 drop-shadow-2xl"
                style={{
                  width: "512px",
                }}
              >
                <div className="relative w-full aspect-[1176/864]">
                  <Image
                    src="/galvoria-airplane.png"
                    alt="Commercial Cargo Airplane"
                    fill
                    className="animate-img object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* LAYER 2: .service-section-home (Brand Navy Section revealed after airplane)*/}
        {/* Positioned on top (zIndex: 20) with AdSkill Signature Navy Background       */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            opacity: darkSectionOpacity,
            pointerEvents: darkSectionPointer,
          }}
          className="service-section-home absolute inset-0 bg-[#002856] text-white pt-20 pb-12 lg:pt-24 lg:pb-16 px-6 sm:px-12 lg:px-24 flex flex-col justify-start z-20"
        >
          {/* Header */}
          <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-primary uppercase mb-3">
                <span className="text-brand-primary">✦</span>
                WHAT ADSKILL EXPORTS
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-white tracking-tight leading-[1.1]">
                Sourcing Premium Bangladeshi Goods
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white hover:text-brand-dark text-white text-sm font-semibold border border-white/20 transition-all duration-300 w-fit shrink-0 group"
            >
              <span>All Export Lines</span>
              <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center group-hover:bg-brand-dark transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>

          {/* Services Cards Grid */}
          <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {darkServices.map((service, i) => (
              <Link
                key={i}
                href="/products"
                className="group relative flex flex-col justify-between min-h-[360px] p-2 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Card Image Wrap with 12.8px radius */}
                  <div className="img-service relative w-full h-[200px] rounded-[13px] overflow-hidden mb-6 bg-white/5 border border-white/10 shadow-lg">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Title & Desc */}
                  <h3 className="text-2xl sm:text-[28px] font-normal text-white leading-snug mb-2.5 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-blue-100/70 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
