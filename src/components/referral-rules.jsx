import iPhoneScreenReferral from "../assets/iphone_screen_referral.png"
import RefferalDone from "../assets/refferal_done.png"
import RefferalGroup from "../assets/refferal_group_image.png"
import RefferalGroupHand from "../assets/referral_rules_hand.png"

import ReferralIcon1 from "../assets/referral_icon_1.png"
import ReferralIcon2 from "../assets/referral_icon_2.png"
import ReferralIconStaking from "../assets/referral_staking_color.png"

import ReferralIcon4 from "../assets/referral_icon_4.png"
import ReferralMorflax from "../assets/morflax-studio-175.png"

import ReferralRulesExplain from "../assets/referral_rules_explain.png"




export default function ReferralRule() {
  return (
    // <div className="relative flex justify-center items-center rounded-sm overflow-hidden mt-8  grid mb-12">
    <div className="flex justify-center items-center">
      <div className="relative rounded-sm overflow-hidden mt-12 grid mb-12" style={{ maxWidth: "65%" }}>
        <h3 className="text-md text-center justify-center md:text-2xl lg:text-4xl">Rules for a referral program</h3>

        <div className=" grid grid-cols-2 gap-4 mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center flex-col pt-4 pl-4 pr-4" style={{
              width: "100%",
              // height: "22.5rem",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA"
            }}>
              <div className="relative">
                <p style={{
                  color: "#414A5B",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  lineHeight: "1.75rem"
                }}>Users must have an <span className="referral-program-sub-text-color">active account</span> with the platform</p>
              </div>

              <div className="relative mt-4 flex-grow-0">
                <img className="mx-auto mt-auto" src={iPhoneScreenReferral} alt="Iphone Screen" />
              </div>
            </div>

            <div className="flex flex-col  pt-4 pl-4 pr-4" style={{
              width: "100%",
              // height: "22.5rem",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA"
            }}>
              <div className="relative">
                <img className="mx-auto mt-auto" src={RefferalDone} alt="Referral Done" />
              </div>
              <div className="relative mb-2">
                <p style={{
                  color: "#414A5B",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  lineHeight: "1.75rem"
                }}>Each user will be given a <span className="referral-program-sub-text-color">unique referral code</span></p>
              </div>
              <div className="relative mx-auto mt-auto flex-grow">
                <p style={{
                  color: "#414A5B",
                  fontSize: "0.8rem",
                  fontWeight: 100,
                  lineHeight: "1rem"
                }}>that they can share with their friends, family, and colleagues.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  pt-4 pr-4" style={{
              width: "100%",
              // height: "22.5rem",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA"
            }}>
              <div className="relative mb-8 pb-8 pt-8 mt-8">
                <img className="mx-auto mt-auto" src={RefferalGroup} alt="Referral Done" />
              </div>
              <div className="relative pl-6">
                <p style={{
                  color: "#414A5B",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  lineHeight: "1.75rem",
                  width: "15.375rem"
                }}>The reward will be based on the <span className="referral-program-sub-text-color">activities</span></p>
              </div>
              <div className="relative pl-6 mb-4">
                <p style={{
                  color: "#414A5B",
                  fontSize: "0.8rem",
                  fontWeight: 100,
                  lineHeight: "1rem"
                }}>of the new user and may change over time.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex gap-4 mt-8">
          <div class="flex-auto w-64" style={{
            borderRadius: "24px",
            border: "1px solid #E6EBF4",
            background: "#1B1E26",
            height: "20rem"
          }}>
            <div className="relative">
              <div className="flex flex-row relative">
                <div className="ml-6 mt-4 pt-4 mr-6 pr-6 gap-4 pb-4">
                  <p className="text-base w-72 font-semibold text-white leading-6">New users must sign up using the referral code in order to be <span className="referral-program-sub-text-color">counted as a referral</span></p>
                  <p className="text-sm w-80 font-light text-white leading-5">The referrer will only receive a reward if the new user completes one of the following actions:</p>
                </div>
                <div className="absolute right-0">
                  <img src={RefferalGroupHand} alt="Referral Group Hand" />
                </div>

              </div>
              <div className="flex flex-row gap-4 mb-4 pb-4 pl-2 ml-2 w-80">
                <div className="flex flex-col">
                  <div>
                    <img src={ReferralIcon1} alt="Referral Icon 1" />
                  </div>
                  <div>
                    <p className="text-sm font-light text-white leading-5">Trades on the platform</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <img src={ReferralIcon2} alt="Referral Icon 2" />
                  </div>
                  <div>
                    <p className="text-sm font-light text-white leading-5">Deposits funds into an index</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <img src={ReferralIconStaking} alt="Referral Icon Staking" />
                  </div>
                  <div>
                    <p className="text-sm font-light text-white leading-5">Stakes their assets</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative mb-2">
              <p style={{
                color: "#414A5B",
                fontSize: "1.4rem",
                fontFamily: "Satoshi",
                fontWeight: 700,
                lineHeight: "1.75rem"
              }}>The reward will be based on the <span className="referral-program-sub-text-color">activities</span></p>
            </div>
            <div className="relative pl-6 mb-4 pb-4 pr-12">
              <p style={{
                color: "#414A5B",
                fontSize: "0.8rem",
                fontFamily: "Satoshi",
                fontWeight: 100,
                lineHeight: "1rem"
              }}>of the new user and may change over time.</p>
            </div> */}
          </div>
          <div className="flex-auto w-32 h-72">
            <div className="flex flex-col" style={{
              width: "100%",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA"
            }}>
              <div className="grid grid-cols-2">
                <div className="ml-4 mt-4 pt-4 pl-4">
                  <img className="mt-auto mr-2" src={ReferralIcon4} alt="Referral Icon 4" />
                </div>
                <div>
                  <img className="mt-auto h-40" src={ReferralMorflax} alt="Referral Icon 4" />
                </div>
              </div>

              <div className="flex flex-col m-4">
                <div className="relative mb-2 pl-6">
                  <p style={{
                    color: "#414A5B",
                    fontSize: "1.2rem",
                    // fontFamily: "Satoshi",
                    fontWeight: 700,
                    lineHeight: "1.75rem"
                  }}>The platform reserves the right to modify these rules at any time <span className="referral-program-sub-text-color">without prior notice</span></p>
                </div>
                <div className="relative pl-6 mb-4">
                  <p style={{
                    color: "#414A5B",
                    fontSize: "0.8rem",
                    // fontFamily: "Satoshi",
                    fontWeight: 100,
                    lineHeight: "1rem"
                  }}>By participating in the referral program, users agree to these rules and any future changes.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=" grid grid-cols-3 gap-4 mt-8">
          <div style={{
              width: "100%",
              // height: "22.5rem",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA",
              padding: "1.5rem"
            }}>
             <p style={{
                    color: "#414A5B",
                    fontSize: "0.8rem",
                    // fontFamily: "Satoshi",
                    fontWeight: 100,
                    lineHeight: "1rem"
              }}>The referral program is subject to change or termination at any time at the discretion of the platform</p>
          </div>
          <div style={{
              width: "100%",
              // height: "22.5rem",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA",
              padding: "1.5rem"
            }}>
              <p style={{
                    color: "#414A5B",
                    fontSize: "0.8rem",
                    // fontFamily: "Satoshi",
                    fontWeight: 100,
                    lineHeight: "1rem"
                  }}>The platform reserves the right to void rewards or take other appropriate action
                  if it detects fraudulent or abusive behavior</p>
          </div>
          
          <div style={{
              width: "100%",
              // height: "22.5rem",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA",
              padding: "1.5rem"
            }}>
             <p style={{
                    color: "#414A5B",
                    fontSize: "0.8rem",
                    // fontFamily: "Satoshi",
                    fontWeight: 100,
                    lineHeight: "1rem"
                  }}>Users are responsible for complying with all applicable laws and regulations related to the referral program</p>
          </div>

        </div>



        <div className="flex gap-4 mt-8">
        <div className="flex-auto w-28 ">
            <div className="flex flex-col" style={{
              width: "100%",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#F5F8FA"
            }}>
              <div className="flex">
                  <img className="mt-auto" src={ReferralRulesExplain} alt="Referral Icon 4" />
              </div>
            </div>
          </div>
          <div class="flex-auto w-64" style={{
            borderRadius: "1.5rem",
            boxShadow: "0px 8px 40px 0px rgba(225, 230, 236, 0.40)",
            background: "#FFF"
          }}>
            <div className="relative">
              <div className="flex flex-col">
               
                <div className="ml-6 mt-4 pt-4 mr-6 pr-6 gap-4 pb-4">
                <h3 className="mb-2">Explanation of reward system</h3>
                  {/* <p className="text-base font-semibold text-white leading-6">New users must sign up using the referral code in order to be <span className="referral-program-sub-text-color">counted as a referral</span></p> */}
                  <p className="text-sm mb-2 font-light leading-5">
                  The rewards for this referral program are based on a percentage of the fees generated
by the new user. The referrer will receive 90% of the fees generated by their referral.</p>
<p className="text-sm font-light mb-2 leading-5">
For example, if a new user generates $100 in fees through trading, depositing into indexes,
or staking, the referrer will receive $90 as a reward. </p>
<p className="text-sm font-light mb-2 leading-5">
It's important to note that the actual amount of the reward may vary depending on the activities
of the new user and may be subject to change. The referrer should periodically check the terms
and conditions of the referral program for any updates. </p>

<p className="text-sm font-light mb-2 leading-5">
The referral rewards will be awarded to the referrer for the life of the app or until the referral program is terminated by the platform. This means that as long as the new user continues
to generate fees through trading, depositing into indexes, or staking, the referrer will continue 
to receive a percentage of the fees. </p>

<p className="text-sm font-light mb-2 leading-5">
It's important to note that the platform reserves the right to terminate the referral program at any time, without prior notice. In such an event, the referrer will no longer be eligible for rewards.
                    </p>
                </div>

              </div>
            </div>
          </div>
        

        </div>

      </div>
    </div>
  )
}

