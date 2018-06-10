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
    const gridStyle = {
      width: '25%',
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
            <Card.Grid style={gridStyle}>K/D: {value.average.eliminationsPerLife || 'N/A'}</Card.Grid>
            <Card.Grid style={gridStyle}>Games Played: {value.game.gamesPlayed || 'N/A'}</Card.Grid>
            <Card.Grid style={gridStyle}>Win % : {value.game.winPercentage || 'N/A'}</Card.Grid>
            <Card.Grid style={gridStyle}>Weapon Accuracy: {value.combat.weaponAccuracy || 'N/A'}</Card.Grid>
            <Card.Grid style={gridStyle}>Damage Done: {value.combat.damageDone || 'N/A'}</Card.Grid>
            <Card.Grid style={gridStyle}>Avg. Damage: {value.average.allDamageDone || 'NA'}</Card.Grid>
            <Card.Grid style={gridStyle}>Hero Damage: {value.combat.heroDamageDone || 'NA'}</Card.Grid>
            <Card.Grid style={gridStyle}>Obj. Time: {value.combat.objectiveTime || 'NA'}</Card.Grid>
            <Card.Grid style={gridStyle}>Time on Fire: {value.combat.timeSpentOnFire || 'NA'}</Card.Grid>
            <Card.Grid style={gridStyle}>Multi Kills: {value.combat.multikills || 'NA'}</Card.Grid>
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
