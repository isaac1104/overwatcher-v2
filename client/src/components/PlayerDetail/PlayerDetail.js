import React, { Component } from 'react';
import axios from 'axios';

class PlayerDetail extends Component {
  // const request = await axios.get('https://ow-api.com/v1/stats/pc/us/cats-11481/complete');
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Player Detail</h1>
      </div>
    );
  }
}

export default PlayerDetail;
