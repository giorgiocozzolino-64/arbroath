/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/p/[serial]": ["./public/arbroath.db"],
    },
  },
};

module.exports = nextConfig;
