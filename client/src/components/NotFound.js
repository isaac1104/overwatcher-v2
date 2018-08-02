import React from 'react';

const NotFound = () => {
  const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '100vh'
    },
    font: {
      h1: {
        fontSize: '3em',
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
      <div>
        <h1 style={style.font.h1}>The requested player was not found!</h1>
        <h2 style={style.font.h2}>Please check the battletag and try again</h2>
      </div>
    </div>
  );
}

export default NotFound;
