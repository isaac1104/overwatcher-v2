import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import HeroDetail from '../HeroDetail/HeroDetail';
import { Avatar, Card, Divider } from 'antd';
import { connect } from 'react-redux';
import { fetchHeroData } from '../../actions';

class PlayerDetailCard extends Component {
  renderMainHero() {
    const { data } = this.props.playerData;
    const style = {
      text: {
        color: '#fff'
      },
      image: {
        width: '50px'
      }
    }
    if (data.competitiveStats) {
      const mainHero = _.map(data.competitiveStats.topHeroes, (value, key) => {
        return { name: key, gamesWon: value.gamesWon }
      }).reduce((acc,curr) => {
        if (acc.gamesWon > curr.gamesWon) {
          return acc;
        } else {
          return curr;
        }
      }).name;
      return (
        <div
          className='row'
          style={{
            backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${mainHero}/background-story.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed'
          }}>
          <div className='col-md-1 mt-3'>
            <img src={data.icon} className='img-fluid' alt='icon' />
          </div>
          <div className='col-md-11'>
            <h1 className='display-4 text-uppercase' style={style.text}>{data.name}</h1>
            <h3 className='lead' style={style.text}>
              <img src={data.ratingIcon} className='img-fluid' alt='icon' style={style.image} />
              {data.ratingName}<Divider type='vertical' />{data.rating} Points<Divider type='vertical' />Lvl. {data.level}
            </h3>
          </div>
        </div>
      );
    } else {
      return <div />
    }
  }

  renderMostPlayedHeroes() {
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
            <Avatar icon='user' size='large' src={`/images/heroes/${hero.name}.png`}/>
            <h6 className='lead text-capitalize detail-text'>{hero.name}</h6>
          </div>
        );
      });
    } else {
      return <div />
    }
  }

  renderAllPlayedHeroes() {
    const { playerData: { data }, fetchHeroData } = this.props;
    if (data.competitiveStats) {
      const allHeroes = _.map(data.competitiveStats.careerStats, (value, key) => {
        return { name: key, value }
      }).filter(hero => hero.name !== 'allHeroes');
      return allHeroes.map(hero => {
        return (
          <div className='col-md-2' key={hero.name} onClick={() => fetchHeroData(hero)}>
            <Avatar icon='user' size='large' src={`/images/heroes/${hero.name}.png`}/>
            <p className='lead text-capitalize detail-text'>{hero.name}</p>
          </div>
        );
      });
    } else {
      return <div />
    }
  }

  renderDetail() {
    const { error, data } = this.props.playerData;
    const style = {
      playerBackground: {
        backgroundColor: '#343a40'
      },
      heroBackground: {
        backgroundColor: '#f0f2f5'
      },
      mostPlayed: {
        justifyContent: 'space-evenly'
      }
    }
    if (error) {
      return <h1 className='display-4 text-danger text-center'>{data}</h1>
    } else {
      return (
        <Fragment>
          {this.renderMainHero()}
          <div className='row'>
            <Card bordered={ false } className='col-md-6' style={style.playerBackground}>
              {data.competitiveStats ? (
                <Fragment>
                  <div className='row text-center'>
                    <Card className='col-md-3' title='Games Won' bordered={ false }>
                      <h6 className='lead detail-text'>{data.gamesWon}</h6>
                    </Card>
                    <Card className='col-md-3' title='Win Rate' bordered={ false }>
                      <h6 className='lead detail-text'>{Math.round((data.competitiveStats.games.won / data.competitiveStats.games.played) * 100)}%</h6>
                    </Card>
                    <Card className='col-md-3' title='K/D Ratio' bordered={ false }>
                      <h6 className='lead detail-text'>
                        {(data.competitiveStats.careerStats.allHeroes.combat.eliminations / data.competitiveStats.careerStats.allHeroes.combat.deaths).toFixed(2)}
                      </h6>
                    </Card>
                    <Card className='col-md-3' title='Time Played' bordered={ false }>
                      <h6 className='lead detail-text'>{data.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
                    </Card>
                  </div>
                  <Card title='Most Played Heroes' bordered={ false } className='text-center'>
                    <div className='d-flex align-items-center' style={style.mostPlayed}>
                      {this.renderMostPlayedHeroes()}
                    </div>
                  </Card>
                  <Card title='All Played Heroes' bordered= { false } className='text-center'>
                    <div className='row'>
                      {this.renderAllPlayedHeroes()}
                    </div>
                  </Card>
                </Fragment>
              ) : (
                <div />
              )}
            </Card>
            <Card bordered={ false } className='col-md-6 text-center' style={style.heroBackground}>
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
