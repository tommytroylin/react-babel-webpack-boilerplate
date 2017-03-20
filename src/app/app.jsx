import React, { Component } from 'react';

import Component1 from './component/Component1';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Component1 />
      </div>
    );
  }
}
