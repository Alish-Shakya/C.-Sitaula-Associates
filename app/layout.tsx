import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C. Sitaula & Associates | Auditing & Financial Consulting Kathmandu",
  description:
    "Trusted auditing, accounting, taxation, financial consulting, and business registration services in Kathmandu, Nepal. Book a free consultation today.",
  keywords: [
    "audit firm Kathmandu",
    "accounting Nepal",
    "tax consultant Kathmandu",
    "business registration Nepal",
    "financial consulting Kathmandu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
