import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo.png'
import AppleLogo from '../assets/apple.png'
import GooglePlayLogo from '../assets/google_play.png'

import FacebookLogo from '../assets/facebook.png'
import InstagramLogo from '../assets/instagram.png'
import TelegramLogo from '../assets/telegram.png'
import TwitterLogo from '../assets/twitter.png'
import LinkedInLogo from '../assets/linkedIn.png'

import {Link, NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'HOME', href: '/pension', current: false },
  { name: 'GALLERY', href: '/provident', current: false },
  { name: 'SHOP', href: '/occupational', current: false },
  { name: 'ABOUT US', href: '/about', current: false },
  { name: 'CONTACT US', href: '/faqs', current: false },
  { name: 'WHOLESALE', href: '/calculator', current: false },
]

export default function Navbar() {
  const [homeUrl, setHomeUrl] = useState(false)
  const [airUrl, setAirUrl] = useState(false)
  const [refUrl, setRefUrl] = useState(false)
  const [teamUrl, setTeamUrl] = useState(false)
  const [blogUrl, setBlogUrl] = useState(false)

  useEffect(()=>{
    const currentUrl = window.location.href;
    let pathway = currentUrl.split('/')[3]

    switch (pathway) {
      case '':
        setHomeUrl(true)
        setAirUrl(false)
        setRefUrl(false)
        setTeamUrl(false)
        setBlogUrl(false)
        break;
      case 'airdrop':
        setHomeUrl(false)
        setAirUrl(true)
        setRefUrl(false)
        setTeamUrl(false)
        setBlogUrl(false)
        break;
      case 'career':
        setHomeUrl(false)
        setAirUrl(false)
        setRefUrl(false)
        setTeamUrl(true)
        setBlogUrl(false)
        break;
      case 'referral':
        setHomeUrl(false)
        setAirUrl(false)
        setRefUrl(true)
        setTeamUrl(false)
        setBlogUrl(false)
        break;
      case 'blog':
        setHomeUrl(false)
        setAirUrl(false)
        setRefUrl(false)
        setTeamUrl(false)
        setBlogUrl(true)
        break;
    }
  })
  return (
    
    <Disclosure as="nav" className={`${homeUrl ? 'nav-bg-custom-alt':'nav-bg-custom'} sticky mobile-nav box-shad w-full left-0 top-0 nav-index`}>
      {({ open }) => (
        <>
          <div className="mt-3 mx-auto px-2 sm:px-6 lg:px-8 h-18">
            <div className="relative flex items-center justify-center h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <Link className='z-50' to={"/"}>
                <img className="p-4" src={Logo} alt=""/>
              </Link>
              <div className="flex-1 flex items-center sm:items-stretch justify-center z-1">
                <div className="hidden sm:block">
                  <div className="flex space-x-4 nav-card">
                    <NavLink className={`${homeUrl ? 'nav-bar-text-alt': ''} block px-3 py-2 nav-bar-text`} exact to="/">Home</NavLink>
                    <NavLink className={`${airUrl ? 'nav-bar-text-alt': ''} block px-3 py-2 nav-bar-text`} exact to="/airdrop">Airdrop</NavLink>
                    <NavLink className={`${refUrl ? 'nav-bar-text-alt': ''} block px-3 py-2 nav-bar-text`} exact to="/referral">Referral</NavLink>
                    <NavLink className={`${teamUrl ? 'nav-bar-text-alt': ''} block px-3 py-2 nav-bar-text`} exact to="/career">Team</NavLink>
                    <NavLink className={`${blogUrl ? 'nav-bar-text-alt': ''} block px-3 py-2 nav-bar-text`} exact to="/">Blog</NavLink>
                    <div className='mini-nav-card flex flex-row space-x-2 hidden lg:flex'>
                      <img src={AppleLogo} alt=""/>
                      <div className='vertical-hr'></div>
                      <img src={GooglePlayLogo} alt=""/>
                    </div>
                  </div>                  
                </div>
              </div>
              <div className='flex flex-row'>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='/get-started' className="brown-button button-margin-left">
                    <img src={TwitterLogo} alt=""/>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='/get-started' className="brown-button button-margin-left">
                    <img src={TelegramLogo} alt=""/>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='/get-started' className="brown-button button-margin-left">
                    <img src={InstagramLogo} alt=""/>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='/get-started' className="brown-button button-margin-left">
                    <img src={LinkedInLogo} alt=""/>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto">
                  <a href='/get-started' className="brown-button button-margin-left">
                    <img src={FacebookLogo} alt=""/>
                  </a>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden md:block mobile-nav-bg">
            <div className="px-2 pt-2 pb-3">
              <Disclosure.Button className="inline-flex place-x mt-8 link-button-position items-center justify-right p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-12 w-12 text-white" aria-hidden="true" />
                  ) : (
                    <img className='w-10' src={MenuIcon} alt=""/>
                  )}
              </Disclosure.Button>

              <div className='link-position'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='block link-text px-3 py-2'
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                {/* <a href='/get-started' className="brown-button brown-button-alt link-text">
                  <span className='brown-button-text'>Get Started</span>
                </a> */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

