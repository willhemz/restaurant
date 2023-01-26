import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Login } from '../component'
import { useGenContext } from '../context'
import { account, hero } from '../component/data'

const Account = () => {
  const { login, show, closeView } = useGenContext()
  const navigate = useNavigate()

  if (!login) {
    return <Login />
  }
  return (
    <main className='w-full mt-20 mb-40 relative p-5 flex overflow-hidden'>
      <section
        className={`left-container transition-all duration-300 w-full bg-red-50 ${
          show
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0 hidden'
        }`}>
        <article className='account--header bg-red-700 w-full p-5 mb-5'>
          <div className='avatar rounded-full w-16 h-16 overflow-hidden bg-transparent mb-5'>
            {/* <input type='file' accept='image/*' /> */}
            <img
              className='object-cover w-20 h-20 rounded-full'
              src={hero.avatar}
              alt=''
            />
          </div>
          <p className='text-xl font-bold text-red-200'>{login.fullName}</p>
          <p className='text-red-200 opacity-75 text-sm'>{login.email}</p>
        </article>
        <article className='account--footer p-5 flex flex-col gap-5 mb-3'>
          {account.map((item) => {
            return (
              <button
                onClick={() => {
                  closeView()
                  navigate(item.path)
                }}
                className='flex gap-3 items-center'
                to={item.path}
                key={item.id}>
                {item.icon}
                {item.name}
              </button>
            )
          })}
        </article>
      </section>
      <Outlet />
    </main>
  )
}

export default Account
