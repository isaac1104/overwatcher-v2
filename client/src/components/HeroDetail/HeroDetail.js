import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Avatar, Badge, Card, Divider, Table, Row, Col } from 'antd';
import { FadeIn } from 'react-lazyload-fadein';

class HeroDetail extends Component {
  componentWillUnmount() {
    this.props.resetHeroData();
  }

  renderStatsTable() {
    const { data: { value } } = this.props.heroData;
    if (value) {
      const columns1 = [
        {
          title: 'K/D Ratio',
          dataIndex: 'kd',
          key: 'kd',
          width: '20%'
        },
        {
          title: 'Games Played',
          dataIndex: 'gamesPlayed',
          key: 'gamesPlayed',
          width: '20%'
        },
        {
          title: 'Win %',
          dataIndex: 'winPercentage',
          key: 'winPercentage',
          width: '20%'
        },
        {
          title: 'Weapon Accuracy',
          dataIndex: 'weaponAccuracy',
          key: 'weaponAccuracy',
          width: '20%'
        },
        {
          title: 'Damage Done',
          dataIndex: 'damageDone',
          key: 'damageDone',
          width: '20%'
        }
    ];

      const columns2 = [
        {
          title: 'Avg. Damage',
          dataIndex: 'avgDamage',
          key: 'avgDamage',
          width: '20%'
        },
        {
          title: 'Hero Damage',
          dataIndex: 'heroDamage',
          key: 'heroDamage',
          width: '20%'
        },
        {
          title: 'Obj. Time',
          dataIndex: 'objTime',
          key: 'objTime',
          width: '20%'
        },
        {
          title: 'Time On Fire',
          dataIndex: 'timeOnFire',
          key: 'timeOnFire',
          width: '20%'
        },
        {
          title: 'Multikills',
          dataIndex: 'multikills',
          key: 'multikills',
          width: '20%'
        }
    ];

      const columns3 = [
        {
          title: 'Most Obj. Kills',
          dataIndex: 'mostObjKills',
          key: 'mostObjKills',
          width: '20%'
        },
        {
          title: 'Most Solo Kills',
          dataIndex: 'mostSoloKills',
          key: 'mostSoloKills',
          width: '20%'
        },
        {
          title: 'Most Kill Streaks',
          dataIndex: 'mostKillStreaks',
          key: 'mostKillStreaks',
          width: '20%'
        },
        {
          title: 'Most Critical Hits',
          dataIndex: 'mostCriticalHits',
          key: 'mostCriticalHits',
          width: '20%'
        },
        {
          title: 'Deaths',
          dataIndex: 'deaths',
          key: 'deaths',
          width: '20%'
        }
    ];

      const columns4 = [
        {
          title: 'Most Kills in Game',
          dataIndex: 'mostKillsInGame',
          key: 'mostKillsInGame',
          width: '20%'
        },
        {
          title: 'Most Multikills',
          dataIndex: 'mostMultiKills',
          key: 'mostMultiKills',
          width: '20%'
        },
        {
          title: 'Most Hero Damage in Game',
          dataIndex: 'mostHeroDamageInGame',
          key: 'mostHeroDamageInGame',
          width: '20%'
        },
        {
          title: 'Most Final Blows',
          dataIndex: 'mostFinalBlows',
          key: 'mostFinalBlows',
          width: '20%'
        },
        {
          title: 'Critical Hits Accuracy',
          dataIndex: 'criticalHitsAccuracy',
          key: 'criticalHitsAccuracy',
          width: '20%'
        }
    ];

      const data1 = [{
        key: '1',
        kd: <p className='lead'>{value.average.eliminationsPerLife || 'N/A'}</p>,
          gamesPlayed: <p className='lead'>{value.game.gamesPlayed || 'N/A'}</p>,
          winPercentage: <p className='lead'>{value.game.winPercentage || 'N/A'}</p>,
          weaponAccuracy: <p className='lead'>{value.combat.weaponAccuracy || 'N/A'}</p>,
          damageDone: <p className='lead'>{value.combat.damageDone? value.combat.damageDone.toLocaleString() : 'N/A'}</p>
      }];

      const data2 = [{
        key: '2',
        avgDamage: <p className='lead'>{value.average.allDamageDone || 'N/A'}</p>,
        heroDamage: <p className='lead'>{value.combat.heroDamageDone ? value.combat.heroDamageDone.toLocaleString() : 'N/A'}</p>,
        objTime: <p className='lead'>{value.combat.objectiveTime || 'N/A'}</p>,
        timeOnFire: <p className='lead'>{value.combat.timeSpentOnFire || 'N/A'}</p>,
        multikills: <p className='lead'>{value.combat.multikills || 'N/A'}</p>
      }];

      const data3 = [{
        key: '3',
        mostObjKills: <p className='lead'>{value.best.objectiveKillsMostInGame || 'N/A'}</p>,
        mostSoloKills: <p className='lead'>{value.best.soloKillsMostInGame || 'N/A'}</p>,
        mostKillStreaks: <p className='lead'>{value.best.killsStreakBest || 'N/A'}</p>,
        mostCriticalHits: <p className='lead'>{value.best.criticalHitsMostInGame || 'N/A'}</p>,
        deaths: <p className='lead'>{value.deaths.deaths || 'N/A'}</p>
      }];

      const data4 = [{
        key: '4',
        mostKillsInGame: <p className='lead'>{value.best.eliminationsMostInGame || 'N/A'}</p>,
        mostMultiKills: <p className='lead'>{value.best.multikillsBest || 'N/A'}</p>,
        mostHeroDamageInGame: <p className='lead'>{value.best.heroDamageDoneMostInGame || 'N/A'}</p>,
        mostFinalBlows: <p className='lead'>{value.best.finalBlowsMostInGame || 'N/A'}</p>,
        criticalHitsAccuracy: <p className='lead'>{value.combat.criticalHitsAccuracy || 'N/A'}</p>
      }];

      return (
        <Fragment>
          <Table columns={columns1} dataSource={data1} pagination={false} />
          <Table columns={columns2} dataSource={data2} pagination={false} />
          <Table columns={columns3} dataSource={data3} pagination={false} />
          <Table columns={columns4} dataSource={data4} pagination={false} />
        </Fragment>
      );
    }
  }

  renderHeroStats() {
    const { data, data: { value } } = this.props.heroData;
    const style = {
      avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginRight: '10px'
      },
      background: {
        backgroundColor: '#f0f2f5'
      },
      medals: {
        gold: {
          backgroundColor: 'gold',
          marginLeft: '10px'
        },
        silver: {
          backgroundColor: 'silver'
        },
        bronze: {
          backgroundColor: '#CD7F32'
        }
      },
      header: {
        overflowX: 'auto'
      }
    }
    if (value) {
      return (
        <Card
          style={style.background}
          bordered={ false }
          title={
            <Row>
              <Col span={24} style={style.header}>
                <h3>
                  <FadeIn height={600}>
                    {onload => (
                      <Avatar
                        style={style.avatar}
                        icon='user'
                        size='large'
                        src={`/images/heroes/${data.name}.png`}
                        onLoad={onload}
                      />
                    )}
                  </FadeIn>
                  {data.name}
                  <Divider type='vertical' />
                  {value.game.gamesWon || 0} Wins
                  <Divider type='vertical' />
                  <Badge count={value.matchAwards.medalsGold ? value.matchAwards.medalsGold : 0}
                    style={style.medals.gold}
                    showZero
                    overflowCount={999}
                  />
                  <Divider type='vertical' />
                  <Badge
                    count={value.matchAwards.medalsSilver ? value.matchAwards.medalsSilver : 0}
                    style={style.medals.silver}
                    showZero
                    overflowCount={999}
                  />
                  <Divider type='vertical' />
                  <Badge count={value.matchAwards.medalsBronze ? value.matchAwards.medalsBronze : 0}
                    style={style.medals.bronze}
                    showZero
                    overflowCount={999}
                  />
                </h3>
              </Col>
            </Row>
          }
        >
          {this.renderStatsTable()}
        </Card>
      );
    }
  }

  renderData() {
    const { data } = this.props.playerData;
    if (!data.competitiveStats) {
      return (
        <Fragment>
          <h1>Competitive Stats Are Not Available For This Player!</h1>
          <h6>At least one competitive game has to be played</h6>
        </Fragment>
      );
    }
    if (data.competitiveStats && !data.competitiveStats.careerStats) {
      return <h1>Error Has Occured. Please Try Again Later</h1>
    }
    if (_.isEmpty(this.props.heroData.data)) {
      return <h1>Click a Hero Portarit To Display Hero Data</h1>
    } else {
      return this.renderHeroStats();
    }
  }

  render() {
    console.log(this.props.heroData);
    return (
      <Fragment>
        {this.renderData()}
      </Fragment>
    );
  }
}

function mapStateToProps({ heroData, playerData }) {
  return {
    heroData,
    playerData
  }
}

export default connect(mapStateToProps, { resetHeroData })(HeroDetail);
