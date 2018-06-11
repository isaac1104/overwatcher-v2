import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Avatar, Badge, Card, Divider, Table } from 'antd';

class HeroDetail extends Component {
  componentDidMount() {
    this.props.resetHeroData();
  }

  renderStatsTable() {
    const { data: { value } } = this.props.heroData;
    if (value) {
      const columns1 = [{
        title: 'K/D',
        dataIndex: 'kd',
        key: 'kd',
        width: '20%'
      }, {
        title: 'Games Played',
        dataIndex: 'gamesPlayed',
        key: 'gamesPlayed',
        width: '20%'
      }, {
        title: 'Win %',
        dataIndex: 'winPercentage',
        key: 'winPercentage',
        width: '20%'
      }, {
        title: 'Weapon Accuracy',
        dataIndex: 'weaponAccuracy',
        key: 'weaponAccuracy',
        width: '20%'
      }, {
        title: 'Damage Done',
        dataIndex: 'damageDone',
        key: 'damageDone',
        width: '20%'
      }];

      const columns2 = [{
        title: 'Avg. Damage',
        dataIndex: 'avgDamage',
        key: 'avgDamage',
        width: '20%'
      }, {
        title: 'Hero Damage',
        dataIndex: 'heroDamage',
        key: 'heroDamage',
        width: '20%'
      }, {
        title: 'Obj. Time',
        dataIndex: 'objTime',
        key: 'objTime',
        width: '20%'
      }, {
        title: 'Time On Fire',
        dataIndex: 'timeOnFire',
        key: 'timeOnFire',
        width: '20%'
      }, {
        title: 'Multikills',
        dataIndex: 'multikills',
        key: 'multikills',
        width: '20%'
      }];

      const data1 = [{
        key: '1',
        kd: <p className='lead'>{value.average.eliminationsPerLife || 'N/A'}</p>,
          gamesPlayed: <p className='lead'>{value.game.gamesPlayed || 'N/A'}</p>,
          winPercentage: <p className='lead'>{value.game.winPercentage || 'N/A'}</p>,
          weaponAccuracy: <p className='lead'>{value.combat.weaponAccuracy || 'N/A'}</p>,
          damageDone: <p className='lead'>{value.combat.damageDone.toLocaleString() || 'N/A'}</p>
        }];

        const data2 = [{
          key: '2',
          avgDamage: <p className='lead'>{value.average.allDamageDone || 'N/A'}</p>,
          heroDamage: <p className='lead'>{value.combat.heroDamageDone.toLocaleString() || 'N/A'}</p>,
          objTime: <p className='lead'>{value.combat.objectiveTime || 'N/A'}</p>,
          timeOnFire: <p className='lead'>{value.combat.timeSpentOnFire || 'N/A'}</p>,
          multikills: <p className='lead'>{value.combat.multikills || 'N/A'}</p>
      }];

      return (
        <Fragment>
          <Table columns={columns1} dataSource={data1} pagination={false} />
          <Table columns={columns2} dataSource={data2} pagination={false} />
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
      }
    }
    if (value) {
      return (
        <Fragment>
          <Card
            style={{ backgroundColor: '#f0f2f5' }}
            bordered={ false }
            title={
              <div className='row'>
                <div className='col-md-4'>
                  <h3 className='text-capitalize'>
                    <Avatar
                      style={style.avatar}
                      icon='user'
                      size='large'
                      src={`/images/heroes/${data.name}.png`}
                    />
                    {data.name}
                  </h3>
                </div>
                <div className='col-md-8' style={{ marginTop: '2.4rem' }}>
                  <div className='d-flex align-items-center' style={{ justifyContent: 'space-evenly' }}>
                    <h6 className='lead'>{value.game.gamesWon || 0} Wins</h6>
                    <h6>
                      Medals
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
                    </h6>
                  </div>
                </div>
              </div>
            }
          >
            {this.renderStatsTable()}
          </Card>
        </Fragment>
      );
    }
  }

  render() {
    const { data } = this.props.heroData;
    console.log(data);
    return (
      <div>
        {_.isEmpty(data)
          ? (
            <h1 className='display-4 lead'>Click on a hero to display stats</h1>
          )
          : (
            this.renderHeroStats()
          )
        }
      </div>
    );
  }
}

function mapStateToProps({ heroData }) {
  return {
    heroData
  }
}

export default connect(mapStateToProps, { resetHeroData })(HeroDetail);
