import React from 'react'
import { hero } from '../component/data'

const Home = () => {
  return (
    <>
      <main className='home'>
        <section className='hero-image'>
          <p className='flex flex-col items-center w-24 mt-16 text-5xl font-bold text-red-100'>
            <span className='textLight'>Dola</span>
            <span className='textLight'>pot</span>
          </p>
          <div className='home-img'>
            <img
              className='object-cover w-full h-full rounded-full shadow-md shadow-black'
              src={hero.food}
              alt=''
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
