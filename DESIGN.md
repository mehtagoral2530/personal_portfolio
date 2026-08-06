# Design — Goral Bhatt Portfolio

## Product purpose

This is a recruiter-facing, single-page portfolio for Goral Bhatt: a healthcare market-intelligence analyst with biotechnology training. Its job is to make three things clear quickly: the kind of research she supports, the credible evidence behind that work, and how to contact her or download her résumé. It is not a product dashboard or a gallery of speculative case studies.

The intended audience scans quickly on desktop and mobile. The experience therefore moves in a deliberate order: fit and availability, selected research contributions, career context, foundation, then contact.

## Direction contract

**Thesis:** a healthcare-intelligence fieldbook, not a résumé arranged as cards.

**Direction seed:** `ed15bcb8` — *Fieldbook evidence plates*.

The visual language should feel like a carefully assembled research brief: paper stock, indexes, labels, rules, fields of evidence, and calm but decisive hierarchy. The approved healthcare-intelligence hero image and the existing palette are part of the contract and must be retained. Ink anchors the system; coral, sage, sky, and lavender organize rather than decorate.

The design should remain precise, evidence-led, intelligent, and human. New work must preserve the recruiter path from understanding the candidate to verifying relevance to making contact.

## Art direction: Healthcare Intelligence Fieldbook

- Use broad, full-width research fields rather than floating UI modules. A section should read as a page or plate from a working fieldbook.
- Let typography, spacing, rules, and structured facts do the expressive work. The composition is editorial and referential, not app-like.
- Favor restrained, tactile contrast: warm paper surfaces, dark ink, thin dividers, colored research fields, and a single strong image in the opening view.
- Keep the language grounded in available résumé evidence. Work should be described as contributions, evidence handled, scope, and deliverables—not as confidential work made visually legible through invented artifacts.

## Layout and storytelling

1. **Persistent orientation.** A sticky header carries the name, portfolio label, anchored navigation, and résumé download. On desktop, navigation is visible; on smaller screens it becomes an accessible menu.
2. **Hero / first viewport.** The opening puts the research proposition beside the approved illustration. A field-notes identifier, role, short positioning statement, work CTA, résumé CTA, location, and image caption establish both the candidate and the domain immediately.
3. **Contribution framing.** A short paper-deep introduction names the central idea: healthcare evidence needs a point of view.
4. **Research workstreams.** Three full-bleed evidence plates—medical-device intelligence, competitive-intelligence tracker design, and biosimilar opportunity assessment—use the same anatomy: field label, title, short description, structured facts, and signal vocabulary.
5. **Career trace.** A dark-ink chronological trace adds the employment context behind the contributions. It is deliberately list-like and readable, not a timeline graphic.
6. **Foundation ledger.** Education, credentials, and toolkit are presented as a restrained definition-list ledger.
7. **Contact close.** A coral closing field makes the contact routes unmistakable, followed by a compact footer and return-to-top route.

At wider desktop widths, the hero becomes a three-column composition and the work plates reserve a signal column. Supporting sections use a narrow label column with a wider content column. On small screens, each layout becomes a single readable flow without relying on horizontal position to convey meaning.

## Type system

- **Display — Instrument Serif:** use for the hero statement and large research signals. It gives the fieldbook its editorial voice; use it sparingly and at high contrast.
- **Text and headings — Archivo:** use for navigation, body copy, section headings, facts, and calls to action. It keeps content contemporary and compact.
- **Utility — IBM Plex Mono:** reserve for index-like metadata: field labels, tabs, dates, captions, credentials labels, and navigation context. These labels are uppercase, small, and well-spaced.

Large headlines use tight tracking and short line lengths. Body copy remains less dense, softer in color where secondary, and limited in measure. Do not introduce a fourth typeface or substitute ornamental type for evidence hierarchy.

## Palette roles

The palette is fixed and role-based:

- **Paper / paper-deep / cream** (`#fbfaf6`, `#f1eee6`, `#fffdf8`): the default canvas, alternate editorial field, and light-on-dark text.
- **Ink / soft ink** (`#23313a`, `#50606a`): primary reading color, structure, header, and dark career field; soft ink is for secondary explanation.
- **Coral / dark coral** (`#be5d58`, `#9f4544`): orientation and action—kickers, field markers, active accents, focus-adjacent emphasis, the contact close, and interactive hover states.
- **Sage / sage-deep** (`#dce7de`, `#b2c9b7`), **sky** (`#e8edf5`), and **lavender** (`#ece8f2`): the three research-field backgrounds and the desktop edge index. Their assignment distinguishes workstreams without ranking them.

Color reinforces structure but never carries the only meaning. Preserve the generous use of quiet paper and ink; colored fields should remain large, calm blocks rather than badges or confetti.

## Signature device

The signature is the **fieldbook spine and evidence plate system**. At desktop widths, a narrow fixed left-edge spine indexes the palette in four stacked segments. In the hero, the “Field notes / Selected work” identifier becomes vertical, echoing a filing or notebook edge. Each workstream then appears as a full research plate with a coral plate marker, fact rows separated by rules, and oversized signal terms.

This device turns the approved palette into an organizing system and makes the portfolio recognizable without fake visualizations. If it evolves, retain its core functions: indexing, evidence structure, and a readable relationship between workstream, facts, and signals.

## Accessibility and responsiveness

- Keep the semantic page structure: landmark header and main, real headings, `article` elements for workstreams, ordered career list, definition lists for evidence and foundation, and an `address` for contact routes.
- Preserve the skip link, visible keyboard focus, descriptive link labels, useful image alternative text, and anchor scroll offset beneath the sticky header.
- The mobile menu must retain its current button state, focus-on-open behavior, Escape handling, and Tab containment. Menu links close the menu when followed.
- Interactive controls have generous target sizes; links and buttons should retain clear hover and focus treatment. Do not depend on hover alone.
- Respect `prefers-reduced-motion`; the hero reveal, smooth scrolling, and transitions must become effectively still for users who request it.
- Maintain responsive measurements with `clamp()`, reflow grids instead of squeezing columns, and allow contact text to wrap. The page has a 20rem minimum width and must not introduce horizontal overflow or text overlap.

## Deliberately avoided

- Generic rounded-card grids, dashboard shells, and interchangeable portfolio tiles.
- Fake graphs, charts, KPI counters, proprietary-looking tracker screens, or invented visual evidence.
- Gradients, glossy effects, decorative blobs, and ornamental motion that dilute the research-brief tone.
- Invented clients, outcomes, metrics, artifacts, or claims beyond the résumé-derived material in the page.
- Decorative complexity that makes the recruiter work to find the résumé, career history, or contact details.
