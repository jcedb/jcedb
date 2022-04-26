import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);
  const nav = document.querySelectorAll('#js-navbar *');
  const onToggle = (black?: boolean) => {
    nav.forEach(node => {
      const el = node as HTMLElement;

      el.style.color = black ? '#333' : '#eee';
    });
  };

  gsap.utils.toArray('section').forEach(panel => {
    const id = (panel as HTMLElement).getAttribute('id');

    ScrollTrigger.create({
      trigger: `#${id}`,
      start: 'top 5%',
      onEnter: e => onToggle(id === 'js-about'),
      onEnterBack: e => onToggle(id === 'js-about')
    });
  });
};
