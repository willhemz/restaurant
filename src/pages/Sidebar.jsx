import React, { useState } from 'react'
import { sidebar } from '../component/data'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const [view, setView] = useState(false)
  const handleClick = (val, x) => {
    switch (val) {
      case 'category':
        setView(!view)
        break
      default:
        navigate(x)
    }
  }
  return (
    <aside className='sidebar p-5 flex w-full gap-2 justify-between fixed bottom-0 bg-red-900 shadow-lg shadow-black text-red-100'>
      {sidebar.map((item) => {
        const { id, icon, title } = item
        let view = 'hidden'
        if (title.toLowerCase() === 'cart') view = 'block'
        return (
          <button
            onClick={() => handleClick(title)}
            key={id}
            className='aside--item flex flex-col items-center'>
            <div className='text-2xl relative'>
              {icon}
              <p
                className={`${view} absolute -top-3 -right-5 bg-red-100 rounded-[50%] text-red-900 px-2`}>
                0
              </p>
            </div>
            <p className='capitalize text-xs'>{title}</p>
          </button>
        )
      })}
    </aside>
  )
}

export default Sidebar
