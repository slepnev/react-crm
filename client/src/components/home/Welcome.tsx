import * as React from 'react';
import logo from '../../assets/images/logo.svg';
import * as styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.host}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p className={styles.description}>
          Реализация списка сделок и их редактирование на разных технологиях React
        </p>
      </header>
    </div>
  );
};

export default Welcome;
