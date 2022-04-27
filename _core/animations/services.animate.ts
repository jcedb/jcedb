import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#js-services-skew', {
    bottom: 0,
    transform: 'skew(0deg)',
    scrollTrigger: {
      trigger: '#js-services-skew',
      start: 'top bottom',
      scrub: true
    }
  });

  gsap.utils.toArray('.js-services-offered').forEach((panel, index) => {
    gsap.from(panel as HTMLElement, {
      xPercent: index % 2 === 0 ? 100 : -100,
      scrollTrigger: {
        trigger: panel as HTMLElement,
        start: 'center 80%'
      }
    });
  });

  gsap.utils.toArray('#js-services-title *').forEach((panel, index) => {
    gsap.from(panel as HTMLElement, {
      xPercent: index === 1 ? 100 : -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#js-services-title',
        start: 'top 70%',
        end: 'top 30%',
        scrub: true
      }
    });
  });
};
