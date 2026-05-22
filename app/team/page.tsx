import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Our Team | C. Sitaula & Associates",
  description:
    "Meet the expert team of auditors, accountants, tax consultants, and financial advisors at C. Sitaula & Associates.",
};

export default function TeamPage() {
  return <Team />;
}
