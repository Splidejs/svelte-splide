<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import { generateSlides } from '../../utils';

  const slides = generateSlides();
  const options = {
    rewind  : true,
    gap     : '1rem',
    autoplay: true,
    arrows  : true,
    height  : '15rem',
  }
</script>

<div class="wrapper">
  <h2 id="autoplay-example-heading">Autoplay</h2>

  <Splide options={ options } hasTrack={ false } aria-labelledby="autoplay-example-heading">
    <div style="position: relative">
      <SplideTrack>
        { #each slides as slide }
          <SplideSlide>
            <img src={ slide.src } alt={ slide.alt }>
          </SplideSlide>
        { /each }
      </SplideTrack>
    </div>

    <div class="splide__progress">
      <div class="splide__progress__bar">
      </div>
    </div>

    <button class="splide__toggle">
      <span class="splide__toggle__play">Play</span>
      <span class="splide__toggle__pause">Pause</span>
    </button>
  </Splide>
</div>