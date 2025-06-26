/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,  // Disable Image Optimization for static export
  },
};

export default nextConfig;