import { FC } from "hono/jsx";

export const About: FC = () => {
  return (
    <main class="w-full pt-20 bg-background">
      <div class="flex flex-col w-full">
        <TopEditorialHeader />
        <LargeImmersiveEditorial />
        <StudioStory />
        <ArchitecturalMetric />
        <FounderSection />
        <ClosingCTASection />
      </div>
    </main>
  );
};

const TopEditorialHeader = () => {
  return (
    <section class="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-8">
          <span class="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
            About Aboagy Noble Furniture
          </span>

          <h1 class="text-4xl font-medium leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Spaces formed with quiet restraint, genuine materiality, and poetic
            permanence.
          </h1>
        </div>

        <div class="flex flex-col justify-end lg:col-span-4 lg:pl-6">
          <p class="text-base leading-relaxed ">
            Founded in Accra, Aboagye Noble Furnitures crafts bespoke
            residential environments across the Ghana, centering on
            architectural balance and sensory stillness.
          </p>
        </div>
      </div>
    </section>
  );
};

const LargeImmersiveEditorial = () => {
  return (
    <section class="mx-auto mb-24 w-full max-w-360 px-6 sm:px-8 lg:px-12">
      <div class="relative aspect-video w-full overflow-hidden bg-slate-100 shadow-sm md:aspect-[21/9]">
        <img
          class="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
          data-alt="Editorial photograph of a warm minimalist living room interior with limewashed neutral plaster walls, tall steel-framed French glass windows overlooking an autumnal garden, low-slung tailored linen modular sofa in oatmeal tones, travertine curved low coffee table, woven natural wool rug, and warm directional soft morning sunlight. Architectural digest style, quiet luxury, neutral beige and taupe palette."
          src="/public/images/landscape.webp"
          alt="Warm minimalist living room interior"
        />

        <div class="absolute bottom-6 left-6 bg-white/90 px-6 py-2 backdrop-blur-sm">
          <p class="text-xs font-medium uppercase tracking-widest text-slate-900">
            The Hampstead Residence · Project 04
          </p>
        </div>
      </div>
    </section>
  );
};

const StudioStory = () => {
  return (
    <section class="mx-auto mb-24 w-full max-w-360 px-6 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-4">
          <div class="sticky top-28 space-y-2">
            <span class="block text-xs font-medium uppercase tracking-[0.2em] ">
              Origin &amp; Ethos
            </span>

            <h2 class="text-3xl font-medium leading-tight tracking-tight ">
              The Philosophy of Stillness
            </h2>

            <div class="my-6 h-px w-12 bg-slate-300"></div>

            <p class="text-xs uppercase tracking-wider ">
              ESTABLISHED 2014 · ACCRA
            </p>
          </div>
        </div>

        <div class="space-y-8 lg:col-span-8">
          <p class="text-lg font-light leading-relaxed text-slate-900">
            Aboagye Nobel Furnitures was founded on the belief that a home
            should not demand attention, but quietly support everyday living.
            Born in Accra out of an instinctive desire for calm in dense urban
            surroundings, our practice creates homes that feel enduring,
            harmonious, and grounded.
          </p>

          <div class="grid grid-cols-1 gap-8 pt-2 sm:grid-cols-2">
            <div class="space-y-2 bg-stone-100 p-8 shadow-sm">
              <span class="block text-xs font-medium uppercase tracking-wider ">
                Material Authenticity
              </span>

              <h3 class="text-2xl font-medium leading-tight ">Raw Tactility</h3>

              <p class="text-base leading-relaxed ">
                We exclusively select natural surfaces that patinate with
                distinction
              </p>
            </div>

            <div class="space-y-2 bg-stone-100 p-8 shadow-sm">
              <span class="block text-xs font-medium uppercase tracking-wider ">
                Spatial Honesty
              </span>

              <h3 class="text-2xl font-medium leading-tight ">
                Effortless Ease
              </h3>

              <p class="text-base leading-relaxed ">
                True luxury lies in spatial proportion and unhurried simplicity.
                We remove the superficial and decorative excess, uncovering room
                for quiet reflection, daylight, and intuitive spatial flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArchitecturalMetric = () => {
  return (
    <section class="mb-24 w-full bg-stone-100 py-16">
      <div class="mx-auto max-w-360 px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div class="space-y-1">
            <span class="text-4xl font-normal font-heading block">10+</span>
            <span class="block text-xs font-medium uppercase tracking-wider ">
              Years Studio Practice
            </span>
          </div>

          <div class="space-y-2">
            <span class="block text-4xl font-normal font-heading">38</span>
            <span class="block text-xs font-medium uppercase tracking-wider ">
              Homes Realized
            </span>
          </div>

          <div class="space-y-2">
            <span class="text-4xl font-normal font-heading block">100%</span>
            <span class="block text-xs font-medium uppercase tracking-wider ">
              Natural Sourced Minerals
            </span>
          </div>

          <div class="space-y-2">
            <span class="text-4xl font-normal font-heading block">02</span>
            <span class="block text-xs font-medium uppercase tracking-wider ">
              Studio Locations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => {
  return (
    <section class="mx-auto mb-32 w-full max-w-360 px-6 md:px-8 lg:px-12">
      <div class="bg-stone-100 p-8 shadow-sm md:p-12 lg:p-16">
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* <!-- Founder Portrait --> */}
          <div class="relative lg:col-span-5">
            <div class="aspect-4/5 overflow-hidden  shadow-md">
              <img
                src="public/images/landscape.webp"
                alt="Aboagye, Founder & Creative Director of Aboagye Nobel Furniture"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div class="absolute -bottom-4 -right-4 hidden max-w-50 bg-stone-900 p-6 text-white shadow-lg sm:block">
              <p class="text-xs uppercase leading-tight tracking-wider">
                Accra
              </p>
            </div>
          </div>

          {/* <!-- Founder Narrative --> */}
          <div class="space-y-6 lg:col-span-7 lg:pl-12">
            <div>
              <span class="mb-2 block text-xs font-medium uppercase tracking-[0.2em] ">
                Leadership
              </span>

              <h2 class="text-4xl font-normal leading-tight tracking-tight ">
                Aboagye Nobel
              </h2>

              <p class="mt-1 text-xs uppercase tracking-wider ">
                Founder & Creative Director
              </p>
            </div>

            <p class="text-lg font-light leading-relaxed">
              With over 10 years of architectural interior experience across
              Ghana, Aboagye founded Aboagye Nobel Furnitures to bring a quiet,
              poetic clarity to residential spaces.
            </p>

            <p class="text-base leading-relaxed ">
              Trained initially in structural interior design in Accra followed
              by fine craftsmanship apprenticeships, Aboagye leads each
              commission personally. His hand-drawn vignettes and deep
              appreciation for joinery details ensure every space feels
              personal, functional, and anchored in place.
            </p>

            <div class="pt-6">
              <blockquote class="border-l border-slate-300 bg-white/50 py-2 pl-6 text-xl italic font-heading">
                “We don’t fill rooms; we carve stillness into everyday
                dwellings.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClosingCTASection = () => {
  return (
    <section class="w-full bg-stone-100 py-24 ">
      <div class="mx-auto max-w-360 px-6 md:px-8 lg:px-12">
        <div class="max-w-3xl space-y-6">
          <span class="block text-xs font-medium uppercase tracking-[0.25em] ">
            New Commissions
          </span>

          <h2 class="text-4xl font-normal leading-tight tracking-tight  sm:text-5xl lg:text-6xl">
            Begin a dialogue about your residential project.
          </h2>

          <p class="max-w-xl text-lg leading-relaxed ">
            We accept a selective number of private residential commissions
            annually to dedicate complete studio focus to every detail.
          </p>

          <div class="flex flex-col items-start gap-4 pt-8 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-path="contact"
              class="inline-flex items-center gap-2 bg-white px-8 py-4 text-xs font-medium uppercase tracking-wider text-slate-900 transition-colors duration-300 hover:bg-stone-200"
            >
              <span>Work with us</span>
            </a>

            <a
              href="/projects"
              data-path="projects"
              class="inline-flex items-center px-6 py-4 text-xs font-medium uppercase tracking-widest  transition-colors hover:text-slate-400"
            >
              Explore Selected Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
