import React, { useEffect } from 'react';
import styles from './../../styles/_comps/navbar.module.scss';
import animate from '../../_core/animations/navbar.animate';
import CdxLogo from '../CdxLogo';

function Navbar() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <nav id="js-navbar" className={styles['navbar']}>
      <div className={styles['navbar__container']}>
        <CdxLogo />

        <div className={styles['navbar__menus']}>
          <ul>
            <li>
              <a href="#js-hero">CEDDEX</a>
            </li>
            <li>
              <a href="#js-services">Services</a>
            </li>
            <li>
              <a href="#js-contact">Contact</a>
            </li>
          </ul>

          <span id="js-navbar-menu-indicator"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
