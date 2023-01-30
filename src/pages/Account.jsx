import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Login } from '../component'
import { useGenContext } from '../context'
import { account, hero } from '../component/data'

const Account = () => {
  const { login, show, closeView, logOut } = useGenContext()
  const navigate = useNavigate()

  if (!login) {
    return <Login />
  }
  return (
    <main className='w-full mt-20 mb-40 p-5 sm:p-10 flex overflow-hidden gap-5'>
      <section
        className={`left-container transition-all duration-300 w-full bg-red-50 relative md:w-2/3 lg:w-1/3 h-fit ${
          show
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full lg:translate-x-0 lg:opacity-100 lg:block opacity-0 hidden'
        }`}>
        <article className='account--header bg-red-700 w-full p-5 mb-5'>
          <div className='avatar rounded-full w-16 h-16 overflow-hidden bg-transparent mb-5'>
            {login.image === undefined ? (
              <img
                className='object-cover w-20 h-20 rounded-full'
                src={hero.avatar}
                alt=''
              />
            ) : (
              <img
                className='object-cover w-16 h-16'
                src={login.image}
                alt={hero.avatar}
              />
            )}
          </div>
          <p className='text-xl font-bold text-red-200'>{login.fullName}</p>
          <p className='text-red-200 opacity-75 text-sm'>{login.email}</p>
        </article>
        <article className='account--footer p-5 flex flex-col gap-5 mb-12 '>
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
        <article className='fixed bottom-0 left-0 h-10 bg-red-200 w-full flex justify-between items-center p-5'>
          <button onClick={logOut}>Logout</button>
          <button
            onClick={() => {
              closeView()
              navigate(-1)
            }}>
            {hero.close}
          </button>
        </article>
      </section>
      <Outlet />
    </main>
  )
}

export default Account
