import React from 'react';
import Loadable from 'react-loadable';
import {Route, Link} from 'react-router-dom';
import Loading from '../loadable/Loading';

const AsyncHome = Loadable({
  loader: () => import('../loadable/Home'),
  loading: Loading
});

const AsyncAbout = Loadable({
  loader: () => import('../loadable/About'),
  loading: Loading
});

const Routes = () => (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={AsyncHome}/>
      <Route path="/about" component={AsyncAbout}/>
    </div>
)

export default Routes;