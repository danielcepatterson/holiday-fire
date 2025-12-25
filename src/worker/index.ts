import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// API endpoint (optional)
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
