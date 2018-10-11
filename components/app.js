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
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }


  decremenet() {
    this.setState(prevState => ({ counter: prevState.counter > 0 ? prevState.counter - 1 : 0 }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Button event={this.increment} title="Add to it" />
        <Display amount={counter} />
        <Button event={this.decremenet} title="Get from it" />
      </div>
    );
  }
}
