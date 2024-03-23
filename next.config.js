module.exports = {
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
