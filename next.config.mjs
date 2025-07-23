/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.12",
        port: "5020",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "qg8gwsg8okkoww4sowwgs0c8.3.7.92.238.sslip.io",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
