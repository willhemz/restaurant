import React from 'react'
import { Link } from 'react-router-dom'
import { hero } from './data'

const Navbar = () => {
  return (
    <>
      <nav className='nav-container'>
        <div className='nav-header'>
          <Link to='/'>
            <img className='nav-logo' src={hero.logo} alt='dolapot' />
          </Link>
          <input
            className='search-btn'
            type='search'
            name=''
            id=''
            placeholder='search...'
          />
          {/* <button className='btn'>{hero.bar}</button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
