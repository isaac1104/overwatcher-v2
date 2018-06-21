import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Avatar, Badge, Card, Divider, Table, Row, Col } from 'antd';

class HeroDetail extends Component {
  componentWillUnmount() {
    this.props.resetHeroData();
  }

  renderStatsTable() {
    const columns = this.props.playerData.data.stats.assists.competitive.map(data => {
      return {
        title: data.title,
        dataIndex: data.title,
        key: data.title
      };
    });
    const dataSource = this.props.playerData.data.stats.assists.competitive.map(data => {
      return {
        key: data.title,
        [data.title]: data.value
      };
    });

    return (
      <Fragment>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </Fragment>
    );
  }

  renderHeroStats() {
    const { data } = this.props.heroData;
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
    return (
      <Card
        style={style.background}
        bordered={ false }
        title={
          <Row>
            <Col span={24} style={style.header}>
              <h3>
                <Avatar
                  style={style.avatar}
                  icon='user'
                  size='large'
                  src={data.img}
                />
                {data.hero}
                <Divider type='vertical' />
                {data.games_won || 0} Wins
                {/* <Divider type='vertical' />
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
                /> */}
              </h3>
            </Col>
          </Row>
        }
      >
        {this.renderStatsTable()}
      </Card>
    );
  }

  renderData() {
    const { data } = this.props.heroData;
    if (_.isEmpty(data)) {
      return <h1>Click a Hero Portarit To Display Hero Data</h1>
    } else {
      return (
        <Fragment>
          {this.renderHeroStats()}
        </Fragment>
      );
    }
  }

  render() {
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
