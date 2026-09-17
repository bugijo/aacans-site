import type { NextConfig } from "next";
const nextConfig: NextConfig = { output:'export', basePath:'/aacans-site', assetPrefix:'/aacans-site/', trailingSlash:true, poweredByHeader: false, images: { unoptimized: true } };
export default nextConfig;
