<script lang="ts">
  import type { ArrowsEventDetail, EventDetail, MoveEventDetail, SlideEventDetail } from '$lib/types';
  import { getSlides, isEqualDeep, isEqualShallow, merge } from '$lib/utils';
  import type { ComponentConstructor, Options, PaginationData, PaginationItem, SlideComponent } from '@splidejs/splide';
  import { Splide } from '@splidejs/splide';
  import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
  import { bind } from './bind';


  /**
   * The ID for the slider root element.
   */
  export let id: string | undefined = undefined;

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
   * Determines whether to wrap the track by the slider element or not.
   */
  export let hasSliderWrapper = false;

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
    if ( splide ) {
      splide.go( control );
    }
  }

  /**
   * Syncs the slider with another Splide.
   *
   * @param target - A target splide instance to sync with.
   */
  export function sync( target: Splide ): void {
    if ( splide ) {
      splide.sync( target );
      remount( splide );
      remount( target );
    }
  }

  /**
   * Remounts the target splide instance.
   *
   * @private
   *
   * @param target - A splide instance to remount.
   */
  function remount( target: Splide ): void {
    target.destroy( false );
    target.mount();
  }

  /* eslint-disable no-undef */
</script>

<svelte:options accessors/>

<div
  { id }
  class={ `splide ${ $$props.class || '' }`.trim() }
  bind:this={ root }
>
  { #if hasSliderWrapper }
    <slot name="before-slider"/>
  { /if  }

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
  { /if  }

  { #if hasSliderWrapper }
    <slot name="after-slider"/>
  { /if  }
</div>
