import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';

class PlayerDetailCard extends Component {
  renderTop3Heroes() {
    const { data } = this.props.playerData;
    if (data.competitiveStats) {
      const allHeroes = _.sortBy(_.map(data.competitiveStats.topHeroes, (value, key) => {
        return { 'name': key, 'win': value.gamesWon};
      }), [hero => {
        return hero.win;
      }]);
      const top3Heroes = allHeroes.splice(allHeroes.length -3, allHeroes.length).reverse();
      return top3Heroes.map(hero => {
        return <h6 className='lead' key={hero.name}>{hero.name}</h6>
      });
    } else {
      return <div />
    }
  }

  renderDetail() {
    const { error, data } = this.props.playerData;
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
                <Fragment>
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
                  <Card title='Most Played Heroes' bordered={ false } className='text-center'>
                    <div className='d-flex align-items-center' style={{ justifyContent: 'space-evenly' }}>
                      {this.renderTop3Heroes()}
                    </div>
                  </Card>
                </Fragment>
              ) : (
                <div />
              )}
            </Card>
            <Card bordered={ false } className='col-sm-6 text-center'>
              <h1>Render Heroes Info Here</h1>
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
