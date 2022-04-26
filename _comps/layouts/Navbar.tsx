import React, { useEffect } from 'react';
import styles from './../../styles/_comps/navbar.module.scss';
import animate from '../../_core/animations/navbar.animate';

function Navbar() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <nav id="js-navbar" className={styles['navbar']}>
      <div className={styles['navbar__container']}>
        <div className={styles['navbar__logo']}>CDX</div>

        <ul className={styles['navbar__menus']}>
          <li>
            <a href="#js-manifesto">Manifesto</a>
          </li>
          <li>
            <a href="#js-about">Our Team</a>
          </li>
          <li>
            <a href="#js-contact">Reach Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
