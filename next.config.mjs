/** @type {import('next').NextConfig} */
const nextConfig = {
  htmlLimitedBots: /.*/,
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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rapidmoney.in',
          },
        ],
        destination: 'https://www.rapidmoney.in/:path*',
        permanent: true,
      },
      {
        source: '/emi-calculator',
        destination: '/personal-loan-emi-calculator',
        permanent: true,
      },
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
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-get-a-personal-loan-for-self-employed-without-income-proof',
        destination: '/blogs/how-to-get-a-personal-loan-for-self-employed-without-income-proof',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
