import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link to='/' className='navbar-brand'>
          <img src='/images/misc/owlogo.svg' className='img-fluid' alt='logo' width='50' height= '50'/> OVERWATCHER V2
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='ml-auto'>
            <SearchForm />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
