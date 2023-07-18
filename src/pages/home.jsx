import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BannerPhoneImg from "../assets/banner_phone.png"
import BannerPhoneVideo from "../assets/Assets/Home/SnowballHero.mp4"
import ApplePlayImg from "../assets/apple_store_img.png"
import GooglePlayImg from "../assets/google_play_img.png"
import SwirlLogoImg from "../assets/swirl_logo.png"
import Component_1 from "../assets/component_1.png"
import AirdropImg from "../assets/airdrop.png"
import IphoneImg from "../assets/iphone_alt.png"
import ShareEarnImg from "../assets/share_earn.png"
import BuyDefiImg from "../assets/buy_defi_screen.png"
import BundleImg from "../assets/bundles.png"
import VaultsImg from "../assets/vaults.png"
import ReferralImg from "../assets/referrals.png"
import TokenImg from "../assets/tokens.png"
import AirdropsImg from "../assets/airdrop_icon.png"
import Frame1 from "../assets/frame_1.png"
import Frame2 from "../assets/frame_2.png"
import Frame1Alt from "../assets/frame_1_alt.png"
import DownloadSection from '../components/download_section';
import ReferralSection from '../components/referral_section';

import Slide1 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow1.png';
import Slide2 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow2.png';
import Slide3 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow3.png';
import Slide4 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow4.png';
import Slide5 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow5.png';
import Slide6 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow6.png';
import Slide7 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow7.png';
import Slide8 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow8.png';
import Slide9 from '../assets/Assets/Home/BuyCrypto/Slideshow/Slideshow9.png';

import { useEffect } from "react";

export default function Home(){

  var index;
  var slides;

  const changeSlide = () =>{

    if(index<0){
      index = slides.length-1;
    }
    
    if(index>slides.length-1){
      index = 0;
    }
    
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
    }
    
    slides[index].style.display= "block";
    
    index++;
    
    setTimeout(changeSlide,2000);
    
  }

  useEffect(()=>{
    index = 0;
    slides = document.querySelectorAll(".slides");
    changeSlide();
  },[])
  

  return (
    <>
      <Navbar/>
      <div className="home-banner flex flex-col">
        <div className="container z-id home-order-1 lg:justify-start md:justify-center relative flex flex-col lg:flex-row md:flex-row">
          <div className="text-container lg:ml-32 lg:justify-start md:justify-center lg:items-start md:items-center flex flex-col">
            <h1 className="banner-text">
              Buy Crypto, <i>invest</i> in DeFi
            </h1>
            <h1 className="banner-sub-text">
              Gain access to high-yield stablecoin vaults and generate interest in real-time via DeFi
            </h1>
            <div className="mt-4 flex flex-row space-x-4 ml-8 lg:ml-0 md:ml-2">
              <img className="home-store-button" src={ApplePlayImg} alt=""/>
              <img className="home-store-button" src={GooglePlayImg} alt=""/>
            </div>
          </div>
        </div>
        <div className="video-container">
          <video className="custom-banner-video" src={BannerPhoneVideo} autoPlay loop muted />
        </div>
        <div className="grid justify-center h-12 mb-8 home-order-learn">
          <div className="flex flex-row">
            <img src={SwirlLogoImg} alt=""/>
            <h1 className="text-container items-center w-28">Learn More</h1>
          </div>
        </div>
      </div>
      <div className="container overflow-auto">
        <div className="flex flex-row lg:grid md:flex lg:grid-cols-3 md:flex-row mt-12 p-2">
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
      <div className="container justify-center mt-4">
        <span className="hidden lg:block md:flex gradient-text p-0.5 text-left font-normal justify-center items-center from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">The smartest multi-chain</span><br></br>
        <span className="hidden lg:block md:flex gradient-text p-0.5 text-left font-normal justify-center items-center from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">mobile wallet for you to start</span><br></br>
        <span className="hidden lg:block md:flex gradient-text p-0.5 text-left font-normal justify-center items-center from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">leveraging the full potential</span><br></br>
        <span className="hidden lg:block md:flex gradient-text p-0.5 text-left font-normal justify-center items-center from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">of Decentralized Finance</span>

        <span className="block lg:hidden md:hidden gradient-text p-2 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">The smartest</span>
        <span className="block lg:hidden md:hidden gradient-text p-2 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">multi-chain mobile</span>
        <span className="block lg:hidden md:hidden gradient-text p-2 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">wallet for you to</span>
        <span className="block lg:hidden md:hidden gradient-text p-2 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">start leveraging</span>
        <span className="block lg:hidden md:hidden gradient-text p-2 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">the full potential</span>
        <span className="block lg:hidden md:hidden gradient-text p-2 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">of Decentralized</span>
        <span className="block lg:hidden md:hidden gradient-text p-2 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">Finance</span>
      </div>
      <div className="container grid lg:grid lg:justify-center lg:grid-row-2 md:justify-center md:items-center space-y-12 lg:space-y-4 md:space-y-4">
        <div className="grid grid-cols-1 space-y-12 lg:grid-cols-1 md:flex md:justify-center md:items-center">
          <div className="d-bg"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-8 md:flex md:flex-col md:grid-cols-1 md:justify-center md:items-center">
          <div className="most-popular-card mb-8">
            <div className="flex flex-col items-center">
              <img className="w-64" src={AirdropImg} alt=""/>
            </div>
            <h1 className="popular-card-text p-12">
              New AirDrop every month
            </h1>
            <h1 className="block lg:hidden md:hidden popular-card-text-sub-alt">
              In the eighteenth century the German philosopher Immanuel Kant developed
            </h1>
          </div>
          
          <div className="most-popular-card grid grid-cols-2 relative mb-8">
            <div className="flex flex-col">
              <h1 className="popular-card-text pl-12 pt-12">
                Your wallet has never been so convenient
              </h1>
              <h1 className="popular-card-text-sub lg:ml-12 mt-2">
              In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic
              </h1>
            </div>
            
            <div className="flex items-center">
              <img className="most-popular-card-image" src={IphoneImg} alt=""/>
            </div>
          </div>

        </div>
      </div>
      {/* <ReferralSection/> */}
      <div className="center-container-alt">
        {/* <div className="share-section grid lg:grid-cols-2 mt-24 sh-p-12"> */}
        <div className="share-section bg-c-black grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-1 mt-24 sh-p-12 relative mb-8 lg:gap-8 md:gap-8">

          <div className="flex flex-col home-order-1 justify-center space-y-4 share-img-p-l md:pl-12 lg:pl-0">
            <div className="share-button">
              <h1 className="share-button-text">referral program</h1>
            </div>
            <h1 className="share-section-header">Share and earn</h1>
            <h1 className="share-section-sub">The rewards for this referral program are based on a percentage of the fees generated by the new user. The referrer will receive 90% of the fees generated by their referral</h1>
            <div className="flex flex-col space-y-4 lg:flex-row md:flex-row lg:space-x-4 md:space-x-4">
              <div className="share-section-button-alt">
                <h1 className="share-button-text-alt">get started</h1>
              </div>
              <div className="share-section-button-alt share-section-button-alt-tr mb-8">
                <h1 className="share-button-text-alt">learn more</h1>
              </div>
            </div>
          </div>
          <div className="grid justify-end home-order-2 items-center">
            <img className="share-img-sm" src={ShareEarnImg} alt=""/>
          </div>          
        </div>
      </div> 
      <div className="flex flex-col pl-4 space-y-4 lg:flex-row md:flex-col md:justify-center md:items-center lg:flex-row lg:space-x-14 md:space-y-14 mt-24">
        <div id="slider">  
          <div className="slides buy-defi-image">  
            <img src={Slide1} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide2} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide3} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide4} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide5} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide6} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide7} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide8} width="100%" />
          </div> 
          <div className="slides buy-defi-image">  
            <img src={Slide9} width="100%" />
          </div>             
        </div>
        <div className="flex flex-col space-y-8">
          <h1 className="buy-defi-heading">Buy crypto, invest in DeFi</h1>
          <h1 className="buy-defi-sub">
            In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic
          </h1>
          <div className="flex flex-row space-x-4">
            <div className="buy-defi-button flex flex-row">
              <img src={BundleImg} alt=""/>
              <h1 className="buy-defi-button-text">Bundles</h1>
            </div>
            <div className="buy-defi-button flex flex-row">
              <img src={VaultsImg} alt=""/>
              <h1 className="buy-defi-button-text">Vaults</h1>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="buy-defi-button flex flex-row">
              <img src={ReferralImg} alt=""/>
              <h1 className="buy-defi-button-text">Referrals</h1>
            </div>
            <div className="buy-defi-button flex flex-row">
              <img src={TokenImg} alt=""/>
              <h1 className="buy-defi-button-text">Tokens</h1>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="buy-defi-button flex flex-row">
              <img src={AirdropsImg} alt=""/>
              <h1 className="buy-defi-button-text">AirDrops</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 flex flex-col pl-4 lg:pt-32 md:pt-8 md:justify-center md:items-center lg:pb-32 md:pb-12 md:flex-col lg:flex-col lg:space-y-14 md:space-y-14 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:ml-24 lg:ml-2">
          <h1 className="snowball-heading">Snowball in the Media</h1>
          <div className="hidden lg:grid lg:justify-center">
            <button className="snowball-button">
              <h1 className="snowball-button-text">
                show all
              </h1>
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-8 lg:flex-row md:flex-col md:space-y-8 lg:justify-normal md:justify-center md:items-center lg:space-x-8">
          <div className="snowball-media-lg snowball-media-1 relative">
            <div class="grid content-between overlay p-4 lg:p-12 md:p-12">
              <div className="snowball-media-top-button">
                <h1 className="snowball-media-top-button-text">podcast</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="snowball-media-bottom-text">
                  Snowball Podcast #2 Available now!
                </h1>
                <h1 className="snowball-media-bottom-date">March 9, 2023</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="snowball-media-n-lg snowball-media-2 relative">
              <div class="grid content-between overlay p-8">
                <div className="snowball-media-top-button">
                  <h1 className="snowball-media-top-button-text">news</h1>
                </div>
                <div className="flex flex-col space-y-4">
                  <h1 className="snowball-media-bottom-text-n">
                  Snowball: Automating Cryptocurrency Investing
                  </h1>
                  <h1 className="snowball-media-bottom-date">March 8, 2023</h1>
                </div>
              </div>
            </div>
            <div className="snowball-media-n-lg snowball-media-3 relative">
              <div class="grid content-between overlay p-8">
                <div className="snowball-media-top-button">
                  <h1 className="snowball-media-top-button-text">news</h1>
                </div>
                <div className="flex flex-col space-y-4">
                  <h1 className="snowball-media-bottom-text-n">
                  Republic: Invest in Snowball Money
                  </h1>
                  <h1 className="snowball-media-bottom-date">March 7, 2023</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-c-black relative">
        <div className="concave-border bg-slate-100"></div>
        <div className="bg-c-black flex flex-col mt-8 pl-4 lg:pl-56 lg:justify-center lg:items-stretch md:justify-center md:items-center lg:pt-0 md:pt-8 lg:pb-0 md:pb-12 md:flex-col lg:flex-row lg:space-x-24 lg:space-y-2 space-y-4 md:space-y-14">
        {/* <div className="bg-c-black flex flex-col pl-4 lg:pl-64 md:pl-60 md:flex-row lg:flex-row lg:space-x-14 md:space-x-24"> */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-12 lg::space-y-12">
            <div className="snowball-money-section grid grid-cols-2">
              <h1 className="snowball-money-button-text">Reviews</h1>
              <div className="snowball-money-section-sub">
                <h1 className="snowball-money-button-text snowball-money-button-text-alt">Community</h1>
              </div>
            </div>
            <div>
              <h1 className="snowball-money-header">
                Hear it from the Community
              </h1>
              <h1 className="snowball-money-sub mt-4">
                Gain access to high-yield stablecoin vaults and generate interest in real-time via DeFi
              </h1>
            </div>
            
            <h1 className="snowball-money-hash">
              #snowballmoney
            </h1>
          </div>
          <div className="flex flex-row space-x-4">
            <img className="block lg:hidden md:hidden snowball-frame-h mb-8" src={Frame1Alt} alt=""/>
            <img className="hidden lg:flex md:flex snowball-frame-h" src={Frame1} alt=""/>
            <img className="hidden lg:flex md:flex snowball-frame-h" src={Frame2} alt=""/>
          </div>
        </div>
        <div className="concave-border-2 bg-white"></div>
      </div>
      <div className="flex flex-col lg:justify-center space-y-8 lg:items-center md:justify-center md:items-center lg:pt-0 md:pt-8 lg:pb-0 md:pb-12 md:flex-col lg:flex-row lg:space-x-24 lg:space-y-2 md:space-y-14">

        {/* <div className="grid grid-cols-1 pl-4 lg:pl-40 md:pl-40 lg:pb-32 md:pb-32 md:grid-cols-2 lg:grid-cols-2 mt-24"> */}
        <div className="flex flex-row justify-center space-y-12">
          <div className="flex flex-col space-y-4">
            <h1 className="brand-header">
            Become a Brand Ambassador
            </h1>
            <h1 className="brand-header-sub">
            Be a part of Snowball. Join our ambassadorship program
            </h1>
            <div className="brand-input-box flex flex-row">
              <input className='main-input-box'  placeholder="Full Name*"/>
            </div>
            <div className="brand-input-box flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00001 12.3092C3.00067 16.1205 2.99878 16.0746 3.17661 16.5529C3.47414 17.3529 4.2176 18 5.06903 18.1999C5.32271 18.2594 5.71473 18.263 12.0017 18.263C18.2887 18.263 18.6807 18.2594 18.9344 18.1999C19.8101 17.9943 20.5527 17.333 20.8439 16.4995C21.0052 16.0378 21.0068 15.9925 20.9964 12.2777L20.9865 8.75391L16.8018 11.3043C14.5002 12.707 12.542 13.8934 12.4502 13.9406C12.2124 14.0632 11.9279 14.0855 11.6852 14.0007C11.5774 13.963 9.62585 12.7932 7.27199 11.3553C4.95108 9.93746 3.04031 8.77054 3.02578 8.76206C3.01126 8.75359 2.99969 10.3498 3.00001 12.3092Z" fill="#838B9D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33822 5.02434C5.02757 5.06123 4.65528 5.18642 4.34702 5.35757C4.03904 5.52861 3.58453 5.98122 3.39509 6.30555C3.21058 6.62141 3.07495 7.00682 3.12305 7.07863C3.15287 7.12311 11.8713 12.4561 11.9866 12.5003C12.0338 12.5184 20.8289 7.15789 20.8813 7.07901C20.906 7.0417 20.8924 6.95696 20.8347 6.78901C20.7039 6.40901 20.4944 6.08728 20.164 5.75905C19.9132 5.50994 19.8046 5.43099 19.5275 5.2961C18.8736 4.97775 19.5924 5.00658 12.1604 5.0005C8.54365 4.99751 5.47368 5.00827 5.33822 5.02434Z" fill="#838B9D"/>
              </svg>

              <input className='main-input-box'  placeholder="Email"/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 space-x-0 space-y-4 md:space-y-0 lg:space-y-0 md:space-x-4 lg:space-x-4'>
              <div className="brand-input-box brand-input-box-alt flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9987 6.7325C20.3353 7.02528 19.6235 7.22405 18.8768 7.31269C19.6396 6.85606 20.2252 6.13083 20.4991 5.26861C19.7846 5.693 18.9949 5.99921 18.1542 6.16575C17.48 5.44857 16.5211 5 15.4574 5C13.4187 5 11.7641 6.65461 11.7641 8.69332C11.7641 8.98341 11.7963 9.26545 11.8608 9.53405C8.79064 9.38095 6.06967 7.90899 4.24853 5.6742C3.93157 6.21947 3.74892 6.85337 3.74892 7.53026C3.74892 8.81151 4.40163 9.94233 5.39278 10.6031C4.78842 10.5843 4.21898 10.4178 3.71937 10.1411C3.71937 10.1572 3.71937 10.1706 3.71937 10.1868C3.71937 11.9757 4.99256 13.4691 6.68209 13.8076C6.37319 13.8908 6.04549 13.9365 5.70974 13.9365C5.47068 13.9365 5.23968 13.9123 5.01405 13.8693C5.48411 15.3359 6.84862 16.405 8.46294 16.4345C7.19781 17.4257 5.60767 18.0166 3.87517 18.0166C3.57701 18.0166 3.28423 17.9978 2.99414 17.9656C4.62726 19.0131 6.56927 19.6255 8.65634 19.6255C15.4494 19.6255 19.1642 13.9983 19.1642 9.11772C19.1642 8.95655 19.1615 8.79808 19.1534 8.6396C19.876 8.1185 20.5018 7.46848 20.9961 6.72713L20.9987 6.7325Z" fill="#838B9D"/>
                </svg>

                <input className='main-input-box'  placeholder="Twitter Handle"/>
              </div>
              <div className="brand-input-box brand-input-box-alt flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.658 6.84956C17.5365 6.78677 17.4182 6.71794 17.3036 6.64332C16.9704 6.423 16.6648 6.1634 16.3935 5.87011C15.7148 5.09352 15.4613 4.30568 15.368 3.75409H15.3717C15.2937 3.29624 15.326 3 15.3309 3H12.2395V14.9537C12.2395 15.1141 12.2395 15.2728 12.2328 15.4295C12.2328 15.449 12.2309 15.467 12.2298 15.488C12.2298 15.4966 12.2298 15.5056 12.2279 15.5146C12.2279 15.5169 12.2279 15.5191 12.2279 15.5214C12.1953 15.9503 12.0578 16.3646 11.8275 16.7279C11.5972 17.0912 11.2812 17.3923 10.9072 17.6048C10.5174 17.8265 10.0766 17.9428 9.62814 17.9423C8.18783 17.9423 7.02052 16.7678 7.02052 15.3174C7.02052 13.867 8.18783 12.6925 9.62814 12.6925C9.90078 12.6923 10.1717 12.7352 10.431 12.8196L10.4347 9.67204C9.64777 9.57039 8.8483 9.63293 8.08673 9.85572C7.32516 10.0785 6.61803 10.4567 6.00994 10.9665C5.47712 11.4294 5.02917 11.9818 4.68626 12.5988C4.55576 12.8238 4.06341 13.7278 4.00379 15.1951C3.96629 16.028 4.21641 16.8908 4.33565 17.2474V17.2549C4.41065 17.4649 4.70126 18.1815 5.17486 18.7856C5.55675 19.2702 6.00795 19.6958 6.51392 20.0489V20.0414L6.52142 20.0489C8.01797 21.0658 9.67726 20.9991 9.67726 20.9991C9.96449 20.9875 10.9267 20.9991 12.0194 20.4813C13.2313 19.9072 13.9213 19.0518 13.9213 19.0518C14.3621 18.5408 14.7126 17.9583 14.9577 17.3295C15.2375 16.5942 15.3309 15.7122 15.3309 15.3598V9.01807C15.3684 9.04057 15.8678 9.37093 15.8678 9.37093C15.8678 9.37093 16.5874 9.83216 17.7101 10.1325C18.5156 10.3463 19.6008 10.3913 19.6008 10.3913V7.32241C19.2205 7.36366 18.4484 7.24366 17.658 6.84956Z" fill="#838B9D"/>
                </svg>

                <input className='main-input-box'  placeholder="Tiktok Handle"/>
              </div>
             
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 space-x-0 space-y-4 md:space-y-0 lg:space-y-0 md:space-x-4 lg:space-x-4'>
              <div className="brand-input-box brand-input-box-alt flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.0007 3C9.5565 3 9.24975 3.01069 8.28975 3.05438C7.33163 3.09825 6.67763 3.24994 6.10538 3.4725C5.51344 3.70238 5.01131 4.00988 4.51106 4.51031C4.01044 5.01056 3.70294 5.51269 3.47231 6.10444C3.24919 6.67687 3.09731 7.33106 3.05419 8.28881C3.01125 9.24881 3 9.55575 3 12C3 14.4443 3.01088 14.7501 3.05438 15.7101C3.09844 16.6682 3.25013 17.3222 3.4725 17.8944C3.70256 18.4864 4.01006 18.9885 4.5105 19.4888C5.01056 19.9894 5.51269 20.2976 6.10425 20.5275C6.67687 20.7501 7.33106 20.9018 8.289 20.9456C9.249 20.9893 9.55556 21 11.9996 21C14.4441 21 14.7499 20.9893 15.7099 20.9456C16.668 20.9018 17.3228 20.7501 17.8954 20.5275C18.4871 20.2976 18.9885 19.9894 19.4886 19.4888C19.9892 18.9885 20.2967 18.4864 20.5273 17.8946C20.7486 17.3222 20.9004 16.668 20.9454 15.7103C20.9886 14.7503 20.9998 14.4443 20.9998 12C20.9998 9.55575 20.9886 9.249 20.9454 8.289C20.9004 7.33087 20.7486 6.67687 20.5273 6.10462C20.2967 5.51269 19.9892 5.01056 19.4886 4.51031C18.9879 4.00969 18.4873 3.70219 17.8948 3.4725C17.3211 3.24994 16.6667 3.09825 15.7086 3.05438C14.7486 3.01069 14.4429 3 11.9979 3H12.0007ZM11.1934 4.62187C11.433 4.6215 11.7004 4.62187 12.0007 4.62187C14.4037 4.62187 14.6886 4.6305 15.6375 4.67363C16.515 4.71375 16.9912 4.86038 17.3085 4.98356C17.7285 5.14669 18.0279 5.34169 18.3428 5.65669C18.6578 5.97169 18.8527 6.27169 19.0163 6.69169C19.1394 7.00856 19.2862 7.48481 19.3262 8.36231C19.3693 9.31106 19.3787 9.59606 19.3787 11.9979C19.3787 14.3998 19.3693 14.6848 19.3262 15.6336C19.2861 16.5111 19.1394 16.9873 19.0163 17.3042C18.8531 17.7242 18.6578 18.0233 18.3428 18.3381C18.0278 18.6531 17.7287 18.8481 17.3085 19.0112C16.9916 19.1349 16.515 19.2812 15.6375 19.3213C14.6888 19.3644 14.4037 19.3738 12.0007 19.3738C9.59756 19.3738 9.31275 19.3644 8.364 19.3213C7.4865 19.2808 7.01025 19.1342 6.69281 19.011C6.27281 18.8479 5.97281 18.6529 5.65781 18.3379C5.34281 18.0229 5.14781 17.7236 4.98431 17.3034C4.86112 16.9866 4.71431 16.5103 4.67438 15.6328C4.63125 14.6841 4.62262 14.3991 4.62262 11.9957C4.62262 9.59231 4.63125 9.30881 4.67438 8.36006C4.7145 7.48256 4.86112 7.00631 4.98431 6.68906C5.14744 6.26906 5.34281 5.96906 5.65781 5.65406C5.97281 5.33906 6.27281 5.14406 6.69281 4.98056C7.01006 4.85681 7.4865 4.71056 8.364 4.67025C9.19425 4.63275 9.516 4.6215 11.1934 4.61963V4.62187ZM16.8049 6.11625C16.2086 6.11625 15.7249 6.59944 15.7249 7.19587C15.7249 7.79212 16.2086 8.27588 16.8049 8.27588C17.4011 8.27588 17.8849 7.79212 17.8849 7.19587C17.8849 6.59962 17.4011 6.11588 16.8049 6.11588V6.11625ZM12.0007 7.37812C9.44831 7.37812 7.37887 9.44756 7.37887 12C7.37887 14.5524 9.44831 16.6209 12.0007 16.6209C14.5532 16.6209 16.6219 14.5524 16.6219 12C16.6219 9.44756 14.553 7.37812 12.0006 7.37812H12.0007ZM12.0007 9C13.6575 9 15.0007 10.3431 15.0007 12C15.0007 13.6567 13.6575 15 12.0007 15C10.3438 15 9.00075 13.6567 9.00075 12C9.00075 10.3431 10.3438 9 12.0007 9Z" fill="#838B9D"/>
                </svg>

                <input className='main-input-box'  placeholder="Instagram Handle"/>
              </div>
              <div className="brand-input-box brand-input-box-alt flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0322 6.07558C19.8072 6.28302 20.4162 6.89201 20.6236 7.66695C20.9985 9.07014 21 11.9995 21 11.9995C21 11.9995 21 14.9289 20.6236 16.3321C20.4162 17.107 19.8072 17.716 19.0322 17.9234C17.6291 18.2998 12 18.2998 12 18.2998C12 18.2998 6.37092 18.2998 4.96773 17.9234C4.19279 17.716 3.5838 17.107 3.37636 16.3321C3 14.9289 3 11.9995 3 11.9995C3 11.9995 3 9.07014 3.37636 7.66695C3.5838 6.89201 4.19279 6.28302 4.96773 6.07558C6.37092 5.69922 12 5.69922 12 5.69922C12 5.69922 17.6291 5.69922 19.0322 6.07558ZM14.8746 11.9993L10.1982 14.699V9.29961L14.8746 11.9993Z" fill="#838B9D"/>
                </svg>

                <input className='main-input-box'  placeholder="YouTube Channel"/>
              </div>
            </div>
            <div className='grid justify-center'>
              <button className='brand-button mt-8'>
                <h1 className='brand-button-text'>Submit an application</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="grid justify-center items-center">
          <div className="brand-card grid">
            <button className="brand-card-button">
              <h1 className="brand-card-button-text">Download Media Kit</h1>
            </button>
          </div>
        </div>
      </div>
      <DownloadSection/>
      <Footer/>
    </>
  )
}