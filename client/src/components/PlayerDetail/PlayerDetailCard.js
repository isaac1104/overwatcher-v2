import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';

class PlayerDetailCard extends Component {
  renderDetail() {
    const { error, data } = this.props.playerData;
    console.log(data.competitiveStats);
    if (error) {
      return <h1 className='display-4 text-danger text-center'>{data}</h1>
    } else {
      return (
        <Fragment>
          <div className='d-flex align-items-center' style={{ backgroundColor: '#eee' }}>
            <img src={data.icon} className='img-fluid' alt='icon' />
            <h1 className='display-4 ml-3 mt-2'>{data.name}</h1>
          </div>
          <div className='row'>
          <Card bordered={ false } className='col-sm-6'>
            <div className='d-flex align-items-center row'>
              <div className='col-sm-4'>
                <img src={data.ratingIcon} className='img-fluid' alt='icon' style={{ width: '150px' }} />
              </div>
              <div className='col-sm-8' style={{ marginTop: '20px' }}>
                <h3>{data.ratingName}</h3>
                <h3 className='lead'>{data.rating} Points</h3>
              </div>
            </div>
            {data.competitiveStats ? (
              <div className='row text-center'>
                <Card className='col-sm-4' title='Win Rate' bordered={ false }>
                  <h6 className='lead'>{Math.round((data.competitiveStats.games.won / data.competitiveStats.games.played) * 100)}%</h6>
                </Card>
                <Card className='col-sm-4' title='Time Played' bordered={ false }>
                  <h6 className='lead'>{data.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
                </Card>
                <Card className='col-sm-4' title='Games Won' bordered={ false }>
                  <h6 className='lead'>{data.gamesWon} Games</h6>
                </Card>
              </div>
            ) : (
              <div />
            )}
          </Card>
          <Card bordered={ false } className='col-sm-6'>
            <p>Content</p>
          </Card>
        </div>
        </Fragment>
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
