// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
// import starlightSidebarSwipe from "starlight-sidebar-swipe";
// import starlightLinksValidator from "starlight-links-validator";
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";
import starlightKbd from "starlight-kbd";

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
    starlight({
      title: "CSP Lua API Docs",
      //editLink: {
      //baseUrl: "https://github.com/lint069/csp-lua-api-docs/edit/main/",
      //},
      lastUpdated: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lint069/csp-lua-api-docs",
        },
      ],
      components: {
        Sidebar: "./src/components/SidebarFilter.astro",
      },
      customCss: ["./src/css/style.css"],
      expressiveCode: {
        themes: ["dark-plus", "github-light"],
        useStarlightDarkModeSwitch: true,
        styleOverrides: {
          borderRadius: "0.2rem",
        },
      },
      plugins: [
        // starlightSidebarSwipe(),
        starlightImageZoom(),
        // starlightLinksValidator(),
        starlightKbd({
          types: [
            { id: "mac", label: "macOS", default: true },
            { id: "windows", label: "Windows" },
          ],
        }),
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
          label: "Test",
          autogenerate: { directory: "docsTest" },
        },
        {
          label: "Primitives",
          autogenerate: { directory: "primitives" },
          collapsed: true,
        },
        {
          label: "ac",
          autogenerate: { directory: "ac" },
          collapsed: true,
        },
        {
          label: "display",
          autogenerate: { directory: "display" },
          collapsed: true,
        },
        {
          label: "io",
          autogenerate: { directory: "io" },
          collapsed: true,
        },
        {
          label: "math",
          autogenerate: { directory: "math" },
          collapsed: true,
        },
        {
          label: "render",
          autogenerate: { directory: "render" },
          collapsed: true,
        },
        {
          label: "ui",
          autogenerate: { directory: "ui" },
          collapsed: true,
        },
        {
          label: "web",
          autogenerate: { directory: "web" },
          collapsed: true,
        },
        {
          label: "miscellaneous",
          autogenerate: { directory: "miscellaneous" },
          collapsed: true,
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
