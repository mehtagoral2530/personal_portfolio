import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Goral's recruiter portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Goral Bhatt \| Healthcare Market Research &amp; Data Analyst/i);
  assert.match(html, /Healthcare market evidence, made usable/i);
  assert.match(html, /See research contributions/i);
  assert.match(html, /U\.S\. medical-device market intelligence/i);
  assert.match(html, /GlobalData Plc/i);
  assert.match(html, /mehtagoral2530@gmail\.com/i);
  assert.match(html, /href="\/Goral-Bhatt-Resume\.pdf"/i);
  assert.doesNotMatch(html, /data sources used/i);
  assert.doesNotMatch(html, /Experience story|Explore my work/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site|react-loading-skeleton/i);
});

test("keeps the responsive portfolio contracts in the source", async () => {
  const [page, css, header] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../components/SiteHeader.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="timeline-entry"/);
  assert.doesNotMatch(page, /className="experience-row"/);
  assert.match(page, /className="hero-image-panel"/);
  assert.match(page, /Skip to content/);
  assert.match(page, /fetchPriority="high"/);
  assert.match(page, /className="button button-primary"/);
  assert.match(page, /className="case-facts"/);
  assert.doesNotMatch(page, /proofPoints|capability-grid|method-section|case-index|tag-list|contact-cards/);
  assert.match(css, /\.button\s*\{[\s\S]*?min-height:\s*3\.5rem;[\s\S]*?font-size:\s*1rem;/);
  assert.match(css, /:focus-visible\s*\{/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /@media \(min-width: 70rem\)[\s\S]*?\.timeline-entry\s*\{/);
  assert.doesNotMatch(css, /\.hero-art|\.insight-board|\.source-strip|\.proof-item|\.capability-card|\.hero-note|\.contact-card/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /Close navigation menu/);
});
