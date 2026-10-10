
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#35564A] py-20 text-white md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#DCE8DF]">
          Take the next step
        </p>

        <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
          You deserve support that meets you where you are.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#E0E8E2]">
          If you’re exploring therapy, start by asking questions and
          learning what the process might look like for you.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:"
            className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#35564A] transition hover:bg-[#DCE8DF]"
          >
            Contact the practice
          </a>

          <a
            href="#services"
            className="rounded-full border border-[#DCE8DF]/60 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Explore services
          </a>
        </div>

        <p className="mt-6 text-xs text-[#DCE8DF]">
          Fictional practice profile created for a website design project.
        </p>
      </div>
    </section>
  );
}
