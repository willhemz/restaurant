import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGenContext } from '../context'
import { hero } from './data'

const Dashboard = () => {
  const { cartNumber, wishNumber, orderNumber } = useGenContext()
  const navigate = useNavigate()
  return (
    <section className='right-container w-full'>
      <h3 className='font-pacifico tracking-widest text-xl text-red-900 mb-8'>
        Dashboard
      </h3>
      <article className='footer grid lg:grid-cols-2 xl:grid-cols-3 w-full gap-5'>
        <button
          onClick={() => navigate('/cart')}
          className='w-full flex flex-col justify-start h-44 bg-red-200 p-5 relative overflow-hidden rounded-md'>
          <p className='text-xl font-bold mb-2'>
            {cartNumber} {cartNumber > 1 ? 'Products' : 'Product'}
          </p>
          <p>in your cart</p>
          <img
            className='object-cover w-full h-full opacity-20 absolute -bottom-1/2 left-0'
            src={hero.meter}
            alt=''
          />
        </button>
        <button
          onClick={() => navigate('/wishlist')}
          className='w-full flex flex-col justify-start h-44 bg-red-400 p-5 relative overflow-hidden rounded-md'>
          <p className='text-xl font-bold mb-2'>
            {wishNumber} {wishNumber > 1 ? 'Products' : 'Product'}
          </p>
          <p>in your wishlist</p>
          <img
            className='object-cover w-full h-full opacity-20 absolute -bottom-1/2 left-0'
            src={hero.meter}
            alt=''
          />
        </button>
        <div className='w-full h-44 bg-red-700 text-red-100 p-5 relative overflow-hidden rounded-md'>
          <p className='text-xl font-bold mb-2'>
            {orderNumber} {orderNumber > 1 ? 'Products' : 'Product'}
          </p>
          <p>ordered</p>
          <img
            className='object-cover w-full h-full opacity-20 absolute -bottom-1/2 left-0'
            src={hero.meter}
            alt=''
          />
        </div>
      </article>
    </section>
  )
}

export default Dashboard
