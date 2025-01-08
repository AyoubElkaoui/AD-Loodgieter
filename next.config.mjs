/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Gebruik next-gen formats
  },
  experimental: {
    optimizeCss: true, // Optimaliseer CSS
  },
};

export default nextConfig;
