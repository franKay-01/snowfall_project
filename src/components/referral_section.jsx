import ApplePlayImg from "../assets/apple_store_img.png"
import GooglePlayImg from "../assets/google_play_img.png"
import DownloadPhoneImg from "../assets/download_phone.png"
import ShareEarnImg from "../assets/share_earn.png"

export default function DownloadSection() {
  return (
    <div className="center-container-alt">
      <div className="share-section bg-c-black grid grid-cols-2 mt-24 sh-p-12 relative mb-8">
        <div className="flex flex-col justify-center space-y-4">
          <img className="golden-image" src={ShareEarnImg} alt=""/>
          <h1 className="share-section-header">Time to Download your trusted Crypto Investment App</h1>
          <h1 className="hidden lg:block md:block share-section-sub">Gain access to high-yield stablecoin vaults and generate interest in real-time via DeFi</h1>
          <div className="flex flex-col space-x-0 space-y-4 md:flex-col md:space-y-4 lg:flex-row lg:space-x-4 md:space-x-0 mt-4">
            <img className="home-store-button" src={ApplePlayImg} alt=""/>
            <img className="home-store-button" src={GooglePlayImg} alt=""/>
          </div>
        </div>
        <div className="grid justify-center items-center download-img-position">
          <img className="share-section-image" src={DownloadPhoneImg} alt=""/>
        </div>          
      </div>
    </div>
  )
}

