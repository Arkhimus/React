import React from 'react';
import Button from './Button';
import Display from './Display';

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
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  decremenet() {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Button event={this.increment} title="Add to it" />
        <Display display={counter} />
        <Button event={this.decremenet} title="Get from it" />
      </div>
    );
  }
}
