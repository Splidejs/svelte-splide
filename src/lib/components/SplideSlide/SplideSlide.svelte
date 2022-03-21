<script lang="ts">
  import { classNames } from '$lib/utils';


  let className: string | undefined = undefined;
  export { className as class };
</script>

<li class={ classNames( 'splide__slide', className ) } { ...$$restProps }>
  <slot/>
</li>