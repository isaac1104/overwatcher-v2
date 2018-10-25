import React, { Fragment } from 'react';
import { Table } from 'antd';

const HeroDetailTable = props => {
  if (props.value) {
    const columns1 = [
      {
        title: 'K/D Ratio',
        dataIndex: 'kd',
        key: 'kd',
        width: '20%'
      },
      {
        title: 'Games Played',
        dataIndex: 'gamesPlayed',
        key: 'gamesPlayed',
        width: '20%'
      },
      {
        title: 'Win %',
        dataIndex: 'winPercentage',
        key: 'winPercentage',
        width: '20%'
      },
      {
        title: 'Weapon Accuracy',
        dataIndex: 'weaponAccuracy',
        key: 'weaponAccuracy',
        width: '20%'
      },
      {
        title: 'Damage Done',
        dataIndex: 'damageDone',
        key: 'damageDone',
        width: '20%'
      }
  ];

    const columns2 = [
      {
        title: 'Avg. Damage',
        dataIndex: 'avgDamage',
        key: 'avgDamage',
        width: '20%'
      },
      {
        title: 'Hero Damage',
        dataIndex: 'heroDamage',
        key: 'heroDamage',
        width: '20%'
      },
      {
        title: 'Obj. Time',
        dataIndex: 'objTime',
        key: 'objTime',
        width: '20%'
      },
      {
        title: 'Time On Fire',
        dataIndex: 'timeOnFire',
        key: 'timeOnFire',
        width: '20%'
      },
      {
        title: 'Multikills',
        dataIndex: 'multikills',
        key: 'multikills',
        width: '20%'
      }
  ];

    const columns3 = [
      {
        title: 'Most Obj. Kills',
        dataIndex: 'mostObjKills',
        key: 'mostObjKills',
        width: '20%'
      },
      {
        title: 'Most Solo Kills',
        dataIndex: 'mostSoloKills',
        key: 'mostSoloKills',
        width: '20%'
      },
      {
        title: 'Most Kill Streaks',
        dataIndex: 'mostKillStreaks',
        key: 'mostKillStreaks',
        width: '20%'
      },
      {
        title: 'Most Critical Hits',
        dataIndex: 'mostCriticalHits',
        key: 'mostCriticalHits',
        width: '20%'
      },
      {
        title: 'Deaths',
        dataIndex: 'deaths',
        key: 'deaths',
        width: '20%'
      }
  ];

    const columns4 = [
      {
        title: 'Most Kills in Game',
        dataIndex: 'mostKillsInGame',
        key: 'mostKillsInGame',
        width: '20%'
      },
      {
        title: 'Most Multikills',
        dataIndex: 'mostMultiKills',
        key: 'mostMultiKills',
        width: '20%'
      },
      {
        title: 'Most Hero Damage in Game',
        dataIndex: 'mostHeroDamageInGame',
        key: 'mostHeroDamageInGame',
        width: '20%'
      },
      {
        title: 'Most Final Blows',
        dataIndex: 'mostFinalBlows',
        key: 'mostFinalBlows',
        width: '20%'
      },
      {
        title: 'Critical Hits Accuracy',
        dataIndex: 'criticalHitsAccuracy',
        key: 'criticalHitsAccuracy',
        width: '20%'
      }
  ];

    const data1 = [{
      key: '1',
      kd: <p className='lead'>{props.value.average.eliminationsPerLife || 'N/A'}</p>,
        gamesPlayed: <p className='lead'>{props.value.game.gamesPlayed || 'N/A'}</p>,
        winPercentage: <p className='lead'>{props.value.game.winPercentage || 'N/A'}</p>,
        weaponAccuracy: <p className='lead'>{props.value.combat.weaponAccuracy || 'N/A'}</p>,
        damageDone: <p className='lead'>{props.value.combat.damageDone? props.value.combat.damageDone.toLocaleString() : 'N/A'}</p>
    }];

    const data2 = [{
      key: '2',
      avgDamage: <p className='lead'>{props.value.average.allDamageDone || 'N/A'}</p>,
      heroDamage: <p className='lead'>{props.value.combat.heroDamageDone ? props.value.combat.heroDamageDone.toLocaleString() : 'N/A'}</p>,
      objTime: <p className='lead'>{props.value.combat.objectiveTime || 'N/A'}</p>,
      timeOnFire: <p className='lead'>{props.value.combat.timeSpentOnFire || 'N/A'}</p>,
      multikills: <p className='lead'>{props.value.combat.multikills || 'N/A'}</p>
    }];

    const data3 = [{
      key: '3',
      mostObjKills: <p className='lead'>{props.value.best.objectiveKillsMostInGame || 'N/A'}</p>,
      mostSoloKills: <p className='lead'>{props.value.best.soloKillsMostInGame || 'N/A'}</p>,
      mostKillStreaks: <p className='lead'>{props.value.best.killsStreakBest || 'N/A'}</p>,
      mostCriticalHits: <p className='lead'>{props.value.best.criticalHitsMostInGame || 'N/A'}</p>,
      deaths: <p className='lead'>{props.value.deaths || 'N/A'}</p>
    }];

    const data4 = [{
      key: '4',
      mostKillsInGame: <p className='lead'>{props.value.best.eliminationsMostInGame || 'N/A'}</p>,
      mostMultiKills: <p className='lead'>{props.value.best.multikillsBest || 'N/A'}</p>,
      mostHeroDamageInGame: <p className='lead'>{props.value.best.heroDamageDoneMostInGame || 'N/A'}</p>,
      mostFinalBlows: <p className='lead'>{props.value.best.finalBlowsMostInGame || 'N/A'}</p>,
      criticalHitsAccuracy: <p className='lead'>{props.value.combat.criticalHitsAccuracy || 'N/A'}</p>
    }];
    return (
      <Fragment>
        <Table columns={columns1} dataSource={data1} pagination={false} />
        <Table columns={columns2} dataSource={data2} pagination={false} />
        <Table columns={columns3} dataSource={data3} pagination={false} />
        <Table columns={columns4} dataSource={data4} pagination={false} />
      </Fragment>
    );
  } else {
    return <div />
  }
};

export default HeroDetailTable;
