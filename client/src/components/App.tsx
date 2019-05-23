import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '../routes';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import M from 'materialize-css';
import * as styles from './App.module.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const App = () => {

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.container}>

        <aside className={cx({sidebar: true}, 'z-depth-2')}>
          <Logo />
          <Menu />
        </aside>

        <header className={styles.header}>
          <Header />
        </header>

        <main className={styles.main}>
          {renderRoutes(routes)}
        </main>

        <footer className={styles.footer}>
          <Footer />
        </footer>

      </div>

    </BrowserRouter>
  );
};

export default App;
