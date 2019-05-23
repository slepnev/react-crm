import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo blue-grey lighten-3 z-depth-2" style={{height: '64px'}}>
      <Link to="/" className="" style={{display: 'flex', alignItems: 'center'}}>
        <i className="material-icons medium white-text">cloud</i>
        <span className="flow-text white-text">CRM</span>
      </Link>
    </div>
  );
};

export default Logo;
