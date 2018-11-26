import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

window.main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Router>
        <Routes store={window.__STORE__}/>
      </Router>,
      document.getElementById('app')
    );
  });
};
