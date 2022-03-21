<script lang="ts">
  import type { ArrowsEventDetail, EventDetail, MoveEventDetail, SlideEventDetail } from '$lib/types';
  import { getSlides, isEqualDeep, isEqualShallow, merge } from '$lib/utils';
  import type { ComponentConstructor, Options, PaginationData, PaginationItem, SlideComponent } from '@splidejs/splide';
  import { Splide } from '@splidejs/splide';
  import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
  import { bind } from './bind';
  import { SplideTrack } from '$lib/components';


  /**
   * The ID for the slider root element.
   */
  // export let id: string | undefined = undefined;
  let className: string | undefined = undefined;
  export { className as class };

  /**
   * Splide options. Do not change readonly options after mount.
   */
  export let options: Options = {};

  /**
   * The splide instance.
   */
  export let splide: Splide | undefined = undefined;

  /**
   * An object with extensions.
   */
  export let extensions: Record<string, ComponentConstructor> | undefined = undefined;

  /**
   * A transition component.
   */
  export let transition: ComponentConstructor | undefined = undefined;

  /**
   * Determines whether to render a track element or not.
   */
  export let hasTrack = true;

  /**
   * A dispatcher function.
   * The `createEventDispatcher` type assertion does not accept a type alias.
   * If specified, the svelte kit fails to generate a type of `events` and it will be `CustomEvent<any>`.
   * Also, the svelte action does not provide the way to specify event types.
   */
  const dispatch = createEventDispatcher<{
    mounted: EventDetail;
    destroy: EventDetail;
    active: SlideEventDetail;
    arrowsMounted?: ArrowsEventDetail;
    arrowsUpdated?: ArrowsEventDetail;
    autoplayPause?: EventDetail;
    autoplayPlay?: EventDetail;
    autoplayPlaying?: EventDetail<{ rate: number }>;
    click?: SlideEventDetail;
    drag?: EventDetail;
    dragged?: EventDetail;
    dragging?: EventDetail;
    hidden?: SlideEventDetail;
    inactive?: SlideEventDetail;
    lazyloadLoaded?: EventDetail<{ img: HTMLImageElement, Slide: SlideComponent }>;
    move?: MoveEventDetail;
    moved?: MoveEventDetail;
    navigationMounted?: EventDetail<{ splides: Splide[] }>;
    paginationMounted?: EventDetail<{ data: PaginationData, item: PaginationItem }>;
    paginationUpdated?: EventDetail<{ data: PaginationData, prev: PaginationItem, curr: PaginationItem }>;
    refresh?: EventDetail;
    resize?: EventDetail;
    resized?: EventDetail;
    scroll?: EventDetail;
    scrolled?: EventDetail;
    updated?: EventDetail<{ options: Options }>;
    visible?: SlideEventDetail;
  }>();

  /**
   * The root element.
   */
  let root: HTMLElement;

  /**
   * Holds the previous slide elements.
   */
  let prevSlides: HTMLElement[];

  /**
   * Holds the previous options.
   */
  let prevOptions = merge( {}, options );

  /**
   * Updates splide options only when they have difference with previous options.
   */
  $: if ( splide && ! isEqualDeep( prevOptions, options ) ) {
    splide.options = options;
    prevOptions = merge( {}, prevOptions );
  }

  onMount( () => {
    splide = new Splide( root, options );
    bind<typeof dispatch>( splide, dispatch );
    splide.mount( extensions, transition );
    prevSlides = getSlides( splide );

    return () => splide.destroy();
  } );

  afterUpdate( () => {
    if ( splide ) {
      const newSlides = getSlides( splide );

      if ( ! isEqualShallow( prevSlides, newSlides ) ) {
        splide.refresh();
        prevSlides = newSlides.slice();
      }
    }
  } );

  /**
   * Moves the slider by the specified control.
   *
   * @param control - A control pattern.
   */
  export function go( control: number | string ): void {
    splide?.go( control );
  }

  /**
   * Syncs the slider with another Splide.
   *
   * @param target - A target splide instance to sync with.
   */
  export function sync( target: Splide ): void {
    splide?.sync( target );
  }
</script>

<svelte:options accessors/>

<div
  class={ `splide ${ className || '' }`.trim() }
  bind:this={ root }
  { ...$$restProps }
>
  { #if hasTrack }
    <SplideTrack>
      <slot/>
    </SplideTrack>
  { :else }
    <slot/>
  { /if  }
</div>
