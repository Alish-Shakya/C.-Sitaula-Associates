const stats = [
  { value: "3+", label: "Years in Practice" },
  { value: "100+", label: "Clients Served" },
  { value: "5", label: "Core Services" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-300 text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
