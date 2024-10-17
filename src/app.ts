import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";

import { notFoundMiddleware } from "./common/middlewares/not-found.middleware";
import { onErrorMiddleware } from "./common/middlewares/on-error.middleware";
import { pinoLogger } from "./common/middlewares/pino-logger.middleware";

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

export const app = new OpenAPIHono<AppBindings>();

app.use(pinoLogger());

app.get("/", (c) => {
  c.var.logger.info("WOOOOOOW");
  c.var.logger.debug("WOOOOOOW");
  return c.text("Hello Hono!");
});

// global middlewares
app.notFound(notFoundMiddleware);
app.onError(onErrorMiddleware);
