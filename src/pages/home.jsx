import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BannerPhoneImg from "../assets/banner_phone.png"
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
          </div>
          <div>
            <img src={BannerPhoneImg} alt=""/>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  )
}