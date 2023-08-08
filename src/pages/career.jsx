import { useState } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import WorldImg from "../assets/images/Career/Global Team.png";
import PerksImg from "../assets/perks.png";
import Frame3 from "../assets/frame_3.png";
import Frame1Alt from "../assets/frame_1_alt.png"
import CompleteApplication from "../assets/application.png";

import { Dialog } from '@headlessui/react'

export default function Career(){
  const [isRoleOpen, setIsRoleOpen] = useState(false)
  const [isApplyOpen, setIsApplyOpen] = useState(false)
  const [isSubmit, setSubmitOpen] = useState(false)

  const setSubmit = () => {
    setSubmitOpen(true)
    setIsApplyOpen(false)
    setIsRoleOpen(false)
  }

  const setApply = () => {
    setSubmitOpen(false)
    setIsApplyOpen(true)
    setIsRoleOpen(false)
  }

  const openRole = () => {
    setIsRoleOpen(true)
  }

  return (
    <>
      <Navbar/>
      <div className="center-container-alt mt-4">
        {/* <div className="career-section flex flex-col mt-24 sh-p-12 relative"> */}
        <div className="career-section flex flex-col mt-24 sh-p-12-alt-n relative md:pt-8 md:pb-8 md:pr-20 md:pl-20 lg:pt-24 lg:pb-24 lg:pr-96 lg:pl-96">

          <h1 className="career-banner-header">
            Be part of a remote team of innovators
          </h1>
          <h1 className="career-banner-sub">
            Have Web 2.0 fans that you want to convert? No problem! Snowball is available on iOS App Store and Google. Users can download and apply to airdrop and be integrated to your ecosystem in less than 3 steps!
          </h1>
        </div>
      </div>
      <div className="career-text-container justify-center">
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
          Our global team works from
        </span><br></br>
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
          the places they love — from
        </span><br></br>
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
          San Francisco to Ukraine,
        </span><br></br>
        <span className="gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
          Brazil to Croatia
        </span>
        <img className="career-world-img z-down" src={WorldImg} alt=""/>
      </div>
      <div className="flex flex-col z-up items-center justify-center lg:space-y-14 md:space-y-12 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <h1 className="career-heading">Perks & benefits</h1>
          <div className="hidden lg:grid md:grid justify-end items-center	">
            <button className="career-button">
              <h1 className="career-button-text">
                view open roles
              </h1>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-4 items-center justify-center">
          <div className="perk-card flex flex-col space-y-4 p-8">
            <img className="h-14 w-14" src={PerksImg} alt=""/>
            <h1 className="perk-card-header">Flexible Work Culture</h1>
            <h1 className="perk-card-sub">
            We practice flexible work hours, with set collaboration time from 11am to 2pm ET each day.
            </h1>
          </div>
          <div className="perk-card flex flex-col space-y-4 p-8">
            <img className="h-14 w-14" src={PerksImg} alt=""/>
            <h1 className="perk-card-header">Paid Birthday & Holidays Off</h1>
            <h1 className="perk-card-sub">
            We observe all US federal holidays plus Friday after Thanksgiving and your birthday.
            </h1>
          </div>
          <div className="perk-card flex flex-col space-y-4 p-8">
            <img className="h-14 w-14" src={PerksImg} alt=""/>
            <h1 className="perk-card-header">Flexible Time Off</h1>
            <h1 className="perk-card-sub">
            In addition to paid holidays and a week off at the new year, team members receive unlimited PTO.
            </h1>
          </div>
          <div className="perk-card flex flex-col space-y-4 p-8">
            <img className="h-14 w-14" src={PerksImg} alt=""/>
            <h1 className="perk-card-header">2 Weeks Paid Vacation</h1>
            <h1 className="perk-card-sub">
            We encourage you to take time off work because we know it will improve your health, focus, happiness, and productivity.
            </h1>
          </div>
          <div className="perk-card flex flex-col space-y-4 p-8">
            <img className="h-14 w-14" src={PerksImg} alt=""/>
            <h1 className="perk-card-header">Paid Parental & Family Leave</h1>
            <h1 className="perk-card-sub">
            We offer generous paid parental and family leave benefits to support full-time team members and their families.
            </h1>
          </div>
          <div className="perk-card flex flex-col space-y-4 p-8">
            <img className="h-14 w-14" src={PerksImg} alt=""/>
            <h1 className="perk-card-header">Professional Development</h1>
            <h1 className="perk-card-sub">
            Team members receive a professional development stipend, as well as access to training & learning opportunities.
            </h1>
          </div>
          <div className="flex lg:hidden md:hidden justify-center items-center mb-12">
            <button className="career-button">
              <h1 className="career-button-text">
                view open roles
              </h1>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-c-black relative">
        <div className="concave-border bg-white"></div>
        {/* <div className="bg-c-black flex flex-col pl-4 lg:pl-64 md:pl-60 md:flex-row lg:flex-row lg:space-x-14 md:space-x-24"> */}
        <div className="bg-c-black flex flex-col mt-8 pl-4 lg:pl-56 lg:justify-center lg:items-stretch md:justify-center md:items-center lg:pt-0 md:pt-8 lg:pb-0 md:pb-12 md:flex-col lg:flex-row lg:space-x-24 lg:space-y-2 space-y-4 md:space-y-14">

          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h1 className="snowball-money-header">
                In their own words
              </h1>
              <h1 className="snowball-money-sub mt-4">
              Hear what our team has to say about working at Snowball Money
              </h1>
            </div>
            
          </div>
          <div className="flex flex-row space-x-0 lg:space-x-4 md:space-x-4">
            <img className="hidden lg:block md:block snowball-frame-h" src={Frame3} alt=""/>
            <img className="block lg:hidden md:hidden snowball-frame-h mb-8" src={Frame1Alt} alt=""/>
          </div>
        </div>
        <div className="concave-border-2 bg-white"></div>
      </div>
      <div className="flex flex-col lg:justify-center space-y-8 lg:items-center md:justify-center md:items-center lg:pt-0 md:pt-8 lg:pb-0 md:pb-12 lg:pl-0 md:pl-12 md:flex-col lg:flex-col lg:space-x-24 lg:space-y-2 md:space-y-14 mb-12">

      {/* <div className="flex flex-col items-center justify-center lg:space-y-14 md:space-y-12 mt-24 mb-24"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className="flex flex-col justify-center items-start p-8">
            <h1 className="career-heading">Open Roles</h1>
            <h1 className="career-heading-sub mt-4">If you're innovative, creative, and thrive in a team-oriented environment, we'd love to hear from you!</h1>
          </div>
          <div className="hidden lg:grid md:grid justify-center items-center	">
            <button className="snowball-button">
              <h1 className="snowball-button-text">
              Submit your resume
              </h1>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 lg:p-8 md:p-0 p-8">
          <div className="role-card flex flex-col space-y-4 relative" onClick={openRole}>
            <div className="flex flex-row justify-between">
              <div className="role-card-info">
                <h1 className="role-card-info-text">ENGINEERING</h1>
              </div>
              <div className="role-card-info-date">
                Mar 22, 2023
              </div>
            </div>
            
            <div className="role-card-info-name">
              Director, People (HR) Business Partner
            </div>
            <div className="role-card-info-extra">
              Remote . Full-time
            </div>
          </div>
          <div className="role-card flex flex-col space-y-4 relative" onClick={openRole}>
            <div className="flex flex-row justify-between">
              <div className="role-card-info">
                <h1 className="role-card-info-text">ENGINEERING</h1>
              </div>
              <div className="role-card-info-date">
                Mar 22, 2023
              </div>
            </div>
            
            <div className="role-card-info-name">
              Senior Backend Engineer
            </div>
            <div className="role-card-info-extra">
              Remote . Full-time
            </div>
          </div>

          <div className="role-card flex flex-col space-y-4 relative" onClick={openRole}>
            <div className="flex flex-row justify-between">
              <div className="role-card-info">
                <h1 className="role-card-info-text">ENGINEERING</h1>
              </div>
              <div className="role-card-info-date">
                Mar 22, 2023
              </div>
            </div>
            
            <div className="role-card-info-name">
            Senior Backend Engineer
            </div>
            <div className="role-card-info-extra">
              Remote . Full-time
            </div>
          </div>
          <div className="role-card flex flex-col space-y-4 relative" onClick={openRole}>
            <div className="flex flex-row justify-between">
              <div className="role-card-info">
                <h1 className="role-card-info-text">ENGINEERING</h1>
              </div>
              <div className="role-card-info-date">
                Mar 22, 2023
              </div>
            </div>
            
            <div className="role-card-info-name">
              Senior Machine Learning Engineer
            </div>
            <div className="role-card-info-extra">
              Remote . Full-time
            </div>
          </div>
          <div className="flex lg:hidden md:hidden justify-center items-center	">
            <button className="snowball-button">
              <h1 className="snowball-button-text">
              Submit your resume
              </h1>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
      <Dialog
        open={isRoleOpen}
        onClose={() => setIsRoleOpen(false)}
        className="relative z-id"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex justify-center p-8">
            <Dialog.Panel className="m-auto rounded bg-white dialog-box-shadow dialog-box-shadow-alt dialog-box">
              <Dialog.Panel>
                <Dialog.Title className='header-alt mt-8 text-left mb-4'>Director, People (HR) Business Partner</Dialog.Title>
                <hr className="mb-4"></hr>
                <>
                  <div className="grid grid-cols-1 gap-x-8 text-left header-alt-sub scrollable-div">
                  We’re looking for a Director, People (HR) Business Partner who will partner closely with leaders across our business to align people and strategy. You will have an opportunity to drive significant business growth and make an immediate impact through your expertise in organizational design, talent management strategy, and leadership coaching, all while acting as a steward of Snowball’s culture. As part of our People function, your #1 goal is to design, build and execute against the People strategy that drives our success. 
                  <br></br>What You'll Do:<br></br>
                  * Be a trusted advisor, providing support from the executives to the employees within your teams.<br></br>
                  * Work closely with management in implementing initiatives and policies related to human resources, organizational and employee development at the business level. <br></br>
                  * Experience supporting Sales and GTM organizations as well as Tech (Engineering and Product). <br></br>
                  * Execute global and local HR programs and processes (e.g., talent management, organizational planning, performance management, development planning, compensation). <br></br>
                  * Provide business leaders with data, findings, and recommendations of client organizations' "health" by assessing trends in performance, span of control, employee engagement, manager feedback, attrition, and turnover, etc. <br></br>
                  * Tackle problems and get to the root cause of any issue, no matter how complex; design and quickly implement solutions Collaborate with others (People team members, cross-functional partners, business peers, etc.) to build world-class initiatives. <br></br>
                  * Coach and influence managers on how to build an amazing team.
                  </div>
                    
                  <div className='flex flex-col space-y-4 items-center justify-center mt-4'>
                    <button onClick={()=> setApply()} className="brand-button cursor-pointer">
                      <h1 className='brand-button-text'>Apply</h1>
                    </button>
                  </div>
                </>
              </Dialog.Panel>
            </Dialog.Panel>
          </div>
      </Dialog>
      <Dialog
        open={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        className="relative z-id"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex justify-center p-8">
            <Dialog.Panel className="m-auto rounded bg-white dialog-box-shadow dialog-box-shadow-alt dialog-box-alt-2">
              <Dialog.Panel>
                <Dialog.Title className='flex header-alt header-alt-1 mt-8 text-center justify-center items-center mb-4'>Apply for this Job</Dialog.Title>
                <hr className="mb-4"></hr>
                <>
                  <div className="grid grid-cols-1 gap-x-8 text-center header-alt-sub">
                    <div className="flex flex-col space-y-4 justify-center items-center">
                      
                      <div className="brand-input-box brand-input-box-alt-2 flex flex-row">
                        <input className='main-input-box' placeholder="Full Name*"/>
                      </div>
                      <div className="brand-input-box brand-input-box-alt-2 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00001 12.3092C3.00067 16.1205 2.99878 16.0746 3.17661 16.5529C3.47414 17.3529 4.2176 18 5.06903 18.1999C5.32271 18.2594 5.71473 18.263 12.0017 18.263C18.2887 18.263 18.6807 18.2594 18.9344 18.1999C19.8101 17.9943 20.5527 17.333 20.8439 16.4995C21.0052 16.0378 21.0068 15.9925 20.9964 12.2777L20.9865 8.75391L16.8018 11.3043C14.5002 12.707 12.542 13.8934 12.4502 13.9406C12.2124 14.0632 11.9279 14.0855 11.6852 14.0007C11.5774 13.963 9.62585 12.7932 7.27199 11.3553C4.95108 9.93746 3.04031 8.77054 3.02578 8.76206C3.01126 8.75359 2.99969 10.3498 3.00001 12.3092Z" fill="#838B9D"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33822 5.02434C5.02757 5.06123 4.65528 5.18642 4.34702 5.35757C4.03904 5.52861 3.58453 5.98122 3.39509 6.30555C3.21058 6.62141 3.07495 7.00682 3.12305 7.07863C3.15287 7.12311 11.8713 12.4561 11.9866 12.5003C12.0338 12.5184 20.8289 7.15789 20.8813 7.07901C20.906 7.0417 20.8924 6.95696 20.8347 6.78901C20.7039 6.40901 20.4944 6.08728 20.164 5.75905C19.9132 5.50994 19.8046 5.43099 19.5275 5.2961C18.8736 4.97775 19.5924 5.00658 12.1604 5.0005C8.54365 4.99751 5.47368 5.00827 5.33822 5.02434Z" fill="#838B9D"/>
                        </svg>

                        <input className='main-input-box'  placeholder="Email"/>
                      </div>
                      <div className="brand-input-box brand-input-box-alt-2 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clip-path="url(#clip0_16643_244669)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.34315 6.34315 1 8 1H16C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4ZM13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20ZM10 3C9.44772 3 9 3.44772 9 4C9 4.55228 9.44772 5 10 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H10Z" fill="#838B9D"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_16643_244669">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>

                        <input className='main-input-box'  placeholder="Phone"/>
                      </div>
                      <div className="brand-input-box brand-input-box-alt-2 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M8 18.9991H5V7.99913H8V18.9991ZM6.5 6.73112C5.534 6.73112 4.75 5.94112 4.75 4.96712C4.75 3.99312 5.534 3.20312 6.5 3.20312C7.466 3.20312 8.25 3.99312 8.25 4.96712C8.25 5.94112 7.467 6.73112 6.5 6.73112ZM20 18.9991H17V13.3951C17 10.0271 13 10.2821 13 13.3951V18.9991H10V7.99913H13V9.76413C14.396 7.17813 20 6.98713 20 12.2401V18.9991Z" fill="#838B9D"/>
                        </svg>

                        <input className='main-input-box'  placeholder="LinkedIn Profile"/>
                      </div>
                      <div className="brand-input-box brand-input-box-alt-2 brand-input-box-alt-1 flex flex-row">
                        <textarea id="message" rows="4" class="flex p-2 w-full main-input-box rounded-lg" placeholder="Cover Letter"></textarea>
                      </div>
                      <div className='grid justify-center'>
                        <button className='brand-button mt-8' onClick={()=> setSubmit()}>
                          <h1 className='brand-button-text'>Submit an application</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              </Dialog.Panel>
            </Dialog.Panel>
          </div>
      </Dialog>
      <Dialog
        open={isSubmit}
        onClose={() => setSubmitOpen(false)}
        className="relative z-id"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex justify-center p-8">
            <Dialog.Panel className="m-auto rounded bg-white dialog-box-shadow dialog-box-shadow-alt dialog-box-alt">
              <Dialog.Panel>
                <>
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <img src={CompleteApplication} alt=""/>
                    <h1 className='thank-you-note'>Thank you for your Application!</h1>
                    <h1 className='thank-you-note-sub'>We will contact you immediately after reviewing your application.</h1>
                  </div>
                    
                  <div className='flex flex-col space-y-4 items-center justify-center mb-8'>
                    <button className='brand-button mt-8' onClick={()=> setSubmitOpen(false)}>
                      <h1 className='brand-button-text'>Got It</h1>
                    </button>
                  </div>
                </>
              </Dialog.Panel>
            </Dialog.Panel>
          </div>
      </Dialog>
    </>
  )
}