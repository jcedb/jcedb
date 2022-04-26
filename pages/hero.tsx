import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import styles from '../styles/_pages/hero.module.scss';
import animations from '../_core/animations/hero.animate';

function Hero() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animations();
    }
  }, []);

  return (
    <div id="js-hero" className={styles['hero']}>
      <div className={styles['hero__container']}>
        <div className={styles['hero__heading']}>
          <h1 className="js-heading">Adapt to modern</h1>
          <h1 className="js-heading">digital world</h1>
          <h1 className="js-heading">
            <Link href="#manifesto">
              <a>
                <FaArrowAltCircleDown
                  className={styles['hero__heading--arrowdown']}
                  onClick={() => {}}
                />
              </a>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
