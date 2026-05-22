import Link from "next/link";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="font-bold text-lg">C. Sitaula &amp; Associates</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Trusted financial advisors for businesses in Kathmandu, Nepal. Committed
              to accuracy, compliance, and your growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-2 text-sm text-blue-200">
              <li>Kathmandu, Nepal</li>
              <li>+977-XXXXXXXXXX</li>
              <li>info@csitulaassociates.com.np</li>
              <li className="mt-2 text-blue-300">Sun – Fri: 9 AM – 5 PM NPT</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-blue-300 text-sm">
          © {new Date().getFullYear()} C. Sitaula &amp; Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
