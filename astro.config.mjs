// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightSidebarSwipe from "starlight-sidebar-swipe";
// import starlightLinksValidator from "starlight-links-validator";
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";

// https://astro.build/config
export default defineConfig({
  site: "https://lint069.github.io/csp-lua-api-docs",
  base: "/csp-lua-api-docs",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
  integrations: [
    starlight({
      title: "CSP Lua API Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lint069/csp-lua-api-docs",
        },
      ],
      customCss: ["./src/css/style.css"],
      plugins: [
        starlightSidebarSwipe(),
        starlightImageZoom(),
        // starlightLinksValidator(),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [{ label: "Getting Started", slug: "guides/getting-started" }],
        },
        {
          label: "Types",
          autogenerate: { directory: "types" },
        },
        {
          label: "ac",
          autogenerate: { directory: "ac" },
        },
        {
          label: "ui",
          autogenerate: { directory: "ui" },
        },
      ],
    }),
  ],
});
