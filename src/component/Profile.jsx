import React, { useState, useRef, useEffect } from 'react'
import { useGenContext } from '../context'
import Address from './Address'
import { hero } from './data'

const Profile = () => {
  const { login, handleData, modal, openModal, closeModal } = useGenContext()
  const imageRef = useRef(null)
  const [data, setData] = useState({
    ...login,
    password: '',
    confirmPassword: '',
    oldPassword: '',
  })

  const [value, setValue] = useState({
    show: false,
    error: false,
    matchError: false,
  })

  const handleChange = (e) => {
    let name = e.target.name
    let value =
      name === 'image' ? URL.createObjectURL(e.target.files[0]) : e.target.value
    let file = name === 'image' && e.target.files[0]
    setData({ ...data, [name]: value, file })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    if (
      data.oldPassword === login.password &&
      data.password === data.confirmPassword
    ) {
      delete data.oldPassword
      handleData(data)
      setData({ ...login, oldPassword: '', password: '', confirmPassword: '' })
      setValue({ ...value, show: true })
    } else if (data.oldPassword !== login.password)
      setValue({ ...value, matchError: true })
    else setValue({ ...value, error: true })
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value.show) setValue({ ...value, show: false })
      if (value.matchError) setValue({ ...value, matchError: false })
    }, 2000)
    return () => clearTimeout(timeout)
  }, [value])

  return (
    <section className='right-container w-full relative'>
      <h3 className='font-pacifico tracking-widest text-xl text-red-900 mb-8 xl:ml-28'>
        Manage Profile
      </h3>
      <article className='footer w-full'>
        <form onSubmit={handleUpdate} className='w-full sm:w-4/5 xl:w-3/5'>
          <h3 className='font-bold text-lg mb-3'>Basic Info</h3>
          <div className='form-control shadow-md shadow-red-200 p-3 bg-red-50 grid gap-5 sm:p-10 sm:text-base'>
            <p
              className={`bg-green-200 text-green-800 p-2 ${
                value.show ? 'block' : 'hidden'
              }`}>
              Profile updated successfully...
            </p>
            <p
              className={`bg-red-800 text-red-200 p-2 ${
                value.matchError ? 'block' : 'hidden'
              }`}>
              Incorrect password...
            </p>
            <div>
              <label htmlFor='fullName'>Your Name</label>
              <input
                className='bg-transparent border-b mb-3 p-2 w-full border-b-red-600'
                type='text'
                name='fullName'
                id='fullName'
                value={data.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input
                className='bg-transparent border-b mb-3 p-2 w-full border-b-red-600'
                type='tel'
                pattern='^[0-9]{4}-[0-9]{3}-[0-9]{4}$'
                // pattern='\d*'
                name='phoneNumber'
                id='phoneNumber'
                value={!login.phoneNumber ? undefined : data.phoneNumber}
                onChange={handleChange}
                placeholder='0801-000-0000'
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                className='bg-transparent border-b mb-3 p-2 w-full border-b-red-600'
                type='email'
                name='email'
                id='email'
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='image'>Profile Image</label>
              <input
                className='bg-transparent border-b mb-3 p-2 w-full border-b-red-600 hidden'
                type='file'
                accept='image/*'
                name='image'
                id='image'
                files={!login.image ? undefined : data.image}
                onChange={handleChange}
                ref={imageRef}
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  imageRef.current.click()
                }}
                className='flex w-full'>
                <li className='bg-gray-200 p-2 rounded-l-md basis-1/3'>
                  Browse
                </li>
                <li className='rounded-r-md p-2 border border-gray-200 basis-2/3'>
                  {data.file === undefined || !data.file.name
                    ? 'Choose file'
                    : data.file.name}
                </li>
              </button>
            </div>
            <div>
              <label htmlFor='oldPassword'>Old password</label>
              <input
                className='bg-transparent border-b mb-3 p-2 w-full border-b-red-600'
                type='password'
                name='oldPassword'
                id='oldPassword'
                value={data.oldPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='newPassword'>New password</label>
              <input
                className={`bg-transparent border-b mb-3 p-2 w-full border-b-red-600 ${
                  value.error &&
                  data.password !== data.confirmPassword &&
                  'bg-red-400'
                }`}
                type='password'
                name='password'
                id='newPassword'
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Confirm password</label>
              <input
                className={`bg-transparent border-b mb-3 p-2 w-full border-b-red-600 ${
                  value.error &&
                  data.password !== data.confirmPassword &&
                  'bg-red-400'
                }`}
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                value={data.confirmPassword}
                onChange={handleChange}
              />
              {value.error && data.password !== data.confirmPassword && (
                <label htmlFor='confirmPassword'>
                  Passwords do not match...
                </label>
              )}
            </div>
          </div>
          <div className='w-full text-right mt-5'>
            <button
              type='submit'
              className='bg-red-900 rounded-md p-2 text-red-200 sm:text-base'>
              Update Proflie
            </button>
          </div>
        </form>
        {login.location === undefined ? (
          <button
            onClick={openModal}
            className='flex flex-col justify-center items-center gap-2 bg-red-100 p-3 rounded-lg mt-10 sm:text-base'
            type='button'>
            {hero.plus}Add New Address
          </button>
        ) : (
          <div className='mt-10'>
            <p className='flex gap-3'>Address: {data.location.address} </p>
            <p className='flex gap-3'>City: {data.location.city} </p>
            <p className='flex gap-3'>State: {data.location.state} </p>
            <p className='flex gap-3'>Country: {data.location.country} </p>
            <button
              onClick={openModal}
              className='flex flex-col justify-center items-center gap-2 bg-red-100 p-3 rounded-lg mt-10 sm:text-base'
              type='button'>
              {hero.plus}Change Address
            </button>
          </div>
        )}
      </article>
      <article className='relative'>
        <Address modal={modal} closeModal={closeModal} />
      </article>
    </section>
  )
}

export default Profile
