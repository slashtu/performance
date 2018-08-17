import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Route, Link } from 'react-router-dom';
import Loading from '../components/Loading';

const AsyncHome = Loadable({
  loader: () => import('../components/Home'),
  loading: Loading
});

const AsyncAbout = Loadable({
  loader: () => import('../components/About'),
  loading: Loading
});

class Routes extends Component {
  static propTypes = {
    fetchQueue: PropTypes.array,
    store: PropTypes.object
  };

  static childContextTypes = {
    fetchQueue: PropTypes.array,
    store: PropTypes.object
  };

  getChildContext() {
    return {
      fetchQueue: this.props.fetchQueue,
      store: this.props.store
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={AsyncHome} />
        <Route path="/about" component={AsyncAbout} />
      </div>
    );
  }
}
export default Routes;
