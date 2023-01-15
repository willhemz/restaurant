import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { hero } from '../component/data'
import { useGenContext } from '../context'

const Meal = () => {
  const { meals, handleCart } = useGenContext()
  const { id } = useParams()
  const navigate = useNavigate()
  const { name, image, category, area, ingredients } = meals
    .filter((item) => item.id === id)
    .reduce((item) => {
      return { ...item }
    })

  if (meals === []) {
    return navigate('/category/meal')
  }

  return (
    <main className='meal w-full mt-20 mb-40 p-5'>
      <button className='text-2xl mb-3 btn' onClick={() => navigate(-1)}>
        {hero.direction}
      </button>
      <article className='image-container relative'>
        <img src={image} alt={name} />
        <p className='text-red-700 p-2 rounded-full w-fit bg-red-100 font-bold text-xl shadow-md shadow-black absolute top-2 right-2'>
          #{id}
        </p>
      </article>
      <article className='meal-footer mt-5'>
        <p>
          Name: <span className='font-bold'>{name}</span>
        </p>
        <p>
          Category: <span className='font-bold'>{category}</span>
        </p>
        <p>
          Peculiarity: <span className='font-bold'>{area}</span>
        </p>
        <p className='flex flex-wrap gap-1'>
          Ingredients:{' '}
          {ingredients.map((item, index) => {
            return (
              <span
                className='font-bold text-red-50 bg-red-500 p-1'
                key={index}>
                {item}
              </span>
            )
          })}
        </p>
        <button
          onClick={() => handleCart({ id, name, image, category })}
          className='btnLong mt-5'
          type='submit'>
          Add to Cart
        </button>
      </article>
    </main>
  )
}

export default Meal
