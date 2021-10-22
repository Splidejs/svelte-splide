<script lang="ts">
  import type { ComponentConstructor, Options, Splide } from '@splidejs/splide';
  import { afterUpdate } from 'svelte';
  import { useSplide } from '$lib/actions';
  import type { SplideEvent } from '$lib/types';
  import { getSlides } from '$lib/utils';


  export let options: Options = {};
  export let splide: Splide | undefined = undefined;
  export let extensions: Record<string, ComponentConstructor> | undefined = undefined;
  export let transition: ComponentConstructor | undefined = undefined;
  export let hasSliderWrapper = false;

  let slides: HTMLElement[] = [];

  afterUpdate( () => {
    if ( splide ) {
      slides = getSlides( splide );
    }
  } );

  export function go( control: number | string ): void {
    if ( splide ) {
      splide.go( control );
    }
  }

  export function sync( target: Splide ): void {
    if ( splide ) {
      splide.sync( target );
      remount( splide );
      remount( target );
    }
  }

  function remount( target: Splide ): void {
    target.destroy( false );
    target.mount();
  }

  function onSplideMounted( e: SplideEvent ): void {
    splide = e.detail.splide;
  }

  function onSplideDestroy(): void {
    splide = undefined;
  }
</script>

<svelte:options accessors/>

<div
	class="splide"
	on:splideMounted={ onSplideMounted }
	on:splideDestroy={ onSplideDestroy }
	on:splideMounted
	on:splideDestroy
	on:splideActive
	on:splideArrowsMounted
	on:splideArrowsUpdated
	on:splideAutoplayPause
	on:splideAutoplayPlay
	on:splideAutoplayPlaying
	on:splideClick
	on:splideDrag
	on:splideDragged
	on:splideDragging
	on:splideHidden
	on:splideInactive
	on:splideLazyloadLoaded
	on:splideMove
	on:splideMoved
	on:splideNavigationMounted
	on:splidePaginationMounted
	on:splidePaginationUpdated
	on:splideRefresh
	on:splideResize
	on:splideResized
	on:splideScroll
	on:splideScrolled
	on:splideUpdated
	on:splideVisible
	use:useSplide={ { options, slides, extensions, transition } }
>
	{ #if hasSliderWrapper }
		<slot name="before-slider"/>
	{ /if }

	{ #if hasSliderWrapper }
		<div class="splide__slider">
			<slot name="before-track"/>

			<div class="splide__track">
				<ul class="splide__list">
					<slot/>
				</ul>
			</div>

			<slot name="after-track"/>
		</div>
	{ :else }
		<slot name="before-track"/>

		<div class="splide__track">
			<ul class="splide__list">
				<slot/>
			</ul>
		</div>

		<slot name="after-track"/>
	{ /if }

	{ #if hasSliderWrapper }
		<slot name="after-slider"/>
	{ /if }
</div>
