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
    const { data, data: { value } } = this.props.heroData;
    if (value) {
      const columns1 = [{
        title: 'K/D',
        dataIndex: 'kd',
        key: 'kd'
      }, {
        title: 'Games Played',
        dataIndex: 'gamesPlayed',
        key: 'gamesPlayed'
      }, {
        title: 'Win %',
        dataIndex: 'winPercentage',
        key: 'winPercentage'
      }, {
        title: 'Weapon Accuracy',
        dataIndex: 'weaponAccuracy',
        key: 'weaponAccuracy'
      }, {
        title: 'Damage Done',
        dataIndex: 'damageDone',
        key: 'damageDone'
      }];

      const columns2 = [{
        title: 'Avg. Damage',
        dataIndex: 'avgDamage',
        key: 'avgDamage'
      }, {
        title: 'Hero Damage',
        dataIndex: 'heroDamage',
        key: 'heroDamage'
      }, {
        title: 'Obj. Time',
        dataIndex: 'objTime',
        key: 'objTime'
      }, {
        title: 'Time On Fire',
        dataIndex: 'timeOnFire',
        key: 'timeOnFire'
      }, {
        title: 'Multikills',
        dataIndex: 'multikills',
        key: 'multikills'
      }];

      const data1 = [{
        key: '1',
        kd: value.average.eliminationsPerLife || 'N/A',
        gamesPlayed: value.game.gamesPlayed || 'N/A',
        winPercentage: value.game.winPercentage || 'N/A',
        weaponAccuracy: value.combat.weaponAccuracy || 'N/A',
        damageDone: value.combat.damageDone || 'N/A'
      }];

      const data2 = [{
        key: '2',
        avgDamage: value.average.allDamageDone || 'NA',
        heroDamage: value.combat.heroDamageDone || 'NA',
        objTime: value.combat.objectiveTime || 'NA',
        timeOnFire: value.combat.timeSpentOnFire || 'NA',
        multikills: value.combat.multikills || 'N/A'
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
    const gridStyle = {
      width: '20%',
      textAlign: 'center',
    };
    if (value) {
      return (
        <Fragment>
          <Card
            bordered={ false }
            title={
              <div className='row'>
                <div className='col-md-4'>
                  <h3 className='text-capitalize'><Avatar icon='user' size='large' src={`/images/heroes/${data.name}.png`}/> {data.name}</h3>
                </div>
                <div className='col-md-8'>
                  <div className='d-flex align-items-center' style={{ justifyContent: 'space-evenly' }}>
                    <h6 className='lead'>{value.game.gamesWon || '-'} Wins</h6>
                    <h6 className='lead'>{value.game.timePlayed}</h6>
                    <h6>
                      Medals
                      <Badge count={value.matchAwards.medalsGold ? value.matchAwards.medalsGold : 0}
                        style={{ background: 'gold', marginLeft: '10px' }}
                        showZero
                        overflowCount={999}
                      />
                      <Divider type='vertical' />
                      <Badge
                        count={value.matchAwards.medalsSilver ? value.matchAwards.medalsSilver : 0}
                        style={{ background: 'silver' }}
                        showZero
                        overflowCount={999}
                      />
                      <Divider type='vertical' />
                      <Badge count={value.matchAwards.medalsBronze ? value.matchAwards.medalsBronze : 0}
                        style={{ background: '#CD7F32' }}
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
