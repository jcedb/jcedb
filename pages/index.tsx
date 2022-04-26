import type { NextPage } from 'next';
import Manifesto from './manifesto';
import About from './about';
import Contact from './contact';
import Hero from './hero';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Manifesto />
      <About />
      <Contact />
    </>
  );
};

export default Home;
