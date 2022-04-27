import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('#js-contact-title *').forEach((panel, index) => {
    gsap.from(panel as HTMLElement, {
      xPercent: index === 0 ? 100 : -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#js-contact-title',
        start: 'top 70%',
        end: 'top 30%',
        scrub: true
      }
    });
  });
};
