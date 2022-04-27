import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from '../styles/_pages/services.module.scss';
import CdxButton from '../_comps/CdxButton';
import CdxSkew from '../_comps/CdxSkew';
import CdxTitle from '../_comps/CdxTitle';
import animate from '../_core/animations/services.animate';

function Services() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <section id="js-services" className={styles['services']}>
      <div className={styles['services__container']}>
        <div className={styles['services__title']}>
          <CdxTitle id="js-services-title">What we offer</CdxTitle>
        </div>

        <div className={styles['services__content']}>
          <div className={'js-services-offered ' + styles['services__offered']}>
            <div className={styles['services__offered--graphic']}>
              <Image src="/services/mobile.svg" height={400} width={400} />
            </div>

            <div className={styles['services__offered--description']}>
              <h3>Mobile App</h3>
              <p>
                Whether it is for business or personal use, our capable team can
                help you develop your own mobile application that goes in
                accordance with your preferred concept and ideas.
              </p>

              <CdxButton>Get started</CdxButton>
            </div>
          </div>

          <div className={'js-services-offered ' + styles['services__offered']}>
            <div className={styles['services__offered--graphic']}>
              <Image src="/services/website.svg" height={400} width={400} />
            </div>

            <div className={styles['services__offered--description']}>
              <h3>Website</h3>
              <p>
                Get more customers for your business. Manage and organize your
                contents with the help of an excellently-programmed platform
                designed to specifically aid you with your endeavors.
              </p>

              <CdxButton>Get started</CdxButton>
            </div>
          </div>

          <div className={'js-services-offered ' + styles['services__offered']}>
            <div className={styles['services__offered--graphic']}>
              <Image src="/services/software.svg" height={400} width={400} />
            </div>

            <div className={styles['services__offered--description']}>
              <h3>Business Software</h3>
              <p>
                Get organized with the support of our business software service.
                Automate all your transactions, generate report of your sales,
                and manage other information. Create a one-stop system for all
                of your important data.
              </p>

              <CdxButton>Get started</CdxButton>
            </div>
          </div>
        </div>
      </div>

      <CdxSkew id="js-services-skew" />
    </section>
  );
}

export default Services;
