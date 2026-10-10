
const faqs = [
  {
    question: "Who is this practice designed for?",
    answer:
      "The profile is designed around therapy for adults experiencing anxiety, panic, trauma-related concerns, burnout, or perfectionism.",
  },
  {
    question: "What approaches are included?",
    answer:
      "The fictional profile describes CBT, EMDR, mindfulness, and body-oriented techniques. A real therapist would discuss which approaches are suitable for each client.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "The profile describes telehealth as an option for clients located in California, subject to the real provider’s licensing and availability.",
  },
  {
    question: "What if I feel nervous about starting therapy?",
    answer:
      "It is common to have questions before beginning. An initial conversation can help clarify what to expect, discuss concerns, and determine whether the approach feels appropriate.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact section to ask about availability, session formats, fees, and any other practical questions before scheduling.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#F8F7F3] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718B78]">
            Common questions
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            A few things you might be wondering.
          </h2>

          <p className="mt-5 leading-8 text-[#64756B]">
            Have another question? Use the contact section to ask about
            the details that matter to you.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block border-b border-[#718B78] pb-1 text-sm font-medium"
          >
            Contact the practice
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-[#E4DED3] bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {faq.question}
                <span className="text-xl text-[#718B78] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 pr-6 leading-7 text-[#64756B]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
