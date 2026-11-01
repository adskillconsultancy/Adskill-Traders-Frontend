import Link from "next/link";
import {
  ArrowRight,
  Globe,
  PackageCheck,
  Truck,
  Building2,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";
import TypingAnimation from "@/components/TypingAnimation";
import { services } from "@/lib/services";

const iconMap = {
  Globe,
  PackageCheck,
  Truck,
  Building2,
  TrendingUp,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28 bg-[#f8f9fa]">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #002856 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xs border border-brand-primary/30 text-brand-dark text-xs font-bold tracking-wider uppercase animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              Global Sourcing & Trade Solutions
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
              Connecting Global Markets With <br className="hidden sm:inline" />
              <span className="text-brand-primary relative inline-block">
                <TypingAnimation text="Reliable Trade Networks" delay={200} speed={45} showCursorWhenDone />
                <div className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary opacity-40">
                  <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </div>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
              We specialize in wholesale commodity supply, export-import freight logistics, direct manufacturer procurement, and cross-border commercial trade.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-secondary text-brand-dark font-bold shadow-lg shadow-brand-primary/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Inquire For Trade
                <ArrowRight className="w-4 h-4 text-brand-dark" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-brand-dark font-bold border-2 border-brand-dark/20 shadow-xs transition-all hover:border-brand-dark"
              >
                Our Trade Services
              </Link>
            </div>

            {/* Metrics Grid */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-all">
                <p className="text-3xl font-extrabold text-brand-dark">30+</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">Countries Served</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-all">
                <p className="text-3xl font-extrabold text-brand-primary">100%</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">Verified Suppliers</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-all">
                <p className="text-3xl font-extrabold text-brand-dark">500+</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">Shipments Delivered</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-all">
                <p className="text-3xl font-extrabold text-brand-primary">24/7</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">Trade Desk Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-dark text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              Our Trade Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Comprehensive Global Commerce Solutions
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              From commodity supply chains to custom freight clearing, we provide agile and transparent trade execution worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap] || Globe;

              return (
                <div
                  key={service.id}
                  className="group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-brand-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-dark flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-brand-dark group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    {service.features && (
                      <ul className="space-y-2 pt-2">
                        {service.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-xs font-semibold text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="pt-6">
                    <Link
                      href={service.link || `/services/${service.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="py-20 bg-[#001b3d] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-all">
              <ShieldCheck className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Verified Supplier Vetting</h3>
              <p className="text-sm text-gray-300">
                Every trade partner undergoes strict compliance, financial, and quality assurance inspections before trade execution.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-all">
              <Zap className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Rapid Cargo Turnaround</h3>
              <p className="text-sm text-gray-300">
                Streamlined customs clearing, multi-modal freight booking, and dedicated logistics teams to prevent port delays.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-all">
              <TrendingUp className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Competitive Market Rates</h3>
              <p className="text-sm text-gray-300">
                Bulk commodity purchasing power allows us to offer superior pricing and flexible trade terms to buyers globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
