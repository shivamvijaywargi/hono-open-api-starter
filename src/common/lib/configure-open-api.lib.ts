import env from "@/env";

import type { AppOpenAPI } from "./types";

import packageJSON from "../../../package.json";

export function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: env.API_TITLE,
    },
  });
}
