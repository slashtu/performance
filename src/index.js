import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Routes from './routes';
import { BrowserRouter as Router} from 'react-router-dom';

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Router>
      <div>
        <Routes />
      </div>
    </Router>, 
    document.getElementById('app'));
});
