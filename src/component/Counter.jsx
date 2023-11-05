
import React, { Component } from "react";
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  Reset = () => {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="upper">
          <h2>Counter Value: {this.state.count}</h2>
        
          <button className="btns" onClick={this.Increment}> + </button>
          <button className="btns" onClick={this.Decrement}> - </button>
          <button className="btns reset" onClick={this.Reset}> Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;

