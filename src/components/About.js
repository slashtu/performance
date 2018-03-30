// import l from 'lodash';
import React, {Component} from 'react';
import Loadable from 'react-loadable';
import 'isomorphic-fetch';

import Another from './Another';
import Loading from './Loading';
import image from '../assets/SpongeBob.jpg';

const AsyncFetchDataComponent = Loadable({
  loader: () => import('./FetchDataComponent'),
  loading: Loading
});

class About extends Component {
  componentWillMount() {
    console.log('XXXXXXXXXXXXXXXXXXXXXX componentWillMount');
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <img alt="gg" src={image} />
        <Another />
        <AsyncFetchDataComponent desc="fetching data" />
      </div>
    );
  }
}

export default About;
