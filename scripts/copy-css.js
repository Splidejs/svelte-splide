import fs from 'fs-extra';

async function copy() {
  await fs.copy( './node_modules/@splidejs/splide/dist/css', './src/lib/css', { overwrite: true } );
}

copy().catch( console.error )