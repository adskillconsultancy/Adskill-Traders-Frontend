import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, Award, Building2 } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  division: string;
  bio: string;
  location: string;
  image: string;
  affiliation?: string;
  linkedin?: string;
  email?: string;
  highlights: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Abdullah Al Mamun",
    role: "Managing Director & Trade Lead",
    division: "Executive Leadership & Sourcing",
    affiliation: "Member of Dhaka Chamber of Commerce (DCCI)",
    bio: "Driving bilateral Bangladesh-to-USA export expansion, strategic factory alliances, and ethical trade governance.",
    location: "Dhaka, Bangladesh",
    image: "/founder iamge.png",
    email: "mamun@adskilltraders.com",
    highlights: ["DCCI Member", "Factory Sourcing", "Cross-Border Trade"],
  },
  {
    name: "Mohammad Adil",
    role: "Director of International Operations & Trade",
    division: "Global Supply Chain & Logistics",
    affiliation: "Member of Dhaka Chamber of Commerce (DCCI)",
    bio: "Overseeing end-to-end supply chain integration, port-to-port maritime freight, and USA customs compliance protocols.",
    location: "New York, USA / Dhaka, BD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    email: "adil@adskilltraders.com",
    highlights: ["DCCI Member", "US Port Logistics", "Export Operations"],
  },
  {
    name: "Israt Jahan",
    role: "Lead Consultant",
    division: "Trade Advisory & Client Sourcing Strategy",
    affiliation: "Member of Dhaka Chamber of Commerce (DCCI)",
    bio: "Guiding US retailers and wholesale distributors through direct Bangladesh factory matching, quality frameworks, and private label procurement.",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    email: "israt@adskilltraders.com",
    highlights: ["DCCI Member", "Trade Advisory", "Quality Assurance"],
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
            Leadership & Sourcing Direction
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight leading-tight">
            Our Leadership <span className="text-brand-primary">Team</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
            Proud members of the <span className="font-semibold text-brand-dark">Dhaka Chamber of Commerce & Industry (DCCI)</span>, connecting certified Bangladesh manufacturing powerhouses with United States retail and wholesale enterprises.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-brand-dark flex items-center gap-1 shadow-xs">
                  <Globe className="w-3 h-3 text-brand-primary" />
                  {member.location}
                </div>

                {/* Social Actions Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
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
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-1">
                    {member.division}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-gray-500 mb-3">
                    {member.role}
                  </div>

                  {/* Chamber of Commerce Badge */}
                  {member.affiliation && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-brand-dark text-[11px] font-bold mb-3">
                      <Building2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{member.affiliation}</span>
                    </div>
                  )}

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
                Member of Dhaka Chamber of Commerce & Industry (DCCI)
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Direct factory sourcing with certified compliance, vetted ethical standards, and reliable USA distribution.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-brand-dark text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
            >
              Contact Our Consultants
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
