import { OpenAPIHono } from "@hono/zod-openapi";

import type { AppBindings } from "./types";

import {
  notFoundMiddleware,
  onErrorMiddleware,
  pinoLogger,
  serveEmojiFavicon,
} from "../middlewares";

export function createApp() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false,
  });

  app.use(pinoLogger());
  app.use(serveEmojiFavicon("🔥"));

  // global middlewares
  app.notFound(notFoundMiddleware);
  app.onError(onErrorMiddleware);

  return app;
}
