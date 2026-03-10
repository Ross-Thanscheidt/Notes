// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ross Notes',
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
