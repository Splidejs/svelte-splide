<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { onMount } from 'svelte';
  import { generateSlides } from '../../utils';

  let main: Splide;
  let thumbs: SplideSlide;

  const slides = generateSlides();

  const mainOptions = {
    type      : 'loop',
    perPage   : 2,
    perMove   : 1,
    gap       : '1rem',
    pagination: false,
    height    : '10rem',
  };

  const thumbsOptions = {
    type        : 'slide',
    rewind      : true,
    gap         : '1rem',
    pagination  : false,
    fixedWidth  : 110,
    fixedHeight : 70,
    cover       : true,
    focus       : 'center' as const,
    isNavigation: true,
    updateOnMove: true,
  };

  onMount( () => {
    if ( main && thumbs ) {
      main.sync( thumbs.splide );
    }
  } );
</script>

<div class="wrapper">
  <h2>Thumbnails</h2>

  <Splide options={ mainOptions } bind:this={ main }>
    { #each slides as slide }
      <SplideSlide>
        <img src={ slide.src } alt={ slide.alt }>
      </SplideSlide>
    { /each }
  </Splide>

  <Splide options={ thumbsOptions } bind:this={ thumbs }>
    { #each slides as slide }
      <SplideSlide>
        <img src={ slide.src } alt={ slide.alt }>
      </SplideSlide>
    { /each }
  </Splide>
</div>