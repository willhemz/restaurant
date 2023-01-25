import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { hero, sidebar, homeRoll } from '../component/data'

const Home = () => {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index > homeRoll.length - 1) setIndex(0)
    if (index < 0) setIndex(homeRoll.length - 1)
  }, [index])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex(index + 1)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [index])

  return (
    <>
      <main className='home'>
        <section className='hero-image'>
          {sidebar
            .filter((item) => item.title === 'category')
            .map((item) => {
              return (
                <article
                  className='item--category bg-red-100 w-1/3 mt-16 hidden lg:block'
                  key={item.id}>
                  <p className='capitalize font-pacifico text-2xl mb-5 bg-red-600 p-5 text-center text-red-200 tracking-widest'>
                    {item.title}
                  </p>
                  {item.items.map((item) => {
                    return (
                      <button
                        onClick={() => navigate(`category/${item.name}`)}
                        className='flex gap-1 mx-5 items-center text-lg mb-5 bg-red-300 w-[87%] p-2 text-red-800 hover:opacity-50 transition-all duration-300'
                        key={item.id}>
                        {item.icon} {item.name}
                      </button>
                    )
                  })}
                </article>
              )
            })}
          <article className='hidden lg:block relative w-2/3 h-[70%] mt-16 overflow-hidden'>
            {homeRoll.map((item, itemIndex) => {
              let position = 'nextSlide'
              if (itemIndex === index) position = 'activeSlide'
              if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === homeRoll.length - 1)
              )
                position = 'lastSlide'
              return (
                <div
                  className={`homeRoll absolute top-0 left-0 w-full h-full ${position}`}
                  key={item.id}>
                  <img
                    className='object-cover h-full w-full'
                    src={item.icon}
                    alt='rice'
                  />
                </div>
              )
            })}
          </article>
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
