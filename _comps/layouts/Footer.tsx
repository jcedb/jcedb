import React, { useEffect } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter
} from 'react-icons/fa';
import styles from '../../styles/_comps/footer.module.scss';
import animate from '../../_core/animations/footer.animate';
import CdxButton from '../CdxButton';
import CdxInput from '../CdxInput';
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

          <div>
            <p>
              <FaEnvelope /> &nbsp; &nbsp; jcedb07@gmail.com
            </p>

            <p>
              <FaPhoneAlt /> &nbsp; &nbsp; +63 907 174 6910
            </p>

            <p>
              <FaMapMarkerAlt /> &nbsp; &nbsp; Molave, Zamboanga del Sur
            </p>
          </div>
        </div>

        <div className={styles['footer__updated']}>
          <h3>Stay up-to-speed</h3>

          <div className={styles['footer__updated--form']}>
            <CdxInput placeholder="E-mail Address" />
            <CdxButton>Subscribe</CdxButton>
          </div>
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

          <div>
            <h4>John Cedrick Bermejo</h4>
            <p>
              Copyright &copy; {new Date().getFullYear()} | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
