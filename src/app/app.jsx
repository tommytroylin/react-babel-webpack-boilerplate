/**
 * Root component
 *
 * Created by Tommy on 12/05/15.
 */

import React from 'react';

import Component from './component/Component';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Component />
      </div>
    );
  }
}
