import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayerData } from '../../actions';

class PlayerDetail extends Component {
  componentDidMount() {
    const { fetchPlayerData, match: { params: { id } } } = this.props;
    fetchPlayerData(id);
  }

  componentDidUpdate(prevProps) {
    const { fetchPlayerData, match: { params: { id } } } = this.props;
    if (prevProps.match.params.id !== id) {
      fetchPlayerData(id);
    }
  }

  render() {
    console.log(this.props.playerData);
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

function mapStateToProps({ playerData }) {
  return {
    playerData
  }
}

export default connect(mapStateToProps, { fetchPlayerData })(PlayerDetail);
