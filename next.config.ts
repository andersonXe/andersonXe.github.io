import type { NextConfig } from "next";

// GitHub Pages serves a project repo under /<repo>. The deploy workflow passes
// the right prefix; locally it stays empty so `npm run dev` works at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
