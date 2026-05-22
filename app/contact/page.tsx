import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | C. Sitaula & Associates",
  description:
    "Book a free consultation with C. Sitaula & Associates. Contact us in Kathmandu, Nepal.",
};

export default function ContactPage() {
  return <Contact />;
}
