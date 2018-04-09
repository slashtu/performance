// import l from 'lodash';
import React, {Component} from 'react';
import Loadable from 'react-loadable';

import Another from './Another';
import Loading from './Loading';
import image from '../assets/SpongeBob.jpg';

const AsyncFetchDataComponent = Loadable({
  loader: () => import('./FetchDataComponent'),
  loading: Loading
});

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <img alt="gg" src={image} />
        <Another />
        <AsyncFetchDataComponent albums="albums" />
      </div>
    );
  }
}

export default About;
