import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import PlayerHeader from './PlayerHeader';
import MostPlayedHeroes from './MostPlayedHeroes';
import AllPlayedHeroes from './AllPlayedHeroes';
import HeroDetail from '../HeroDetail/HeroDetail';
import { Card, Divider, Icon, Row, Col } from 'antd';
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
        icon: {
          marginRight: '10px'
        },
        rating: {
          width: '50px'
        }
      },
      row: {
        padding: '10px'
      }
    }
    if (data.competitiveStats && data.competitiveStats.topHeroes) {
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
            background: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${mainHero}/background-story.jpg) no-repeat`,
            backgroundSize: '100% 270%'
          }}>
          <Row type='flex' align='middle' style={style.row}>
            <img src={data.icon} alt='icon' style={style.image.icon} />
            <h1 style={style.text}>{data.name}</h1>
            <h3 style={style.text}>
              <img src={data.ratingIcon} alt='icon' style={style.image.rating} />
              {data.ratingName}<Divider type='vertical' />{data.rating} Points<Divider type='vertical' />Lvl. {data.level}
            </h3>
          </Row>
        </div>
      );
    } else {
      return (
        <div style={{ backgroundColor: '#000' }}>
          <Row type='flex' align='middle' style={style.row}>
            <h1 style={style.text}>{data.name}</h1>
            <h3 style={style.text}>
              {data.ratingName}<Divider type='vertical' />{data.rating} Points<Divider type='vertical' />Lvl. {data.level}
            </h3>
          </Row>
        </div>
      );
    }
  }

  renderDetail() {
    const { data } = this.props.playerData;
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
      return (
      <Fragment>
        <PlayerHeader data={this.props.playerData.data} />
        <Row className='row'>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} style={style.playerBackground}>
            <Card bordered={ false } style={style.playerBackground}>
              {data.competitiveStats ? (
                <Fragment>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='Games Won' bordered={ false }>
                        <h3 className='lead detail-text'>{data.gamesWon}</h3>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='Win Rate' bordered={ false }>
                        <h3 className='lead detail-text'>{Math.round((data.competitiveStats.games.won / data.competitiveStats.games.played) * 100)}%</h3>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='K/D Ratio' bordered={ false }>
                        <h3 className='lead detail-text'>
                          {
                            data.competitiveStats.careerStats
                            ? (data.competitiveStats.careerStats.allHeroes.combat.eliminations / data.competitiveStats.careerStats.allHeroes.combat.deaths).toFixed(2)
                            : 'N/A'
                          }
                        </h3>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='Time Played' bordered={ false }>
                        <h3 className='lead detail-text'>
                          {
                            data.competitiveStats.careerStats
                          ? data.competitiveStats.careerStats.allHeroes.game.timePlayed
                          : 'N/A'
                        }
                        </h3>
                      </Card>
                    </Col>
                  </Row>
                  <Card
                    title={<p><Icon type='user' /> Most Played Heroes</p>}
                    bordered={ false }
                  >
                    <Row type='flex' justify='space-around' align='middle'>
                      <MostPlayedHeroes data={this.props.playerData.data} fetchHeroData={this.props.fetchHeroData} />
                    </Row>
                  </Card>
                  <Card
                    title={<p><Icon type='usergroup-add' /> All Played Heroes</p>}
                    bordered= { false }
                  >
                    <Row style={{ paddingTop: '30px' }}>
                      <AllPlayedHeroes data={this.props.playerData.data} fetchHeroData={this.props.fetchHeroData} />
                    </Row>
                  </Card>
                </Fragment>
              ) : (
                <div />
              )}
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} style={style.heroBackground}>
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
