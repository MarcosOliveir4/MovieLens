import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [{ source: '/', destination: '/home', permanent: true }]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '**'
      }
    ]
  }
}

export default nextConfig
