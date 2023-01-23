import React from 'react'
import { Login } from '../component'
import { useGenContext } from '../context'

const Account = () => {
  const { login } = useGenContext()

  if (!login.email && !login.password) {
    return <Login />
  }
  return (
    <main className='w-full mt-20 mb-40 relative'>
      <section>
        <article className='header'>
          <div className='avatar'>
            <input type='image' src='' alt='avatar' />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Account
