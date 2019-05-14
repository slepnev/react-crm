import * as React from 'react';
import Welcome from './Welcome';
import DealList from './DealList';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Environment from './Environment';

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

        <Route exact path="/" component={Welcome} />
        <Route path="/deals" component={DealList} />
        <Route path="/env" component={Environment} />
      </div>
    </BrowserRouter>
  );
};

export default App;
