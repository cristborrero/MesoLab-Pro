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
  async headers() {
    return [
      {
        // HSTS completo para todas las rutas
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            // 2 años + includeSubDomains + preload (cumple requisitos de HSTS preload list)
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
      {
        // Cache largo para assets estáticos de Next.js (immutable con hash en filename)
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache para fuentes y SVGs públicos
        source: "/(.*\\.(woff|woff2|ttf|otf|svg|ico|png|jpg|jpeg|webp|avif))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

