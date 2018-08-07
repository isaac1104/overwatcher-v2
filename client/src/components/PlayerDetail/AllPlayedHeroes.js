import _ from 'lodash';
import React, { Fragment } from 'react';
import { Avatar, Col } from 'antd';
import { FadeIn } from 'react-lazyload-fadein';

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
            <FadeIn height={50}>
              {onload => (
                <Fragment>
                  <Avatar
                    size='large'
                    src={`/images/heroes/${hero.name}.png`}
                    onLoad={onload}
                  />
                  <p className='detail-text'>{hero.name}</p>
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
};

export default AllPlayedHeroes;
