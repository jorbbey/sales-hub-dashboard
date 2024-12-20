/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  // Add this section to ensure Next.js functions as a serverless app on Netlify
  target: "serverless",
};

export default nextConfig;
