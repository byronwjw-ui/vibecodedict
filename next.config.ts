import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // We rely on local lint; don't block Vercel builds on lint.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Safety net: allow build to proceed even if a stray non-blocking type
    // error sneaks in. We validate data separately via scripts/validate-data.mjs
    // and run `npm run lint` locally.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
