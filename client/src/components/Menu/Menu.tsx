import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {

  return (
    <section>
      <div className="collection">
        <Link className="collection-item waves-effect waves-light" to="/">Home</Link>
        <Link className="collection-item waves-effect waves-light" to="/deals">Deals</Link>
        <Link className="collection-item waves-effect waves-light" to="/env">Environment</Link>
      </div>
    </section>

  );
};

export default Menu;

