import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.highrisegame.com", "i.ibb.co"],
  },
};

export default withMDX(config);
