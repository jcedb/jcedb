import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('section:not(:last-child)').forEach(panel => {
    ScrollTrigger.create({
      trigger: panel as HTMLElement,
      start: 'top top',
      pin: true,
      pinSpacing: false
    });
  });
};
