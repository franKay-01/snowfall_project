import { useState } from "react";
import DownloadSection from "../components/download_section";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import ApplePlayImg from "../assets/apple_store_img.png";
import GooglePlayImg from "../assets/google_play_img.png";

import iPhoneScreenReferral from "../assets/images/Referral/Rules/Step 1 – Active account.png";
import RefferalDone from "../assets/images/Referral/Rules/Step 2 – Unique referral code.png"
import RefferalGroup from "../assets/images/Referral/Rules/Step 3 – Activities.png";
import RefferalGroupHand from "../assets/images/Referral/Rules/Step 4 – Counted as a referral/Step 4 – Counted as a referral.png";
import ReferralIcon1 from "../assets/images/Referral/Rules/Step 4 – Counted as a referral/Trades.png";
import ReferralIcon2 from "../assets/images/Referral/Rules/Step 4 – Counted as a referral/Deposits.png";
import ReferralIconStaking from "../assets/images/Referral/Rules/Step 4 – Counted as a referral/Stakes.png";
import ReferralIcon4 from "../assets/referral_icon_4.png";
import ReferralMorflax from "../assets/morflax-studio-175.png";
import ReferralRulesExplain from "../assets/referral_rules_explain.png";
import ArrowRight from "../assets/Right.png";

export default function Referral() {
  const [explain, setRuleExplain] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const items = [
    {
      title: "How do I participate in the referral program?",
      content: "Content for Item 1",
    },
    {
      title: "What are the requirements to receive a reward?",
      content: "Content for Item 2",
    },
    {
      title: "How much of a reward can I receive?",
      content: "Content for Item 2",
    },
    {
      title: "How long will I receive rewards for my referrals?",
      content: "Content for Item 2",
    },
    {
      title: "Can I refer multiple users?",
      content: "Content for Item 2",
    },
    {
      title: "Can I refer multiple users?",
      content: "Content for Item 2",
    },
    {
      title: "Can I refer multiple users?",
      content: "Content for Item 2",
    },
  ];

  return (
    <>
      <Navbar />
      <div class="mt-4 mx-auto px-2 sm:px-6 lg:px-8 h-18">
        <div className="center-container-alt">
          <div className="share-earn-banner share-earn-banner-alt flex flex-col justify-center items-center mt-24 sh-p-12-alt-n relative md:pt-8 md:pb-8 md:pr-20 md:pl-20 lg:pt-24 lg:pb-24 lg:pr-96 lg:pl-96">
            <h4 className="items-center justify-center referral-banner-header ">
              Share and Earn
            </h4>
            <p className="text-md md:text-xl lg:text-2xl mt-2 whitespace-pre-line referral-banner-sub">
              The rewards for this referral program are based on a
              percentage of the fees generated by the new user. The referrer
              will receive 90% of the fees generated by their referral
            </p>
            <div className="flex mt-8 items-center justify-center">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <img
                  src={ApplePlayImg}
                  alt="Download on Apple Store"
                  className="h-12 lg:h-16 md:h-16"
                />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src={GooglePlayImg}
                  alt="Download on Google Play Store"
                  className="h-12 lg:h-16 md:h-16"
                />
              </a>
            </div>
          </div>
        </div>
    
        <div className="container flex flex-col w-full lg:w-9/12	md:w-full lg:grid lg:justify-center lg:grid-row-4 md:justify-center md:items-center space-y-12 lg:space-y-8 md:space-y-4 ">
          <h3 className="text-md text-center justify-center md:text-2xl lg:text-4xl mt-8">
            Rules for a referral program
          </h3>
          <div className="flex flex-col lg:grid md:grid lg:grid-cols-4 md:grid-cols-3 space-x-0 lg:space-x-4 md:space-x-4 space-y-4 lg:space-y-0 md:space-y-0">
            <div className="flex justify-center items-center flex-col referral-rules-section-1">
              <div className="relative p-4">
                <p className="referral-rules-section-1-text">
                  Users must have an{" "}
                  <span className="referral-program-sub-text-color">
                    active account
                  </span>{" "}
                  with the platform
                </p>
              </div>

              <div className="relative mt-4 flex-grow-0">
                <img className="mx-auto mt-auto" src={iPhoneScreenReferral} alt="Iphone Screen" />
              </div>
            </div>
            <div className="flex flex-col pt-4 referral-rules-section-1">
              <div className="relative">
                <img className="mx-auto mt-auto" src={RefferalDone} alt="Referral Done"/>
              </div>
              <div className="relative mb-2 pl-4">
                <p className="referral-rules-section-1-text">
                  Each user will be given a{" "}
                  <span className="referral-program-sub-text-color">
                    unique referral code
                  </span>
                </p>
              </div>
              <div className="relative mx-auto mt-auto flex-grow p-4">
                <p className="referral-rules-section-1-text-small">
                  that they can share with their friends, family, and
                  colleagues.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:col-span-2 md:col-span-1 referral-rules-section-1">
              <div className="relative pb-8 pt-8 mt-8">
                <img className="mt-auto" src={RefferalGroup} alt="Referral Done"/>
              </div>
              <div className="relative pl-6">
                <p className="referral-rules-section-1-text lg:mt-0 md:mt-4">
                  The reward will be based on the{" "}
                  <span className="referral-program-sub-text-color">
                    activities
                  </span>
                </p>
              </div>
              <div className="relative pl-6 mb-4">
                <p className="referral-rules-section-1-text-small">
                  of the new user and may change over time.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 space-x-0 lg:space-x-4 md:space-x-4">
            <div className="flex-auto col-span-2 referral-rules-section-2">
              <div className="relative">
                <div className="flex flex-row relative">
                  <div className="ml-6 mt-4 pt-4 mr-6 pr-6 gap-4 pb-4">
                    <p className="referral-program-header">
                      New users must sign up using the referral code in order
                      to be{" "}
                      <span className="referral-program-sub-text-color">
                        counted as a referral
                      </span>
                    </p>
                    <p className="text-sm w-80 font-light text-white leading-5">
                      The referrer will only receive a reward if the new user
                      completes one of the following actions:
                    </p>
                  </div>
                  <div className="absolute right-0">
                    <img src={RefferalGroupHand} className="referral-program-image" alt="Referral Group Hand" />
                  </div>
                </div>
                <div className="flex flex-row space-x-4 lg:space-x-12 md:space-x-12 mb-4 pb-4 pl-2 lg:ml-2 md:ml-2 ml-0">
                  <div className="flex flex-col">
                    <div>
                      <img src={ReferralIcon1} alt="Referral Icon 1" />
                    </div>
                    <div>
                      <p className="text-sm font-light text-center lg:text-left md:text-left text-white leading-5 lg:w-28 md:w-28 w-20">
                        Trades on the platform
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <img src={ReferralIcon2} alt="Referral Icon 2" />
                    </div>
                    <div>
                      <p className="text-sm font-light text-center lg:text-left md:text-left text-white leading-5 lg:w-28 md:w-28 w-20">
                        Deposits funds into an index
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <img
                        src={ReferralIconStaking}
                        alt="Referral Icon Staking"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-light text-center lg:text-left md:text-left text-white leading-5 lg:w-28 md:w-28 w-20">
                        Stakes their assets
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto mt-12 lg:mt-2 md:mt-2">
              <div className="flex flex-col referral-rules-section-1">
                <div className="grid grid-cols-2">
                  <div className="ml-4 mt-4 pt-4 pl-4">
                    <img className="mt-auto mr-2" src={ReferralIcon4} alt="Referral Icon 4" />
                  </div>
                  <div>
                    <img className="mt-auto lg:h-56 md:h-32 absolute referral-program-image-card" src={ReferralMorflax} alt="Referral Icon 4"/>
                  </div>
                </div>

                <div className="flex flex-col m-4">
                  <div className="relative mb-2 mt-4 pl-6">
                    <p className="referral-rules-section-1-text referral-rules-section-1-text-n">
                      The platform reserves the right to modify these rules at
                      any time{" "}
                      <span className="referral-program-sub-text-color">
                        without prior notice
                      </span>
                    </p>
                  </div>
                  <div className="relative pl-6 mb-4">
                    <p className="referral-rules-section-1-text-small">
                      By participating in the referral program, users agree to
                      these rules and any future changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 gap-4 mt-8">
            <div className="referral-rules-section-3">
              <p className="referral-rules-section-1-text-small">
                The referral program is subject to change or termination at
                any time at the discretion of the platform
              </p>
            </div>
            <div className="referral-rules-section-3">
              <p className="referral-rules-section-1-text-small">
                The platform reserves the right to void rewards or take other
                appropriate action if it detects fraudulent or abusive
                behavior
              </p>
            </div>

            <div className="referral-rules-section-3">
              <p className="referral-rules-section-1-text-small">
                Users are responsible for complying with all applicable laws
                and regulations related to the referral program
              </p>
            </div>
          </div>
          {!explain ? (
            <div className="flex gap-4 mt-8">
              <div className="flex justify-center items-center referral-rules-explain-section" onClick={() => setRuleExplain(true)}>
                <p className="referral-rules-explain-section-text">
                  Explanation of reward system{" "}
                </p>
                <img className="referral-rules-explain-section-arrow-img" src={ArrowRight} alt="Icon Arrow Right"/>
              </div>
            </div>
            ) : (
            <div className="flex flex-col lg:flex lg:flex-row md:flex md:flex-row gap-4 mt-8">
              <div className="flex-auto lg:flex-auto lg:flex md:hidden">
                <div className="flex flex-col referral-rules-section-1">
                  <div className="flex">
                    <img className="mt-auto explanation-image" src={ReferralRulesExplain} alt="Referral Icon 4"/>
                  </div>
                </div>
              </div>
              <div className="flex-auto referral-rules-explain-section-details">
                <div className="relative">
                  <div className="flex flex-col">
                    <div className="ml-6 mt-4 p-4 lg:p-8 md:p-8">
                      <h3 className="explanation-text-header mb-2">Explanation of reward system</h3>
                      <p className="explanation-text">
                        The rewards for this referral program are based on a
                        percentage of the fees generated by the new user. The
                        referrer will receive 90% of the fees generated by
                        their referral.
                      </p>
                      <p className="explanation-text">
                        For example, if a new user generates $100 in fees
                        through trading, depositing into indexes, or staking,
                        the referrer will receive $90 as a reward.{" "}
                      </p>
                      <p className="explanation-text">
                        It's important to note that the actual amount of the
                        reward may vary depending on the activities of the new
                        user and may be subject to change. The referrer should
                        periodically check the terms and conditions of the
                        referral program for any updates.{" "}
                      </p>

                      <p className="explanation-text">
                        The referral rewards will be awarded to the referrer
                        for the life of the app or until the referral program
                        is terminated by the platform. This means that as long
                        as the new user continues to generate fees through
                        trading, depositing into indexes, or staking, the
                        referrer will continue to receive a percentage of the
                        fees.{" "}
                      </p>

                      <p className="explanation-text">
                        It's important to note that the platform reserves the
                        right to terminate the referral program at any time,
                        without prior notice. In such an event, the referrer
                        will no longer be eligible for rewards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        </div>
        <div className="faq">
          <div className="mx-auto pl-0 lg:pl-32 md:pl-32 pr-0 lg:pr-32 md:pr-32 pt-16 pb-4 lg:pb-12 md:pb-12 faq-position">
            <h3 className="text-md md:text-2xl lg:text-4xl text-center mb-4">
              FAQ
            </h3>
            {items.map((item, index) => (
              <div key={index} className="faq-items shadow-md rounded-lg mb-4">
                <div className="flex items-center justify-between p-3 cursor-pointer" onClick={() => handleItemClick(index)}>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      index === activeItem ? "transform rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M6 8l4 4 4-4" />
                  </svg>
                </div>
                {index === activeItem && (
                  <div className="p-3">{item.content}</div>
                )}
              </div>
            ))}

            <div className="hidden lg:flex md:flex justify-between items-center faqs-other-questions">
              <p className="faqs-other-questtions-txt">Have other questions?</p>
              <button className="explanation-ask-q-button">
                <h1 className="explanation-ask-q-text">Ask a Question</h1>
              </button>
            </div>
          </div>
        </div>
        <DownloadSection />
      </div>
      <Footer />
    </>
  );
}
