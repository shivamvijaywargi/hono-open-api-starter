import { app } from "./app";

const port = Number.parseInt(process.env?.PORT, 10) || 8998;

export default {
  port,
  fetch: app.fetch,
};
