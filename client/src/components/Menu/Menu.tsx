import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import M from 'materialize-css';

const Menu = () => {

  let sidenav: any = useRef(null);

  useEffect(() => {
    M.Sidenav.init(sidenav.current);
  }, []);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">Logo</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down" ref={sidenav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/deals">Deals</Link></li>
          <li><Link to="/env">Environment</Link></li>
        </ul>
      </div>
    </nav>

  );
};

export default Menu;

