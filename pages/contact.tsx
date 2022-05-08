import React, { useEffect, useState } from 'react';
import styles from '../styles/_pages/contact.module.scss';
import CdxButton from '../_comps/CdxButton';
import CdxInput from '../_comps/CdxInput';
import CdxTextarea from '../_comps/CdxTextarea';
import CdxTitle from '../_comps/CdxTitle';
import animate from '../_core/animations/contact.animate';
import { cdxColors } from '../_core/config/colors.config';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../.firebase/firebase';
import CdxLoader from '../_comps/CdxLoader';
import { RxIf } from '../_core/components/RxIf';

function Contact() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showSent, setShowSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const clearData = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="js-contact" className={styles['contact']}>
      <div className={styles['contact__container']}>
        <div className={styles['contact__title']}>
          <CdxTitle id="js-contact-title">Reach us here</CdxTitle>
        </div>

        <RxIf condition={showForm}>
          <div className={styles['contact__content']}>
            <div className={styles['contact__content--row']}>
              <CdxInput
                value={name}
                placeholder="Name"
                onChange={value => setName(value)}
              />
              <CdxInput
                value={email}
                placeholder="E-mail"
                onChange={value => setEmail(value)}
              />
            </div>

            <CdxTextarea
              value={message}
              placeholder="Tell us what you think"
              onChange={value => setMessage(value)}
            />

            <CdxButton
              isDisabled={isLoading}
              style={{ width: '100%', color: cdxColors.white }}
              onClick={() => {
                (async () => {
                  setIsLoading(true);
                  setShowForm(false);

                  await addDoc(collection(db, 'T_ContactUs'), {
                    name,
                    email,
                    message,
                    date: new Date()
                  });

                  clearData();
                  setShowSent(true);
                  setIsLoading(false);
                })();
              }}
            >
              Submit
            </CdxButton>
          </div>
        </RxIf>

        <RxIf condition={isLoading}>
          <div className={styles['contact__loading-indicator']}>
            <CdxLoader text="Sending ..." />
          </div>
        </RxIf>

        <RxIf condition={showSent}>
          <div className={styles['contact__sent-message']}>
            <p>Alright! We got your message.</p>
            <p>We will get back to you very soon.</p>

            <CdxButton
              onClick={() => {
                setShowSent(false);
                setShowForm(true);
              }}
            >
              Write another message
            </CdxButton>
          </div>
        </RxIf>
      </div>
    </section>
  );
}

export default Contact;
