import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Avatar, Badge, Card, Divider } from 'antd';

class HeroDetail extends Component {
  componentDidMount() {
    this.props.resetHeroData();
  }

  renderHeroStats() {
    const { data, data: { value } } = this.props.heroData;
    if (value) {
      return (
        <Fragment>
          <Card title={
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
            <h6>K/D: {value.average.eliminationsPerLife || 'N/A'}</h6>
            <h6>Games Played: {value.game.gamesPlayed || 'N/A'}</h6>
            <h6>Win % : {value.game.winPercentage || 'N/A'}</h6>
            <h6>Weapon Accuracy: {value.combat.weaponAccuracy || 'N/A'}</h6>
            <h6>Damage Done: {value.combat.damageDone || 'N/A'}</h6>
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
