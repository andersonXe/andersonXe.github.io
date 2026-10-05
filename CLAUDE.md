# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Personal portfolio built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Statically exported and deployed to GitHub Pages.

## Common Commands

```bash
npm run dev     # development server at localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Stack

- **Next.js 16** with App Router — before writing any code, consult `node_modules/next/dist/docs/` for current API conventions
- **React 19**
- **Tailwind CSS v4** — config via `postcss.config.mjs`, no `tailwind.config.*` file needed
- **TypeScript 5**

## Architecture

All routes live under `app/`. The entry point is `app/page.tsx`. `app/layout.tsx` is the root layout wrapping the entire app.

Projects shown on the page are data in `app/data/projects.ts` — add or edit entries there. Each project shows a screenshot from `public/projects/` (16:10 WebP, ~1600px wide).

## Deployment

GitHub Pages via `.github/workflows/deploy.yml` — pushing to `main` builds the static export (`out/`) and publishes it. `next.config.ts` uses `output: "export"`, so server-only features (headers, rewrites, image optimization, API routes) are unavailable.

The repo is `andersonXe.github.io`, so the site is served at the root (https://andersonxe.github.io/). The workflow still passes the Pages base path as `NEXT_PUBLIC_BASE_PATH` (empty today); asset paths used outside `next/link` (e.g. `<Image src>`) are prefixed with it so a rename to a project repo keeps working.
