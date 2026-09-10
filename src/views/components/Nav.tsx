import { css } from "hono/css";
import { FC } from "hono/jsx";

export const Nav: FC = () => {
  const navClass = css`
    display: none;

    @media screen and (width > 768px) {
      display: block;
    }
  `;

  const listClass = css`
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    gap: var(--size-4);

    li {
      text-transform: uppercase;
    }
  `;

  const linkClass = css`
    text-decoration: none;
    color: var(--gray-8);
    font-size: 12px;
    letter-spacing: var(--font-letterspacing-2);

    &.active {
      font-size: 14px;
      font-weight: var(--font-weight-6);
      text-decoration: underline;
    }
  `;
  return (
    <nav class={navClass}>
      <ul class={listClass}>
        <li>
          <a href="" class={linkClass}>
            Home
          </a>
        </li>
        <li>
          <a href="" class={linkClass}>
            Services
          </a>
        </li>
        <li>
          <a href="" class={linkClass}>
            About
          </a>
        </li>
        <li>
          <a href="" class={linkClass}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
