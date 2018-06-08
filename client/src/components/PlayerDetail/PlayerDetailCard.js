import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerDetailCard extends Component {
  render() {
    const { error, data } = this.props.playerData;
    console.log(data);
    return (
      <div>
        <h1>{error ? data : data.name}</h1>
      </div>
    );
  }
}

function mapStateToProps({ playerData }) {
  return {
    playerData
  }
}

export default connect(mapStateToProps, null)(PlayerDetailCard);
