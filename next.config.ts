import type { NextConfig } from "next";

// TODO: Confirm the Cloudflare Next.js deployment path (adapter/runtime) before
// adding any deployment-specific config. See README.md.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
