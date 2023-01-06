import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../component/Loading'
import { useGenContext } from '../context'

const Category = () => {
  const { loading } = useGenContext()
  const { id } = useParams()

  return (
    <>
      <main className='category'>
        {id === 'meal' ? (
          <>
            <article className='header bg-red-200 h-48 p-5 pt-24 text-center'>
              <h1 className='font-pacifico text-3xl mb-3'>
                Check out our meals
              </h1>
              <input
                className='w-full p-3 bg-red-50 text-red-900'
                type='search'
                name=''
                id=''
                placeholder='search your favorite meals...'
              />
            </article>
            {loading ? <Loading /> : <article className='footer'></article>}
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  )
}

export default Category
