import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onClickBtn = () => {
    console.log('button has been clicked');
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        {/* call MyComponent and passing "props" */}
        <MyComponent title='React' onButtonClicked={this.onClickBtn} />
        <div>
          <button onClick={this.countUp}>Click Me to increment count !</button>
          <p>{this.state.count}</p>
        </div>
      </div>
    );
  }
}

export default App;
