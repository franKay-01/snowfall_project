import Logo from '../assets/logo.png'
import FacebookLogo from '../assets/facebook.png'
import InstagramLogo from '../assets/instagram.png'
import TelegramLogo from '../assets/telegram.png'
import TwitterLogo from '../assets/twitter.png'
import LinkedInLogo from '../assets/linkedIn.png'

export default function Footer() {
  return (
    <footer className="p-6 w-full left-0 bottom-0 footer-color md:pt-16 md:pb-16 md:pl-60 md:pr-60">
      <div className="container grid grid-cols-1 mx-auto gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-col space-y-4 md:ml-24">
          <div className="flex flex-col space-y-5 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Home</a>
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Referral</a>
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Team</a>
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Blog</a>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-5 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Snowball Crypto User Agreement</a>
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Cryptocurrency Risk Disclosure</a>
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Privacy Policy</a>
            <a rel="noopener noreferrer" className='nav-bar-text' href="/">Terms of Service</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium space-y-5 md:ml-12">Stay in Touch</h2>
          <div className="flex flex-row text-sm md:ml-12">
            <div className="lg:block lg:w-auto mr-4">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={TwitterLogo} alt="" />
              </a>
            </div>
            <div className="lg:block lg:w-auto mr-4">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={TelegramLogo} alt="" />
              </a>
            </div>
            <div className="lg:block lg:w-auto mr-4">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={InstagramLogo} alt="" />
              </a>
            </div>
            <div className="lg:block lg:w-auto mr-4">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={LinkedInLogo} alt="" />
              </a>
            </div>
            <div className="lg:block lg:w-auto">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={FacebookLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="dark:text-gray-400">© Copyright 1986. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

