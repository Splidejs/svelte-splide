declare namespace svelte.JSX {
  import type { Splide, SlideComponent, PaginationData, PaginationItem, Options } from '@splidejs/splide';
  import {
    SplideArrowsEventHandler,
    SplideEventHandler,
    SplideMoveEventHandler,
    SplideSlideEventHandler,
  } from '../../types';

  interface HTMLProps<T> {
    onsplideMounted?: SplideEventHandler;
    onsplideDestroy?: SplideEventHandler;
    onsplideActive?: SplideSlideEventHandler;
    onsplideArrowsMounted?: SplideArrowsEventHandler;
    onsplideArrowsUpdated?: SplideArrowsEventHandler;
    onsplideAutoplayPause?: SplideEventHandler;
    onsplideAutoplayPlay?: SplideEventHandler;
    onsplideAutoplayPlaying?: SplideEventHandler<{ rate: number }>;
    onsplideClick?: SplideSlideEventHandler;
    onsplideDrag?: SplideEventHandler;
    onsplideDragged?: SplideEventHandler;
    onsplideDragging?: SplideEventHandler;
    onsplideHidden?: SplideSlideEventHandler;
    onsplideInactive?: SplideSlideEventHandler;
    onsplideLazyloadLoaded?: SplideEventHandler<{ img: HTMLImageElement, Slide: SlideComponent }>;
    onsplideMove?: SplideMoveEventHandler;
    onsplideMoved?: SplideMoveEventHandler;
    onsplideNavigationMounted?: SplideMoveEventHandler<{ splides: Splide[] }>;
    onsplidePaginationMounted?: SplideMoveEventHandler<{ data: PaginationData, item: PaginationItem }>;
    onsplidePaginationUpdated?: SplideMoveEventHandler<{ data: PaginationData, prev: PaginationItem, curr: PaginationItem }>;
    onsplideRefresh?: SplideEventHandler;
    onsplideResize?: SplideEventHandler;
    onsplideResized?: SplideEventHandler;
    onsplideScroll?: SplideEventHandler;
    onsplideScrolled?: SplideEventHandler;
    onsplideUpdated?: SplideEventHandler<{ options: Options }>;
    onsplideVisible?: SplideSlideEventHandler;
  }
}