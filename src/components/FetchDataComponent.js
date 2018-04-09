import React, {Component} from 'react';
import 'isomorphic-unfetch';


class FetchDataComponent extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    console.log('XXXXXXXXXXXXXXXXXXX', json.stargazers_count);
    return {stars: json.stargazers_count};
  }
  componentWillMount() {
    console.log('componentWillMountcomponentWillMount');
  }
  render() {
    return (
      <div>
        <h2>FetchDataComponent</h2>
        <p>{this.props.albums}</p>
      </div>
    );
  }
}

export default FetchDataComponent;
