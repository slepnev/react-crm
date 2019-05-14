import React from 'react';
import logo from '../img/logo.svg';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.host}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/Welcome.js</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Welcome;
