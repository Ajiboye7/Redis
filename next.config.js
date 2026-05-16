/** @type {import('next').NextConfig} */
/*const nextConfig = {
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        redis: 'commonjs redis',
      })
    }
    return config
  },
}

module.exports = nextConfig