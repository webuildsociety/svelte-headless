import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            $components: './src/components',
            $stores: './src/stores',
            $modules: './src/modules'
        }
    },
    preprocess: sveltePreprocess()    
};

export default config;
