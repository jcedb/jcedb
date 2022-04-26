import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.js-heading', {
    translateX: 0,
    translateY: 0,
    opacity: 1,
    duration: 1
  });

  gsap.to('#js-hero', {
    backgroundColor: '#333',
    scrollTrigger: {
      trigger: '#js-hero',
      start: 'bottom bottom',
      end: '+=70%',
      scrub: true
    }
  });
};
