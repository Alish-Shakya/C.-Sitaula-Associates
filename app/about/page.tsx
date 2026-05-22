import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us | C. Sitaula & Associates",
  description:
    "Learn about C. Sitaula & Associates, a trusted financial advisory firm based in Kathmandu, Nepal.",
};

export default function AboutPage() {
  return <About />;
}
