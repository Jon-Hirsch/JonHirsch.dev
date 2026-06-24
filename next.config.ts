import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: false,
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [["rehype-pretty-code", { theme: "one-dark-pro" }]],
  },
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
