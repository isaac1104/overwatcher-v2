import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import HeroDetail from '../HeroDetail/HeroDetail';
import { Avatar, Card } from 'antd';
import { connect } from 'react-redux';
import { fetchHeroData } from '../../actions';

class PlayerDetailCard extends Component {
  renderTop3Heroes() {
    const { playerData: { data }, fetchHeroData } = this.props;
    if (data.competitiveStats) {
      const top3Heroes = _.map(data.competitiveStats.careerStats, (value, key) => {
        return { name: key, value }
      }).filter(hero => hero.name !== 'allHeroes').sort((a,b) => {
        return b.value.game.gamesWon - a.value.game.gamesWon;
      }).splice(0, 3);
      return top3Heroes.map(hero => {
        return (
          <div onClick={() => fetchHeroData(hero)} key={hero.name}>
            <Avatar icon='user' size='large' />
            <h6 className='lead text-capitalize'>{hero.name}</h6>
          </div>
        );
      });
    } else {
      return <div />
    }
  }

  renderAllHeroes() {
    const { playerData: { data }, fetchHeroData } = this.props;
    if (data.competitiveStats) {
      const allHeroes = _.map(data.competitiveStats.careerStats, (value, key) => {
        return { name: key, value }
      }).filter(hero => hero.name !== 'allHeroes');
      return allHeroes.map(hero => {
        return (
          <div className='col-sm-2' key={hero.name} onClick={() => fetchHeroData(hero)}>
            <Avatar icon='user' size='large' />
            <p className='lead text-capitalize'>{hero.name}</p>
          </div>
        );
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
                    <Card className='col-sm-3' title='Win Rate' bordered={ false }>
                      <h6 className='lead'>{Math.round((data.competitiveStats.games.won / data.competitiveStats.games.played) * 100)}%</h6>
                    </Card>
                    <Card className='col-sm-3' title='Time Played' bordered={ false }>
                      <h6 className='lead'>{data.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
                    </Card>
                    <Card className='col-sm-3' title='Games Won' bordered={ false }>
                      <h6 className='lead'>{data.gamesWon}</h6>
                    </Card>
                    <Card className='col-sm-3' title='K/D Ratio' bordered={ false }>
                      <h6 className='lead'>{(data.competitiveStats.careerStats.allHeroes.combat.eliminations / data.competitiveStats.careerStats.allHeroes.combat.deaths).toFixed(2)}</h6>
                    </Card>
                  </div>
                  <Card title='Most Played Heroes' bordered={ false } className='text-center'>
                    <div className='d-flex align-items-center' style={{ justifyContent: 'space-evenly' }}>
                      {this.renderTop3Heroes()}
                    </div>
                  </Card>
                  <Card title='All Heroes' bordered= { false } className='text-center'>
                    <div className='row'>
                      {this.renderAllHeroes()}
                    </div>
                  </Card>
                </Fragment>
              ) : (
                <div />
              )}
            </Card>
            <Card bordered={ false } className='col-sm-6 text-center'>
              <HeroDetail />
            </Card>
          </div>
        </Fragment>
      );
    }
  }

  render() {
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

export default connect(mapStateToProps, { fetchHeroData })(PlayerDetailCard);
