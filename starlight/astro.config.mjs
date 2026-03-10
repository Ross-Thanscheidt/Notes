// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://Ross-Thanscheidt.github.io',
    base: '/Notes',
	integrations: [
		starlight({
			title: 'Ross Notes',
            pagefind: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Ross-Thanscheidt/Notes' }],
			sidebar: [
				{
					label: 'Notes',
					autogenerate: { directory: 'notes' },
				},
			],
		}),
	],
});
