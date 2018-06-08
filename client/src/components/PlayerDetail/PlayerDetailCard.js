import React, { Component, Fragment } from 'react';
import { Card, Divider } from 'antd';
import { connect } from 'react-redux';

class PlayerDetailCard extends Component {
  renderDetail() {
    const { error, data } = this.props.playerData;
    console.log(data.competitiveStats);
    if (error) {
      return <h1 className='display-4 text-danger text-center'>{data}</h1>
    } else {
      return (
        <div>
          <div className='d-flex align-items-center' style={{ backgroundColor: '#eee' }}>
            <img src={data.icon} className='img-fluid' alt='icon' />
            <h1>{data.name}</h1>
          </div>
          <Card style={{ backgroundColor: '#8a8a8a' }} className='col-sm-6'>
            <div className='row'>
              <div className='col-sm-4'>
                <img src={data.ratingIcon} className='img-fluid' alt='icon' style={{ width: '150px' }} />
              </div>
              <div className='col-sm-8 lead' style={{ marginTop: '20px' }}>
                <h3>{data.ratingName}</h3>
                <h3>{data.rating} Points</h3>
              </div>
            </div>
            <Divider />
            {data.competitiveStats ? (
              <div className='row text-center lead'>
                <Card className='col-sm-4' title='Win Rate' bordered={ false }>
                  <h6 className='lead'>{Math.round((data.competitiveStats.games.won / data.competitiveStats.games.played) * 100)}%</h6>
                </Card>
                <Card className='col-sm-4' title='Time Played' bordered={ false }>
                  <h6>{data.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
                </Card>
                <Card className='col-sm-4' title='Win Rate' bordered={ false }>
                  <h6>{Math.round((data.competitiveStats.games.won / data.competitiveStats.games.played) * 100)}%</h6>
                </Card>
              </div>
            ) : (
              <div />
            )}
          </Card>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.playerData.data);
    return (
      <Fragment>
        {this.renderDetail()}
      </Fragment>
    );
  }
}

function mapStateToProps({ playerData }) {
  return {
    playerData
  }
}

export default connect(mapStateToProps, null)(PlayerDetailCard);
