/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'portfolio_website';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,  // Disable Image Optimization for static export
  },
};

export default nextConfig;