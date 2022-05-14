import Image from 'next/image';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  return (
    <section id="js-services" className={styles['services']}>
      <div className={styles['services__container']}>
        <div className={styles['services__title']}>
          <CdxTitle id="js-services-title">What we offer</CdxTitle>
        </div>

        <div className={styles['services__content']}>
          <div className={'js-services-offered ' + styles['services__offered']}>
            <div className={styles['services__offered--graphic']}>
              <h3>Mobile App</h3>
              <Image
                src="/services/mobile.svg"
                height={400}
                width={400}
                alt="mobile"
              />
            </div>

            <div className={styles['services__offered--description']}>
              <h3>Mobile App</h3>
              <p>
                Whether it is for business or personal use, our capable team can
                help you develop your own mobile application that goes in
                accordance with your preferred concept and ideas.
              </p>

              <CdxButton
                onClick={() => {
                  router.push('#js-contact');
                }}
              >
                Get started
              </CdxButton>
            </div>
          </div>

          <div className={'js-services-offered ' + styles['services__offered']}>
            <div className={styles['services__offered--description']}>
              <h3>Website</h3>
              <p>
                Get more customers for your business. Manage and organize your
                contents with the help of an excellently-programmed platform
                designed to specifically aid you with your endeavors.
              </p>

              <CdxButton
                onClick={() => {
                  router.push('#js-contact');
                }}
              >
                Get started
              </CdxButton>
            </div>

            <div className={styles['services__offered--graphic']}>
              <h3>Website</h3>
              <Image
                src="/services/website.svg"
                height={400}
                width={400}
                alt="website"
              />
            </div>
          </div>

          <div className={'js-services-offered ' + styles['services__offered']}>
            <div className={styles['services__offered--graphic']}>
              <h3>Business Software</h3>
              <Image
                src="/services/software.svg"
                height={400}
                width={400}
                alt="software"
              />
            </div>

            <div className={styles['services__offered--description']}>
              <h3>Business Software</h3>
              <p>
                Get organized with the support of our business software service.
                Automate all your transactions, generate report of your sales,
                and manage other information. Create a one-stop system for all
                of your important data.
              </p>

              <CdxButton
                onClick={() => {
                  router.push('#js-contact');
                }}
              >
                Get started
              </CdxButton>
            </div>
          </div>

          <div className={'js-services-offered ' + styles['services__offered']}>
            <div className={styles['services__offered--description']}>
              <h3>Computer Services</h3>
              <p>
                Setup your personal computer and upgrade it to the best
                performance with our high-end computer parts and products.
              </p>

              <CdxButton
                onClick={() => {
                  router.push('#js-contact');
                }}
              >
                Get started
              </CdxButton>
            </div>

            <div className={styles['services__offered--graphic']}>
              <h3>Computer Services</h3>
              <Image
                src="/services/computer-services.svg"
                height={400}
                width={400}
                alt="computer repair and services"
              />
            </div>
          </div>
        </div>
      </div>

      <CdxSkew id="js-services-skew" />
    </section>
  );
}

export default Services;
