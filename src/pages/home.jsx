import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BannerPhoneImg from "../assets/banner_phone.png"
import ApplePlayImg from "../assets/apple_store_img.png"
import GooglePlayImg from "../assets/google_play_img.png"
import SwirlLogoImg from "../assets/swirl_logo.png"
import Component_1 from "../assets/component_1.png"
import AirdropImg from "../assets/airdrop.png"
import IphoneImg from "../assets/iphone_alt.png"
import ShareEarnImg from "../assets/share_earn.png"

export default function Home(){
  return (
    <>
      <Navbar/>
      <div className="home-banner grid justify-center">
        <div className="container flex flex-row">
          <div className="text-container flex flex-col">
            <h1 className="banner-text">
              Buy Crypto, <i>invest</i> in DeFi
            </h1>
            <h1 className="banner-sub-text">
              Gain access to high-yield stablecoin vaults and generate interest in real-time via DeFi
            </h1>
            <div className="mt-4 flex flex-row space-x-4">
              <img src={ApplePlayImg} alt=""/>
              <img src={GooglePlayImg} alt=""/>
            </div>
          </div>
          <div>
            <img src={BannerPhoneImg} alt=""/>
          </div>
          
        </div>
        <div className="grid justify-center h-12">
          <div className="flex flex-row">
            <img src={SwirlLogoImg} alt=""/>
            <h1 className="text-container items-center w-28">Learn More</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          <div className="banner-card flex flex-col">
            <img className="banner-card-icon" src={Component_1} alt=""/>
            <h1 className="banner-card-heading">Security & Full Access</h1> 
            <h1 className="banner-card-heading-sub">Take control of your assets with full access at all times!</h1>  
          </div>
          <div className="banner-card flex flex-col">
            <img className="banner-card-icon" src={Component_1} alt=""/>
            <h1 className="banner-card-heading">Security & Full Access</h1> 
            <h1 className="banner-card-heading-sub">Take control of your assets with full access at all times!</h1>   
          </div>
          <div className="banner-card flex flex-col">
            <img className="banner-card-icon" src={Component_1} alt=""/>
            <h1 className="banner-card-heading">Security & Full Access</h1> 
            <h1 className="banner-card-heading-sub">Take control of your assets with full access at all times!</h1>   
          </div>
        </div>        
      </div>
      <div className="container justify-center">
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">The smartest multi-chain</span><br></br>
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">mobile wallet for you to start</span><br></br>
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">leveraging the full potential</span><br></br>
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">of Decentralized Finance</span>
      </div>
      <div className="container grid grid-row-2 space-y-4">
        <div className="d-bg"></div>
        <div className="grid grid-cols-2">
          <div className="most-popular-card">
            <div className=" flex flex-col items-center">
              <img src={AirdropImg} alt=""/>
            </div>
            <h1 className="popular-card-text p-12">
              New AirDrop every month
            </h1>
          </div>
          
          <div className="most-popular-card grid grid-cols-2 relative">
            <div className="flex flex-col">
              <h1 className="popular-card-text pl-12 pt-12">
                Your wallet has never been so convenient
              </h1>
              <h1 className="popular-card-text-sub ml-12 mt-2">
              In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic
              </h1>
            </div>
            
            <div className="flex items-center">
              <img className="most-popular-card-image" src={IphoneImg} alt=""/>
            </div>
          </div>

        </div>
      </div>
      <div className="center-container">
        <div className="share-section grid grid-cols-2 mt-24 sh-p-12">
          <div className="flex flex-col justify-center space-y-2">
            <div className="share-button">
              <h1 className="share-button-text">referral program</h1>
            </div>
            <h1 className="share-section-header">Share and earn</h1>
            <h1 className="share-section-sub">The rewards for this referral program are based on a percentage of the fees generated by the new user. The referrer will receive 90% of the fees generated by their referral</h1>
            <div className="flex flex-row space-x-4">
              <div className="share-section-button-alt">
                <h1 className="share-button-text-alt">get started</h1>
              </div>
              <div className="share-section-button-alt share-section-button-alt-tr">
                <h1 className="share-button-text-alt">learn more</h1>
              </div>
            </div>
          </div>
          <div className="grid justify-center items-center">
            <img src={ShareEarnImg} alt=""/>
          </div>
          
        </div>
      </div>
      
      <Footer/>
    </>
  )
}