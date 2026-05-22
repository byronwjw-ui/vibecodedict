import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // We rely on local lint; don't block Vercel builds on lint.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Keep type-checking, but allow build to proceed if there are non-blocking issues.
    // We pre-fix all known type errors; this is a safety net.
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
