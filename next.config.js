/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
      typescript: {
        ignoreBuildErrors: true,
      },
}

module.exports = nextConfig
