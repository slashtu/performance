import React, { Component } from 'react';
import PropTypes from 'prop-types';

const fetchData = fetch => {
  return WrappedComponent => {
    class DataLoader extends Component {
      static contextType = StoreContext;
      componentWillMount() {
        console.log('XXXXXXXXXXXXXXXXXXXXX', __SERVER__);
        console.log('context', this.context);
        if (__SERVER__) {
          // this.context.fetchQueue.push(fetch());
        } else {
          fetch().then(r => {
            console.log(r);
          })
        }
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
    return DataLoader;
  };
};

export default fetchData;
