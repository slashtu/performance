import 'isomorphic-unfetch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../hocs/fetchData';

const fetchGithub = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const data = await res.json();
  return { property: 'github', result: data };
};

@fetchData(fetchGithub)
class FetchDataComponent extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentWillMount() {}
  render() {
    return (
      <div>
        <h2>FetchDataComponent</h2>
        <p>{this.context.store.github.size}</p>
      </div>
    );
  }
}

export default FetchDataComponent;
