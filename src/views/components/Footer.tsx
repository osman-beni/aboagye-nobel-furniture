import { FC } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";
import { NavLink } from "./NavLink";

export const Footer: FC = () => {
  const context = useRequestContext();

  return (
    <footer class="mt-16 w-full border-t border-neutral-200 bg-stone-100 md:mt-24">
      <div class="mx-auto max-w-360 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
        {/* <!-- Main footer --> */}
        <div class="grid grid-cols-1 gap-12 border-b border-neutral-200 pb-12 md:grid-cols-12 md:gap-10">
          {/* <!-- Brand --> */}
          <div class="flex flex-col justify-between space-y-6 md:col-span-4">
            <div class="space-y-3">
              {/* <span class="block font-serif text-xl uppercase tracking-[0.2em] text-neutral-900">
                AN FURNITURE
              </span> */}

              <p class="max-w-sm text-sm leading-relaxed text-neutral-500">
                Crafting beautiful homes.
              </p>
            </div>

            <div class="pt-1">
              <span class="mb-2 block text-xs font-medium uppercase tracking-widest text-neutral-500">
                Locations
              </span>

              <p class="text-sm text-neutral-900">Accra</p>
            </div>
          </div>

          {/* <!-- Index --> */}
          <div class="md:col-span-3">
            <span class="mb-6 block text-xs font-medium uppercase tracking-widest text-neutral-900">
              Index
            </span>

            <nav class="flex flex-col space-y-3">
              <NavLink href="/" variant="footer">
                Home
              </NavLink>

              <NavLink href="/projects" variant="footer">
                Projects
              </NavLink>

              <NavLink href="/services" variant="footer">
                Services
              </NavLink>

              <NavLink href="/about" variant="footer">
                About
              </NavLink>

              <NavLink href="/contact" variant="footer">
                Contact &amp; Inquiries
              </NavLink>
            </nav>
          </div>

          {/* <!-- Correspondence --> */}
          <div class="md:col-span-3">
            <span class="mb-6 block text-xs font-medium uppercase tracking-widest text-neutral-900">
              Correspondence
            </span>

            <div class="flex flex-col space-y-3">
              <a
                href="mailto:aboagyenoblefurniture@gmail.com"
                class="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                aboagyenoblefurniture@gmail.com
              </a>

              <a href="tel:+233506157529" class="text-sm text-neutral-500">
                Call us: +233506157529
              </a>
              <a
                href="https://wa.me/233506157529"
                target="_blank"
                class="text-sm text-neutral-500"
              >
                Whatsapp
              </a>

              <p class="pt-1 text-sm leading-relaxed text-neutral-500">
                Client consultations strictly by appointment.
              </p>
            </div>
          </div>

          {/* <!-- Editorial --> */}
          <div class="md:col-span-2">
            <span class="mb-6 block text-xs font-medium uppercase tracking-widest text-neutral-900">
              Editorial
            </span>

            <div class="flex flex-col space-y-3">
              <a
                href="https://tiktok.com/@aboagyenobleofficial"
                class="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                target="_blank"
              >
                Tiktok
              </a>

              <a
                href="https://www.instagram.com/aboagyenoblefurniture"
                class="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Bottom footer --> */}
        <div class="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <span class="text-xs text-neutral-500">
            {new Date().getFullYear()} Aboagye Noble Furniture. All rights
            reserved.
          </span>
        </div>
        <img src="/images/logo-avif.avif" class="w-full" alt="" />
      </div>
    </footer>
  );
};
