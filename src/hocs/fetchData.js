import React, { Component } from 'react';
import PropTypes from 'prop-types';

const fetchData = fetch => {
  return WrappedComponent => {
    class DataLoader extends Component {
      static contextTypes = {
        fetchQueue: PropTypes.array
      };
      componentWillMount() {
        console.log('XXXXXXXXXXXXXXXXXXXXX', __SERVER__);
        this.context.fetchQueue.push(fetch());
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
    return DataLoader;
  };
};

export default fetchData;
