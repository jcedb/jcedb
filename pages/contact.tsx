import React, { useEffect } from 'react';
import styles from '../styles/_pages/contact.module.scss';
import CdxButton from '../_comps/CdxButton';
import CdxInput from '../_comps/CdxInput';
import CdxTextarea from '../_comps/CdxTextarea';
import CdxTitle from '../_comps/CdxTitle';
import animate from '../_core/animations/contact.animate';
import { cdxColors } from '../_core/config/colors.config';

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

        <div className={styles['contact__content']}>
          <div className={styles['contact__content--row']}>
            <CdxInput placeholder="Name" />
            <CdxInput placeholder="E-mail" />
          </div>

          <CdxTextarea placeholder="Tell us what you think" />

          <CdxButton style={{ width: '100%', color: cdxColors.white }}>
            Submit
          </CdxButton>
        </div>
      </div>
    </section>
  );
}

export default Contact;
