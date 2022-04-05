<div align="center">
  <a href="https://splidejs.com">
      <img width="70" src="images/logo.svg">
  </a>
  <a href="https://svelte.dev/">
      <img width="70" src="images/svelte-logo.svg">
  </a>

  <h1>Svelte Splide</h1>

  <p>
    Svelte Splide is the Svelte component for the
    <a href="https://github.com/Splidejs/splide">Splide</a> slider/carousel.
  </p>

  <p>
    <a href="https://splidejs.com/integration/svelte-splide">Getting Started</a>
    <br>
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
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/svelte-splide/css';
</script>

<Splide options={ { rewind: true } } aria-label="Svelte Splide Example">
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
```

Visit [this page](https://splidejs.com/integration/svelte-splide) for more details.


## Support Splide

Please support the project if you like it!
- [GitHub Sponsors](https://github.com/sponsors/NaotoshiFujita)


## License
Svelte Splide and Splide are released under the MIT license.
© 2021 Naotoshi Fujita
