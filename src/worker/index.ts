import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";

const app = new Hono<{ Bindings: Env }>();

// API endpoint (optional)
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// Serve static assets
app.use("/*", serveStatic());

export default app;
