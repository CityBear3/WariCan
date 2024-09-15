/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
      ".cjs": [".cts", ".cjs"],
    };
    return webpackConfig;
  },
};

export default nextConfig;
