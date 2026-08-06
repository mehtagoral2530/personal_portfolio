import { readFile, writeFile } from "node:fs/promises";

const target = new URL("../dist/client/index.html", import.meta.url);
const contract = `<!--
THESIS: A healthcare-intelligence fieldbook, not a résumé arranged as cards.
OWN-WORLD: Existing paper, coral, sage, sky, and lavender become full research fields and indexed tabs; ink anchors all type.
STORY: Recruiters move from fit to real research work to career context to contact without decoding visual decoration.
FIRST VIEWPORT: A research-brief title crosses the page beside the approved evidence image and a decisive work CTA.
FORM: Fieldbook evidence plates; seed ed15bcb8.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
-->`;

const html = await readFile(target, "utf8");
const output = html.includes("THESIS: A healthcare-intelligence fieldbook")
  ? html
  : html.replace("<body>", `<body>${contract}`);

await writeFile(target, output);
