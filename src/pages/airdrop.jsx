import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import AirDropImg from "../assets/airdrop_screen.png"
import BootstrapCommunity from "../assets/Assets/Airdrop/Bootstrap_Community.png"
import AirDrop1Img from "../assets/airdrop_screen_1.png"
import AirDropIcon1Img from "../assets/airdrop_icon_1.png"
import AirDropIcon2Img from "../assets/airdrop_icon_2.png"
import AirDropIcon3Img from "../assets/airdrop_icon_3.png"
import AirDropIcon4Img from "../assets/airdrop_icon_4.png"
import SmartPhoneImg from "../assets/smart_phone.png"
import CompleteApplication from "../assets/application.png";
import { useState } from "react";

export default function AirDrop(){
  const [submit, setSubmit] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const submitAirdropForm = () => {
  
    const formData = {
      fullname: fullname,
      email: email,
      website: website
    }

    setSubmit(true);

    console.log(formData);

    // TODO: implement logic to submit form data after team agree how to approach this.
  }

  return (
    <>
      <Navbar/>
      <div className="center-container-alt mt-4">
        <div className="career-section airdrop-section flex flex-col mt-24 sh-p-12-alt-n relative md:pt-8 md:pb-8 md:pr-20 md:pl-20 lg:pt-24 lg:pb-24 lg:pr-96 lg:pl-96">
          <h1 className="career-banner-header airdrop-banner-header">
            Snowball Airdrop Campaign
          </h1>
          <h1 className="career-banner-sub airdrop-banner-header">
            Have Web 2.0 fans that you want to convert? No problem! Snowball is available on iOS App Store and Google. Users can download and apply to airdrop and be integrated to your ecosystem in less than 3 steps!
          </h1>
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row md:flex-row items-center justify-center lg:space-x-14 md:space-x-12 mt-24 mb-24">
        <img className="airdrop-img mt-24" src={BootstrapCommunity} alt="Bootstrap Community"/>
        <div className="flex flex-col space-y-4">
          <h1 className="career-heading airdrop-header airdrop-header-alt">Bootstrap Community</h1>
          <h1 className="airdrop-header-sub">Gain access to Snowball’s user base as well as an email list of over 200k!</h1>
        </div>
      </div>
      <div className="center-container-alt">
        <div className="career-section airdrop-frame flex flex-col lg:flex-row md:flex-col mt-24 sh-p-12 relative space-x-0 lg:space-x-8 md:space-x-8">
          <div className="flex flex-col justify-center space-y-4 lg:space-y-12 md:space-y-4 mb-4">
            <h1 className="career-heading airdrop-header">Social Media Driver</h1>
            <h1 className="airdrop-header-sub">In order to qualify for the airdrop, a user must do the following:</h1>
          </div>
          <div class="flex flex-col lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 space-y-8 lg:gap-8 md:gap-8">
            <div class="flex flex-col space-y-8">
              <div className="airdrop-card p-8 flex flex-col space-y-8 relative">
                <img className="airdrop-icon-img" src={AirDropIcon1Img} alt=""/>
                <span className="absolute bottom-4 airdrop-text-gradient p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
                  Follow your project on Twitter
                </span>
              </div>
              <div className="airdrop-card p-8 flex flex-col space-y-8 relative">
                <img className="airdrop-icon-img" src={AirDropIcon3Img} alt=""/>
                <span className="absolute bottom-4 airdrop-text-gradient p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
                Join your Discord
                </span>
              </div>
            </div>
            <div class="flex flex-col space-y-8 mt-24">
              <div className="airdrop-card p-8 flex flex-col space-y-8 relative">
                <img className="airdrop-icon-img" src={AirDropIcon2Img} alt=""/>
                <span className="absolute bottom-4 airdrop-text-gradient p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
                Retweet a Tweet you want to be amplified
                </span>
              </div>
              <div className="airdrop-card p-8 flex flex-col space-y-8 relative">
                <img className="airdrop-icon-img" src={AirDropIcon4Img} alt=""/>
                <span className="absolute bottom-4 airdrop-text-gradient p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
                Join your Telegram
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center lg:space-x-14 md:space-x-12 mt-24 mb-24">
        <img className="airdrop-img" src={AirDrop1Img} alt=""/>
        <div className="flex flex-col space-y-4">
          <h1 className="career-heading airdrop-header">Wallet Count Increase</h1>
          <h1 className="airdrop-header-sub">After Snowball concludes the airdrop campaign, watch your wallet count increase instantly after the smart contract is executed</h1>
        </div>
      </div>
      <div className="center-container-alt">
        <div className="share-section share-section-alt-n bg-c-black flex flex-col items-center justify-center lg:grid lg:grid-cols-2 md:flex md:flex-col mt-24 sh-p-12-alt relative">
          <div className="airdrop-card-alt p-8 airdrop-order-1">
            {submit? 
              <div className="flex flex-col items-center justify-center space-y-4">
                <img src={CompleteApplication} alt=""/>
                <h1 className='thank-you-note'>Thank you for your Application!</h1>
                <h1 className='thank-you-note-sub'>We will contact you immediately after reviewing your application.</h1>
              </div>
              :
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="airdrop-campaign-header">Interested in starting your campaign?</h1>
                <h1 className="airdrop-header-sub">Fill out the form below</h1>
                <div className="brand-input-box brand-input-box-alt flex flex-row">
                  <input value={fullname} onChange={(event) => setFullname(event.target.value)} className='main-input-box' placeholder="Full Name*"/>
                </div>
                <div className="brand-input-box brand-input-box-alt flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00001 12.3092C3.00067 16.1205 2.99878 16.0746 3.17661 16.5529C3.47414 17.3529 4.2176 18 5.06903 18.1999C5.32271 18.2594 5.71473 18.263 12.0017 18.263C18.2887 18.263 18.6807 18.2594 18.9344 18.1999C19.8101 17.9943 20.5527 17.333 20.8439 16.4995C21.0052 16.0378 21.0068 15.9925 20.9964 12.2777L20.9865 8.75391L16.8018 11.3043C14.5002 12.707 12.542 13.8934 12.4502 13.9406C12.2124 14.0632 11.9279 14.0855 11.6852 14.0007C11.5774 13.963 9.62585 12.7932 7.27199 11.3553C4.95108 9.93746 3.04031 8.77054 3.02578 8.76206C3.01126 8.75359 2.99969 10.3498 3.00001 12.3092Z" fill="#838B9D"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33822 5.02434C5.02757 5.06123 4.65528 5.18642 4.34702 5.35757C4.03904 5.52861 3.58453 5.98122 3.39509 6.30555C3.21058 6.62141 3.07495 7.00682 3.12305 7.07863C3.15287 7.12311 11.8713 12.4561 11.9866 12.5003C12.0338 12.5184 20.8289 7.15789 20.8813 7.07901C20.906 7.0417 20.8924 6.95696 20.8347 6.78901C20.7039 6.40901 20.4944 6.08728 20.164 5.75905C19.9132 5.50994 19.8046 5.43099 19.5275 5.2961C18.8736 4.97775 19.5924 5.00658 12.1604 5.0005C8.54365 4.99751 5.47368 5.00827 5.33822 5.02434Z" fill="#838B9D"/>
                  </svg>

                  <input value={email} onChange={(event) => setEmail(event.target.value)} className='main-input-box'  placeholder="Email"/>
                </div>
                <div className="brand-input-box brand-input-box-alt flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.9995 3C7.037 3 2.99951 7.03748 2.99951 12C2.99951 16.9625 7.037 21 11.9995 21C16.962 21 20.9995 16.9625 20.9995 12C20.9995 7.03748 16.962 3 11.9995 3ZM19.112 14.9697C18.2273 17.0811 16.4286 18.7182 14.213 19.3835C14.2527 19.3098 14.2912 19.2352 14.3284 19.1598C14.5188 18.7746 14.7188 18.503 15.0544 18.2321C15.3113 18.0247 15.8157 17.7034 15.7333 17.2982C15.6738 17.0054 15.3395 16.8852 15.0868 16.8137C14.686 16.7001 14.2573 16.6707 13.8436 16.642C13.4854 16.617 13.1135 16.6298 12.7638 16.5406C12.2404 16.4074 12.1225 15.9543 12.0893 15.4768C12.0598 15.0523 12.0662 14.6159 11.8574 14.2317C11.5886 13.7373 10.9699 13.5967 10.4568 13.5495C10.0237 13.5099 9.5912 13.5308 9.16045 13.4586C8.74603 13.3892 8.35355 13.2436 7.928 13.2601C7.37648 13.2814 7.1288 13.6552 6.89354 14.0875C6.77742 14.301 6.04394 15.9428 5.61299 16.3109C4.86988 15.2139 4.40242 13.9159 4.30933 12.517C4.37023 12.5006 4.4306 12.4779 4.49188 12.4474C4.73166 12.3283 4.89964 12.1134 5.16056 12.0283C5.40933 11.9473 5.73074 12.0191 5.98492 12.044C6.23784 12.0688 6.49469 12.095 6.74782 12.0605C7.25312 11.9915 7.52086 11.6425 7.60157 11.1552C7.64954 10.8642 7.61212 10.5715 7.62078 10.2784C7.63447 9.82175 7.93415 9.65791 8.3471 9.61906C9.12713 9.5458 10.9467 9.75251 10.9835 8.55204C10.9992 8.03854 10.3881 7.77352 9.99 7.63647C9.21491 7.36981 8.36803 7.46291 7.57528 7.27768C7.15362 7.17914 6.79797 6.91613 6.49976 6.60527C7.89974 5.17871 9.8478 4.29198 11.9995 4.29198C12.4597 4.29198 12.9102 4.33259 13.3482 4.41036C13.1243 4.45197 12.9032 4.51108 12.6881 4.59794C11.5534 5.05543 11.5192 6.34277 12.0152 7.30987C12.3228 7.90965 12.8209 8.41214 13.3413 8.82999C13.845 9.23432 14.3954 9.47326 14.9539 9.77997C15.6948 10.1874 15.6054 11.2514 15.7928 11.9683C15.9509 12.5729 16.3306 13.0829 16.929 13.2922C17.2908 13.4187 17.7158 13.32 18.0326 13.5721C18.3047 13.7879 18.3686 14.2299 18.5241 14.5269C18.679 14.8232 18.8852 14.9479 19.112 14.9697Z" fill="#838B9D"/>
                  </svg>

                  <input value={website} onChange={(event) => setWebsite(event.target.value)} className='main-input-box'  placeholder="Website"/>
                </div>
                <div className='grid justify-center'>
                  <button className='brand-button brand-button-alt mt-8' onClick={submitAirdropForm}>
                    <h1 className='brand-button-text'>Submit an application</h1>
                  </button>
                </div>
              </div>
            }
          </div>
          
          <div className="grid justify-center items-center home-order-2">
            <img className="share-section-image-alt" src={SmartPhoneImg} alt=""/>
          </div>          
        </div>
      </div>
      <Footer/>
    </>
  )
}