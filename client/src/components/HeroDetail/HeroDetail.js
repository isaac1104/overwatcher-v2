import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Avatar, Badge, Card } from 'antd';

class HeroDetail extends Component {
  componentDidMount() {
    this.props.resetHeroData();
  }

  renderHeroStats() {
    const { data, data: { value } } = this.props.heroData;
    if (value) {
      return (
        <Fragment>
          <h3 className='text-capitalize'><Avatar icon='user' size='large' src={`/images/heroes/${data.name}.png`}/> {data.name}</h3>
          <h6>K/D: {value.average.eliminationsPerLife || 'N/A'}</h6>
          <h6>Games Played: {value.game.gamesPlayed || 'N/A'}</h6>
          <h6>Games Won: {value.game.gamesWon || 'N/A'}</h6>
          <h6>Win % : {value.game.winPercentage || 'N/A'}</h6>
          <h6>
            Gold Medals:
            <Badge count={value.matchAwards.medalsGold ? value.matchAwards.medalsGold : 0}
              style={{ background: 'gold' }}
              showZero
              overflowCount={999}
            />
          </h6>
          <h6>
            Silver Medals:
            <Badge
              count={value.matchAwards.medalsSilver ? value.matchAwards.medalsSilver : 0}
              style={{ background: 'silver' }}
              showZero
              overflowCount={999}
            />
          </h6>
          <h6>
            Bronze Medals:
            <Badge count={value.matchAwards.medalsBronze ? value.matchAwards.medalsBronze : 0}
              style={{ background: '#CD7F32' }}
              showZero
              overflowCount={999}
            />
          </h6>
          <h6>Weapon Accuracy: {value.combat.weaponAccuracy || 'N/A'}</h6>
          <h6>Damage Done: {value.combat.damageDone || 'N/A'}</h6>
        </Fragment>
      );
    }
  }

  render() {
    console.log(this.props.heroData.data);
    return (
      <div>
        {this.renderHeroStats()}
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
