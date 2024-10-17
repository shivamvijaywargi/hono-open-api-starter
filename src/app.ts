import { configureOpenAPI } from "./common/lib/configure-open-api.lib";
import { createApp } from "./common/lib/create-app.lib";
import { exampleRouter } from "./modules/example/example.route";

export const app = createApp();

const routes = [exampleRouter];

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
