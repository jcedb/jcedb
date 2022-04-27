import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#js-manifesto-skew', {
    bottom: 0,
    transform: 'skew(0deg)',
    scrollTrigger: {
      trigger: '#js-manifesto-skew',
      start: 'top bottom',
      scrub: true
    }
  });

  gsap.utils.toArray('.js-manifesto-services').forEach((panel, index) => {
    gsap.from(panel as HTMLElement, {
      xPercent: index % 2 === 0 ? 100 : -100,
      scrollTrigger: {
        trigger: panel as HTMLElement,
        start: 'center 80%'
      }
    });
  });
};
