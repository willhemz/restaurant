import React from 'react'
import { hero } from '../component/data'

const Home = () => {
  return (
    <>
      <main className='home'>
        <section className='hero-image'>
          <p className='flex flex-col items-center w-fit mt-16 text-7xl font-bold text-red-700 sm:text-[90px]'>
            <span className='textLight'>Dola</span>
            <span className='textLight'>pot</span>
          </p>
        </section>
        <section className='hero-footer w-full'>
          <article className='plates relative w-full h-96 sm:h-[700px] lg:h-[900px] overflow-hidden'>
            <div className='absolute top-1/2 -translate-y-1/2 bg-red-200 bg-opacity-70 w-full h-24 md:h-28 xl:h-32 flex flex-col justify-center items-center'>
              <h1 className='font-pacifico text-3xl md:text-5xl xl:text-6xl'>
                Delicious
              </h1>
              <p className='font-bold md:text-xl xl:text-2xl'>AND TASTY</p>
            </div>
            <img className='object-cover w-full' src={hero.plates} alt='' />
          </article>
          <article className='order h-96 sm:h-auto'>
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
