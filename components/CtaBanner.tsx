import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Join 100+ Kathmandu businesses that trust C. Sitaula &amp; Associates to keep
          their finances accurate and compliant.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-base"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
