import { Hono } from "hono";
import { renderer } from "./renderer";
import { About, Home, Projects, Services } from "./views/pages";
import { Contact } from "./views/pages/Contact";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<Home />);
});

app.get("/contact", (c) => {
  return c.render(<Contact />);
});

app.get("/about", (c) => {
  return c.render(<About />);
});

app.get("/services", (c) => {
  return c.render(<Services />);
});

app.get("/projects", (c) => {
  return c.render(<Projects />);
});

export default app;
