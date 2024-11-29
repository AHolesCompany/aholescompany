import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Change the output directory `out` -> `docs` (for Github pages)
  distDir: 'docs',
};

export default nextConfig;
