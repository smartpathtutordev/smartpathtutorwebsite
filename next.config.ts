import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tutor",
        destination: "/app/tutor/",
        permanent: false,
      },
      {
        source: "/parent",
        destination: "/app/parent/",
        permanent: false,
      },
      {
        source: "/parents",
        destination: "/app/parent/",
        permanent: false,
      },
      {
        source: "/teacher",
        destination: "/app/teacher/",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "https://portal.smartpathtutor.ph/admin",
      },
      {
        source: "/admin/:path*",
        destination: "https://portal.smartpathtutor.ph/admin/:path*",
      },
      {
        source: "/vendor/:path*",
        destination: "https://portal.smartpathtutor.ph/vendor/:path*",
      },
      {
        source: "/app/tutor/:path*",
        destination: "https://smartpath-apps.pages.dev/app/tutor/:path*",
      },
      {
        source: "/app/parent/:path*",
        destination: "https://smartpath-apps.pages.dev/app/parent/:path*",
      },
      {
        source: "/app/teacher/:path*",
        destination: "https://smartpath-apps.pages.dev/app/teacher/:path*",
      },
    ];
  },
};

export default nextConfig;
