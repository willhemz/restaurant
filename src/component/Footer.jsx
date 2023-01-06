import React from 'react'
import { socials } from './data'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <article className='page-header'>
          {socials.map((social) => {
            return (
              <a
                type='button'
                key={social.id}
                href={social.url}
                target='_blank'
                rel='noreferrer'>
                {social.icon}
              </a>
            )
          })}
        </article>
        <article className='page-footer'>
          <code>&copy; Williams Balogun 2022. All rights reserved.</code>
        </article>
      </footer>
    </>
  )
}

export default Footer
