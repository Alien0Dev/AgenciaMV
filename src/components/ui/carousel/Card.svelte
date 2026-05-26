<script lang="ts">
import { fade } from 'svelte/transition';
import type { CardType } from '@root/types';
import Arrow from '@components/ui/Arrow.svelte';

const { title, text, imgAlt, imgSrc }: CardType = $props();

</script>

<div class="card" transition:fade>
  <div>
    <div class="arrow-container" >
      <Arrow direction="up_right" theme="semi-transparent" rotation="rotation-down" dashed={true}/>  
    </div>
    <img src={imgSrc} alt={imgAlt} >
  </div>
  <div>

    <h2>{title}</h2>
    <p>{text}</p>
  </div>
  <button>Saber más...</button>
</div>

<style>
.card {
   width: min(100%, 400px);
   min-height: 500px;
   background-color: var(--dark-green);
   color: var(--color-white);
   border-radius: 10px;
   display: flex;
   justify-content: space-between;
   align-items: stretch;
   flex-direction: column;
   box-sizing: border-box;
   padding: 14px;
   gap: 14px;
  }  

.card > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card h2,
.card p {
  margin: 0;
}
.arrow-container {
  z-index: 5;
  display: flex;
  justify-content: flex-end;
}

.card img {
  width: 100%;
  height: clamp(180px, 35vw, 240px);
  object-fit: cover;
  border-radius: 5px;
}

.card > button {
  align-self: flex-start;
  background-color: transparent;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.card > button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 820px) {
  .card {
    min-height: 420px;
    padding: 12px;
    gap: 12px;
  }
}


</style>
