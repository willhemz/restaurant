import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { hero, term } from '../component/data'
import { useGenContext } from '../context'

const Register = () => {
  const [data, setData] = useState({
    id: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState({ blank: false, pin: false })
  const { handleData } = useGenContext()
  const navigate = useNavigate()
  const check = useRef()

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    setData({ ...data, id: new Date().getTime().toString(), [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      data.id.length >= 1 &&
      data.fullName.length >= 1 &&
      data.email.length >= 1 &&
      data.email.includes('@') &&
      data.password.length >= 8 &&
      data.confirmPassword.length >= 1 &&
      data.password === data.confirmPassword &&
      check.current.checked
    ) {
      handleData(data)
      setData({ id: '', fullName: '', email: '', password: '' })
      navigate('/')
    } else if (data.password !== data.confirmPassword)
      setError({ ...error, pin: true })
    else setError({ ...error, blank: true })
  }

  return (
    <main className='w-full mt-20 mb-40 pt-1 bg-red-50 '>
      <form
        onSubmit={handleSubmit}
        className='form-control m-5 mb-10 p-5 lg:p-10 shadow-md shadow-gray-200 bg-red-100 rounded-md text-center sm:w-1/2 xl:w-2/5 sm:ml-[50%] sm:-translate-x-1/2'>
        <h3 className='font-bold mb-3'>Create an account</h3>
        <input
          className={`bg-transparent border mb-3 p-2 w-full border-b-red-600 ${
            error.blank && data.fullName.length === 0 && 'bg-red-400'
          }`}
          type='text'
          placeholder='Full Name'
          name='fullName'
          id='fullName'
          value={data.fullName}
          onChange={handleInput}
        />
        <label
          htmlFor='fullName'
          className={`text-red-700 ${
            error.blank && data.fullName.length === 0 ? 'block' : 'hidden'
          }`}>
          Name cannot be blank
        </label>
        <input
          className={`bg-transparent border mb-3 p-2 w-full border-b-red-600 ${
            error.blank && data.email.length === 0 && 'bg-red-400'
          }`}
          id='email'
          type='email'
          placeholder='Email'
          name='email'
          value={data.email}
          onChange={handleInput}
        />
        <label
          htmlFor='email'
          className={`text-red-700 ${
            error.blank && data.email.length === 0 ? 'block' : 'hidden'
          }`}>
          {!data.email.includes('@')
            ? 'Email must include @'
            : 'Email cannot be blank'}
        </label>
        <article
          className={`flex items-center justify-between border border-b-red-600 p-2 w-full mb-3 ${
            error.blank && data.password.length === 0 && 'bg-red-400'
          }`}>
          <input
            className='bg-transparent'
            id='password'
            type='Password'
            minLength={8}
            placeholder='password'
            name='password'
            value={data.password}
            onChange={handleInput}
          />
          {hero.eye}
        </article>
        <label
          htmlFor='password'
          className={`text-red-700 ${
            error.blank && data.password.length === 0 ? 'block' : 'hidden'
          }`}>
          Password cannot be less than 8 characters
        </label>
        <article
          className={`flex items-center justify-between border border-b-red-600 p-2 w-full mb-3 ${
            error.pin && data.password !== data.confirmPassword && 'bg-red-400'
          }`}>
          <input
            className='bg-transparent'
            id='confirmPassword'
            type='Password'
            minLength={8}
            placeholder='confirm password'
            name='confirmPassword'
            value={data.confirmPassword}
            onChange={handleInput}
          />
          {hero.eye}
        </article>
        <label
          htmlFor='confirmPassword'
          className={`text-red-700 ${
            error.pin && data.password !== data.confirmPassword
              ? 'block'
              : 'hidden'
          }`}>
          The passwords do not match
        </label>
        <article className='flex w-full text-sm gap-3 items-center mb-5'>
          <input
            type='checkbox'
            name=''
            id='agreement'
            ref={check}
            className={`${
              error.blank &&
              !check.current.checked &&
              'outline-2 outline-red-500'
            }`}
          />
          <label className='text-gray-500 text-left' htmlFor='agreement'>
            By signing up you agree to our terms and conditions.
          </label>
        </article>
        <button type='submit' className='user-btn lg:mt-5'>
          Create Account
        </button>
        <article className='mt-10 flex flex-col'>
          <code className='text-sm'>Already have an account?</code>
          <Link to='/login' className='text-xs btn'>
            Log In
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

export default Register
