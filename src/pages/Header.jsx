import React from 'react'

import "./css/Header.css";

import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header className='header'>
      <div className='container f-center'>
        <div className='header_logo'>
          <h1>Treloo</h1>
        </div>
        <Navbar />
      </div>
      <div className="header__desc">
        <h1>
          Discover Your Life, Travel Where You Want
        </h1>
        <p>
          Would you explore natur paradise in the world, let's find the best destination in world with us.
        </p>
      </div>
    </header>
  )
}

export default Header