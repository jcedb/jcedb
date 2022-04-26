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
};
