import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo.png'
// import AppleLogo from '../assets/apple.png'
// import GooglePlayLogo from '../assets/google_play.png'

// import FacebookLogo from '../assets/facebook.png'
// import InstagramLogo from '../assets/instagram.png'
// import TelegramLogo from '../assets/telegram.png'
// import TwitterLogo from '../assets/twitter.png'
// import LinkedInLogo from '../assets/linkedIn.png'

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

  useEffect(() => {
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
      default:
        setHomeUrl(true)
        setAirUrl(false)
        setRefUrl(false)
        setTeamUrl(false)
        setBlogUrl(false)
        break;
      
    }
  }, [])
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0884 12.1388C17.1085 10.581 17.9252 9.14197 19.2524 8.32599C18.4113 7.12476 17.053 6.39045 15.5873 6.34459C14.0453 6.18273 12.5503 7.26733 11.7645 7.26733C10.9635 7.26733 9.75367 6.36066 8.45085 6.38747C6.73668 6.44285 5.17734 7.39383 4.34336 8.89248C2.56737 11.9673 3.8921 16.4863 5.59335 18.9718C6.44453 20.1889 7.4393 21.5484 8.74095 21.5002C10.0147 21.4474 10.4904 20.688 12.0279 20.688C13.5512 20.688 13.9975 21.5002 15.3255 21.4695C16.6923 21.4473 17.5535 20.2471 18.3748 19.0185C18.9863 18.1513 19.4569 17.1928 19.7691 16.1786C18.1458 15.492 17.0903 13.9014 17.0884 12.1388Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.58 4.70544C15.3252 3.81083 15.6923 2.66095 15.6034 1.5C14.4649 1.61958 13.4132 2.16373 12.6579 3.02402C11.9121 3.87282 11.5343 4.98327 11.6076 6.11079C12.7614 6.12267 13.8569 5.6047 14.58 4.70544Z" fill="white"/>
                      </svg>
                      <div className='vertical-hr'></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                          <path d="M3.5 2.8125C6.72693 6.04356 9.96211 9.27874 13.189 12.5057C9.96624 15.7285 6.73106 18.9637 3.5 22.1947C3.5 15.7367 3.5 9.27049 3.5 2.8125Z" fill="white"/>
                          <path d="M5.41895 22.498C8.36115 19.5558 11.3033 16.6136 14.2373 13.6797C15.0461 14.4885 15.8549 15.2973 16.6678 16.1102C12.9209 18.2395 9.16994 20.3688 5.41895 22.5022C5.42307 22.5022 5.42307 22.5022 5.41895 22.498Z" fill="white"/>
                          <path d="M5.42773 2.5C9.17873 4.62928 12.9256 6.76268 16.6766 8.89196C16.6477 8.94148 14.3286 11.2647 14.2543 11.3266C11.308 8.3844 8.36994 5.44633 5.42773 2.5Z" fill="white"/>
                          <path d="M15.2852 12.5009C16.2136 11.5724 17.1462 10.6398 18.0829 9.70312C18.0953 9.71138 18.1159 9.71963 18.1366 9.73201C19.4199 10.4624 20.7033 11.1887 21.9866 11.9191C22.1187 11.9933 22.2466 12.0759 22.3497 12.1873C22.4034 12.2451 22.4447 12.307 22.4859 12.3771C22.5354 12.4596 22.5313 12.5463 22.4859 12.6329C22.4447 12.7155 22.3869 12.7856 22.3209 12.8517C22.2259 12.9424 22.1187 13.0167 22.0031 13.0786C20.7115 13.8131 19.4158 14.5476 18.1242 15.2822C18.1118 15.2904 18.0953 15.2987 18.0912 15.2987C17.1545 14.3661 16.2219 13.4335 15.2852 12.5009Z" fill="white"/>
                        </svg>
                    </div>
                  </div>                  
                </div>
              </div>
              <div className='flex flex-row'>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='https://twitter.com/snowball_money' target="_blank" className="brown-button button-margin-left" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9987 6.7325C20.3353 7.02528 19.6235 7.22405 18.8768 7.31269C19.6396 6.85606 20.2252 6.13083 20.4991 5.26861C19.7846 5.693 18.9949 5.99921 18.1542 6.16575C17.48 5.44857 16.5211 5 15.4574 5C13.4187 5 11.7641 6.65461 11.7641 8.69332C11.7641 8.98341 11.7963 9.26545 11.8608 9.53405C8.79064 9.38095 6.06967 7.90899 4.24853 5.6742C3.93157 6.21947 3.74892 6.85337 3.74892 7.53026C3.74892 8.81151 4.40163 9.94233 5.39278 10.6031C4.78842 10.5843 4.21898 10.4178 3.71937 10.1411C3.71937 10.1572 3.71937 10.1706 3.71937 10.1868C3.71937 11.9757 4.99256 13.4691 6.68209 13.8076C6.37319 13.8908 6.04549 13.9365 5.70974 13.9365C5.47068 13.9365 5.23968 13.9123 5.01405 13.8693C5.48411 15.3359 6.84862 16.405 8.46294 16.4345C7.19781 17.4257 5.60767 18.0166 3.87517 18.0166C3.57701 18.0166 3.28423 17.9978 2.99414 17.9656C4.62726 19.0131 6.56927 19.6255 8.65634 19.6255C15.4494 19.6255 19.1642 13.9983 19.1642 9.11772C19.1642 8.95655 19.1615 8.79808 19.1534 8.6396C19.876 8.1185 20.5018 7.46848 20.9961 6.72713L20.9987 6.7325Z" fill="#414A5B"/>
                    </svg>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='/get-started' target="_blank" className="brown-button button-margin-left" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M16.7438 11.2696C16.6576 11.2283 16.5701 11.1886 16.4815 11.1505C16.3271 8.30606 14.7728 6.6776 12.163 6.66094C12.1512 6.66086 12.1394 6.66086 12.1276 6.66086C10.5666 6.66086 9.26836 7.32718 8.46928 8.53966L9.9046 9.52425C10.5015 8.61857 11.4384 8.4255 12.1283 8.4255C12.1363 8.4255 12.1443 8.4255 12.1522 8.42557C13.0115 8.43105 13.6599 8.6809 14.0796 9.16813C14.385 9.52284 14.5893 10.013 14.6904 10.6316C13.9286 10.5022 13.1046 10.4623 12.2238 10.5128C9.74248 10.6558 8.14732 12.1029 8.25445 14.1137C8.30882 15.1337 8.81696 16.0112 9.68522 16.5845C10.4193 17.0691 11.3648 17.306 12.3474 17.2524C13.6451 17.1812 14.6631 16.6861 15.3733 15.7808C15.9127 15.0933 16.2539 14.2024 16.4045 13.0798C17.0229 13.453 17.4813 13.9442 17.7344 14.5346C18.1648 15.5382 18.1899 17.1875 16.8442 18.5321C15.6651 19.71 14.2478 20.2196 12.1059 20.2353C9.72993 20.2177 7.93301 19.4557 6.76471 17.9705C5.67069 16.5798 5.10529 14.571 5.0842 12C5.10529 9.42894 5.67069 7.42017 6.76471 6.02945C7.93301 4.54426 9.7299 3.78229 12.1059 3.76464C14.4991 3.78243 16.3273 4.54806 17.5403 6.04042C18.1351 6.77225 18.5836 7.69258 18.8792 8.76566L20.5612 8.3169C20.2028 6.99606 19.639 5.85789 18.8717 4.91396C17.3166 3.0007 15.0422 2.02033 12.1117 2H12.1C9.17549 2.02026 6.92659 3.00435 5.41577 4.92493C4.07136 6.634 3.37787 9.01205 3.35457 11.993L3.35449 12L3.35457 12.007C3.37787 14.9879 4.07136 17.366 5.41577 19.0751C6.92659 20.9956 9.17549 21.9798 12.1 22H12.1117C14.7118 21.982 16.5445 21.3013 18.0543 19.7928C20.0296 17.8194 19.9701 15.3457 19.3191 13.8272C18.852 12.7382 17.9615 11.8538 16.7438 11.2696ZM12.2545 15.4903C11.167 15.5516 10.0372 15.0634 9.98153 14.0179C9.94024 13.2427 10.5332 12.3777 12.3213 12.2747C12.5261 12.2629 12.727 12.2571 12.9244 12.2571C13.5739 12.2571 14.1815 12.3202 14.7339 12.4409C14.5278 15.0141 13.3193 15.4319 12.2545 15.4903Z" fill="#414A5B"/>
                    </svg>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='https://t.me/joinchat/Hc5CIQ9MacrIvqEBIXA-3g' target="_blank" className="brown-button button-margin-left" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.23741 10.9574L12.9033 6.77072C17.5063 4.84555 18.4627 4.51115 19.0861 4.50012C19.2232 4.49768 19.5298 4.53185 19.7284 4.69388C19.8961 4.83068 19.9422 5.01555 19.9643 5.14522C19.9864 5.27489 20.0138 5.57045 19.992 5.80135C19.7426 8.43669 18.6633 14.8322 18.1142 17.7838C17.8818 19.0328 17.4247 19.4516 16.9815 19.4926C16.019 19.5816 15.288 18.8529 14.3558 18.2384L10.6569 15.74C9.02046 14.6557 10.0813 14.0597 11.0139 13.0857C11.258 12.8307 15.4988 8.95186 15.5809 8.59999C15.5908 8.55599 15.6006 8.39199 15.5037 8.30532C15.4069 8.21866 15.2638 8.24866 15.1606 8.27189C15.0143 8.30529 12.6839 9.85416 8.16936 12.9186C7.50787 13.3753 6.9087 13.5979 6.37192 13.5862C5.78011 13.5734 4.64174 13.2498 3.79547 12.9731C2.75748 12.6339 1.9325 12.4545 2.00436 11.8783C2.04176 11.5782 2.45277 11.2713 3.23738 10.9575L3.23741 10.9574Z" fill="#414A5B"/>
                    </svg>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='https://www.instagram.com/snowball.money' target="_blank" className="brown-button button-margin-left" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0007 3C9.5565 3 9.24975 3.01069 8.28975 3.05438C7.33163 3.09825 6.67763 3.24994 6.10538 3.4725C5.51344 3.70238 5.01131 4.00988 4.51106 4.51031C4.01044 5.01056 3.70294 5.51269 3.47231 6.10444C3.24919 6.67687 3.09731 7.33106 3.05419 8.28881C3.01125 9.24881 3 9.55575 3 12C3 14.4443 3.01088 14.7501 3.05438 15.7101C3.09844 16.6682 3.25013 17.3222 3.4725 17.8944C3.70256 18.4864 4.01006 18.9885 4.5105 19.4888C5.01056 19.9894 5.51269 20.2976 6.10425 20.5275C6.67687 20.7501 7.33106 20.9018 8.289 20.9456C9.249 20.9893 9.55556 21 11.9996 21C14.4441 21 14.7499 20.9893 15.7099 20.9456C16.668 20.9018 17.3228 20.7501 17.8954 20.5275C18.4871 20.2976 18.9885 19.9894 19.4886 19.4888C19.9892 18.9885 20.2967 18.4864 20.5273 17.8946C20.7486 17.3222 20.9004 16.668 20.9454 15.7103C20.9886 14.7503 20.9998 14.4443 20.9998 12C20.9998 9.55575 20.9886 9.249 20.9454 8.289C20.9004 7.33087 20.7486 6.67687 20.5273 6.10462C20.2967 5.51269 19.9892 5.01056 19.4886 4.51031C18.9879 4.00969 18.4873 3.70219 17.8948 3.4725C17.3211 3.24994 16.6667 3.09825 15.7086 3.05438C14.7486 3.01069 14.4429 3 11.9979 3H12.0007ZM11.1934 4.62187C11.433 4.6215 11.7004 4.62187 12.0007 4.62187C14.4037 4.62187 14.6886 4.6305 15.6375 4.67363C16.515 4.71375 16.9912 4.86038 17.3085 4.98356C17.7285 5.14669 18.0279 5.34169 18.3428 5.65669C18.6578 5.97169 18.8527 6.27169 19.0163 6.69169C19.1394 7.00856 19.2862 7.48481 19.3262 8.36231C19.3693 9.31106 19.3787 9.59606 19.3787 11.9979C19.3787 14.3998 19.3693 14.6848 19.3262 15.6336C19.2861 16.5111 19.1394 16.9873 19.0163 17.3042C18.8531 17.7242 18.6578 18.0233 18.3428 18.3381C18.0278 18.6531 17.7287 18.8481 17.3085 19.0112C16.9916 19.1349 16.515 19.2812 15.6375 19.3213C14.6888 19.3644 14.4037 19.3738 12.0007 19.3738C9.59756 19.3738 9.31275 19.3644 8.364 19.3213C7.4865 19.2808 7.01025 19.1342 6.69281 19.011C6.27281 18.8479 5.97281 18.6529 5.65781 18.3379C5.34281 18.0229 5.14781 17.7236 4.98431 17.3034C4.86112 16.9866 4.71431 16.5103 4.67438 15.6328C4.63125 14.6841 4.62262 14.3991 4.62262 11.9957C4.62262 9.59231 4.63125 9.30881 4.67438 8.36006C4.7145 7.48256 4.86112 7.00631 4.98431 6.68906C5.14744 6.26906 5.34281 5.96906 5.65781 5.65406C5.97281 5.33906 6.27281 5.14406 6.69281 4.98056C7.01006 4.85681 7.4865 4.71056 8.364 4.67025C9.19425 4.63275 9.516 4.6215 11.1934 4.61963V4.62187ZM16.8049 6.11625C16.2086 6.11625 15.7249 6.59944 15.7249 7.19587C15.7249 7.79212 16.2086 8.27588 16.8049 8.27588C17.4011 8.27588 17.8849 7.79212 17.8849 7.19587C17.8849 6.59962 17.4011 6.11588 16.8049 6.11588V6.11625ZM12.0007 7.37812C9.44831 7.37812 7.37887 9.44756 7.37887 12C7.37887 14.5524 9.44831 16.6209 12.0007 16.6209C14.5532 16.6209 16.6219 14.5524 16.6219 12C16.6219 9.44756 14.553 7.37812 12.0006 7.37812H12.0007ZM12.0007 9C13.6575 9 15.0007 10.3431 15.0007 12C15.0007 13.6567 13.6575 15 12.0007 15C10.3438 15 9.00075 13.6567 9.00075 12C9.00075 10.3431 10.3438 9 12.0007 9Z" fill="#414A5B"/>
                    </svg>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto mr-4">
                  <a href='https://www.facebook.com/snowballmoneyscia' target="_blank" className="brown-button button-margin-left" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5224 2 22 6.47758 22 12L21.9999 11.9999C21.9999 16.9921 18.3436 21.1293 13.5624 21.879V14.8914H15.8926L15.8925 14.8913L16.3355 12H16.3355L16.3355 11.9999H13.5624V10.1241C13.5624 9.33378 13.9491 8.56175 15.1923 8.56175H16.4537V6.10074C16.4537 6.10074 16.4537 6.10074 16.4537 6.10073V6.10064C16.4537 6.10064 15.3089 5.90517 14.2149 5.90517C12.2233 5.90517 10.8328 6.95856 10.5095 8.89001C10.4621 9.1734 10.4377 9.4757 10.4377 9.79635V12H7.8979V14.8913H7.89795V14.8914H10.4377V21.8791C5.65634 21.1281 2 16.9908 2 12C2 6.47758 6.47758 2 12 2Z" fill="#414A5B"/>
                    </svg>
                  </a>
                </div>
                <div className="hidden lg:block lg:w-auto">
                  <a href='https://www.linkedin.com/company/snowballmoney' target="_blank" className="brown-button button-margin-left" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 18.9991H5V7.99913H8V18.9991ZM6.5 6.73112C5.534 6.73112 4.75 5.94112 4.75 4.96712C4.75 3.99312 5.534 3.20312 6.5 3.20312C7.466 3.20312 8.25 3.99312 8.25 4.96712C8.25 5.94112 7.467 6.73112 6.5 6.73112ZM20 18.9991H17V13.3951C17 10.0271 13 10.2821 13 13.3951V18.9991H10V7.99913H13V9.76413C14.396 7.17813 20 6.98713 20 12.2401V18.9991Z" fill="#414A5B"/>
                    </svg>
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

