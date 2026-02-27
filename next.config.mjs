/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, // Add this line
  webpack: (config) => {
    return config;
  }
};

export default nextConfig;
