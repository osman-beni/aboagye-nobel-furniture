import { FC } from "hono/jsx";

export const Services: FC = () => {
  return (
    <main class="w-full pt-20">
      <div class="flex flex-col w-full">
        <PageHeader />
        <EditorialMateriality />
        <ServicesHierarchy />
        <ProcessAndApproach />
        <CleanBottomCTA />
      </div>
    </main>
  );
};

const PageHeader = () => {
  return (
    <section class="mx-auto w-full max-w-360 px-5 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-16">
      <div class="max-w-3xl space-y-6">
        <span class="block text-xs font-medium uppercase tracking-widest text-neutral-600">
          Scope of Practice
        </span>

        <h1 class="font-serif text-4xl font-normal tracking-tight text-neutral-900 md:text-6xl">
          Our Services
        </h1>

        <p class="max-w-2xl text-lg leading-relaxed text-neutral-600">
          Thoughtful architectural design, intentional space planning, and
          curated styling tailored to how you live.
        </p>
      </div>
    </section>
  );
};

const EditorialMateriality = () => {
  return (
    <section class="mx-auto mb-24 w-full max-w-360 px-5 md:px-8 lg:px-16">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* <!-- Featured project --> */}
        <div class="group overflow-hidden bg-neutral-100 md:col-span-7">
          <div class="relative h-90 w-full overflow-hidden md:h-110">
            <img
              alt="Picture of a living room"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="/images/four.webp"
            />
          </div>
        </div>

        {/* <!-- Secondary project --> */}
        <div class="group flex flex-col justify-between overflow-hidden bg-neutral-100 md:col-span-5">
          <div class="relative h-90 w-full overflow-hidden md:h-110">
            <img
              alt="Picture of a kitchen"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="/images/seven.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesHierarchy = () => {
  return (
    <section class="mx-auto mb-32 w-full max-w-360 px-5 md:px-8 lg:px-16">
      <div class="grid grid-cols-1 divide-y divide-neutral-300">
        {/* <!-- Service 01 --> */}
        <article class="group py-16 transition-colors duration-300 md:py-24">
          <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
            <div class="md:col-span-2">
              <span class="font-serif text-2xl text-neutral-600">01</span>
            </div>

            <div class="md:col-span-5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Residential Interior Design
              </h2>

              <span class="mt-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-600">
                Full Architectural Scope
              </span>
            </div>

            <div class="flex h-full flex-col justify-between space-y-6 md:col-span-5">
              <p class="text-base leading-relaxed text-neutral-600 md:text-lg">
                Complete concept-to-completion design for private homes,
                estates, and city residences. Every commission centers on
                structural proportion, material permanence, and fluid everyday
                living.
              </p>

              <div class="flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-widest text-neutral-900">
                <span>Schematic Drawings · Sourcing</span>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Service 02 --> */}
        <article class="group py-16 transition-colors duration-300 md:py-24">
          <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
            <div class="md:col-span-2">
              <span class="font-serif text-2xl text-neutral-600">02</span>
            </div>

            <div class="md:col-span-5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Commercial Interior Design
              </h2>

              <span class="mt-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-600">
                Brand Environments
              </span>
            </div>

            <div class="flex h-full flex-col justify-between space-y-6 md:col-span-5">
              <p class="text-base leading-relaxed text-neutral-600 md:text-lg">
                Boutique hospitality, bespoke studios, and executive workspaces
                that reflect brand identity. We craft spaces that communicate
                understated authority and offer tranquil client journeys.
              </p>

              <div class="flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-widest text-neutral-900">
                <span>Hospitality · Flagships</span>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Service 03 --> */}
        <article class="group py-16 transition-colors duration-300 md:py-24">
          <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
            <div class="md:col-span-2">
              <span class="font-serif text-2xl text-neutral-600">03</span>
            </div>

            <div class="md:col-span-5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Space Planning
              </h2>

              <span class="mt-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-600">
                Volumetric Optimization
              </span>
            </div>

            <div class="flex h-full flex-col justify-between space-y-6 md:col-span-5">
              <p class="text-base leading-relaxed text-neutral-600 md:text-lg">
                Optimizing spatial flow, natural light distribution, and
                functional layouts before construction or remodeling. A
                diagnostic approach aligning internal movement with
                architectural sightlines.
              </p>

              <div class="flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-widest text-neutral-900">
                <span>Daylight Analysis · Spatial Flow</span>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Service 04 --> */}
        <article class="group py-16 transition-colors duration-300 md:py-24">
          <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
            <div class="md:col-span-2">
              <span class="font-serif text-2xl text-neutral-600">04</span>
            </div>

            <div class="md:col-span-5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Furniture &amp; Styling
              </h2>

              <span class="mt-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-600">
                Curatorial Direction
              </span>
            </div>

            <div class="flex h-full flex-col justify-between space-y-6 md:col-span-5">
              <p class="text-base leading-relaxed text-neutral-600 md:text-lg">
                Sourcing bespoke craftsmanship, antique curations, custom
                textiles, art selection, and finishings. Layering texture,
                vintage patina, and refined tactility that ages with grace.
              </p>

              <div class="flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-widest text-neutral-900">
                <span>Bespoke Mills · Gallery Liaison</span>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Service 05 --> */}
        <article class="group py-16 transition-colors duration-300 md:py-24">
          <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
            <div class="md:col-span-2">
              <span class="font-serif text-2xl text-neutral-600">05</span>
            </div>

            <div class="md:col-span-5">
              <h2 class="text-2xl font-medium text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl">
                Renovation
              </h2>

              <span class="mt-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-600">
                Structural Refinement
              </span>
            </div>

            <div class="flex h-full flex-col justify-between space-y-6 md:col-span-5">
              <p class="text-base leading-relaxed text-neutral-600 md:text-lg">
                Structural and interior remodeling management in collaboration
                with trusted artisans and builders. Rigorous oversight
                protecting design integrity through every demolition and joinery
                phase.
              </p>

              <div class="flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-widest text-neutral-900">
                <span>Procurement · Turnkey Build</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

const ProcessAndApproach = () => {
  return (
    <section class="w-full bg-neutral-100 py-24">
      <div class="mx-auto max-w-360 px-5 md:px-8 lg:px-16">
        <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div class="md:col-span-4">
            <span class="mb-2 block text-xs font-medium uppercase tracking-widest text-neutral-600">
              Philosophy
            </span>

            <h3 class="text-2xl font-medium text-neutral-900 md:text-3xl">
              A quiet, enduring methodology
            </h3>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 md:col-span-8">
            {/* <!-- Philosophy 01 --> */}
            <div class="space-y-1.5">
              <span class="block text-xs font-semibold uppercase tracking-wider text-neutral-900">
                01 / Listen &amp; Discern
              </span>

              <p class="text-sm leading-relaxed text-neutral-600">
                We decode your routine, spatial rituals, and personal affinity
                for volume and quietude.
              </p>
            </div>

            {/* <!-- Philosophy 02 --> */}
            <div class="space-y-1.5">
              <span class="block text-xs font-semibold uppercase tracking-wider text-neutral-900">
                02 / Material Rigor
              </span>

              <p class="text-sm leading-relaxed text-neutral-600">
                Prioritizing raw limestone, wire-brushed oak, woven linens, and
                living metals that develop patina.
              </p>
            </div>

            {/* <!-- Philosophy 03 --> */}
            <div class="space-y-1.5">
              <span class="block text-xs font-semibold uppercase tracking-wider text-neutral-900">
                03 / Exact Execution
              </span>

              <p class="text-sm leading-relaxed text-neutral-600">
                Close partnership with bespoke fabricators to ensure detailing
                aligns millimeter by millimeter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CleanBottomCTA = () => {
  return (
    <section class="mx-auto w-full max-w-360 px-5 py-32 md:px-8 lg:px-16">
      <div class="mx-auto max-w-2xl space-y-6 text-center">
        <span class="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
          Initiate an Engagement
        </span>

        <h2 class="text-3xl font-medium text-neutral-900 md:text-4xl">
          Every spatial transformation starts with dialogue
        </h2>

        <div class="pt-3">
          <a
            class="group inline-flex items-center gap-2 border-b border-neutral-900 pb-1.5 text-xl font-serif text-neutral-900 transition-all duration-300 hover:text-neutral-600 hover:border-neutral-600"
            data-path="contact"
            href="/contact"
          >
            <span>Let's discuss your project</span>

            <span class="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
