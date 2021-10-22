<div align="center">
  <a href="https://splidejs.com">
      <img width="80" src="images/logo.svg">
  </a>
  <a href="https://svelte.dev/">
      <img width="80" src="images/svelte-logo.svg">
  </a>

  <h1>Svelte Splide</h1>

  <p>
    Svelte Splide is the Svelte component for the
    <a href="https://github.com/Splidejs/splide">Splide</a> slider/carousel.
  </p>

  <p>
    <a href="https://splidejs.com/">Demo</a>
    <br>
    <a href="https://github.com/Splidejs/splide/discussions">Discussions</a>
  </p>
</div>

## Quick Start
Get the latest version from NPM:
```
$ npm install @splidejs/svelte-splide
```

Import CSS and components:

```svelte
<script>
import { Splide, SplideSlide } from '@splidejs/svelte-slide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
</script>

<Splide options={ { rewind: true } }>
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
```

## License
Svelte Splide and Splide are released under the MIT license.
© 2021 Naotoshi Fujita
