import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        <ul className='nav__list'>
            <li className='nav__list-item'>
                <a href='#' className='nav__list-link'>
                    Review
                </a>
            </li>
            <li className='nav__list-item'>
                <a href='#' className='nav__list-link'>
                    Tips
                </a>
            </li>
            <li className='nav__list-item'>
                <a href='#' className='nav__list-link'>
                    Alerts
                </a>
            </li>
            <li className='nav__list-item'>
                <a href='#' className='nav__list-link'>
                    Blog
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar