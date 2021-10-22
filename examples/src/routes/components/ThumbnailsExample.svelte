<script lang="ts">
  import type { Options } from '@splidejs/splide';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { onMount } from 'svelte';
  import { generateSlides } from '../../utils';

  let main: any;
  let thumbs: any;

  const slides = generateSlides();

  const mainOptions: Options = {
    type      : 'loop',
    perPage   : 2,
    perMove   : 1,
    gap       : '1rem',
    pagination: false,
    height    : '10rem',
  };

  const thumbsOptions: Options = {
    type        : 'slide',
    rewind      : true,
    gap         : '1rem',
    pagination  : false,
    fixedWidth  : 110,
    fixedHeight : 70,
    cover       : true,
    focus       : 'center',
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