
const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    description:
      "Explore anxious thoughts, understand patterns, and develop practical ways to navigate stressful moments.",
    tags: ["CBT", "Mindfulness"],
  },
  {
    number: "02",
    title: "Trauma & EMDR",
    description:
      "A safety-focused approach that respects your pace and emphasizes stability, choice, and collaboration.",
    tags: ["EMDR-informed profile", "Safety first"],
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Make space to understand pressure, reconsider unhelpful expectations, and build more sustainable routines.",
    tags: ["Self-awareness", "Healthy boundaries"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#F8F7F3] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718B78]">
            How I can help
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Support for what you’re carrying.
          </h2>

          <p className="mt-5 leading-8 text-[#64756B]">
            Different experiences call for different kinds of support.
            Explore the areas highlighted in this therapist profile.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-[#E4DED3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C9D8CB] hover:shadow-lg sm:p-8"
            >
              <span className="text-sm tracking-widest text-[#718B78]">
                {service.number}
              </span>

              <h3 className="mt-6 font-serif text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 min-h-28 leading-7 text-[#64756B]">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F0F3EE] px-3 py-1.5 text-xs text-[#52695A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-block text-sm font-medium text-[#35564A] group-hover:underline"
              >
                Get in touch →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
