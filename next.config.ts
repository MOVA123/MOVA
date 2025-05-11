import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '**.s3.ap-southeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.aliyuncs.com',
      },
      {
        protocol: 'https',
        hostname: 'd2rbho9qhylu5v.cloudfront.net',
      }
    ],// 添加你的域名
  },
  async rewrites() {
    // console.log(process.env.NODE_ENV);
    return [
      {
        source: "/teams/:teamId/ai-tools/api/upload/img",
        destination: "/api/upload/img",
      },
      {
        source: "/teams/:teamId/ai-tools/api/ai-tools/video",
        destination: "/api/ai-tools/video",
      },
      {
        source: "/teams/:teamId/ai-tools/api/ai-tools/tasks/:task_id",
        destination: "/api/ai-tools/tasks/:task_id",
      },
      {
        source: "/teams/:teamId/ai-tools/api/ai-tools/img",
        destination: "/api/ai-tools/img",
      },
    ];
  },
};

export default nextConfig;
