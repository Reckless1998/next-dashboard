/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental', // 'incremental' 值允许您对特定路线采用 PPR(部分预渲染)
  },
};

export default nextConfig;
