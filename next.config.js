module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.example.com/:path*",
      },
    ];
  },

  images: {
    domains: [
      "d195hqvwre713v.cloudfront.net",
      "ssl.gstatic.com",
      "sparkmysport.me",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};
