import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#js-manifesto', {
    opacity: 0,
    scrollTrigger: {
      trigger: '#js-manifesto',
      start: '+=70%',
      scrub: true
    }
  });

  gsap.utils.toArray('.js-manifesto-services').forEach((panel, index) => {
    gsap.from(panel as HTMLElement, {
      xPercent: index % 2 === 0 ? 100 : -100,
      reversed: true,
      scrollTrigger: {
        trigger: panel as HTMLElement,
        start: 'center 80%'
      }
    });
  });
};
