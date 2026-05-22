import type { Metadata } from "next";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "How We Work | C. Sitaula & Associates",
  description:
    "Learn about our simple 3-step process for working with new clients at C. Sitaula & Associates.",
};

export default function ProcessPage() {
  return <Process />;
}
