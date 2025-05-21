const reasons = [
  {
    icon: "✅",
    title: "Licensed & Insured",
    description:
      "Fully certified professionals delivering safe, code-compliant work.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description: "No surprises. Just clear, upfront quotes and honest service.",
  },
  {
    icon: "⚡",
    title: "Fast Response",
    description:
      "Emergency or not, we’re quick to respond and solve the problem.",
  },
  {
    icon: "🏡",
    title: "Locally Owned",
    description:
      "Proudly serving our community with integrity and craftsmanship.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Why Choose Steelhead Electric?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {reasons.map((item) => (
            <div key={item.title}>
              <div className="text-5xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
