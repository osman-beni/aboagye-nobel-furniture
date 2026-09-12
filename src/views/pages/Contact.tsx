import { css } from "hono/css";
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
            Inquiry
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
      <div class="bg-stone-50 p-6 h-full shadow-sm md:col-span-7 md:p-8 topography-bg"></div>

      {/* <!-- Studio Information Sidebar --> */}
      <div class="flex flex-col space-y-8 md:col-span-5">
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
                  href="mailto:aboagyenoblefurniture@gmail.com"
                  class="text-sm text-neutral-900 underline underline-offset-4 transition-colors hover:text-stone-600"
                >
                  Email Us
                </a>
              </div>

              <span class="material-symbols-outlined text-stone-600 text-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="oklch(44.4% 0.011 73.639)"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm85-315q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Z" />
                </svg>
              </span>
            </div>

            {/* <!-- Phone --> */}
            <div class="flex items-start justify-between bg-stone-50 p-4">
              <div>
                <span class="block text-xs uppercase tracking-wider text-stone-600">
                  Direct Telephone
                </span>

                <a
                  href="https://wa.me/233506157529?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  class="mt-3 block text-sm text-neutral-900 underline underline-offset-4 transition-colors hover:text-stone-600"
                >
                  Whatsapp
                </a>
                <a
                  href="tel:233506157529"
                  class="mt-3 block text-sm text-neutral-900 underline underline-offset-4 transition-colors hover:text-stone-600"
                >
                  Call Us
                </a>
              </div>

              <span class="material-symbols-outlined text-stone-600 text-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="oklch(44.4% 0.011 73.639)"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
              </span>
            </div>

            {/* <!-- Locations --> */}
            <div class="space-y-4 bg-stone-50 p-4">
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-wider text-stone-600">
                  Our Studios
                </span>

                <span class="material-symbols-outlined text-stone-600 text-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="oklch(44.4% 0.011 73.639)"
                  >
                    <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
                  </svg>
                </span>
              </div>

              <div class="pt-2">
                <div>
                  <span class="block text-xs font-medium uppercase text-neutral-900">
                    North Kaneshie
                  </span>

                  <p class="text-sm text-stone-500">
                    Nii Asere Ayitey Street, Accra
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Working Hours --> */}
            <div class="flex items-start gap-3 bg-stone-50 p-4">
              <span class="material-symbols-outlined mt-0.5 text-stone-600 text-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="oklch(44.4% 0.011 73.639)"
                >
                  <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                </svg>
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
            Aboagye Noble Principles
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="oklch(44.4% 0.011 73.639)"
              >
                <path d="m300-300 280-80 80-280-280 80-80 280Zm180-120q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z" />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="oklch(44.4% 0.011 73.639)"
              >
                <path d="M80-80v-160h800v160H760v-80H540v80H420v-80H200v80H80Zm160-240q-17 0-28.5-11.5T200-360v-480q0-17 11.5-28.5T240-880h480q17 0 28.5 11.5T760-840v480q0 17-11.5 28.5T720-320H240Zm40-80h400v-400H280v400Zm80-240h240v-80H360v80Zm-80 240v-400 400Z" />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="oklch(44.4% 0.011 73.639)"
              >
                <path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z" />
              </svg>
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
