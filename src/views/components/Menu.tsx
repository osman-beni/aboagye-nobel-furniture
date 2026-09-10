import { FC } from "hono/jsx";
import { css } from "hono/css";

export const Menu: FC = () => {
  return (
    <>
      <button
        class={css`
          @media screen and (width > 768px) {
            display: none;
          }
        `}
        command="toggle-popover"
        commandfor="mobile-nav"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
      <nav
        class={css`
          margin: 0;
          top: var(--size-10);
          width: 100%;
        `}
        id="mobile-nav"
        popover
      >
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </>
  );
};
