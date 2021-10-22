import type { SlideComponent, Splide } from '@splidejs/splide';


export type EventDetail<T extends Record<string, unknown> = Record<string, unknown>> = { splide: Splide } & T;

export type SlideEventDetail = EventDetail<{ Slide: SlideComponent }>;

export type ArrowsEventDetail = EventDetail<{ prev: HTMLButtonElement, next: HTMLButtonElement }>;

export type MoveEventDetail = EventDetail<{ index: number, prev: number, dest: number }>;