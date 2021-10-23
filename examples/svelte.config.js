import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    floc   : true,
    appDir : 'app',
    target : '#svelte',
    adapter: adapter(),
    paths  : {
      base: dev ? '' : '/svelte-splide',
    }
  },
};

export default config;
