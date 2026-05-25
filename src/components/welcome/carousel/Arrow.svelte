<script lang="ts">
import type { Direction } from "../../../types";

interface Props {
  direction: Direction,
  handleclick?: () => void,
}
const { direction, handleclick }: Props = $props()
export const iconMap: Record<Direction, string> = {
  left: "fa-solid fa-arrow-left",
  right: "fa-solid fa-arrow-right",
  up: "fa-solid fa-arrow-up",
  down: "fa-solid fa-arrow-down"
}

</script>

<button aria-label="botón" class="container-arrow" onclick={handleclick}>
  <i class={iconMap[direction]}></i>
</button>

<style>
.container-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: none;
  padding: 0;
  cursor: pointer;
}

</style>
