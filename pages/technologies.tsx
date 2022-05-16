import Image from 'next/image';
import React from 'react';
import { FaAngular, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import styles from '../styles/_pages/technologies.module.scss';
import Marquee from 'react-fast-marquee';

const Technologies = () => {
  return (
    <div className={styles['technologies']}>
      <div className={styles['technologies__container']}>
        <div className={styles['technologies__content']}>
          <Marquee speed={100} gradient={false} pauseOnHover={true}>
            <span>
              <FaReact size={100} fill="#61DAFB" />
            </span>
            <span>
              <FaAngular size={100} fill="#C3002F" />
            </span>
            <span>
              <FaVuejs size={100} fill="#43B883" />
            </span>
            <span>
              <FaNodeJs size={100} fill="#679F63" />
            </span>
            <span>
              <Image src="/technologies/firebase.png" width={80} height={100} />
            </span>
            <span>
              <Image src="/technologies/mongodb.png" width={50} height={100} />
            </span>
            <span>
              <Image
                src="/technologies/typescript.png"
                width={100}
                height={100}
              />
            </span>
            <span>
              <Image src="/technologies/nextjs.png" width={150} height={100} />
            </span>
            <span>
              <Image src="/technologies/nuxtjs.png" width={100} height={100} />
            </span>
            <span>
              <Image src="/technologies/laravel.png" width={100} height={100} />
            </span>
            <span>
              <Image src="/technologies/mysql.png" width={170} height={100} />
            </span>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
