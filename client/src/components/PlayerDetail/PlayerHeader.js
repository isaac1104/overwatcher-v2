import _ from 'lodash';
import React from 'react';
import { Divider, Row } from 'antd';
import { FadeIn } from 'react-lazyload-fadein';

const PlayerHeader = props => {
  const style = {
    text: {
      color: '#fff'
    },
    image: {
      icon: {
        marginRight: '10px'
      },
      rating: {
        width: '50px'
      }
    },
    row: {
      padding: '10px'
    }
  }
  if (props.data.competitiveStats && props.data.competitiveStats.topHeroes) {
    const mainHero = _.map(props.data.competitiveStats.topHeroes, (value, key) => {
      return { name: key, gamesWon: value.gamesWon }
    }).reduce((acc,curr) => {
      if (acc.gamesWon > curr.gamesWon) {
        return acc;
      } else {
        return curr;
      }
    }).name;
    return (
      <div
        style={{
          background: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${mainHero}/background-story.jpg) no-repeat`,
          backgroundSize: '100% 270%'
        }}>
        <Row type='flex' align='middle' style={style.row}>
          <FadeIn>
            {onload => (
              <img
                src={props.data.icon}
                alt='icon'
                style={style.image.icon}
                onLoad={onload}
              />
            )}
          </FadeIn>
          <h1 style={style.text}>{props.data.name}</h1>
          <h3 style={style.text}>
            <FadeIn>
              {onload => (
                <img
                  src={props.data.ratingIcon}
                  alt='icon'
                  style={style.image.rating}
                  onLoad={onload}
                />
              )}
            </FadeIn>
            {props.data.ratingName}<Divider type='vertical' />{props.data.rating} Points<Divider type='vertical' />Lvl. {props.data.level}
          </h3>
        </Row>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: '#000' }}>
        <Row type='flex' align='middle' style={style.row}>
          <h1 style={style.text}>{props.data.name}</h1>
          <h3 style={style.text}>
            {props.data.ratingName}<Divider type='vertical' />{props.data.rating} Points<Divider type='vertical' />Lvl. {props.data.level}
          </h3>
        </Row>
      </div>
    );
  }
}

export default PlayerHeader;
