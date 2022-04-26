import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  const nav = document.querySelectorAll('#js-navbar *');
  const onToggle = (e: globalThis.ScrollTrigger, reverse?: boolean) => {
    nav.forEach(node => {
      const el = node as HTMLElement;

      if (reverse) {
        el.style.color = e.isActive ? '#eee' : '#333';
      } else {
        el.style.color = e.isActive ? '#333' : '#eee';
      }
    });
  };

  tl.to('#js-navbar', {
    scrollTrigger: {
      trigger: '#js-manifesto',
      start: 'top 5%',
      onToggle: e => onToggle(e)
    }
  })
    .to('#js-navbar *', {
      scrollTrigger: {
        trigger: '#js-about',
        start: 'top 5%',
        onToggle: e => onToggle(e, true)
      }
    })
    .to('#js-navbar *', {
      scrollTrigger: {
        trigger: '#js-contact',
        start: 'top 5%',
        onToggle: e => onToggle(e)
      }
    });
};
