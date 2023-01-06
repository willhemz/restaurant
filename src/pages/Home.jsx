import React from 'react'
import { hero } from '../component/data'

const Home = () => {
  return (
    <>
      <main className='home'>
        <section className='hero-image'>
          <p className='flex flex-col items-center w-28 mt-16 text-5xl font-bold text-red-100'>
            <span className='textLight'>Dola</span>
            <span className='textLight'>pot</span>
          </p>
          <div className='home-img'>
            <img
              className='object-cover w-full h-full rounded-3xl skew-y-12 shadow-md shadow-black'
              src={hero.food}
              alt=''
            />
          </div>
        </section>
        <section className='hero-footer'>
          <article className='menu relative overflow-hidden'>
            <div className='absolute top-0 bg-red-200 w-full h-24 flex flex-col justify-center items-center'>
              <h1 className='font-pacifico text-3xl'>Our Food Menu</h1>
              <p className='font-bold'>Smokey Jollof Rice</p>
            </div>
            <img src={hero.menu} alt='' />
          </article>
          <article className='plates relative h-80 overflow-hidden'>
            <div className='absolute top-1/2 -translate-y-1/2 bg-red-200 bg-opacity-70 w-full h-24 flex flex-col justify-center items-center'>
              <h1 className='font-pacifico text-3xl'>Delicious</h1>
              <p className='font-bold'>AND TASTY</p>
            </div>
            <img src={hero.plates} alt='' />
          </article>
          <article className='order h-80'>
            <img
              className='object-cover h-full w-full'
              src={hero.order}
              alt=''
            />
          </article>
        </section>
      </main>
    </>
  )
}

export default Home
