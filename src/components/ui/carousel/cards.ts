import type { CardType } from '@root/types';
import ajedrez from '@root/assets/img/ajedrez.jpg';
import oficina from '@root/assets/img/oficina.jpg';
import branding from '@root/assets/img/branding.jpg';
import socialMedia from '@root/assets/img/socialMedia.jpg';

export const cards: CardType[] = [
  { title:"A", text:"Para empezar... ", imgAlt:"tablero de ajedrez", imgSrc: ajedrez.src },
  { title:"B", text:"Para empezar... ", imgAlt:"oficinas", imgSrc: oficina.src },
  { title:"C", text:"Para empezar... ", imgAlt:"social media", imgSrc: socialMedia.src },
  { title:"D", text:"Para empezar... ", imgAlt:"branding", imgSrc: branding.src },
];
