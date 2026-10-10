
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-[#DCE8DF]" />
          <img
            src="/images/image.png"
            alt="Portrait of Dr. Maya Reynolds"
            className="relative h-[420px] w-full rounded-3xl object-cover object-center"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718B78]">
            A little about me
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            You don’t have to figure everything out on your own.
          </h2>

          <p className="mt-6 leading-8 text-[#64756B]">
            I’m Dr. Maya Reynolds, a fictional clinical psychologist
            profile created for this website project. My approach is
            represented as warm, collaborative, and grounded in helping
            adults better understand their experiences.
          </p>

          <p className="mt-4 leading-8 text-[#64756B]">
            Therapy can offer a space to slow down, explore patterns,
            and develop practical ways to respond to life’s challenges.
            We would work at a pace that respects your needs and sense
            of safety.
          </p>

          <p className="mt-4 leading-8 text-[#64756B]">
            Depending on a client’s needs, the profile describes an
            approach drawing on{" "}
            <span className="bg-[#DCE8DF] px-1">CBT</span>, mindfulness,
            EMDR, and body-oriented techniques.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex border-b border-[#718B78] pb-1 text-sm font-medium hover:text-[#718B78]"
          >
            Learn about the services
          </a>
        </div>
      </div>
    </section>
  );
}
