import React, { useEffect, useState } from 'react'
import { sidebar } from '../component/data'
import { useNavigate } from 'react-router-dom'
import { useGenContext } from '../context'

const Sidebar = () => {
  const { cartNumber, openView } = useGenContext()
  const [view, setView] = useState(false)
  const navigate = useNavigate()

  const catContainer = React.useRef(null)

  const checkCase = (val, x) => {
    switch (val) {
      case 'category':
        setView(!view)
        break
      case 'account':
        navigate(x)
        openView()
        break
      default:
        navigate(x)
    }
  }

  useEffect(() => {
    if (view) {
      const itemBtn = document.querySelectorAll('.aside--item')[1]
      let r = itemBtn.getBoundingClientRect()
      let pos = (r.left + r.right) / 2
      catContainer.current.style.left = `${pos}px`
    }
  }, [view])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (view === true) setView(false)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [view])
  return (
    <aside className='sidebar lg:top-3 lg:bg-red-100 lg:bg-opacity-70 lg:rounded-full lg:right-10 lg:p-4 lg:px-8 lg:bottom-auto lg:w-2/5 p-5 sm:px-10 flex w-full gap-2 justify-between fixed bottom-0 bg-red-900 shadow-lg shadow-black text-red-100 lg:text-red-900 lg:shadow-none'>
      {sidebar.map((item) => {
        const { id, icon, path, title } = item
        let view = 'hidden'
        if (title.toLowerCase() === 'cart') view = 'block'
        return (
          <button
            onClick={() => checkCase(title, path)}
            key={id}
            className={`aside--item flex flex-col items-center ${
              title.toLowerCase() === 'wishlist' && 'hidden lg:flex'
            } ${title.toLowerCase() === 'category' && 'lg:hidden'}`}>
            <div className='text-2xl relative'>
              {icon}
              <p
                className={`${view} absolute -top-3 -right-5 bg-red-100 rounded-[50%] text-red-900 px-2`}>
                {cartNumber}
              </p>
            </div>
            <p className='capitalize text-xs'>{title}</p>
          </button>
        )
      })}
      {view && (
        <article
          ref={catContainer}
          className={`flowbar absolute -top-10 -translate-x-1/2 p-3 bg-red-500 rounded-lg text-red-200 flex gap-5`}>
          {sidebar
            .filter((item) => item.title === 'category')
            .map((item) => {
              return item.items.map((item, index) => {
                return (
                  <button
                    className='hover:underline flex items-center gap-1 transition-all duration-300'
                    onClick={() => {
                      navigate(`category/${item.name}`)
                      setView(false)
                    }}
                    key={index}>
                    {item.icon} {item.name}
                  </button>
                )
              })
            })}
        </article>
      )}
    </aside>
  )
}

export default Sidebar
