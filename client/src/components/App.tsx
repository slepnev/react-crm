import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import { routes } from "../routes";
import Menu from "./Menu/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <div className="row">

        <div className="col s2 grey lighten-4" style={{padding: 0, minHeight: '100vh'}}>
          <a className="btn-floating pulse"><i className="material-icons">menu</i></a>
        </div>

        <div className="col s10" style={{padding: 0}}>
          <Menu />
          {renderRoutes(routes)}
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
