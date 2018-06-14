import React, { Component, Fragment } from 'react';
import PlayerDetailCard from './PlayerDetailCard';
import { Row, Spin } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchPlayerData, resetPlayerData } from '../../actions';

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

  componentWillUnmount() {
    this.props.resetPlayerData();
  }

  renderPlayerDetail() {
    const { error, isFetching } = this.props.playerData;
    const style = {
      container: {
        height: '80vh'
      },
      loading: {
        width: '250px',
        height: '250px'
      }
    }

    if (error) {
      return <Redirect to='/player/notfound' />
    }

    if (isFetching) {
      return (
        <Row type='flex' justify='center' align='middle' style={style.container}>
          <Spin
            size='large'
            indicator={
              <img src='/images/misc/ow-loading.gif' alt='loading-gif' style={style.loading} />
              }
            />
        </Row>
      );
    } else {
      return <PlayerDetailCard />
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderPlayerDetail()}
      </Fragment>
    );
  }
}

function mapStateToProps({ playerData }) {
  return {
    playerData
  }
}

export default connect(mapStateToProps, { fetchPlayerData, resetPlayerData })(PlayerDetail);
