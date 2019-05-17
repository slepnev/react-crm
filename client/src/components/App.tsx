import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import loadable from '@loadable/component';
import { routes } from "../routes";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/deals">Deals</Link>
          </li>
          <li>
            <Link to="/env">Environment</Link>
          </li>
        </ul>

        <hr />

        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  );
};

export default App;
