<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { generateSlides } from '../../utils';

  const slides = generateSlides();
  const options = {
    rewind : true,
    perPage: 2,
    gap    : '1rem',
    height : '15rem',
    breakpoints: {
      1000: {
        perPage: 1,
      },
    },
  }
</script>

<div class="wrapper">
  <h2 id="basic-example-heading">Basic</h2>

  <Splide
    options={ options }
    on:mounted={ e => console.log( e.detail.splide.length ) }
    on:move={ e => console.log( 'move to', e.detail.index ) }
    aria-labelledby="basic-example-heading"
    class="custom-class"
  >
    { #each slides as slide }
      <SplideSlide>
        <img src={ slide.src } alt={ slide.alt }>
      </SplideSlide>
    { /each }
  </Splide>
</div>