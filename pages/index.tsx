import styles from '../styles/_pages/home.module.scss';
import type { NextPage } from 'next';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div className={styles['home']}>
      <div className={styles['home__container']}>
        <div className={styles['home__heading']}>
          <h1>Adapt to modern</h1>
          <h1>digital world</h1>
          <h1>
            <FaArrowAltCircleDown
              className={styles['home__heading--arrowdown']}
              onClick={() => {}}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
