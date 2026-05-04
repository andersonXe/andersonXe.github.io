# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Landing page built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Deployed on Vercel.

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

All routes live under `app/`. The entry point is `app/page.tsx` (the landing page itself). `app/layout.tsx` is the root layout wrapping the entire app.

## Deployment

Vercel — pushing to `main` triggers automatic production deployment. All other branches get preview deployments.
