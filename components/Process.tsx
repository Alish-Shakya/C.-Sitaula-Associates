const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Tell us about your business and what you need. We listen and assess your situation with zero obligation.",
  },
  {
    number: "02",
    title: "Tailored Plan",
    description:
      "We design a service plan that fits your business size, goals, and budget — no one-size-fits-all approach.",
  },
  {
    number: "03",
    title: "Expert Execution",
    description:
      "Our team handles everything end-to-end, keeping you informed at every step and delivering on time.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Getting started is easy. Here is how we work with new clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[calc(100%/6)] right-[calc(100%/6)] h-px bg-blue-200 z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-extrabold mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
