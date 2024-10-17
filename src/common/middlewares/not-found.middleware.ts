import type { NotFoundHandler } from "hono";

import { NOT_FOUND_CODE } from "../utils/http-status-codes.util";

export const notFoundMiddleware: NotFoundHandler = (c) => {
  return c.json(
    {
      success: false,
      message: `Route not found - ${c.req.path}`,
    },
    NOT_FOUND_CODE,
  );
};
