<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
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
  <h2 id="dynamic-slides-example-heading">Dynamic Slides</h2>

  <Splide
    class="splide--dynamic"
    options={ options }
    aria-labelledby="dynamic-slides-example-heading"
    hasTrack={ false }
  >
    <div style="position: relative">
      <SplideTrack style="min-height: 15rem">
        { #each slides as slide }
          <SplideSlide>
            <img src={ slide.src } alt={ slide.alt }>
          </SplideSlide>
        { /each }
      </SplideTrack>
    </div>

    <div class="controls">
      <button on:click={ add }>Add</button>
      <button on:click={ remove }>Remove</button>
    </div>
  </Splide>
</div>