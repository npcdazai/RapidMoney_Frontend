/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.32",
        port: "5020", 
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
