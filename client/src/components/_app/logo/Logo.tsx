import React from 'react';
import { Link } from "react-router-dom";
import * as styles from './Logo.module.scss'
import * as classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <div className={cx({logo: true}, 'logo blue-grey lighten-3 z-depth-2')}>
      <Link to="/" className={styles.logo__content}>
        <i className="material-icons medium white-text">cloud</i>
        <span className="flow-text white-text">CRM</span>
      </Link>
    </div>
  );
};

export default Logo;
