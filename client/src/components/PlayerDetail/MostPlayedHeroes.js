import _ from 'lodash';
import React, { Fragment } from 'react';
import { Avatar, Col } from 'antd';
import { FadeIn } from 'react-lazyload-fadein';

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
  }

  if (props.data.competitiveStats && props.data.competitiveStats.careerStats) {
    const top3Heroes = _.map(props.data.competitiveStats.careerStats, (value, key) => {
      return { name: key, value }
    }).filter(hero => hero.name !== 'allHeroes').sort((a,b) => {
      return b.value.game.gamesWon - a.value.game.gamesWon;
    }).splice(0, 3);
    return top3Heroes.map(hero => {
      return (
        <Col xs={8} sm={8} md={8} lg={8} xl={8} key={hero.name}>
          <div onClick={() => props.fetchHeroData(hero)} style={style.cursor}>
            <FadeIn height={50}>
              {onload => (
                <Fragment>
                  <Avatar
                    size='large'
                    src={`/images/heroes/${hero.name}.png`}
                    style={style.avatar}
                    onLoad={onload}
                  />
                  <h4 className='detail-text'>{hero.name}</h4>
                </Fragment>
              )}
            </FadeIn>
          </div>
        </Col>
      );
    });
  } else {
    return <h1 style={style.text}>N/A</h1>
  }
}

export default MostPlayedHeroes;
