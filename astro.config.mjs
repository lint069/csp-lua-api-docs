// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightSidebarSwipe from 'starlight-sidebar-swipe';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CSP Lua API Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lint069/csp-lua-api-docs' }],
			customCss: ['./src/css/style.css'],
			plugins: [
				starlightSidebarSwipe(),
				starlightImageZoom(),
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Types',
					autogenerate: { directory: 'types' },
				},
				{
					label: 'ui',
					autogenerate: { directory: 'ui' },
				},
			],
		}),
	],
});
