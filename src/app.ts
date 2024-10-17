import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";

import { notFoundMiddleware } from "./common/middlewares/not-found.middleware";
import { onErrorMiddleware } from "./common/middlewares/on-error.middleware";

export const app = new OpenAPIHono();

app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// global middlewares
app.notFound(notFoundMiddleware);
app.onError(onErrorMiddleware);
