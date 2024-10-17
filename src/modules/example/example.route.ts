import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/common/lib/create-app.lib";
import { OK_CODE } from "@/common/utils/http-status-codes.util";

export const exampleRouter = createRouter().openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              message: z.string(),
            }),
          },
        },
        description: "Example API Index",
      },
    },
  }),
  (c) => {
    return c.json(
      {
        success: true,
        message: "Hello Hono!",
      },
      OK_CODE,
    );
  },
);
