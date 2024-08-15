/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bytegrad.com",

        pathname: "/course-assets/react-nextjs/**",
      },
    ],
  },
};

module.exports = nextConfig;
