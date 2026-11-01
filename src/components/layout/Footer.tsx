"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

function IconGithub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconTwitterX({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/adskilltraders-white.svg"
                alt="AdSkill Traders"
                width={220}
                height={50}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              Delivering high-reliability global trade management, international commodity trading, and supply chain solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all text-white"
                aria-label="Github"
              >
                <IconGithub size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all text-white"
                aria-label="Twitter"
              >
                <IconTwitterX size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all text-white"
                aria-label="LinkedIn"
              >
                <IconLinkedIn size={16} />
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/global-import-export"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Global Import & Export
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bulk-commodity-trading"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Bulk Commodity Trading
                </Link>
              </li>
              <li>
                <Link
                  href="/services/supply-chain-logistics"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Supply Chain & Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wholesale-product-sourcing"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Wholesale Product Sourcing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trade-finance-consultancy"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Trade Finance & Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Our Engineering Team
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-primary hover:translate-x-1 transition-all inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-brand-primary w-5 h-5 shrink-0 mt-0.5" />
                <span>37-13 74th Street, Floor 2<br />Jackson Heights, NY 11372</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-primary w-5 h-5 shrink-0" />
                <a
                  href="mailto:info@adskilltraders.com"
                  className="hover:text-brand-primary transition-colors"
                >
                  info@adskilltraders.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-primary w-5 h-5 shrink-0" />
                <a href="tel:+14255407996" className="hover:text-brand-primary transition-colors">
                  +1 425-540-7996
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} AdSkill Traders Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
