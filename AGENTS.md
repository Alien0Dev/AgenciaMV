# AGENTS

## Snapshot
- **Stack:** Astro 6 + Svelte 5 + TypeScript 6, package manager is `pnpm`.
- **Node:** `>=22.12.0` (`package.json` `engines`).
- **Single-package repo** — `pnpm-workspace.yaml` only sets build permissions (`allowBuilds`), no workspaces.
- **No linter, formatter, test framework, or CI configured.** Don't waste time looking for them.

## Commands
| Action | Command |
|---|---|
| Install | `pnpm install` |
| Dev server | `pnpm dev` (Astro on `localhost:4321`) |
| Build | `pnpm build` (outputs to `dist/`) |
| Preview | `pnpm preview` |
| Astro CLI | `pnpm astro ...` (e.g. `pnpm astro check`) |
| VSCode debug | Launch config in `.vscode/launch.json` runs `astro dev` |

## Project Wiring
- **`src/layouts/Layout.astro`** is the global shell — injects global nav (`Header.astro`), footer (`Footer.astro`), imports `src/variables.css`, and loads Font Awesome from CDN via `<script is:inline>`.
- **`src/pages/`** — file-based routing. `index.astro` is the home page, `services.astro` and `contact.astro` are placeholders.
- **Home page** (`src/pages/index.astro`) uses a full-viewport video hero (`HeaderWelcome.astro`) and an Embla‑based carousel (`Carousel.svelte`, mounted with `client:load`).
- **Carousel** uses `embla-carousel-svelte`; card data and types are in `src/types.d.ts` / `src/components/welcome/carousel/Cards.ts`.
- **`src/variables.css`** — shared CSS custom properties for colors, effects, fonts, and breakpoints.
- **`src/types.d.ts`** — shared `LinkType`, `CardType`, `Direction` interfaces.
- All images in the carousel are imported statically from `src/assets/img/`.

## Conventions / Gotchas
- Design tokens live in `src/variables.css`; all components reference them. Keep additions there.
- Header.astro uses `CSS.registerProperty` for animated gradient (`--grad-pos`). Only runs if the API is available.
- Footer links are driven by the same `LinkType[]` array defined in `Layout.astro`.
- `dist/`, `.astro/`, `node_modules/` are gitignored; don't edit them directly.
- `README.md` is the Astro starter template boilerplate — ignore it.
