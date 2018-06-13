import React from 'react';

const NotFound = () => {
  const style = {
    container: {
      textAlign: 'center'
    },
    font: {
      h1: {
        fontSize: '60px',
        color:'#ff4d4f',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '24px',
        color:'#13c2c2'
      }
    }
  }

  return (
    <div style={style.container}>
      <h1 style={style.font.h1}>The requested player was not found!</h1>
      <h2 style={style.font.h2}>Please check the battletag and try again</h2>
    </div>
  );
}

export default NotFound;
