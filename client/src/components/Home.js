import React from 'react';

const Home = () => {
  const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '80vh'
    },
    font: {
      h1: {
        fontSize: '3em',
        color: '#13c2c2',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '24px',
        color: '#13c2c2'
      },
      h3: {
        fontSize: '16px',
        color:'#ff4d4f'
      }
    }
  }

  return (
    <div style={style.container}>
      <div>
        <h1 style={style.font.h1}>Welcome to Overwatcher V2</h1>
        <h2 style={style.font.h2}>Begin by searching for a valid battletag* including all numbers</h2>
        <h3 style={style.font.h3}>*replace # with-</h3>
      </div>
    </div>
  );
}

export default Home;
