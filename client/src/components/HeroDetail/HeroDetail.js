import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Card } from 'antd';

class HeroDetail extends Component {
  componentDidMount() {
    this.props.resetHeroData();
  }

  render() {
    const { data } = this.props.heroData;
    console.log(this.props.heroData.data);
    return (
      <Card bordered={ false } className='col-sm-6 text-center'>
        <h1>{data.name}</h1>
      </Card>
    );
  }
}

function mapStateToProps({ heroData }) {
  return {
    heroData
  }
}

export default connect(mapStateToProps, { resetHeroData })(HeroDetail);
