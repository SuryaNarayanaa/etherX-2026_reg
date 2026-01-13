/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/register",
  output:"standalone",
  assetPrefix:"/register",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig