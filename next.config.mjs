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
        protocol: "https",
        hostname: "web-backend.rapidmoney.in",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
