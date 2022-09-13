/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
          path: false,
          os: false,
        },
      };
      return config;
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      styledComponents: true,
    },
  };
};

module.exports = nextConfig;
