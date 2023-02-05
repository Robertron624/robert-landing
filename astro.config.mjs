import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://Robetron624.github.com',
	base: "/robert-landing",
	integrations: [mdx(), sitemap()],
});
