import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | C. Sitaula & Associates",
  description:
    "Audit, accounting, taxation, financial consulting, and business registration services in Kathmandu, Nepal.",
};

export default function ServicesPage() {
  return <Services />;
}
