import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component {
  render() {
    return (
      <div>
        {/* call MyComponent and passing "props" */}
        <MyComponent title='React' />
      </div>
    );
  }
}

export default App;
