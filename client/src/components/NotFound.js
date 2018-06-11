import React from 'react';

const NotFound = () => {
  return (
    <div className='text-center'>
      <h1 className='display-4 lead text-danger'>The requested player was not found!</h1>
      <h3 className='display-4 lead'>Please check the <code>battletag</code> and try again</h3>
    </div>
  );
}

export default NotFound;
