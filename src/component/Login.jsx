import React from 'react'
import { Link } from 'react-router-dom'
import { hero, term } from '../component/data'

const Login = () => {
  return (
    <main className='w-full mt-20 mb-40 bg-red-50 '>
      <form className='form-control m-5 mb-10 p-5 shadow-md shadow-gray-200 bg-red-100 rounded-md text-center'>
        <h3 className='font-bold mb-3'>Login to your account</h3>
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
        <article className='flex w-full text-sm justify-between items-center mb-3'>
          <div className='flex gap-1 items-center'>
            <input type='checkbox' name='' id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </article>
        <button className='user-btn'>Login</button>
        <article className='mt-10'>
          <code>Don't have an account?</code>
          <Link to='/register'>Register Now</Link>
        </article>
      </form>
      <footer className='bg-red-100 flex flex-col gap-8 items-center p-5'>
        {term.map((item) => {
          return (
            <article
              className='flex flex-col items-center justify-center gap-1'
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

export default Login
