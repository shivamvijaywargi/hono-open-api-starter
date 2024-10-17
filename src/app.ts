import { configureOpenAPI } from "./common/lib/configure-open-api.lib";
import { createApp } from "./common/lib/create-app.lib";

export const app = createApp();

configureOpenAPI(app);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
