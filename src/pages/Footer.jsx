import React from 'react'

import "./css/Footer.css"

import backgroundDiscount from "../SVGs/backgroundDiscount.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container f-center'>
        <div className='footer__img'>
          <img src={backgroundDiscount}/>
          <div className='footer__img-desc f-center'>
            <h1>Don’t Miss The 50% Discount if You register Today</h1>
            <button>Register Today</button>
          </div>
        </div>
        <div className='footer__details'>
          <div className='footer__copyrights' role="heading">
            &copy; 2022 Treloo LLC - All right reserved.
          </div>
          <div className='footer__nav'>
            <ul>
              <li>Review</li>
              <li>Tips</li>
              <li>Alerts</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer