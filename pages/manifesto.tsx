import React, { useEffect } from 'react';
import styles from '../styles/_pages/manifesto.module.scss';
import animate from '../_core/animations/manifesto.animate';

function Manifesto() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <section id="js-manifesto" className={styles['manifesto']}>
      <div className={styles['manifesto__container']}>
        <h2>Manifesto</h2>
      </div>
    </section>
  );
}

export default Manifesto;
