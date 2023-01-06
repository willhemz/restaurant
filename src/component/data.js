import logo from '../asset/logo.png'
import food from '../asset/food.jpg'
import order from '../asset/order.jpg'
import menu from '../asset/menu.jpg'
import plates from '../asset/plates.jpg'
import { CgMenuRight } from 'react-icons/cg'
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'

export const hero = { logo, food, order, plates, menu, bar: <CgMenuRight /> }

export const socials = [
  {
    id: 1,
    url: 'https://twitter.com/king_hayjhay?t=NQhyW25e51IwiPa1lOcC1g&s=09',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://linkedin.com/in/williamsbalogun',
    icon: <FaLinkedinIn />,
  },
  { id: 3, url: 'https://github.com/willhemz', icon: <AiOutlineGithub /> },
  { id: 4, url: 'https://facebook.com/aj.willie.583', icon: <FaFacebookF /> },
]
