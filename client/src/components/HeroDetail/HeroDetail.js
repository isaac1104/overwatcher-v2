import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

class HeroDetail extends Component {
  render() {
    console.log(this.props.heroData.data);
    return (
      <Card bordered={ false } className='col-sm-6 text-center'>
        <h1>Render Heroes Info Here</h1>
      </Card>
    );
  }
}

function mapStateToProps({ heroData }) {
  return {
    heroData
  }
}

export default connect(mapStateToProps, null)(HeroDetail);
