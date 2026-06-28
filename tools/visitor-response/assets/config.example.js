// Copy this file to config.js and edit values for your deployment.

// Cloudflare Worker endpoint. Do not include a trailing slash.
window.L30_RESPONSE_API_BASE = "https://<your-worker-url>.workers.dev";

// Board/campaign ID. Keep this aligned with the boards table.
window.L30_RESPONSE_BOARD_ID = "one-question-response-2026-06";

// Cloudflare Turnstile site key. In production, set Worker REQUIRE_TURNSTILE=true and provide this value.
window.L30_TURNSTILE_SITE_KEY = "";
