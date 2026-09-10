import { FC } from "hono/jsx";

export const Contact: FC = () => {
  return (
    <main class="full pt-20 bg-background">
      <div class="flex flex-col w-full">
        <div class="relative w-full overflow-hidden">
          <div class="pointer-events-none absolute -top-32 right-1/4 -z-10 size-125 rounded-full bg-stone-300/40 blur-3xl"></div>
          <div class="pointer-events-none absolute top-1/2 -left-32 -z-10 size-105 -translate-y-1/2 rounded-full bg-stone-300/60 blur-3xl"></div>
          <div class="mx-auto max-w-360 px-6 pt-8 pb-16 sm:px-8 md:px-12 lg:px-16">
            <TopTypographicIntroduction />
            <MainLayoutForm />
            <SecondaryStructuralFeature />
          </div>
        </div>
      </div>
    </main>
  );
};

const TopTypographicIntroduction = () => {
  return (
    <div class="mb-12 grid grid-cols-1 items-baseline gap-y-6 md:grid-cols-12 md:gap-x-12">
      {/* <!-- Label --> */}
      <div class="md:col-span-3">
        <div class="inline-flex items-center gap-2">
          <span class="inline-block size-2 rounded-full bg-neutral-900"></span>

          <span class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Inquiry · Vol. 04
          </span>
        </div>
      </div>

      {/* <!-- Heading + description --> */}
      <div class="max-w-3xl md:col-span-9">
        <h1 class="text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Let's talk about your project.
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
          Whether you are embarking on a full-scale renovation, architectural
          interior, or furnishing a new space, we'd love to hear about your
          vision.
        </p>
      </div>
    </div>
  );
};

const MainLayoutForm = () => {
  return (
    <div class="grid grid-cols-1 items-start gap-y-12 md:grid-cols-12 md:gap-x-12">
      {/* <!-- Contact Form Column --> */}
      <div class="bg-stone-50 p-6 shadow-sm md:col-span-7 md:p-8">
        {/* <!-- Form Header --> */}
        <div class="mb-8 flex items-center justify-between bg-stone-100 p-4 pb-6">
          <div>
            <span class="block text-xs font-medium uppercase tracking-wider text-stone-500">
              Phase 01 — Scope
            </span>

            <span class="text-lg font-medium text-neutral-900">
              Client Brief Submission
            </span>
          </div>

          <span class="material-symbols-outlined text-stone-600 text-[24px]">
            architecture
          </span>
        </div>

        <form
          class="flex flex-col space-y-8"
          id="contactForm"
          onsubmit="event.preventDefault(); document.getElementById('successFeedback').classList.remove('hidden'); this.reset();"
        >
          {/* <!-- Name & Email --> */}
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="flex flex-col space-y-2">
              <label
                class="text-xs font-medium uppercase tracking-wider text-stone-500"
                for="fullName"
              >
                Full Name <span class="text-neutral-900">*</span>
              </label>

              <input
                id="fullName"
                type="text"
                placeholder="e.g. Helena Vance"
                required
                class="w-full bg-stone-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-stone-400 transition-all focus:bg-white focus:outline-none"
              />
            </div>

            <div class="flex flex-col space-y-2">
              <label
                class="text-xs font-medium uppercase tracking-wider text-stone-500"
                for="emailAddress"
              >
                Email Address <span class="text-neutral-900">*</span>
              </label>

              <input
                id="emailAddress"
                type="email"
                placeholder="helena@residence.com"
                required
                class="w-full bg-stone-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-stone-400 transition-all focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* <!-- Phone --> */}
          <div class="flex flex-col space-y-2">
            <label
              class="text-xs font-medium uppercase tracking-wider text-stone-500"
              for="phone"
            >
              Phone Number (Optional)
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+44 7000 000000"
              class="w-full bg-stone-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-stone-400 transition-all focus:bg-white focus:outline-none"
            />
          </div>

          {/* <!-- Project Type --> */}
          <div class="flex flex-col space-y-3">
            <label class="text-xs font-medium uppercase tracking-wider text-stone-500">
              Project Classification
              <span class="text-neutral-900">*</span>
            </label>

            <div
              id="projectTypeGrid"
              class="grid grid-cols-2 gap-2 sm:grid-cols-4"
            >
              <label class="group cursor-pointer">
                <input
                  type="radio"
                  name="project_type"
                  value="Residential Interior"
                  checked
                  class="peer sr-only"
                />

                <div class="bg-stone-100 p-3 text-center transition-all peer-checked:bg-neutral-900 peer-checked:text-white">
                  <span class="block text-xs font-medium uppercase tracking-wider">
                    Residential
                  </span>

                  <span class="mt-1 block text-xs opacity-70">
                    Full Interior
                  </span>
                </div>
              </label>

              <label class="group cursor-pointer">
                <input
                  type="radio"
                  name="project_type"
                  value="Commercial"
                  class="peer sr-only"
                />

                <div class="bg-stone-100 p-3 text-center transition-all peer-checked:bg-neutral-900 peer-checked:text-white">
                  <span class="block text-xs font-medium uppercase tracking-wider">
                    Commercial
                  </span>

                  <span class="mt-1 block text-xs opacity-70">
                    Boutique &amp; Retail
                  </span>
                </div>
              </label>

              <label class="group cursor-pointer">
                <input
                  type="radio"
                  name="project_type"
                  value="Space Planning"
                  class="peer sr-only"
                />

                <div class="bg-stone-100 p-3 text-center transition-all peer-checked:bg-neutral-900 peer-checked:text-white">
                  <span class="block text-xs font-medium uppercase tracking-wider">
                    Planning
                  </span>

                  <span class="mt-1 block text-xs opacity-70">
                    Spatial Layout
                  </span>
                </div>
              </label>

              <label class="group cursor-pointer">
                <input
                  type="radio"
                  name="project_type"
                  value="Renovation"
                  class="peer sr-only"
                />

                <div class="bg-stone-100 p-3 text-center transition-all peer-checked:bg-neutral-900 peer-checked:text-white">
                  <span class="block text-xs font-medium uppercase tracking-wider">
                    Renovation
                  </span>

                  <span class="mt-1 block text-xs opacity-70">Restoration</span>
                </div>
              </label>
            </div>
          </div>

          {/* <!-- Project Details --> */}
          <div class="flex flex-col space-y-2">
            <div class="flex items-center justify-between gap-4">
              <label
                class="text-xs font-medium uppercase tracking-wider text-stone-500"
                for="projectDetails"
              >
                Project Details &amp; Scope
                <span class="text-neutral-900">*</span>
              </label>

              <span class="hidden text-xs text-stone-500 sm:block">
                Location, approximate sq ft, timeline
              </span>
            </div>

            <textarea
              id="projectDetails"
              rows={5}
              required
              placeholder="Share notes regarding your property architectural era, approximate square footage, aspirational completion dates, or bespoke requests..."
              class="w-full resize-none bg-stone-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-stone-400 transition-all focus:bg-white focus:outline-none"
            ></textarea>
          </div>

          {/* <!-- Submit --> */}
          <div class="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-stone-600 text-[18px]">
                verified_user
              </span>

              <span class="text-xs text-stone-600">
                Protected by strict studio confidentiality.
              </span>
            </div>

            <button
              type="submit"
              class="flex items-center justify-center gap-2 bg-neutral-900 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-stone-700"
            >
              <span>Send Inquiry</span>

              <span class="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>
          </div>

          {/* <!-- Success Message --> */}
          <div
            id="successFeedback"
            class="hidden items-start gap-3 bg-stone-100 p-4 text-neutral-900"
          >
            <span class="material-symbols-outlined text-neutral-900 text-[20px]">
              check_circle
            </span>

            <div class="space-y-2">
              <p class="text-sm font-medium">Inquiry Received</p>

              <p class="text-sm leading-relaxed text-stone-500">
                Thank you for reaching out. A partner from Atelier Vane will
                review your architectural specifications and contact you within
                two business days.
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* <!-- Studio Information Sidebar --> */}
      <div class="flex flex-col space-y-8 md:col-span-5">
        {/* <!-- Image --> */}
        <div class="group relative overflow-hidden bg-stone-200">
          <div class="h-64 w-full overflow-hidden sm:h-72">
            <img
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="/public/images/landscape.webp"
              alt="Sunlit architectural salon living room featuring minimalist bespoke travertine coffee table, neutral textured linen sectional sofa, warm plaster limewash walls, tall black steel frame French windows opening to a garden pool, and curated ceramic vessels on natural oak floating shelves."
            />
          </div>

          <div class="flex items-center justify-between bg-stone-200 p-4">
            <div>
              <span class="block text-xs font-medium uppercase text-stone-600">
                Mayfair Salon · Room 02
              </span>

              <span class="font-serif text-lg text-neutral-900">
                Tactile Material Library
              </span>
            </div>

            <span class="text-xs text-stone-600">Ref. AV-2024</span>
          </div>
        </div>

        {/* <!-- Studio Dossier --> */}
        <div class="space-y-6 bg-stone-100 p-6">
          <div>
            <span class="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-stone-600">
              Contact Information
            </span>

            <h2 class="text-xl font-medium text-neutral-900">
              Direct Correspondence
            </h2>
          </div>

          {/* <!-- Contact Details --> */}
          <div class="space-y-4">
            {/* <!-- Email --> */}
            <div class="flex items-start justify-between bg-stone-50 p-4">
              <div>
                <span class="block text-xs uppercase tracking-wider text-stone-600">
                  General &amp; Inquiries
                </span>

                <a
                  href="mailto:studio@ateliervane.com"
                  class="text-sm text-neutral-900 underline underline-offset-4 transition-colors hover:text-stone-600"
                >
                  studio@ateliervane.com
                </a>
              </div>

              <span class="material-symbols-outlined text-stone-600 text-[20px]">
                alternate_email
              </span>
            </div>

            {/* <!-- Phone --> */}
            <div class="flex items-start justify-between bg-stone-50 p-4">
              <div>
                <span class="block text-xs uppercase tracking-wider text-stone-600">
                  Direct Telephone
                </span>

                <a
                  href="tel:+442079460820"
                  class="text-sm text-neutral-900 transition-colors hover:text-stone-600"
                >
                  +44 (0)20 7946 0820
                </a>
              </div>

              <span class="material-symbols-outlined text-stone-600 text-[20px]">
                call
              </span>
            </div>

            {/* <!-- Locations --> */}
            <div class="space-y-4 bg-stone-50 p-4">
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-wider text-stone-600">
                  Our Studios
                </span>

                <span class="material-symbols-outlined text-stone-600 text-[20px]">
                  pin_drop
                </span>
              </div>

              <div class="space-y-4 pt-2">
                <div>
                  <span class="block text-xs font-medium uppercase text-neutral-900">
                    London Mayfair
                  </span>

                  <p class="text-sm text-stone-500">
                    14 Berkeley Square, Mayfair, London W1J 6BD
                  </p>
                </div>

                <div class="pt-2">
                  <span class="block text-xs font-medium uppercase text-neutral-900">
                    Copenhagen
                  </span>

                  <p class="text-sm text-stone-500">
                    Bredgade 34, 1260 København K
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Working Hours --> */}
            <div class="flex items-start gap-3 bg-stone-50 p-4">
              <span class="material-symbols-outlined mt-0.5 text-stone-600 text-[20px]">
                schedule
              </span>

              <div class="space-y-2">
                <span class="block text-xs font-medium uppercase text-neutral-900">
                  Studio Consultations
                </span>

                <p class="text-sm leading-relaxed text-stone-500">
                  Monday – Friday, 09:30 – 18:00 GMT.
                  <br />
                  Client consultations and material archive viewings strictly by
                  prior appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Editorial Quote --> */}
        <div class="bg-stone-200/60 p-6">
          <p class="font-serif text-xl italic leading-relaxed text-stone-600">
            “Restraint is not the absence of richness, but the discipline to
            reveal what is essential.”
          </p>

          <span class="mt-4 block text-xs font-medium uppercase tracking-widest text-stone-600">
            Atelier Principles · Edition V
          </span>
        </div>
      </div>
    </div>
  );
};

const SecondaryStructuralFeature = () => {
  return (
    <div class="mt-16 bg-stone-100 p-6 pt-8 md:p-8">
      {/* <!-- Header --> */}
      <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div class="max-w-xl space-y-3">
          <span class="text-xs font-medium uppercase tracking-[0.2em] text-stone-600">
            Methodology
          </span>

          <h3 class="text-2xl font-medium leading-tight tracking-tight text-neutral-900">
            From Initial Dialogue to Realization
          </h3>

          <p class="text-base leading-relaxed text-stone-500">
            Every engagement begins with an immersive dialogue on light,
            texture, lifestyle, and spatial proportions.
          </p>
        </div>

        <div class="text-xs text-stone-600">Avg. Timeline: 4 – 18 Months</div>
      </div>

      {/* <!-- Stages --> */}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* <!-- Stage 01 --> */}
        <div class="flex h-48 flex-col justify-between bg-white p-6">
          <div class="flex items-center justify-between">
            <span class="text-xs font-medium uppercase tracking-widest text-stone-600">
              Stage 01
            </span>

            <span class="material-symbols-outlined text-[20px] text-stone-600">
              explore
            </span>
          </div>

          <div>
            <h4 class="font-serif text-lg text-neutral-900">
              Spatial Appraisal
            </h4>

            <p class="mt-2 text-sm leading-relaxed text-stone-500">
              On-site survey, historic study, volume balancing, and programmatic
              requirement charting.
            </p>
          </div>
        </div>

        {/* <!-- Stage 02 --> */}
        <div class="flex h-48 flex-col justify-between bg-white p-6">
          <div class="flex items-center justify-between">
            <span class="text-xs font-medium uppercase tracking-widest text-stone-600">
              Stage 02
            </span>

            <span class="material-symbols-outlined text-[20px] text-stone-600">
              palette
            </span>
          </div>

          <div>
            <h4 class="font-serif text-lg text-neutral-900">
              Material Curation
            </h4>

            <p class="mt-2 text-sm leading-relaxed text-stone-500">
              Custom joinery draughts, natural stone selection, bespoke
              textiles, and lighting design.
            </p>
          </div>
        </div>

        {/* <!-- Stage 03 --> */}
        <div class="flex h-48 flex-col justify-between bg-white p-6">
          <div class="flex items-center justify-between">
            <span class="text-xs font-medium uppercase tracking-widest text-stone-600">
              Stage 03
            </span>

            <span class="material-symbols-outlined text-[20px] text-stone-600">
              construction
            </span>
          </div>

          <div>
            <h4 class="font-serif text-lg text-neutral-900">
              Turnkey Execution
            </h4>

            <p class="mt-2 text-sm leading-relaxed text-stone-500">
              Contract administration, architectural oversight, artisan
              coordination, and white-glove handover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
