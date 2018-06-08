import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  async componentDidMount() {
    const request = await axios.get('https://ow-api.com/v1/stats/pc/us/cats-11481/complete');
    const { data } = request;
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
      </div>
    );
  }
}

export default App;
