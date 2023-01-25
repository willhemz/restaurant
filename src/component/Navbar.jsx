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
          <div className='flex w-11/12'>
            <input
              className='search-btn'
              type='search'
              name=''
              id=''
              placeholder='search...'
            />
            <button className='btn text-2xl bg-red-700 text-white rounded-r-md p-2'>
              {hero.search}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
