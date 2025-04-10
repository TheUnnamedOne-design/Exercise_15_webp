import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being constructed.');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('componentDidUpdate: Component updated. New count:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being unmounted.');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div style={{ border: '1px solid gray', padding: '10px' }}>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
