import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cdxColors } from '../config/colors.config';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.js-heading', {
    translateX: 0,
    translateY: 0,
    opacity: 1,
    duration: 1
  });

  gsap.to('#js-hero', {
    backgroundColor: cdxColors.black,
    scrollTrigger: {
      trigger: '#js-hero',
      start: 'bottom bottom',
      end: '+=80%',
      scrub: true
    }
  });
};
