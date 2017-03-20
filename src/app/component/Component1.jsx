import React, { Component } from 'react';

export default class Component1 extends Component {

  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({
      clicked: true,
    });
  };

  render() {
    return (
      <div>
        <h3>Components 1</h3>
        <p>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
