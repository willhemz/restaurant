import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../component/Loading'
import { useGenContext } from '../context'

const Category = () => {
  const { loading, meals, handleMeal, drinks, handleDrink } = useGenContext()
  const { id } = useParams()
  const searchValue = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = () => {
    id === 'meal'
      ? handleMeal(searchValue.current.value)
      : handleDrink(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [id])

  return (
    <>
      <main className='category'>
        {id === 'meal' ? (
          <>
            <form
              onSubmit={handleSubmit}
              className='header bg-red-200 h-48 p-5 pt-24 text-center'>
              <label className='font-pacifico text-3xl mb-3'>
                Check out our meals
              </label>
              <input
                className='w-full p-3 bg-red-50 text-red-900'
                type='search'
                name=''
                id=''
                placeholder='search your favorite meals...'
                ref={searchValue}
                onChange={handleChange}
              />
            </form>
            {loading ? (
              <Loading />
            ) : (
              <article className='footer mb-52 flex flex-col gap-10'>
                {meals.length < 1 ? (
                  <div className='reply h-44 flex justify-center items-center w-full'>
                    <p>No meals match your search criteria...</p>
                  </div>
                ) : (
                  meals.map((item) => {
                    const { id, name, image, category, area } = item
                    return (
                      <div
                        key={id}
                        className='meal-card w-[90%] shadow-lg shadow-red-100 h-[400px]'>
                        <img className='h-3/5 w-full' src={image} alt={name} />
                        <div className='p-3 flex flex-col gap-2'>
                          <h2 className='text-xl font-bold uppercase'>
                            {name.length > 24
                              ? `${name.substring(0, 21)}...`
                              : name}
                          </h2>
                          <p>Type: {category}</p>
                          <p>Peculiarity: {area}</p>
                          <Link
                            className='btnLong mt-3'
                            to={`/category/meal/${id}`}>
                            Details
                          </Link>
                        </div>
                      </div>
                    )
                  })
                )}
              </article>
            )}
          </>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className='header bg-red-200 h-48 p-5 pt-24 text-center'>
              <label className='font-pacifico text-3xl mb-3'>
                Check out our drinks
              </label>
              <input
                className='w-full p-3 bg-red-50 text-red-900'
                type='search'
                name=''
                id=''
                placeholder='search your favorite drinks...'
                ref={searchValue}
                onChange={handleChange}
              />
            </form>
            {loading ? (
              <Loading />
            ) : (
              <article className='footer mb-52 flex flex-col gap-10'>
                {meals.length < 1 ? (
                  <div className='reply h-44 flex justify-center items-center w-full'>
                    <p>No drinks match your search criteria...</p>
                  </div>
                ) : (
                  drinks.map((item) => {
                    const { id, name, image, category, type, glass } = item
                    return (
                      <div
                        key={id}
                        className='meal-card w-[90%] shadow-lg shadow-red-100 h-[450px]'>
                        <img className='h-3/5 w-full' src={image} alt={name} />
                        <div className='p-3 flex flex-col gap-2'>
                          <h2 className='text-xl font-bold uppercase'>
                            {name.length > 24
                              ? `${name.substring(0, 21)}...`
                              : name}
                          </h2>
                          <p>Category: {category}</p>
                          <p>Type: {type}</p>
                          <p>Glass: {glass}</p>
                          <Link
                            className='btnLong mt-3'
                            to={`/category/drink/${id}`}>
                            Details
                          </Link>
                        </div>
                      </div>
                    )
                  })
                )}
              </article>
            )}
          </>
        )}
      </main>
    </>
  )
}

export default Category
