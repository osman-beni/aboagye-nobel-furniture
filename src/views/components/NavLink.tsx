// import type { FC } from "hono/jsx";
// import { useRequestContext } from "hono/jsx-renderer";

// type NavLinkProps = {
//   href: string;
//   children: string;
//   mobile?: boolean;
// };

// export const NavLink: FC<NavLinkProps> = ({
//   href,
//   children,
//   mobile = false,
// }) => {
//   const c = useRequestContext();
//   const isActive = c.req.path === href;

//   const activeClasses = mobile
//     ? "border-b border-neutral-200 py-4 text-sm font-bold uppercase tracking-[0.12em] text-neutral-900"
//     : "border-b border-neutral-900 py-2 text-xs font-bold uppercase tracking-wider text-neutral-900";

//   const inactiveClasses = mobile
//     ? "border-b border-neutral-200 py-4 text-sm font-medium uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-neutral-900"
//     : "py-2 text-xs font-medium uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-900";

//   return (
//     <a
//       href={href}
//       class={isActive ? activeClasses : inactiveClasses}
//       aria-current={isActive ? "page" : undefined}
//     >
//       {children}
//     </a>
//   );
// };
import type { FC } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";

type NavLinkProps = {
  href: string;
  children: string;
  variant?: "header" | "mobile" | "footer";
};

export const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  variant = "header",
}) => {
  const c = useRequestContext();
  const isActive = c.req.path === href;

  const styles = {
    header: {
      active:
        "border-b border-neutral-900 py-2 text-xs font-bold uppercase tracking-wider text-neutral-900",
      inactive:
        "py-2 text-xs font-medium uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-900",
    },

    mobile: {
      active:
        "border-b border-neutral-200 py-4 text-sm font-bold uppercase tracking-[0.12em] text-neutral-900",
      inactive:
        "border-b border-neutral-200 py-4 text-sm font-medium uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-neutral-900",
    },

    footer: {
      active: "text-sm font-bold text-neutral-900 transition-colors",
      inactive:
        "text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900",
    },
  };

  const classes = styles[variant];

  return (
    <a
      href={href}
      class={isActive ? classes.active : classes.inactive}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  );
};
