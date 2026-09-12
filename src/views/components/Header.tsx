import { FC } from "hono/jsx";
import { NavLink } from "./NavLink";

export const Header: FC = () => {
  return (
    <>
      <header class="fixed left-0 top-0 z-50 w-full border-b border-neutral-200/40 bg-white/90 backdrop-blur-md">
        <div class="mx-auto flex h-20 max-w-360 items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
          {/* <!-- Logo --> */}
          <div class="flex items-center gap-4 ">
            <a
              href="/"
              class="font-serif text-lg uppercase tracking-[0.18em] text-neutral-900 transition-colors hover:text-neutral-500"
            >
              {/* AN Furniture */}
              <img src="/images/logo-avif.avif" alt="" class="w-24" />
            </a>
          </div>

          {/* <!-- Desktop Navigation --> */}
          <nav class="hidden items-center gap-8 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* <!-- Mobile Menu Button --> */}
          <button
            type="button"
            id="mobile-menu-button"
            aria-expanded="false"
            aria-controls="mobile-menu"
            class="flex h-10 w-10 items-center justify-center text-neutral-900 md:hidden"
          >
            <span class="sr-only">Open navigation menu</span>

            <svg
              id="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>

            <svg
              id="close-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="hidden h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Mobile Navigation --> */}
        <div
          id="mobile-menu"
          class="hidden border-t border-neutral-200 bg-white md:hidden"
        >
          <nav class="mx-auto max-w-360 px-6 py-6 sm:px-8">
            <div class="flex flex-col">
              <nav class="flex flex-col">
                <NavLink href="/" variant="mobile">
                  Home
                </NavLink>

                <NavLink href="/projects" variant="mobile">
                  Projects
                </NavLink>

                <NavLink href="/services" variant="mobile">
                  Services
                </NavLink>

                <NavLink href="/about" variant="mobile">
                  About
                </NavLink>

                <NavLink href="/contact" variant="mobile">
                  Contact
                </NavLink>
              </nav>
            </div>

            {/* <!-- Mobile CTA --> */}
            <div class="mt-6 flex flex-col sm:flex-row gap-1">
              <a
                href="https://wa.me/233506157529?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                class="block w-full bg-neutral-900 px-6 py-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-neutral-700"
              >
                Whatsapp
              </a>
              <a
                href="https://tiktok.com/@aboagyenobleofficial"
                target="_blank"
                class="block w-full bg-neutral-900 px-6 py-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-neutral-700"
              >
                Tiktok
              </a>
              <a
                href="https://www.instagram.com/aboagyenoblefurniture"
                target="_blank"
                class="block w-full bg-neutral-900 px-6 py-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-neutral-700"
              >
                Instagram
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
