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
