import type { SlideComponent, Splide } from '@splidejs/splide';


export type SplideEvent<T extends {} = {}> = CustomEvent<{ splide: Splide } & T>;

export type SplideEventHandler<T extends {} = {}> = ( event: SplideEvent<T> ) => void;

export type SplideSlideEventHandler = SplideEventHandler<{ Slide: SlideComponent }>;

export type SplideArrowsEventHandler = SplideEventHandler<{ prev: HTMLButtonElement, next: HTMLButtonElement }>;

export type SplideMoveEventHandler = SplideEventHandler<{ index: number, prev: number, dest: number }>;
