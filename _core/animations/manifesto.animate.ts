import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap.to('#js-hero', {
  //   backgroundColor: '#333',
  //   scrollTrigger: {
  //     trigger: '#js-hero',
  //     start: 'bottom bottom',
  //     scrub: 1
  //   }
  // });
};
