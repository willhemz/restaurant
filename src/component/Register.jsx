import React from 'react'
import { Link } from 'react-router-dom'
import { hero, term } from '../component/data'

const Register = () => {
  return (
    <main className='w-full mt-20 mb-40 pt-1 bg-red-50 '>
      <form className='form-control m-5 mb-10 p-5 shadow-md shadow-gray-200 bg-red-100 rounded-md text-center'>
        <h3 className='font-bold mb-3'>Create an account</h3>
        <input
          className='bg-transparent border mb-3 p-2 w-full border-b-red-600'
          type='text'
          placeholder='Full Name'
        />
        <input
          className='bg-transparent border mb-3 p-2 w-full border-b-red-600'
          type='email'
          placeholder='Email'
        />
        <article className='flex items-center border border-b-red-600 p-2 w-full mb-3'>
          <input
            className='bg-transparent'
            type='Password'
            minLength={8}
            placeholder='password'
          />
          {hero.eye}
        </article>
        <article className='flex items-center border border-b-red-600 p-2 w-full mb-3'>
          <input
            className='bg-transparent'
            type='Password'
            minLength={8}
            placeholder='confirm password'
          />
          {hero.eye}
        </article>
        <article className='flex w-full text-sm justify-between items-center mb-5'>
          <input type='checkbox' name='' id='remember' />
          <label className='text-gray-500 ' htmlFor='remember'>
            By signing up you agree to our terms and conditions.
          </label>
        </article>
        <button className='user-btn'>Create Account</button>
        <article className='mt-10 flex flex-col'>
          <code className='text-sm'>Already have an account?</code>
          <Link to='/login' className='text-xs btn'>
            Log In
          </Link>
        </article>
      </form>
      <footer className='bg-red-100 flex flex-col gap-8 items-center p-5'>
        {term.map((item) => {
          return (
            <article
              className='flex flex-col items-center justify-center gap-1 capitalize'
              key={item.id}>
              <span className='text-3xl'>{item.icon}</span>
              <span>{item.name}</span>
            </article>
          )
        })}
      </footer>
    </main>
  )
}

export default Register
