import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$components: './src/components',
			$config: './src/config',
			$content: './src/content',
			$data: './src/data',
			$db: './src/db',
			$stores: './src/stores',
			$modules: './src/modules'
		},
		adapter: adapter()
	}
};

export default config;
