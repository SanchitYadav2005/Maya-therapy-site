
const officeImages = [
  {
    src: "/images/therapy-office.avif",
    alt: "A peaceful, naturally lit office",
    title: "A calm setting",
  },
  {
    src: "/images/office-room.jpg",
    alt: "A comfortable room for conversation",
    title: "Room to talk",
  },
  {
    src: "/images/office-seating.jpg",
    alt: "Comfortable seating in a welcoming space",
    title: "A welcoming space",
  },
];

export default function Office() {
  return (
    <section id="office" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718B78]">
              Our office
            </p>

            <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">
              A place to slow down and feel{" "}
              <span className="bg-[#DCE8DF] px-1">at ease.</span>
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-[#64756B]">
            The fictional practice is imagined as a private, comfortable
            space in Santa Monica, with natural light and a thoughtful
            atmosphere. Telehealth is also described as an option for
            adults located in California.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {officeImages.map((image) => (
            <figure key={image.src} className="group overflow-hidden rounded-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="bg-[#F8F7F3] px-4 py-4 font-serif text-lg">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
