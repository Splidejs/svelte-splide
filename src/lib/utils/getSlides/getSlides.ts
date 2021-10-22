import type { Splide } from '@splidejs/splide';


export function getSlides( splide: Splide ): HTMLElement[] {
  const children = splide.Components.Elements?.list.children;
  return children && Array.prototype.slice.call( children ) || [];
}