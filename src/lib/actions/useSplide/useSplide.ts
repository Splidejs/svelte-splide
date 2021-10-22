import type { ComponentConstructor, Options } from '@splidejs/splide';
import { Splide } from '@splidejs/splide';
import { getSlides, isEqualDeep, isEqualShallow, merge } from '../../utils';
import { bind } from './bind';


export interface Params {
  slides: HTMLElement[];
  options?: Options;
  extensions?: Record<string, ComponentConstructor>;
  transition?: ComponentConstructor;
}

/**
 * The Svelte action for applying Splide to the specific node.
 *
 * @param node   - A target node.
 * @param params - Parameters.
 */
export function useSplide( node: HTMLElement, params: Params ) {
  const splide = new Splide( node, params.options );

  let prevOptions: Options = {};
  let prevSlides = getSlides( splide );

  function update( newParams: Params ): void {
    const { options, slides } = newParams;

    if ( options && ! isEqualDeep( prevOptions, options ) ) {
      splide.options = options;
      prevOptions = merge( {}, options );
    }

    if ( ! isEqualShallow( prevSlides, slides ) ) {
      splide.refresh();
      prevSlides = slides.slice();
    }
  }

  function destroy() {
    splide.destroy();
  }

  bind( node, splide );
  splide.mount( params.extensions, params.transition );

  return {
    update,
    destroy,
  };
}