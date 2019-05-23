import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import M from 'materialize-css';
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {

  let sidenav: any = useRef(null);

  useEffect(() => {
    M.Sidenav.init(sidenav.current);
  }, []);

  return (
    <div className="navbar-fixed">
      <nav className="">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down" ref={sidenav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/env">Environment</Link></li>
            <li><Dropdown /></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

