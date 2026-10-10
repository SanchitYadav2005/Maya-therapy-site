
export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-10">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#718B78]">
            A space to feel understood
          </p>

          <h1 className="max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Find your way toward a more{" "}
            <span className="decoration-[#DCE8DF] underline decoration-8 underline-offset-2">
              grounded
            </span>{" "}
            life.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#64756B]">
            Therapy for adults navigating anxiety, trauma, burnout, and
            the pressure of always needing to get everything right.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#35564A] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#263F35]"
            >
              Explore therapy
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#C9D3CA] px-6 py-3.5 text-sm font-medium transition hover:bg-[#DCE8DF]"
            >
              Get to know me
            </a>
          </div>

          <p className="mt-8 text-sm text-[#64756B]">
            In-person sessions in Santa Monica · Telehealth across California
          </p>
        </div>

        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-tl-[100px] bg-[#DCE8DF]" />
          <img
            src="/images/therapy-office.avif"
            alt="A calm, light-filled therapy office"
            className="relative h-[350px] w-full rounded-tl-[100px] rounded-br-[100px] object-cover shadow-sm sm:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
