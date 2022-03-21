<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { generateSlides } from '../../utils';

  let slides = generateSlides( 1 );

  const options = {
    rewind : true,
    perPage: 3,
    gap    : '1rem',
    height : '15rem',
  }

  function add(): void {
    slides = [ ...slides, ...generateSlides( 1, slides.length ) ];
  }

  function remove(): void {
    --slides.length;
  }
</script>

<div class="wrapper">
  <h2>Dynamic Slides</h2>

  <Splide class="splide--dynamic" options={ options } hasSliderWrapper>
    { #each slides as slide }
      <SplideSlide>
        <img src={ slide.src } alt={ slide.alt }>
      </SplideSlide>
    { /each }
  </Splide>

  <div class="controls">
    <button on:click={ add }>Add</button>
    <button on:click={ remove }>Remove</button>
  </div>
</div>

<style>
  .wrapper :global( .splide__list ) {
    min-height: 15rem;
  }
</style>