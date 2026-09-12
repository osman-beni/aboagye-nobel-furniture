import { FC } from "hono/jsx";

export const Projects: FC = () => {
  return (
    <>
      <main class="w-full pt-20">
        <div class="flex flex-col w-full">
          <EditorialHeader />
          <GalleryArchitecturalGrid />
          <ArchitecturalCurationQuote />
          <QuietClosingCTA />
        </div>
      </main>
    </>
  );
};

const EditorialHeader = () => {
  return (
    <section class="mx-auto w-full max-w-360 px-5 pt-16 pb-24 md:px-8 lg:px-16">
      <div class="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
        <div class="flex flex-col space-y-3 md:col-span-8">
          <div class="flex items-center gap-2 text-neutral-600">
            <span class="text-xs font-medium uppercase tracking-[0.2em]">
              Archive · 2023 — 2026
            </span>

            <span class="h-px w-8 bg-neutral-400"></span>
          </div>

          <h1 class="font-serif text-4xl tracking-tight text-neutral-900 md:text-6xl">
            Selected Works
          </h1>
        </div>

        <div class="md:col-span-4 md:text-left">
          <p class="max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
            A collection of residential homes, private sanctuaries, and curated
            commercial interiors defined by architectural restraint, warm
            materiality, and enduring spatial presence.
          </p>
        </div>
      </div>

      <div class="mt-16 h-px w-full bg-neutral-400/60"></div>
    </section>
  );
};

const GalleryArchitecturalGrid = () => {
  return (
    <section class="mx-auto w-full max-w-360 px-5 pb-32 md:px-8 lg:px-16">
      <div class="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-12">
        {/* <!-- Project 01 --> */}
        <article class="group flex flex-col md:col-span-7">
          <div class="relative aspect-4/3 w-full overflow-hidden bg-neutral-200">
            <img
              alt="Apartment Interior"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              src="/images/three.webp"
            />

            <div class="absolute left-3 top-3 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
              <span class="text-xs font-medium uppercase tracking-widest text-neutral-900">
                Nº 01
              </span>
            </div>

            <div class="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/5"></div>
          </div>

          <div class="flex flex-col space-y-1.5 pt-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium uppercase tracking-wider text-neutral-600">
                Residential Interior Architecture
              </span>

              <span class="text-xs text-neutral-500">
                North Kaneshie, Accra · 2024
              </span>
            </div>

            <div class="flex items-baseline justify-between pt-1.5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Apartment
              </h2>
            </div>
          </div>
        </article>

        {/* <!-- Project 02 --> */}
        <article class="group flex flex-col md:col-span-5 md:pt-16">
          <div class="relative aspect-4/5 w-full overflow-hidden bg-neutral-200">
            <img
              alt="Room Interior"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              src="/images/six.webp"
            />

            <div class="absolute left-3 top-3 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
              <span class="text-xs font-medium uppercase tracking-widest text-neutral-900">
                Nº 02
              </span>
            </div>

            <div class="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/5"></div>
          </div>

          <div class="flex flex-col space-y-1.5 pt-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium uppercase tracking-wider text-neutral-600">
                Joinery Design
              </span>

              <span class="text-xs text-neutral-500">Kasoa, Accra · 2026</span>
            </div>

            <div class="flex items-baseline justify-between pt-1.5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Room Interior
              </h2>
            </div>
          </div>
        </article>

        {/* <!-- Project 03 --> */}
        <article class="group flex flex-col md:col-span-5">
          <div class="relative aspect-4/5 w-full overflow-hidden bg-neutral-200">
            <img
              alt="Minimalist Kitchen Interior"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              src="/images/five.webp"
            />

            <div class="absolute left-3 top-3 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
              <span class="text-xs font-medium uppercase tracking-widest text-neutral-900">
                Nº 03
              </span>
            </div>

            <div class="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/5"></div>
          </div>

          <div class="flex flex-col space-y-1.5 pt-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium uppercase tracking-wider text-neutral-600">
                Space Planning &amp; Styling
              </span>

              <span class="text-xs text-neutral-500">Lapaz, Accra · 2025</span>
            </div>

            <div class="flex items-baseline justify-between pt-1.5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Minimalist Kitchen Interior
              </h2>
            </div>
          </div>
        </article>

        {/* <!-- Project 04 --> */}
        <article class="group flex  flex-col md:col-span-7 md:-mt-8">
          <div class="relative aspect-4/3 w-full overflow-hidden bg-neutral-200">
            <img
              alt="Kitchen Space"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              src="/images/two.webp"
            />

            <div class="absolute left-3 top-3 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
              <span class="text-xs font-medium uppercase tracking-widest text-neutral-900">
                Nº 04
              </span>
            </div>

            <div class="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/5"></div>
          </div>

          <div class="flex flex-col space-y-1.5 pt-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium uppercase tracking-wider text-neutral-600">
                Kitchen Interior
              </span>

              <span class="text-xs text-neutral-500">
                Mallam Gbawe, Accra · 2026
              </span>
            </div>

            <div class="flex items-baseline justify-between pt-1.5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Clean Kitchen Interior
              </h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

const ArchitecturalCurationQuote = () => {
  return (
    <section class="w-full border-y border-neutral-300/30 bg-neutral-100 py-24">
      <div class="mx-auto grid max-w-360 grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:px-8 lg:px-16">
        <div class="md:col-span-2">
          <span class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            Philosophy
          </span>
        </div>

        <div class="md:col-span-8">
          <blockquote class="font-serif text-xl font-normal italic leading-relaxed text-neutral-900 md:text-3xl">
            “We treat light as primary matter and empty space as structure.
            Every interior must support life with warmth, clarity, and unforced
            grace.”
          </blockquote>
        </div>

        <div class="md:col-span-2 md:text-right">
          <span class="block text-sm text-neutral-600">
            Aboagye Noble Furniture
          </span>

          <span class="text-xs uppercase tracking-widest text-neutral-600">
            Design Monograph
          </span>
        </div>
      </div>
    </section>
  );
};

const QuietClosingCTA = () => {
  return (
    <section class="mx-auto w-full max-w-360 px-5 py-32 md:px-8 lg:px-16">
      <div class="mx-auto flex max-w-3xl flex-col items-center space-y-6 text-center">
        <span class="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600">
          Initiate Dialogue
        </span>

        <h2 class="font-serif text-3xl tracking-tight text-neutral-900 md:text-5xl">
          Have an interior project? Let’s discuss your space.
        </h2>

        <p class="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          We undertake a strictly limited number of private residences and
          bespoke boutique commissions nation wide each calendar year.
        </p>

        <div class="flex flex-col items-center gap-6 pt-4 sm:flex-row">
          <a
            class="inline-block bg-neutral-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-neutral-600"
            data-path="contact"
            href="/contact"
          >
            Book a Consultation
          </a>

          <a
            class="inline-block border border-neutral-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
            data-path="services"
            href="/services"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};
