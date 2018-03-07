import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Loading from './loadable/Loading';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AsyncHome = Loadable({
  loader: () => import('./loadable/Home'),
  loading: Loading,
})

const AsyncAbout = Loadable({
  loader: () => import('./loadable/About'),
  loading: Loading,
})

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={AsyncHome}/>
        <Route path="/about" component={AsyncAbout}/>
      </div>
    </Router>, 
    document.getElementById('app'));
});
