import React from 'react'
import { sidebar } from '../component/data'
import PropTypes from 'prop-types'

const Sidebar = () => {
  return (
    <aside className='sidebar p-5 flex w-full gap-2 justify-between fixed bottom-0 bg-red-900 shadow-lg shadow-black text-red-100'>
      {sidebar.map((item) => {
        const { id, icon, path, items, title } = item
        let view = 'hidden'
        if (title.toLowerCase() === 'cart') view = 'block'
        return (
          <button key={id} className='aside--item flex flex-col items-center'>
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

Sidebar.propTypes = {}

export default Sidebar
