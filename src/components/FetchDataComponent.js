import 'isomorphic-unfetch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../hocs/fetchData';

const fetchGithub = async () => {
  const res = await fetch('http://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=10');
  const data = await res.json();
  return { property: 'adoptions', result: data };
};

@fetchData(fetchGithub)
class FetchDataComponent extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentWillMount() {}
  render() {
    console.log('render fetch data component', this.context);
    return (
      <div>
        <h2>FetchDataComponent</h2>
        <p>{this.context.store && this.context.store.adoptions && this.context.store.adoptions.length}</p>
      </div>
    );
  }
}

export default FetchDataComponent;
