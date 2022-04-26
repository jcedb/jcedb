import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import styles from '../styles/_pages/hero.module.scss';
import animate from '../_core/animations/hero.animate';

function Hero() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <section id="js-hero" className={styles['hero']}>
      <div className={styles['hero__container']}>
        <header className={styles['hero__heading']}>
          <h1 className="js-heading">Adapt to modern</h1>
          <h1 className="js-heading">digital world</h1>
          <h1 className="js-heading">
            <Link href="#js-manifesto">
              <a>
                <FaArrowAltCircleDown
                  className={styles['hero__heading--arrowdown']}
                  onClick={() => {}}
                />
              </a>
            </Link>
          </h1>
        </header>
      </div>
    </section>
  );
}

export default Hero;
