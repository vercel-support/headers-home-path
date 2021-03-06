module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
          {
             key: 'Content-Security-Policy',
             value: "default-src 'self' trusted.com *.trusted.com"
          }
        ],
      },
    ]
  },  
}
