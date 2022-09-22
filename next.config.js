/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    displayName: true,
    ssr: true,
    fileName: true,
    cssProp: true,
  },
};

module.exports = nextConfig;
