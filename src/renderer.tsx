import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script, ViteClient } from "vite-ssr-components/hono";
import { Header } from "./views/components/Header";
import { Style } from "hono/css";
import { Footer } from "./views/components";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Beautiful, timeless furniture for your home."
        />
        <title>Your Furniture Store</title>
        <ViteClient />
        <Link href="/src/open-props.min.css" rel="stylesheet" />
        <Link href="/src/style.css" rel="stylesheet" />
        <Script src="/public/js/script.js" defer />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
});
