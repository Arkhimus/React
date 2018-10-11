import React from "react";
import Button from './button';
import Display from './display';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decremenet = this.decremenet.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decremenet() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <Button event={this.increment} title="Add to it" />
        <Display display={this.state.counter} />
        <Button event={this.decremenet} title="Get from it" />
      </div>
    );
  }
}
