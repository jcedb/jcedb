import Image from 'next/image';
import React, { useEffect } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaTwitter
} from 'react-icons/fa';
import styles from '../../styles/_comps/footer.module.scss';
import animate from '../../_core/animations/footer.animate';
import CdxLogo from '../CdxLogo';

function Footer() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  return (
    <footer id="js-footer" className={styles['footer']}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__contacts']}>
          <CdxLogo />

          <p>
            <FaEnvelope /> &nbsp; &nbsp; jcedb07@gmail.com
          </p>

          <p>
            <FaPhoneAlt /> &nbsp; &nbsp; +63 907 174 6910
          </p>
        </div>

        <div className={styles['footer__company']}>
          <div
            id="js-footer-social-media"
            className={styles['footer__social-media']}
          >
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
          </div>

          <p>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <b>Ceddex Software Development</b> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
