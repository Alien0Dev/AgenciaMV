<script lang="ts">
  import type { DirectionArrow, HoverRotation, ThemeArrow } from '../../types';

  interface Props {
    direction: DirectionArrow;
    dashed?: boolean;
    rotation?: HoverRotation;
    theme?: ThemeArrow;
    handleclick?: () => void;
  }

  const { 
    direction, 
    handleclick, 
    rotation = "", 
    theme = "solid-black", 
    dashed = false 
  }: Props = $props();

  // Simplificamos la lógica de clases
  const navClass = $derived(direction === 'left' ? 'embla__prev' : direction === 'right' ? 'embla__next' : '');
  const hoverClass = $derived(rotation ? `hover-${rotation}` : '');
  const dashedClass = $derived(dashed ? 'is-dashed' : '');

  const iconMap: Record<DirectionArrow, string> = {
    up: "fa-solid fa-arrow-up",
    down: "fa-solid fa-arrow-down",
    left: "fa-solid fa-arrow-left",
    right: "fa-solid fa-arrow-right",
    up_left: "fa-solid fa-arrow-up rotate-left",
    up_right: "fa-solid fa-arrow-up rotate-right",
    down_left: "fa-solid fa-arrow-down rotate-left",
    down_right: "fa-solid fa-arrow-down rotate-right",
  };
</script>

<button 
  type="button" 
  aria-label="boton" 
  class="arrow {navClass} {hoverClass} {theme} {dashedClass}" 
  onclick={handleclick}
>
  <i class={iconMap[direction]}></i>
</button>

<style>
  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 57px;
    height: 57px;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;
    color: var(--color-white);
    font-size: 1.5rem;
    background-color: transparent;
    /* Base: borde transparente */
    border: 2px solid transparent; 
    transition: all 0.3s ease-in-out;
  }

  /* SOLUCIÓN: Usamos .arrow.is-dotted para mayor especificidad */
  .arrow.is-dashed {
    border: 2px dashed var(--color-white) !important;
  }

  .arrow.is-dashed:hover {
    border: 2px solid var(--color-white) !important;
  }

  /* El resto de tus estilos se mantienen igual */
  .rotate-left { transform: rotate(-45deg); }
  .rotate-right { transform: rotate(45deg); }

  .semi-transparent {
    background-color: rgba(0, 0, 0, 0.2);
    border: 2px solid var(--color-white);
  }
  .solid-black {
    background-color: var(--formal-black);
    border: 2px solid var(--formal-black);
  }
  .solid-green {
    background-color: var(--formal-green);
    border: 2px solid var(--formal-black);
  }

  @media (max-width: 820px) {
    .arrow {
      width: 44px;
      height: 44px;
      font-size: 1.2rem;
    }
  }
</style>
