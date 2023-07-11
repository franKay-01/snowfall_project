import DownloadSection from "../components/download_section";
import FAQ from "../components/faqs";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ReferralRule from "../components/referral-rules";
// import BannerPhoneImg from "../assets/banner_phone.png"
// import ApplePlayImg from "../assets/apple_store_img.png"
// import GooglePlayImg from "../assets/google_play_img.png"
// import SwirlLogoImg from "../assets/swirl_logo.png"
import ReferralShareEarn from "../components/share-and-earn";

export default function Referral(){
  
  return (
    <>
      
        <Navbar/>
        <div class="mt-3 mx-auto px-2 sm:px-6 lg:px-8 h-18">
           <ReferralShareEarn />
           <ReferralRule />
           <FAQ />
           <DownloadSection />
        </div>


        <Footer/>

      
      
      {/* <div className="home-banner grid justify-center">
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
      </div> */}
    </>
  )
}