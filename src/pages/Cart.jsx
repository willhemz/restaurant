import React from 'react'
import { useGenContext } from '../context'

const Cart = () => {
  const { cart, price } = useGenContext()

  if (cart.length < 1) {
    return (
      <main className='mb-40 mt-20 h-64 flex items-center p-5'>
        <p>There are no items in your cart...</p>
      </main>
    )
  }
  return (
    <main className='cart mt-24 mb-40 w-full p-5'>
      <h2 className=' w-max font-pacifico text-3xl text-center mb-5 text-red-900 ml-[50%] -translate-x-1/2'>
        Your Cart
      </h2>
      <section className='cart-header grid gap-3 w-full'>
        {cart.map((item) => {
          const { id, name, image, category } = item
          return (
            <article key={id} className='cart-item flex gap-3 w-full'>
              <img className='w-16' src={image} alt={name} />
              <div>
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Value: #{id}</p>
              </div>
            </article>
          )
        })}
      </section>
      <section className='cart-footer flex justify-between border-t-2 border-red-500 mt-10 pt-2 px-2'>
        <p>Total</p>
        <p>#{price}</p>
      </section>
    </main>
  )
}

export default Cart
