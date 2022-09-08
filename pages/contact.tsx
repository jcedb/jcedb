import React, { useEffect, useState } from 'react';
import styles from '../styles/_pages/contact.module.scss';
import CdxButton from '../_comps/CdxButton';
import CdxInput from '../_comps/CdxInput';
import CdxTextarea from '../_comps/CdxTextarea';
import CdxTitle from '../_comps/CdxTitle';
import animate from '../_core/animations/contact.animate';
import { cdxColors } from '../_core/config/colors.config';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './api/firebase';
import CdxLoader from '../_comps/CdxLoader';
import { RxIf } from '../_core/components/RxIf';
import * as EmailValidator from 'email-validator';
import ReCAPTCHA from 'react-google-recaptcha';
import _ from 'lodash';

function Contact() {
  useEffect(() => {
    if (typeof window !== undefined) {
      animate();
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [recaptcha, setRecaptcha] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showSent, setShowSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const clearData = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const validForm = () => {
    return (
      isNameValid && isEmailValid && isMessageValid && !_.isEmpty(recaptcha)
    );
  };

  return (
    <section id="js-contact" className={styles['contact']}>
      <div className={styles['contact__container']}>
        <div className={styles['contact__title']}>
          <CdxTitle id="js-contact-title">Reach me here</CdxTitle>
        </div>

        <RxIf condition={showForm}>
          <form
            action="#"
            className={styles['contact__content']}
            onSubmit={() => {
              if (validForm()) {
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
              }
            }}
          >
            <div className={styles['contact__content--row']}>
              <CdxInput
                type="text"
                value={name}
                placeholder="Name"
                isRequired={true}
                onChange={value => setName(value)}
                onValidate={valid => setIsNameValid(valid)}
              />
              <CdxInput
                type="email"
                value={email}
                placeholder="E-mail"
                isRequired={true}
                onChange={value => setEmail(value)}
                onValidate={valid => setIsEmailValid(valid)}
                validationRules={[
                  {
                    rule: EmailValidator.validate(email),
                    message: 'Please enter a valid email.'
                  }
                ]}
              />
            </div>

            <CdxTextarea
              value={message}
              placeholder="Let me know what you think :)"
              isRequired={true}
              maxLength={500}
              onChange={value => setMessage(value)}
              onValidate={valid => setIsMessageValid(valid)}
            />

            <ReCAPTCHA
              className={styles['contact__recaptcha']}
              sitekey="6LcUfOEhAAAAAE9nih6cQEoE5lFjaJhW5CZ9B_m1"
              onChange={token => setRecaptcha(token ?? '')}
            />

            <CdxButton
              type="submit"
              isDisabled={isLoading || !validForm()}
              style={{ width: '100%', color: cdxColors.white }}
            >
              Submit
            </CdxButton>
          </form>
        </RxIf>

        <RxIf condition={isLoading}>
          <div className={styles['contact__loading-indicator']}>
            <CdxLoader text="Sending ..." />
          </div>
        </RxIf>

        <RxIf condition={showSent}>
          <div className={styles['contact__sent-message']}>
            <p>Alright! I got your message.</p>
            <p>I will get back to you very soon.</p>

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
