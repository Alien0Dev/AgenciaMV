<script lang="ts">
import type { DirectionArrow, HoverRotation, ThemeArrow } from '../../types';

interface Props {
  direction: DirectionArrow,
  hoverRotation?: HoverRotation,
  theme?: ThemeArrow,
  handleclick?: ()=>void,
}
const { direction, handleclick, hoverRotation="", theme="solid-green" }: Props = $props()

const navClass = direction === 'left' ? 'embla__prev' : direction === 'right' ? 'embla__next' : ''
const hoverClass = hoverRotation ? `hover-${hoverRotation}` : ''

export const iconMap: Record<DirectionArrow, string> = {
  up:         "fa-solid fa-arrow-up",
  down:       "fa-solid fa-arrow-down",
  left:       "fa-solid fa-arrow-left",
  right:      "fa-solid fa-arrow-right",
  up_left:    "fa-solid fa-arrow-up rotate-left",
  up_right:   "fa-solid fa-arrow-up rotate-right",
  down_left:  "fa-solid fa-arrow-down rotate-left",
  down_right: "fa-solid fa-arrow-down rotate-right",
};

</script>

 <button type="button" aria-label="boton" class="arrow {navClass} {hoverClass} {theme}" onclick={handleclick}>
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
  border: 2px solid transparent;
}

@media (max-width: 820px) {
  button {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }
}

.rotate-left {
  transform: rotate(-45deg);
}
.rotate-right {
  transform: rotate(45deg);
}
.hover-rotation-left:hover i {
  transform: rotate(-45deg);
}
.hover-rotation-right:hover i {
  transform: rotate(45deg);
}
.hover-rotation-up:hover i {
  transform: rotate(90deg);
}
.hover-rotation-down:hover i {
  transform: rotate(-90deg);
}
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
</style>
