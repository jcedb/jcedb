import React, { useEffect } from 'react';
import styles from '../styles/_pages/contact.module.scss';
import CdxTitle from '../_comps/CdxTitle';
import animate from '../_core/animations/contact.animate';

function Contact() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <section id="js-contact" className={styles['contact']}>
      <div className={styles['contact__container']}>
        <div className={styles['contact__title']}>
          <CdxTitle id="js-contact-title">Reach us here</CdxTitle>
        </div>
      </div>
    </section>
  );
}

export default Contact;
