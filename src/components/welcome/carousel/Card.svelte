<script lang="ts">
import { fade } from 'svelte/transition';
import type { CardType } from '../../../types';
const { title, text, imgAlt, imgSrc }: CardType = $props();

</script>

<div class="card" transition:fade>
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
  <img src={imgSrc} alt={imgAlt}>
  <button>Saber más...</button>
</div>

<style>
.card {
   width: 400px;
   height: 500px;
   background-color: #323232;
   color: #f8f8f8;
   border-radius: 10px;
   border: 1px solid #f8f8f8;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   padding: 10px;
 }  

</style>
