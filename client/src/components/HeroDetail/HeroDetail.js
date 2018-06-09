import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Avatar, Card } from 'antd';

class HeroDetail extends Component {
  componentDidMount() {
    this.props.resetHeroData();
  }

  renderHeroStats() {
    const { data, data: { value } } = this.props.heroData;
    if (value) {
      return (
        <Fragment>
          <h3 className='text-capitalize'><Avatar icon='user' size='large' /> {data.name}</h3>
          <h6>K/D: {value.average.eliminationsPerLife}</h6>
          <h6>Games Played: {value.game.gamesPlayed}</h6>
          <h6>Games Won: {value.game.gamesWon}</h6>
          <h6>Win % : {value.game.winPercentage}</h6>
          <h6>Gold Medals: {value.matchAwards.medalsGold}</h6>
          <h6>Silver Medals: {value.matchAwards.medalsSilver}</h6>
          <h6>Bronze Medals: {value.matchAwards.medalsBronze}</h6>
          <h6>Weapon Accuracy: {value.combat.weaponAccuracy || 'N/A'}</h6>
          <h6>Damage Done: {value.combat.damageDone}</h6>
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
