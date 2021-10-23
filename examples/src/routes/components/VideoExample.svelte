<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { Video } from '@splidejs/splide-extension-video';
  import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

  const videos = [ '3GNQL3alB-Y', 'xLJ2QQDrN9k', 'cdz__ojQOuU', 'oS6N_ZBFDZE' ];
</script>

<div class="wrapper">
  <h2>Basic</h2>

  <Splide options={ { rewind: true, heightRatio: 0.5625 } } extensions={ { Video } }>
    { #each videos as id, index }
      <SplideSlide data-splide-youtube={ id }>
        <img
          src={ `https://i3.ytimg.com/vi/${ id }/maxresdefault.jpg` }
          alt={ `YouTube Sample ${ index + 1 }` }
        >
      </SplideSlide>
    { /each }
  </Splide>
</div>