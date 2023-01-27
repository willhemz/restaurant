import React from 'react'
import { useGenContext } from '../context'

const Wishlist = () => {
  const { wishlist, handleCart, removeFromWishList } = useGenContext()

  if (wishlist.length < 1) {
    return (
      <main className='mb-40 mt-20 h-64 flex items-center lg:justify-center p-5'>
        <p>There are no items in your wishlist...</p>
      </main>
    )
  }
  return (
    <main className='cart mt-24 mb-40 w-full p-5'>
      <h2 className=' w-max font-pacifico text-3xl text-center mb-8 md:mb-10 text-red-900 ml-[50%] -translate-x-1/2'>
        Your Wishlist
      </h2>
      <section className='cart-header grid gap-5 w-full sm:w-3/5 lg:w-2/5 ml-[50%] -translate-x-1/2'>
        {wishlist.map((item) => {
          const { id, name, image, category } = item
          return (
            <article key={id} className='cart-item flex gap-3 w-full'>
              <img className='w-1/3 lg:w-1/3 xl:w-1/4' src={image} alt={name} />
              <div>
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Value: #{id}</p>
                <button
                  onClick={() => {
                    handleCart('cart', { id, name, image, category })
                    removeFromWishList(id)
                  }}
                  className='btnLong mt-5'
                  type='submit'>
                  Add to Cart
                </button>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Wishlist
