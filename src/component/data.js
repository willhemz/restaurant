import logo from '../asset/logo.png'
import food from '../asset/food.jpg'
import order from '../asset/order.jpg'
import menu from '../asset/menu.jpg'
import plates from '../asset/plates.jpg'
import { CgMenuRight } from 'react-icons/cg'
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { AiOutlineGithub, AiOutlineHome } from 'react-icons/ai'
import { BiCategoryAlt, BiShow, BiSearch } from 'react-icons/bi'
import { BsCart2, BsArrowLeft } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import {
  MdOutlineAccountCircle,
  MdOutlineKeyboardReturn,
  MdOutlinePrivacyTip,
} from 'react-icons/md'

import { GrNotes, GrSupport } from 'react-icons/gr'

export const term = [
  {
    id: 1,
    name: 'terms & conditions',
    icon: <GrNotes />,
  },
  {
    id: 2,
    name: 'return policy',
    icon: <MdOutlineKeyboardReturn />,
  },
  {
    id: 3,
    name: 'support policy',
    icon: <GrSupport />,
  },
  {
    id: 4,
    name: 'privacy policy',
    icon: <MdOutlinePrivacyTip />,
  },
]

export const hero = {
  logo,
  food,
  order,
  plates,
  menu,
  bar: <CgMenuRight />,
  direction: <BsArrowLeft />,
  eye: <BiShow />,
  search: <BiSearch />,
}

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

export const sidebar = [
  { id: 1, title: 'home', icon: <AiOutlineHome />, path: '/' },
  {
    id: 2,
    title: 'category',
    icon: <BiCategoryAlt />,
    items: ['meal', 'drink'],
    path: '/category',
  },
  { id: 3, title: 'cart', icon: <BsCart2 />, path: '/cart' },
  {
    id: 4,
    title: 'notification',
    icon: <IoMdNotificationsOutline />,
    path: '/notification',
  },
  {
    id: 5,
    title: 'account',
    icon: <MdOutlineAccountCircle />,
    path: '/account',
  },
]
