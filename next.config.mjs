/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/home",
      },
      {
        source: "/hi",
        destination: "/test-ui",
      },
    ];
  },
};

export default nextConfig;
