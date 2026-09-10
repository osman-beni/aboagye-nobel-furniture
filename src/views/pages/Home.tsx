import { FC } from "hono/jsx";

export const Home: FC = () => {
  return (
    <>
      <main class="w-full pt-20">
        <div class="flex flex-col w-full">
          <HeroSectionCopy />
          <AboutPreviewSectionCopy />
          <FeaturedProjectsSection />
          <ServicesSection />
          <SimpleMinimalCTA />
        </div>
      </main>
    </>
  );
};

const HeroSectionCopy = () => {
  return (
    <section class="relative -mt-20 w-full">
      <div class="relative h-[92vh] min-h-155 w-full overflow-hidden">
        <img
          src="/images/landscape.webp"
          alt="A Residence living room interior designed by Aboagye Nobel Furnitures"
          class="h-full w-full scale-[1.01] object-cover object-center transition-transform duration-1000 ease-out"
        />

        <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

        <div class="absolute inset-0 mx-auto flex max-w-360 flex-col justify-end px-6 pb-16 pt-20 sm:px-8 md:px-12 md:pb-20 lg:px-16">
          <div class="max-w-2xl space-y-6">
            <span class="font-sans block text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              Interior Architecture · Spatial Curation
            </span>

            <h1 class="text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Beautiful spaces, thoughtfully designed.
            </h1>

            <p class="max-w-xl pt-1 text-base leading-relaxed text-white/80 sm:text-lg">
              Aboagye Noble Furniture is an interior architecture and design
              studio creating calm, timeless spaces for discerning residential
              and boutique commercial clients.
            </p>

            <div class="pt-2">
              <a
                href="/projects"
                class="inline-block bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-black shadow-sm transition-colors duration-300 hover:bg-white/90"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPreviewSectionCopy = () => {
  return (
    <section class="w-full bg-white py-16 md:py-24 lg:py-32">
      <div class="mx-auto max-w-360 px-6 sm:px-8 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 items-baseline gap-12 lg:grid-cols-12 lg:gap-16">
          {/* <!-- Heading --> */}
          <div class="space-y-3 lg:col-span-4">
            <span class="block text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              01 / Philosophy
            </span>

            <h2 class="text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Quiet restraint,
              <br class="hidden sm:inline" />
              tactile presence.
            </h2>
          </div>

          {/* <!-- Content --> */}
          <div class="flex flex-col space-y-8 lg:col-span-8">
            <p class="max-w-3xl text-base leading-[1.75] text-neutral-600 sm:text-lg">
              We believe a well-designed home should feel serene, grounded, and
              deeply personal. Founded on principles of materiality, natural
              light, and quiet proportion, our work celebrates the beauty of
              restrained simplicity.
            </p>

            <div>
              <a
                href="/about"
                class="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-200 hover:text-neutral-500"
              >
                <span>Learn More</span>
                <span class="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectsSection = () => {
  return (
    <section class="w-full bg-stone-50 py-16 md:py-24">
      <div class="mx-auto max-w-360 space-y-16 px-6 sm:px-8 md:px-12 lg:px-16">
        {/* <!-- Section heading --> */}
        <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div class="space-y-2">
            <span class="block text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              02 / Portfolio
            </span>

            <h2 class="text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Selected Works
            </h2>
          </div>

          <a
            href="/projects"
            class="group hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-200 hover:text-neutral-500 sm:inline-flex"
          >
            <span>View All Projects</span>
            <span class="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* <!-- Projects --> */}
        <div class="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* <!-- Project 1 --> */}
          <article class="group md:col-span-12">
            <div class="overflow-hidden bg-stone-100 shadow-sm">
              <img
                src="/images/one.webp"
                alt="A North Kaneshie  Residence - Full Architectural Renovation by Aboagye Nobel Furniture"
                class="h-130 w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015] md:h-170"
              />
            </div>

            <div class="flex flex-col justify-between gap-2 pt-6 md:flex-row md:items-baseline">
              <div class="space-y-2">
                <span class="block text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Full Architectural Renovation
                </span>

                <h3 class="text-2xl font-medium tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-500">
                  North Kaneshie Resident
                </h3>
              </div>

              <span class="text-sm tracking-wide text-neutral-500">
                North Kaneshie, Accra · 2024
              </span>
            </div>
          </article>

          {/* <!-- Project 2 --> */}
          <article class="group md:col-span-7">
            <div class="overflow-hidden bg-stone-100 shadow-sm">
              <img
                src="/images/two.webp"
                alt="Kitchen & Villa - Residential Interior by Aboagye Nobel Furniture"
                class="h-105 w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] md:h-125"
              />
            </div>

            <div class="flex flex-col justify-between gap-2 pt-6 sm:flex-row sm:items-baseline">
              <div class="space-y-2">
                <span class="block text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Residential Interior
                </span>

                <h3 class="text-xl font-medium tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-500">
                  Kitchen & Villa
                </h3>
              </div>

              <span class="text-sm tracking-wide text-neutral-500">
                Dansoman, Accra
              </span>
            </div>
          </article>

          {/* <!-- Project 3 --> */}
          <article class="group flex cursor-pointer flex-col justify-between md:col-span-5">
            <div>
              <div class="overflow-hidden bg-stone-100 shadow-sm">
                <img
                  src="/images/three.webp"
                  alt="Apartment - Space Planning & Interior by Aboagye Nobel Furniture"
                  class="h-105 w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] md:h-125"
                />
              </div>

              <div class="flex flex-col justify-between gap-2 pt-6 sm:flex-row sm:items-baseline">
                <div class="space-y-2">
                  <span class="block text-xs font-medium uppercase tracking-wider text-neutral-500">
                    Space Planning & Interior
                  </span>

                  <h3 class="text-xl font-medium tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-500">
                    Apartment
                  </h3>
                </div>

                <span class="text-sm tracking-wide text-neutral-500">
                  North Kaneshie, Accra
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* <!-- Mobile link --> */}
        <div class="pt-2 sm:hidden">
          <a
            href="#"
            class="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-200 hover:text-neutral-500"
          >
            <span>View All Projects</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section class="w-full bg-white py-16 md:py-24 lg:py-32">
      <div class="mx-auto max-w-360 px-6 sm:px-8 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* <!-- Section heading --> */}
          <div class="space-y-3 lg:col-span-4">
            <span class="block text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              03 / Expertise
            </span>

            <h2 class="text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Disciplines
            </h2>

            <p class="max-w-xs pt-1 text-sm leading-relaxed text-neutral-500">
              From preliminary volumetric architectural drafts to bespoke
              curation, we execute every engagement with quiet precision.
            </p>
          </div>

          {/* <!-- Services --> */}
          <div class="flex flex-col lg:col-span-8">
            {/* <!-- Service 1 --> */}
            <div class="group -mx-4 flex cursor-pointer flex-col justify-between gap-4 px-4 py-8 transition-colors duration-200 hover:bg-stone-100 md:flex-row md:items-baseline">
              <div class="flex items-baseline gap-6">
                <span class="font-mono text-xs text-neutral-500">01</span>

                <h3 class="text-xl font-medium tracking-tight text-neutral-900 transition-transform duration-200 group-hover:translate-x-1 sm:text-2xl">
                  Residential Interior Design
                </h3>
              </div>

              <p class="max-w-xs text-sm leading-relaxed text-neutral-500 md:text-right">
                Turnkey architectural interiors tailored for lasting residential
                living and physical harmony.
              </p>
            </div>

            <div class="h-px w-full bg-neutral-200"></div>

            {/* <!-- Service 2 --> */}
            <div class="group -mx-4 flex cursor-pointer flex-col justify-between gap-4 px-4 py-8 transition-colors duration-200 hover:bg-stone-100 md:flex-row md:items-baseline">
              <div class="flex items-baseline gap-6">
                <span class="font-mono text-xs text-neutral-500">02</span>

                <h3 class="text-xl font-medium tracking-tight text-neutral-900 transition-transform duration-200 group-hover:translate-x-1 sm:text-2xl">
                  Commercial Interior Design
                </h3>
              </div>

              <p class="max-w-xs text-sm leading-relaxed text-neutral-500 md:text-right">
                Boutique hospitality, editorial retail pavilions, and thoughtful
                creative workspaces.
              </p>
            </div>

            <div class="h-px w-full bg-neutral-200"></div>

            {/* <!-- Service 3 --> */}
            <div class="group -mx-4 flex cursor-pointer flex-col justify-between gap-4 px-4 py-8 transition-colors duration-200 hover:bg-stone-100 md:flex-row md:items-baseline">
              <div class="flex items-baseline gap-6">
                <span class="font-mono text-xs text-neutral-500">03</span>

                <h3 class="text-xl font-medium tracking-tight text-neutral-900 transition-transform duration-200 group-hover:translate-x-1 sm:text-2xl">
                  Space Planning
                </h3>
              </div>

              <p class="max-w-xs text-sm leading-relaxed text-neutral-500 md:text-right">
                Volumetric analysis, natural light orientation, and calibrated
                circulation choreography.
              </p>
            </div>

            <div class="h-px w-full bg-neutral-200"></div>

            {/* <!-- Service 4 --> */}
            <div class="group -mx-4 flex cursor-pointer flex-col justify-between gap-4 px-4 py-8 transition-colors duration-200 hover:bg-stone-100 md:flex-row md:items-baseline">
              <div class="flex items-baseline gap-6">
                <span class="font-mono text-xs text-neutral-500">04</span>

                <h3 class="text-xl font-medium tracking-tight text-neutral-900 transition-transform duration-200 group-hover:translate-x-1 sm:text-2xl">
                  Furniture &amp; Styling
                </h3>
              </div>

              <p class="max-w-xs text-sm leading-relaxed text-neutral-500 md:text-right">
                Custom joinery commissions, archival collectible design, and
                nuanced textile finishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SimpleMinimalCTA = () => {
  return (
    <section class="w-full bg-stone-100 py-16 md:py-24 lg:py-32">
      <div class="mx-auto max-w-360 px-6 text-center sm:px-8 md:px-12 lg:px-16">
        <div class="mx-auto max-w-2xl space-y-6">
          <span class="block text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Initiate a Dialogue
          </span>

          <h2 class="text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Have a project in mind?
          </h2>

          <p class="mx-auto max-w-md pt-1 text-base leading-relaxed text-neutral-500">
            We welcome inquiries for new architecture, complete interior
            renovations, and private spatial commissions nation wide.
          </p>

          <div class="pt-6">
            <a
              href="/contact"
              class="inline-block bg-neutral-900 px-8 py-4 text-xs font-medium uppercase tracking-widest text-white shadow-sm transition-colors duration-300 hover:bg-neutral-700"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
