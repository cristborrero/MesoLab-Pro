import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mesolabpro.com.co",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.mesolabpro.com.co",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

