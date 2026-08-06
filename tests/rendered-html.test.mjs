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

test("server-renders Goral's healthcare intelligence fieldbook", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Goral Bhatt \| Healthcare Market Intelligence/i);
  assert.match(html, /Research that helps healthcare teams see what matters next/i);
  assert.match(html, /Healthcare market intelligence analyst/i);
  assert.match(html, /Explore research/i);
  assert.match(html, /U\.S\. medical-device market intelligence/i);
  assert.match(html, /Deliverable/i);
  assert.match(html, /GlobalData Plc/i);
  assert.match(html, /mehtagoral2530@gmail\.com/i);
  assert.match(html, /href="(?:\/personal_portfolio)?\/Goral-Bhatt-Resume\.pdf"/i);
  assert.doesNotMatch(html, /data sources used/i);
  assert.doesNotMatch(html, /Experience story|Explore my work/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site|react-loading-skeleton/i);
});

test("keeps the fieldbook visual and GitHub Pages contracts in the source", async () => {
  const [page, css, header, layout, nextConfig, viteConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../components/SiteHeader.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../vite.config.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="fieldbook-hero"/);
  assert.match(page, /className="hero-kicker"/);
  assert.match(page, /work-plate--\$\{stream\.tone\}/);
  assert.match(page, /<dt>Deliverable<\/dt>/);
  assert.match(page, /className="career-entry"/);
  assert.match(page, /Skip to content/);
  assert.match(page, /fetchPriority="high"/);
  assert.match(page, /assetPath\("\/Goral-Bhatt-Resume\.pdf"\)/);
  assert.match(page, /assetPath\("\/healthcare-intelligence-hero\.jpg"\)/);
  assert.doesNotMatch(page, /proofPoints|capability-grid|className="method-section"|className="case-index"|className="tag-list"|className="contact-cards"|className="case-study"/);
  assert.match(css, /\.action-link,[\s\S]*?min-height:\s*3\.35rem;[\s\S]*?font-size:\s*0\.98rem;/);
  assert.match(css, /:focus-visible\s*\{/);
  assert.match(css, /\.contact-close :focus-visible,[\s\S]*?outline-color:\s*var\(--cream\);/);
  assert.match(css, /\.contact-close \.section-tab--light\s*\{[\s\S]*?color:\s*var\(--cream\);/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /@media \(min-width: 70rem\)[\s\S]*?\.career-entry\s*\{/);
  assert.doesNotMatch(css, /\.hero-art|\.insight-board|\.source-strip|\.proof-item|\.capability-card|\.hero-note|\.contact-card/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /Close navigation menu/);
  assert.match(header, /event\.key === "Escape"/);
  assert.match(header, /window\.matchMedia\("\(min-width: 70rem\)"\)/);
  assert.match(layout, /export const metadata/);
  assert.doesNotMatch(layout, /headers\(\)/);
  assert.match(nextConfig, /output:\s*"export"/);
  assert.match(nextConfig, /trailingSlash:\s*true/);
  assert.match(viteConfig, /GITHUB_PAGES/);
  assert.match(viteConfig, /"\/personal_portfolio\/"/);
});
