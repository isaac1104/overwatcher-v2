import _ from 'lodash';
import React from 'react';
import { Avatar, Col } from 'antd';

const MostPlayedHeroes = props => {
  const style = {
    cursor: {
      cursor: 'pointer'
    },
    avatar: {
      width: '60px',
      height: '60px',
      borderRadius: '50%'
    },
    text: {
      color: '#fff'
    }
  };

  if (props.data.competitiveStats && props.data.competitiveStats.careerStats) {
    const top3Heroes = _.map(props.data.competitiveStats.careerStats, (value, key) => {
      return { name: key, value }
    }).filter(hero => hero.name !== 'allHeroes').sort((a,b) => {
      return b.value.game.gamesPlayed - a.value.game.gamesPlayed;
    }).splice(0, 3);
    return top3Heroes.map(hero => {
      return (
        <Col xs={8} sm={8} md={8} lg={8} xl={8} key={hero.name}>
          <div onClick={() => props.fetchHeroData(hero)} style={style.cursor}>
            <Avatar
              size='large'
              src={`/images/heroes/${hero.name}.png`}
              style={style.avatar}
            />
            <h4 className='detail-text'>{hero.name}</h4>
          </div>
        </Col>
      );
    });
  } else {
    return <h1 style={style.text}>N/A</h1>
  }
};

export default MostPlayedHeroes;
