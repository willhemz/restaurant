import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { hero, term } from '../component/data'
import { useGenContext } from '../context'

const Login = () => {
  const { logAccount } = useGenContext
  const [info, setInfo] = useState({ email: '', password: '' })
  console.log(info)

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInfo({ ...info, [name]: value })
  }
  return (
    <main className='w-full mt-20 mb-40 pt-1 bg-red-50 '>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          logAccount(info)
        }}
        className='form-control m-5 mb-10 p-5 lg:p-10 shadow-md shadow-gray-200 bg-red-100 rounded-md text-center sm:w-1/2 xl:w-2/5 sm:ml-[50%] sm:-translate-x-1/2'>
        <h3 className='font-bold mb-3'>Login to your account</h3>
        <input
          className='bg-transparent border mb-3 p-2 w-full border-b-red-600'
          type='email'
          placeholder='Email'
          name='email'
          value={info.email}
          onChange={handleInput}
        />
        <article className='flex items-center justify-between border border-b-red-600 p-2 w-full mb-3'>
          <input
            className='bg-transparent'
            type='Password'
            minLength={8}
            placeholder='password'
            name='password'
            value={info.password}
            onChange={handleInput}
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
        <button type='submit' className='user-btn lg:mt-5'>
          Login
        </button>
        <article className='mt-10 flex flex-col'>
          <code className='text-sm'>Don't have an account?</code>
          <Link to='/register' className='text-xs btn'>
            Register Now
          </Link>
        </article>
      </form>
      <footer className='bg-red-100 flex flex-col gap-8 items-center p-5 md:p-10'>
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

export default Login
