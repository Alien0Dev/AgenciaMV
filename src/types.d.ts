export interface LinkType {
  name: string,
  src: string,
}

export interface CardType {
  imgAlt: string,
  imgSrc: string,
  text: string,
  title: string,
}

// Arrow types
export type DirectionArrow = 
  | "left" | "right" | "up" | "down"
  | "up_left" | "up_right" | "down_left" | "down_right";

export type HoverRotation = | "rotation-left" | "rotation-right" | "rotation-up" | "rotation-down" | "";

export type ThemeArrow = "solid-green" | "solid-black" | "semi-transparent";
