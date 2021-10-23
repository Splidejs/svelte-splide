<script lang="ts">
  import type { Options } from '@splidejs/splide';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { generateSlides } from '../../utils';

  const slides = generateSlides();
  let options: Options = {
    rewind      : true,
    gap         : '1rem',
    autoplay    : true,
    pauseOnHover: false,
    arrows      : 'slider',
    height      : '15rem',
  }
</script>

<div class="wrapper">
  <h2>Autoplay</h2>

  <Splide options={ options } hasSliderWrapper>
    { #each slides as slide }
      <SplideSlide>
        <img src={ slide.src } alt={ slide.alt }>
      </SplideSlide>
    { /each }

    <svelte:fragment slot="after-slider">
      <div class="splide__progress">
        <div class="splide__progress__bar">
        </div>
      </div>

      <div class="splide__autoplay">
        <button class="splide__play">Play</button>
        <button class="splide__pause">Pause</button>
      </div>
    </svelte:fragment>
  </Splide>
</div>