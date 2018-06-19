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
        icon: {
          marginRight: '10px'
        }
      },
      row: {
        padding: '10px'
      }
    }
    if (data.stats) {
      const mainHero = data.stats.top_heroes.competitive.games_won.reduce((acc,curr) => {
        if (Number(acc.games_won) > Number(curr.games_won)) {
          return acc;
        } else {
          return curr;
        }
      }).hero.toLowerCase();
      return (
        <div
          style={{
            background: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${mainHero}/background-story.jpg) no-repeat`,
            backgroundSize: '100% 270%'
          }}
          >
          <Row type='flex' align='middle' style={style.row}>
            <img src={data.portrait} alt='icon' style={style.image.icon} />
            <h1 style={style.text}>{data.username}</h1>
            <Divider type='vertical' />
            <h3 style={style.text}>Lvl. {data.level}</h3>
          </Row>
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderMostPlayedHeroes() {
    const { playerData: { data }, fetchHeroData } = this.props;
    const style = {
      cursor: {
        cursor: 'pointer'
      },
      avatar: {
        width: '60px',
        height: '60px',
        borderRadius: '50%'
      },
      text: {
        color: '#fff'
      }
    }
    if (data.stats) {
      const top3Heroes = data.stats.top_heroes.competitive.games_won.sort((a,b) => {
        return Number(b.games_won) - Number(a.games_won);
      }).splice(0, 3);
      return top3Heroes.map(hero => {
        return (
          <Col xs={8} sm={8} md={8} lg={8} xl={8} key={hero.hero}>
            <div onClick={() => fetchHeroData(hero)} style={style.cursor}>
              <Avatar size='large' src={hero.img} style={style.avatar} />
              <h4 className='detail-text'>{hero.hero}</h4>
            </div>
          </Col>
        );
      });
    } else {
      return <h1 style={style.text}>N/A</h1>
    }
  }

  renderAllPlayedHeroes() {
    const { playerData: { data }, fetchHeroData } = this.props;
    const style = {
      cursor: {
        cursor: 'pointer'
      },
      text: {
        color: '#fff'
      }
    }
    if (data.stats) {
      const allHeroes = data.stats.top_heroes.competitive.games_won;
      return allHeroes.map(hero => {
        return (
          <Col xs={8} sm={8} md={6} lg={6} xl={4} key={hero.hero}>
            <div style={style.cursor} onClick={() => fetchHeroData(hero)}>
              <Avatar size='large' src={hero.img}/>
              <p className='detail-text'>{hero.hero}</p>
            </div>
          </Col>
        );
      });
    } else {
      return <h1 style={style.text}>N/A</h1>
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
        {this.renderMainHero()}
        <Row className='row'>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} style={style.playerBackground}>
            <Card bordered={ false } style={style.playerBackground}>
              {data.stats ? (
                <Fragment>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='Games Won' bordered={ false }>
                        <h3 className='lead detail-text'>{data.stats.game.competitive[1].value}</h3>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='Win Rate' bordered={ false }>
                        <h3 className='lead detail-text'>{Math.round((data.stats.game.competitive[2].value / data.stats.game.competitive[1].value) * 100)}%</h3>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='K/D Ratio' bordered={ false }>
                        <h3 className='lead detail-text'>
                          {(parseInt(data.stats.combat.competitive[9].value, 10) / parseInt(data.stats.combat.competitive[2].value, 10)).toFixed(2)}
                        </h3>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Card title='Time Played' bordered={ false }>
                        <h3 className='lead detail-text'>
                          {data.stats.game.competitive[0].value}
                        </h3>
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
                    <Row style={{ paddingTop: '30px' }}>
                      {this.renderAllPlayedHeroes()}
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

export default connect(mapStateToProps, { fetchHeroData })(PlayerDetailCard);
