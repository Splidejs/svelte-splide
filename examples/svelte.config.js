import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    floc     : true,
    appDir   : 'app',
    adapter  : adapter( {
      fallback: '200.html', // dummy
    } ),
    paths    : {
      base: dev ? '' : '/svelte-splide',
    },
    prerender: { entries: [] },
  },
};

export default config;
