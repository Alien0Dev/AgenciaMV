<script lang="ts">
import Card from './Card.svelte';
import { cards } from './cards';
import Arrow from '@components/ui/Arrow.svelte';

import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-svelte'

let emblaApi: EmblaCarouselType
let options: EmblaOptionsType = {
  loop: true,
  align: 'start',
  containScroll: 'trimSnaps',
}
  
const scrollPrev = () => emblaApi?.scrollPrev()
const scrollNext = () => emblaApi?.scrollNext()

const logSelectedSnap = (emblaApi: EmblaCarouselType): void => {
  console.log(emblaApi.selectedScrollSnap())
}

const onInit = (event: CustomEvent<EmblaCarouselType>): void => {
  emblaApi = event.detail
  emblaApi.on('select', logSelectedSnap)
}
</script>

<div class="embla">
  <Arrow direction="left" handleclick={scrollPrev} />
  <div class="embla__viewport" use:useEmblaCarousel={{options, plugins: []}} onemblaInit={onInit}> 
    <div class="embla__container" >
      {#each cards as card}
        <div class="embla__slide">
          <Card {...card}/>
        </div>
      {/each}
    </div>
  </div>
  <Arrow direction="right" handleclick={scrollNext} />
</div>

<style>

.embla__container {
  display: flex;
  margin-left: -24px;
}

.embla {
  overflow: hidden;
  position: relative;
  width: 100vw;
  max-width: none;
  box-sizing: border-box;
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}

.embla:active {
  cursor: grabbing;
}

.embla__viewport {
  margin-inline: 10px;
  overflow: hidden;
  width: 100%;
}

.embla__slide {
  flex: 0 0 clamp(260px, 32vw, 400px);
  box-sizing: border-box;
  padding-left: 24px;
  min-width: 0;
}

@media (max-width: 820px) {
  .embla {
    padding-inline: 12px;
  }

  .embla__container {
    margin-left: -14px;
  }

  .embla__slide {
    flex: 0 0 82vw;
    padding-left: 14px;
  }
}

</style>
