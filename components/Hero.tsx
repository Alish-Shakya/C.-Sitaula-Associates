import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-white -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full -z-10" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Kathmandu-Based Financial Experts
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Trusted Financial Advisors for{" "}
            <span className="text-accent">Kathmandu Businesses</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            From auditing and taxation to business registration and financial consulting —
            we handle the numbers so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-base"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors text-base"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <Link
        href="/services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce"
        aria-label="View our services"
      >
        <ChevronDown size={28} />
      </Link>
    </section>
  );
}
