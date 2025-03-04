import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build', // 构建输出目录
			assets: 'build', // 静态资源目录
			fallback: null, // 如果需要 SPA，可设置为 'index.html'
			precompress: false,
			// strict: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/learning-svelte' : '' // 替换为仓库名
		}
	}
};

export default config;
