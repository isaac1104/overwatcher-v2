import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import HeroDetailTable from './HeroDetailTable';
import { connect } from 'react-redux';
import { resetHeroData } from '../../actions';
import { Avatar, Badge, Card, Divider, Row, Col } from 'antd';
import { FadeIn } from 'react-lazyload-fadein';

class HeroDetail extends Component {
  componentWillUnmount() {
    this.props.resetHeroData();
  };

  renderHeroStats() {
    const { data, data: { value } } = this.props.heroData;
    const style = {
      avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginRight: '10px'
      },
      text: {
        color: '#fff'
      },
      medals: {
        gold: {
          backgroundColor: 'gold',
          marginLeft: '10px',
          color: '#000'
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
    };

    if (value) {
      return (
        <Card
          bordered={ false }
          title={
            <Row>
              <Col span={24} style={style.header}>
                <h3 style={style.text}>
                  <FadeIn height={600}>
                    {onload => (
                      <Avatar
                        style={style.avatar}
                        icon='user'
                        size='large'
                        src={`/images/heroes/${data.name}.png`}
                        onLoad={onload}
                      />
                    )}
                  </FadeIn>
                  {data.name}
                  <Divider type='vertical' />
                  {value.game.gamesWon || 0} Wins
                  <Divider type='vertical' />
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
                </h3>
              </Col>
            </Row>
          }
        >
          <HeroDetailTable value={this.props.heroData.data.value} />
        </Card>
      );
    }
  };

  renderData() {
    const { data } = this.props.playerData;
    const style = {
      text: {
        error: {
          color: '#ff4d4f'
        },
        normal: {
          color: '#fff'
        }
      }
    };

    if (!data.competitiveStats) {
      return (
        <Fragment>
          <h1 style={style.text.error}>Competitive Stats Are Not Available For This Player!</h1>
          <h6 style={style.text.error}>At least one competitive game has to be played</h6>
        </Fragment>
      );
    }
    if (data.competitiveStats && !data.competitiveStats.careerStats) {
      return <h1 style={style.text.error}>Error Has Occured. Please Try Again Later</h1>
    }
    if (_.isEmpty(this.props.heroData.data)) {
      return <h1 style={style.text.normal}>Click a Hero Portrait To Display Hero Data</h1>
    } else {
      return this.renderHeroStats();
    }
  };

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
};

export default connect(mapStateToProps, { resetHeroData })(HeroDetail);
