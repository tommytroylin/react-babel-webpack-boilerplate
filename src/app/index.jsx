import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component/Component';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Component />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
