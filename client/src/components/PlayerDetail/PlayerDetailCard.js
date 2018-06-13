import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import HeroDetail from '../HeroDetail/HeroDetail';
import { Avatar, Card, Divider, Icon, Row, Col } from 'antd';
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
          style={{
            backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${mainHero}/background-story.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed'
          }}>
          <Row>
            <Col sm={2}>
              <img src={data.icon} className='img-fluid' alt='icon' />
            </Col>
            <Col sm={22}>
              <h1 style={style.text}>{data.name}</h1>
              <h3 style={style.text}>
                <img src={data.ratingIcon} className='img-fluid' alt='icon' style={style.image} />
                {data.ratingName}<Divider type='vertical' />{data.rating} Points<Divider type='vertical' />Lvl. {data.level}
              </h3>
            </Col>
          </Row>
        </div>
      );
    } else {
      return <div />
    }
  }

  renderMostPlayedHeroes() {
    const { playerData: { data }, fetchHeroData } = this.props;
    const style = {
      cursor: {
        cursor: 'pointer'
      }
    }
    if (data.competitiveStats) {
      const top3Heroes = _.map(data.competitiveStats.careerStats, (value, key) => {
        return { name: key, value }
      }).filter(hero => hero.name !== 'allHeroes').sort((a,b) => {
        return b.value.game.gamesWon - a.value.game.gamesWon;
      }).splice(0, 3);
      return top3Heroes.map(hero => {
        return (
          <div onClick={() => fetchHeroData(hero)} key={hero.name} style={style.cursor}>
            <Avatar size='large' src={`/images/heroes/${hero.name}.png`}/>
            <h6 className='detail-text'>{hero.name}</h6>
          </div>
        );
      });
    } else {
      return <div />
    }
  }

  renderAllPlayedHeroes() {
    const { playerData: { data }, fetchHeroData } = this.props;
    const style = {
      cursor: {
        cursor: 'pointer'
      }
    }
    if (data.competitiveStats) {
      const allHeroes = _.map(data.competitiveStats.careerStats, (value, key) => {
        return { name: key, value }
      }).filter(hero => hero.name !== 'allHeroes');
      return allHeroes.map(hero => {
        return (
          <Col sm={4}>
            <div style={style.cursor} onClick={() => fetchHeroData(hero)} key={hero.name}>
              <Avatar size='large' src={`/images/heroes/${hero.name}.png`}/>
              <p className='detail-text'>{hero.name}</p>
            </div>
          </Col>
        );
      });
    } else {
      return <div />
    }
  }

  renderDetail() {
    const { data } = this.props.playerData;
    const style = {
      playerBackground: {
        backgroundColor: '#343a40',
        height: '90vh'
      },
      heroBackground: {
        backgroundColor: '#f0f2f5',
        height: '90vh'
      },
      mostPlayed: {
        justifyContent: 'space-evenly'
      }
    }
      return (
      <Fragment>
        {this.renderMainHero()}
        <Row className='row'>
          <Col sm={12} style={style.playerBackground}>
            <Card bordered={ false } style={style.playerBackground}>
              {data.competitiveStats ? (
                <Fragment>
                  <Row>
                    <Col sm={6}>
                      <Card title='Games Won' bordered={ false }>
                        <h6 className='lead detail-text'>{data.gamesWon}</h6>
                      </Card>
                    </Col>
                    <Col sm={6}>
                      <Card title='Win Rate' bordered={ false }>
                        <h6 className='lead detail-text'>{Math.round((data.competitiveStats.games.won / data.competitiveStats.games.played) * 100)}%</h6>
                      </Card>
                    </Col>
                    <Col sm={6}>
                      <Card title='K/D Ratio' bordered={ false }>
                        <h6 className='lead detail-text'>
                          {(data.competitiveStats.careerStats.allHeroes.combat.eliminations / data.competitiveStats.careerStats.allHeroes.combat.deaths).toFixed(2)}
                        </h6>
                      </Card>
                    </Col>
                    <Col sm={6}>
                      <Card title='Time Played' bordered={ false }>
                        <h6 className='lead detail-text'>{data.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
                      </Card>
                    </Col>
                  </Row>
                  <Card
                    title={<p><Icon type='user' /> Most Played Heroes</p>}
                    bordered={ false }
                  >
                    <Row type='flex' justify='space-around' align='middle'>
                      {this.renderMostPlayedHeroes()}
                    </Row>
                  </Card>
                  <Card
                    title={<p><Icon type='usergroup-add' /> All Played Heroes</p>}
                    bordered= { false }
                  >
                    <Row>
                      {this.renderAllPlayedHeroes()}
                    </Row>
                  </Card>
                </Fragment>
              ) : (
                <div />
              )}
            </Card>
          </Col>
          <Col sm={12} style={style.heroBackground}>
            <Card bordered={ false } style={style.heroBackground}>
              <HeroDetail />
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
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
