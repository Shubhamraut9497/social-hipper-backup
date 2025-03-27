import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.devtool = "source-map"; // This ensures source maps are generated in development
    }
    return config;
  },
  images: {
    domains: ["scontent.cdninstagram.com", "graph.instagram.com"],
  },
};

export default nextConfig;
