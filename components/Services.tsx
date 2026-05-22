import Link from "next/link";
import { FileSearch, BookOpen, Calculator, TrendingUp, Building2 } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Auditing",
    description:
      "Independent and thorough audit services that ensure your financial statements are accurate, compliant, and investor-ready.",
  },
  {
    icon: BookOpen,
    title: "Accounting",
    description:
      "Precise bookkeeping and accounting services to keep your financial records organized and decision-ready at all times.",
  },
  {
    icon: Calculator,
    title: "Taxation",
    description:
      "Expert tax planning, preparation, and filing to minimize liability and keep you fully compliant with Nepal's tax regulations.",
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    description:
      "Strategic financial advice to help your business grow profitably — from cash flow management to investment planning.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    description:
      "Hassle-free company registration, renewals, and compliance filings so your business is always legally up-to-date.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Comprehensive financial and compliance services designed for small and
            medium businesses in Kathmandu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          <div className="bg-primary rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Not sure which service you need?
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Talk to us — we will guide you to the right solution for your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-white text-primary font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors w-fit"
            >
              Get Free Advice →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
