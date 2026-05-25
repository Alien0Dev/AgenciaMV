<script lang="ts">
import Card from './Card.svelte';
import { cards } from './Cards';
import Arrow from './Arrow.svelte';

let actualIndex = $state(0);

const goRight = () => {
  
}
const goLeft = () => {
  
}
</script>

<div class="carousel">
  <Arrow direction="left" handleclick={goLeft} />
  <div class="carousel-window">
    <div class="carousel-container">
      {#each cards as card}
        <div class="caroulse-slide">
          <Card {...card}/>
        </div>
      {/each}
    </div>
  </div>
  <Arrow direction="right" handleclick={goRight} />
</div>

<style>
.carousel-container {
  display: flex;
  width: 400%;
  max-width: 600px;
}
.carousel-window {
  overflow: hidden;
  width: 100%
}
.carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.caroulse-slide {
  width: 100%;
}
</style>

