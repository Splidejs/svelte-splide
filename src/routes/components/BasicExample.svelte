<script lang="ts">
  import type { Options } from '@splidejs/splide';
  import { Splide, SplideSlide } from '$lib/components';
  import { generateSlides } from '../utils';

  const slides = generateSlides();
  const options: Options = {
    rewind : true,
    perPage: 2,
    gap    : '1rem',
    height : '15rem',
    cover  : true,
    breakpoints: {
      1000: {
        perPage: 1,
      },
    },
  }
</script>

<div class="wrapper">
	<h2>Basic</h2>

	<Splide
    id="basic-example"
		options={ options }
		on:mounted={ e => console.log( e.detail.splide.length ) }
		on:move={ e => console.log( 'move to', e.detail.index ) }
	>
		{ #each slides as slide }
			<SplideSlide>
				<img src={ slide.src } alt={ slide.alt }>
			</SplideSlide>
		{ /each }
	</Splide>
</div>