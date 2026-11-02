import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, Award } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  division: string;
  bio: string;
  location: string;
  image: string;
  linkedin?: string;
  email?: string;
  highlights: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mohammad D. Rahman",
    role: "Founder & Chief Executive Officer",
    division: "Executive Leadership & Sourcing Direction",
    bio: "Pioneering direct trade corridors between Bangladesh manufacturers and US retail enterprises with 15+ years of cross-border trade experience.",
    location: "New York, USA / Dhaka, BD",
    image: "/founder iamge.png",
    linkedin: "https://linkedin.com",
    email: "info@adskilltraders.com",
    highlights: ["Global Trade Strategy", "Factory Network Expansion", "US Compliance"],
  },
  {
    name: "Tariqul Islam",
    role: "Head of BD Factory Operations",
    division: "Apparel & RMG Manufacturing",
    bio: "Leads technical audits, inline QA oversight, and production scheduling across 40+ certified garment and knitwear manufacturing hubs in Dhaka & Chittagong.",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "operations@adskilltraders.com",
    highlights: ["AQL 2.5 Quality Inspection", "WRAP & SEDEX Audits", "Production Timelines"],
  },
  {
    name: "Elena Vance",
    role: "VP of US Supply Chain & Customs",
    division: "North America Port Logistics",
    bio: "Coordinates maritime container shipments, air freight charters, bonded warehousing, and seamless CBP port clearances through New York and Savannah.",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "logistics@adskilltraders.com",
    highlights: ["CBP Customs Brokerage", "Port-to-Door Delivery", "Tariff Compliance"],
  },
  {
    name: "Farhana Chowdhury",
    role: "Lead Jewelry & Fashion Goods Sourcing",
    division: "Artisan Craft & Fine Jewelry",
    bio: "Specializes in gold, silver, gemstone jewelry prototyping, and leather craft sourcing, turning US buyer mood boards into export-grade collections.",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "sourcing@adskilltraders.com",
    highlights: ["Bespoke Jewelry Prototyping", "Material Purity Testing", "Artisan Partnerships"],
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="team">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            Leadership & Sourcing Team
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight leading-tight">
            The Experts Driving Your <br className="hidden sm:inline" />
            <span className="text-brand-primary">Cross-Border Trade Success</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
            Bridging Bangladesh’s world-class manufacturing powerhouses with United States retail, wholesale, and direct-to-consumer enterprises through uncompromising quality and boots-on-the-ground execution.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group relative bg-[#FBFBFA] rounded-2xl border border-gray-100 hover:border-brand-primary/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
            >
              {/* Member Image Header */}
              <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-brand-dark flex items-center gap-1 shadow-xs">
                  <Globe className="w-3 h-3 text-brand-primary" />
                  {member.location}
                </div>

                {/* Social Actions Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="w-8 h-8 rounded-full bg-white text-brand-dark hover:bg-brand-primary hover:text-brand-dark flex items-center justify-center shadow-md transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-8 h-8 rounded-full bg-white text-brand-dark hover:bg-brand-primary hover:text-brand-dark flex items-center justify-center shadow-md transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Member Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-1">
                    {member.division}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-gray-500 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                {/* Highlights / Specializations */}
                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Core Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-700"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verification & Confidence Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#001833] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-lg">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Want to meet our sourcing specialists directly?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Book a consultation with our Dhaka factory inspection leads or our New York trade logistics desk.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-brand-dark text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
