import _ from 'lodash';
import React from 'react';
import { Avatar, Col } from 'antd';

const AllPlayedHeroes = props => {
  const style = {
    cursor: {
      cursor: 'pointer'
    },
    text: {
      color: '#fff'
    }
  };

  if (props.data.competitiveStats && props.data.competitiveStats.careerStats) {
    const allHeroes = _.map(props.data.competitiveStats.careerStats, (value, key) => {
      return { name: key, value }
    }).filter(hero => hero.name !== 'allHeroes');
    return allHeroes.map(hero => {
      return (
        <Col xs={8} sm={8} md={6} lg={6} xl={4} key={hero.name}>
          <div style={style.cursor} onClick={() => props.fetchHeroData(hero)}>
            <Avatar
              size='large'
              src={`/images/heroes/${hero.name}.png`}
            />
            <p className='detail-text'>{hero.name}</p>
          </div>
        </Col>
      );
    });
  } else {
    return <h1 style={style.text}>N/A</h1>
  }
};

export default AllPlayedHeroes;
