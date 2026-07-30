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
      {
        protocol: "https",
        hostname: "rapidmoney.in",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.rapidmoney.in",
        pathname: "/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products', 
        destination: '/instant-personal-loan',
        permanent: true,
      },
       {
        source: '/product', 
        destination: '/instant-personal-loan',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
