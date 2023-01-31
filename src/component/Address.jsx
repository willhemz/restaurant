import React, { useState, useRef, useEffect } from 'react'
import { useGenContext } from '../context'
import { hero, location } from './data'

const Address = ({ modal, closeModal }) => {
  const { login, handleData } = useGenContext()
  const [territory, setTerritory] = useState({
    country: '',
    state: '',
    address: '',
    city: '',
  })
  const [view, setView] = useState({
    country: false,
    state: false,
    error: false,
  })
  const state = useRef(null)
  const country = useRef(null)
  const errorText = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      territory.country &&
      territory.state &&
      territory.address &&
      territory.city
    ) {
      const data = { ...login, location: { ...territory } }
      handleData(data)
      closeModal()
    } else setView({ ...view, error: true })
  }

  useEffect(() => {
    if (view.error) console.log(errorText.current.focus())
    const timeout = setTimeout(() => {
      view.error && setView({ ...view, error: false })
    }, 2000)
    return () => clearTimeout(timeout)
  }, [view])

  return (
    <article
      className={`footer--address fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-20 p-5 flex justify-center items-center ${
        modal ? 'block' : 'hidden'
      }`}>
      <div className='container bg-white rounded-lg w-full h-full overflow-scroll'>
        <div className='form--header w-full'>
          <div className='w-full p-5 flex justify-between items-center gap-5 text-xl font-bold'>
            <p>New Address</p>
            <button type='button' onClick={closeModal}>
              {hero.close}
            </button>
          </div>
          <p className='form-warning bg-yellow-100 text-yellow-700 w-full p-5'>
            Please Note!! The seller has a specific location to deliver their
            goods. Contact the seller if your location is not on the list
          </p>
        </div>
        {view.error && (
          <p
            className='bg-red-700 text-red-100 p-2 mt-5 mx-5 text-xs'
            ref={errorText}>
            All form fields must be filled...
          </p>
        )}
        <div className='form--footer p-5'>
          <form onSubmit={handleSubmit} className='grid gap-4'>
            <div>
              <label htmlFor='address'>Address</label>
              <textarea
                className='resize-none p-3 border w-full'
                type='address'
                name='address'
                id='address'
                rows='5'
                placeholder='Your Address'
                value={territory.address}
                onChange={(e) =>
                  setTerritory({ ...territory, address: e.target.value })
                }></textarea>
            </div>
            <div>
              <label htmlFor='country'>Country</label>
              <div
                className='border w-full p-3 flex justify-between'
                onClick={() =>
                  view.country
                    ? setView({ ...view, country: false })
                    : setView({ ...view, country: true })
                }>
                <input
                  type='text'
                  name='country'
                  id='country'
                  placeholder='Select your country'
                  value={territory.country}
                  className='w-full'
                  readOnly
                />
                <p className='w-fit'>{view.country ? hero.down : hero.up}</p>
              </div>
              <aside
                className={`shadow-sm mt-1 bg-gray-100 shadow-gray-300 grid gap-3 w-full ${
                  view.country ? 'block' : 'hidden'
                }`}>
                {location.map((item) => (
                  <button
                    type='button'
                    className='p-3 w-full hover:bg-gray-50 text-left'
                    key={item.id}
                    ref={country}
                    onClick={() => {
                      setTerritory({
                        ...territory,
                        country: country.current.innerText,
                      })
                      setView({ ...view, country: false })
                    }}>
                    {item.country}
                  </button>
                ))}
              </aside>
            </div>
            <div>
              <label htmlFor='state'>State</label>
              <div
                className='border w-full p-3 flex justify-between'
                onClick={() =>
                  view.state
                    ? setView({ ...view, state: false })
                    : setView({ ...view, state: true })
                }>
                <input
                  type='text'
                  name='state'
                  id='state'
                  placeholder='Select your state'
                  value={territory.state}
                  className='w-full'
                  readOnly
                />
                <p className='w-fit'>
                  {territory.country && view.state ? hero.down : hero.up}
                </p>
              </div>
              <aside
                className={`shadow-sm mt-1 bg-gray-100 shadow-gray-300 grid gap-3 w-full ${
                  territory.country && view.state ? 'block' : 'hidden'
                }`}>
                {location
                  .filter((item) => item.country === territory.country)
                  .map((item) => {
                    return item.states.map((item) => (
                      <button
                        type='button'
                        className='p-3 w-full hover:bg-gray-50 text-left'
                        key={item.id}
                        ref={state}
                        onClick={() => {
                          setTerritory({
                            ...territory,
                            state: state.current.innerText,
                          })
                          setView({ ...view, state: false })
                        }}>
                        {item.name}
                      </button>
                    ))
                  })}
              </aside>
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input
                className='w-full border p-3'
                placeholder='Your city'
                type='text'
                name='city'
                id='city'
                value={territory.city}
                onChange={(e) =>
                  setTerritory({ ...territory, city: e.target.value })
                }
              />
            </div>
            <div className='w-full mt-5'>
              <button
                type='submit'
                className='bg-gray-700 rounded-lg p-2 w-20 font-bold text-gray-100 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  )
}

export default Address
