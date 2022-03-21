<script lang="ts">
  import { classNames } from '$lib/utils';


  let className: string | undefined = undefined;
  export { className as class };
</script>

<div class={ classNames( 'splide__track', className ) } { ...$$restProps }>
  <ul class="splide__list">
    <slot/>
  </ul>
</div>
