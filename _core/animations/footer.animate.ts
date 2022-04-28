import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('#js-footer-social-media *', {
    y: -30,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: '#js-footer-social-media'
  });

  gsap.from('#js-footer p', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: '#js-footer'
  });
};
