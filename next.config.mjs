/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {},
      rules: {},
      loaders: {},
      // Desactiva totalmente Turbopack
      // (Next activará Webpack automáticamente)
      // ***
      enabled: false
      // ***
    },
  },
};

export default nextConfig;
