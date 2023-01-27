import logo from '../asset/logo.png'
import food from '../asset/food.jpg'
import order from '../asset/order.jpg'
import menu from '../asset/menu.jpg'
import plates from '../asset/plates.jpg'
import kevinRice from '../asset/kevinRice.jpg'
import judeRice from '../asset/judeRice.jpg'
import rakhmatRice from '../asset/rakhmatRice.jpg'
import avatar from '../asset/avatar.jpg'
import meter from '../asset/meter.png'
import { CgMenuRight } from 'react-icons/cg'
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaWallet } from 'react-icons/fa'
import { FcMoneyTransfer } from 'react-icons/fc'
import {
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineDownload,
} from 'react-icons/ai'
import {
  BiCategoryAlt,
  BiShow,
  BiSearch,
  BiRewind,
  BiLike,
} from 'react-icons/bi'
import { BsCart2, BsArrowLeft, BsFillPersonFill } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import {
  MdOutlineAccountCircle,
  MdOutlineKeyboardReturn,
  MdOutlinePrivacyTip,
  MdOutlineEmojiFoodBeverage,
  MdSpaceDashboard,
  MdHistoryEdu,
} from 'react-icons/md'
import { GrNotes, GrSupport } from 'react-icons/gr'
import { GiHotMeal } from 'react-icons/gi'

export const homeRoll = [
  {
    id: 1,
    icon: kevinRice,
  },
  {
    id: 2,
    icon: judeRice,
  },
  {
    id: 3,
    icon: rakhmatRice,
  },
]

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
  meter,
  menu,
  avatar,
  bar: <CgMenuRight />,
  direction: <BsArrowLeft />,
  eye: <BiShow />,
  search: <BiSearch />,
  close: <IoClose />,
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
    items: [
      { id: 1, name: 'meal', icon: <GiHotMeal /> },
      { id: 2, name: 'drink', icon: <MdOutlineEmojiFoodBeverage /> },
    ],
    path: '/category',
  },
  { id: 3, title: 'wishlist', icon: <BiLike />, path: '/wishlist' },
  { id: 4, title: 'cart', icon: <BsCart2 />, path: '/cart' },
  {
    id: 5,
    title: 'notification',
    icon: <IoMdNotificationsOutline />,
    path: '/notification',
  },
  {
    id: 6,
    title: 'account',
    icon: <MdOutlineAccountCircle />,
    path: '/account',
  },
]

export const account = [
  {
    id: 1,
    icon: <MdSpaceDashboard />,
    name: 'dashboard',
    path: '/account/dashboard',
  },
  {
    id: 2,
    icon: <MdHistoryEdu />,
    name: 'purchase history',
    path: '/account/purchase-history',
  },
  {
    id: 3,
    icon: <AiOutlineDownload />,
    name: 'downloads',
    path: '/account/downloads',
  },
  {
    id: 4,
    icon: <BiRewind />,
    name: 'Sent refund request',
    path: '/account/refund',
  },
  { id: 5, icon: <BiLike />, name: 'wishlist', path: '/account/wishlist' },
  {
    id: 6,
    icon: <FcMoneyTransfer />,
    name: 'withdraw money',
    path: '/account/withdrawal',
  },
  { id: 7, icon: <FaWallet />, name: 'My wallet', path: '/account/wallet' },
  {
    id: 8,
    icon: <BsFillPersonFill />,
    name: 'Manage profile',
    path: '/account/profile',
  },
]
