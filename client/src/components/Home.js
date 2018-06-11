import React from 'react';

const Home = () => {
  return (
    <div className='container-fluid text-center mt-4'>
      <h1 className='display-3 lead text-info'>Welcome to Overwatcher V2</h1>
      <h3 className='lead text-info'>Begin by searching with a valid <code>battletag</code></h3>
      <p className='lead text-primary'>(replace <code>#</code> with <code>-</code>)</p>
    </div>
  )
}

export default Home;
