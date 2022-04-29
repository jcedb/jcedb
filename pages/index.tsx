import type { NextPage } from 'next';
import Services from './services';
import Contact from './contact';
import Hero from './hero';
import { useEffect } from 'react';
import animate from '../_core/animations/index.animate';

const Home: NextPage = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
