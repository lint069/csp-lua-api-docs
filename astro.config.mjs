// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
// import starlightSidebarSwipe from "starlight-sidebar-swipe";
// import starlightLinksValidator from "starlight-links-validator";
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";
import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://lint069.github.io/csp-lua-api-docs",
  base: "/csp-lua-api-docs",
  trailingSlash: "always",
  server: { port: 6969, host: true },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
  integrations: [
    astroExpressiveCode({
      themes: ["dark-plus"],
    }),
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
        // starlightSidebarSwipe(),
        starlightImageZoom(),
        // starlightLinksValidator(),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "About the SDK", slug: "guides/what-is-this" },
            { label: "Getting Started", slug: "guides/getting-started" },
          ],
        },
        {
          label: "Primitives",
          autogenerate: { directory: "primitives" },
        },
        {
          label: "ac",
          autogenerate: { directory: "ac" },
        },
        {
          label: "io",
          autogenerate: { directory: "io" },
        },
        {
          label: "math",
          autogenerate: { directory: "math" },
        },
        {
          label: "render",
          autogenerate: { directory: "render" },
        },
        {
          label: "ui",
          autogenerate: { directory: "ui" },
        },
        {
          label: "web",
          autogenerate: { directory: "web" },
        },
        {
          label: "miscellaneous",
          autogenerate: { directory: "miscellaneous" },
        },
        {
          label: "Community",
          items: [
            { label: "About this Project", slug: "community/about" },
            { label: "Contributing Guide", slug: "community/contributing" },
          ],
        },
      ],
    }),
  ],
});
