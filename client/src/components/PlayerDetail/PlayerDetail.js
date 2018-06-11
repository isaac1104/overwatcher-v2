import React, { Component } from 'react';
import PlayerDetailCard from './PlayerDetailCard';
import { Spin } from 'antd';
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

  renderPlayerDetail() {
    const { isFetching } = this.props.playerData;
    if (isFetching) {
      return (
        <div className='d-flex justify-content-center align-item-center mt-4'>
          <Spin
            tip='Fetching Player Data...'
            size='large'
            indicator={
              <img src='/images/misc/ow-loading.gif' className='img-fluid mb-4' alt='loading-gif' style={{ width: '250px', height: '250px' }} />
              }
            />
        </div>
      );
    } else {
      return <PlayerDetailCard />
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        {this.renderPlayerDetail()}
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
