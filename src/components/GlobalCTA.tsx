import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GlobalCTA() {
  return (
    <section className="relative overflow-hidden py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-linear-to-r from-brand-dark via-brand-teal to-brand-dark px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl overflow-hidden border border-white/10">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-primary/30 text-brand-primary text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Build With AdSkill Technology
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Accelerate Your <br className="hidden sm:inline" />
              <span className="text-brand-primary">Digital Transformation?</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Partner with our elite engineering team to build scalable software, AI workflows, and modern cloud systems.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-secondary text-brand-dark font-bold shadow-lg shadow-brand-primary/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 text-brand-dark" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
