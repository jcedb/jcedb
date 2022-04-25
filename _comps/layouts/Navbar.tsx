import styles from './../../styles/_comps/navbar.module.scss';
import React from 'react';

function Navbar() {
  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbar__container']}>
        <div className={styles['navbar__logo']}>CDX</div>

        <ul className={styles['navbar__menus']}>
          <li>Manifesto</li>
          <li>Our Team</li>
          <li>Reach Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
