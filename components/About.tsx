import Link from "next/link";
import { ShieldCheck, Users, Target } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Compliance first",
    description:
      "We ensure every filing and report meets Nepal's regulatory standards — no shortcuts.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description:
      "We treat every client — small or large — with the same dedication, transparency, and care.",
  },
  {
    icon: Target,
    title: "Growth-Focused",
    description:
      "We go beyond compliance to help your business make smarter and more profitable financial decisions.",
  },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              A Kathmandu Firm Built on Trust
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              C. Sitaula &amp; Associates is a proprietorship firm based in Kathmandu,
              Nepal. Founded with a commitment to delivering accurate, transparent, and
              timely financial services, we partner with local businesses to keep their
              finances healthy and compliant.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you are a startup registering your first business or an established
              enterprise needing a reliable audit partner, we bring the same level of
              professionalism and personal attention to every engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Work With Us
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-blue-100"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
