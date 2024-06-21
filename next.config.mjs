/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "*" }],
  },
  /*  experimental: {
    serverActions: true,
  }, */
};

export default nextConfig;
