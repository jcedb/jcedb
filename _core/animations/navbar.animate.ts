import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cdxColors } from '../config/colors.config';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  const nav = document.querySelectorAll('#js-navbar span,a');
  const color = {
    'js-hero': cdxColors.white,
    'js-manifesto': cdxColors.secondary,
    'js-about': cdxColors.black,
    'js-contact': cdxColors.secondary
  };
  const onToggle = (id: string) => {
    nav.forEach(node => {
      const el = node as HTMLElement;
      el.style.color = color[id as keyof typeof color];
    });
  };

  gsap.utils.toArray('section').forEach(panel => {
    const id = (panel as HTMLElement).getAttribute('id') ?? '';

    ScrollTrigger.create({
      trigger: `#${id}`,
      start: 'top 5%',
      onEnter: e => onToggle(id),
      onEnterBack: e => onToggle(id)
    });
  });
};
