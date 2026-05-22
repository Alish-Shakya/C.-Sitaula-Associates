"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/contact";
import { cn } from "@/lib/utils";

const services = [
  "Auditing",
  "Accounting",
  "Taxation",
  "Financial Consulting",
  "Business Registration",
  "Other",
];

const contactInfo = [
  { Icon: MapPin, label: "Address", value: "Kathmandu, Nepal" },
  { Icon: Phone, label: "Phone", value: "+977-XXXXXXXXXX" },
  { Icon: Mail, label: "Email", value: "info@csitulaassociates.com.np" },
];

const inputClass = (hasError: boolean) =>
  cn(
    "w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors bg-white",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-gray-200 focus:border-accent"
  );

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;

        throw new Error(result?.message || "Unable to send your message.");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Book a Free Consultation
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tell us about your business. We will get back to you within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-primary rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 mb-5">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs mb-0.5">{label}</p>
                    <p className="font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-blue-200 text-sm">
                  Office hours: Sunday – Friday, 9 AM – 5 PM NPT
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle2 size={56} className="text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6 max-w-sm">
                  Thank you for reaching out. We will contact you within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {submitError ? (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </div>
                ) : null}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Ram Prasad Sharma"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="+977-98XXXXXXXX"
                      className={inputClass(!!errors.phone)}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass(!!errors.email)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className={inputClass(!!errors.service)}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us a bit about your business and what you need help with..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent text-sm outline-none transition-colors resize-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-accent text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
