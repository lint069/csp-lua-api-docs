// @ts-check
import { defineConfig } from "astro/config";
//import starlight from "@astrojs/starlight";
import UnoCSS from "unocss/astro";
import Icons from "starlight-plugin-icons";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";
import starlightKbd from "starlight-kbd";
import starlightUiTweaks from "starlight-ui-tweaks";
import starlightScrollToTop from "starlight-scroll-to-top";
import { visit } from "unist-util-visit";

//
const base = "/csp-lua-api-docs";

//
/**
 * prepend base path to internal links and images
 * @returns {(tree: any) => void}
 */
function remarkPrependBase() {
  return (tree) => {
    visit(tree, "link", (node) => {
      /** @type {any} */
      const linkNode = node;
      if (
        linkNode.url.startsWith("/") &&
        !linkNode.url.startsWith(base) &&
        !linkNode.url.startsWith("//")
      ) {
        linkNode.url = `${base}${linkNode.url}`;
      }
    });
    visit(tree, "image", (node) => {
      /** @type {any} */
      const imgNode = node;
      if (
        imgNode.url.startsWith("/") &&
        !imgNode.url.startsWith(base) &&
        !imgNode.url.startsWith("//")
      ) {
        imgNode.url = `${base}${imgNode.url}`;
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://lint069.github.io",
  base: base,
  trailingSlash: "always",
  server: { port: 6969, host: true },
  markdown: {
    remarkPlugins: [remarkMath, remarkPrependBase],
    rehypePlugins: [rehypeMathJax],
  },
  integrations: [
    UnoCSS(),
    Icons({
      sidebar: true,
      extractSafelist: true,
      starlight: {
        title: "CSP Lua API Docs",
        // favicon: "/favicon.png",
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
          {
            icon: "discord",
            label: "Discord",
            href: "https://discord.gg/nM4Xkrt",
          },
        ],
        components: {
          Sidebar: "./src/components/SidebarFilter.astro",
          Footer: "./src/components/Footer.astro"
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
          starlightImageZoom(),
          starlightLinksValidator({
            errorOnRelativeLinks: true,
          }),
          starlightUiTweaks({
            navbarLinks: [
              {
                label: "Wiki",
                href: "https://github.com/ac-custom-shaders-patch/acc-extension-config/wiki",
              },
            ],
          }),
          starlightScrollToTop(),
          starlightKbd({
            // intentional
            globalPicker: false,
            types: [
              { id: "mac", label: "macOS" },
              { id: "windows", label: "Windows", default: true },
            ],
          }),
        ],
        sidebar: [
          {
            label: "Start Here",
            items: [
              {
                icon: "i-material-symbols:360",
                label: "About the SDK",
                slug: "guides/what-is-this",
              },
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
      },
    }),
  ],
});
