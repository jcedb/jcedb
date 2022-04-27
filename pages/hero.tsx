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
        <h1 className={styles['hero__heading']}>
          <p className="js-heading">Adapt to modern </p>
          <p className="js-heading">digital world</p>
          <p className="js-heading">
            <Link href="#js-contact">
              <a>
                <FaArrowAltCircleDown
                  className={styles['hero__heading--arrowdown']}
                  onClick={() => {}}
                />
              </a>
            </Link>
          </p>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
