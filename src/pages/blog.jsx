import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BlogPostImg from "../assets/blog_post.png"

import MediaSection from "../components/media_section";
import DownloadSection from "../components/download_section";
import { useEffect } from "react";

export default function Blog(){
  const data = [
    {name: "The Synergy of Web3 and the AI-Internet: A Powerful Combination", date:"20-12-2023", image: BlogPostImg, tags: ['web3', 'ruby']}, 
    {name: "The Synergy of Web3 and the AI-Internet: A Powerful Combination", date:"20-12-2023", image: BlogPostImg, tags: ['web3', 'rails8']},
    {name: "The Synergy of Web3 and the AI-Internet: A Powerful Combination", date:"20-12-2023", image: BlogPostImg, tags: ['web3', 'blockchain']}, 
    {name: "The Synergy of Web3 and the AI-Internet: A Powerful Combination", date:"20-12-2023", image: BlogPostImg,tags: ['web3', 'sql']}, 
    {name: "The Synergy of Web3 and the AI-Internet: A Powerful Combination", date:"20-12-2023", image:BlogPostImg,tags: ['web3', 'mongodb']}, 
    {name: "The Synergy of Web3 and the AI-Internet: A Powerful Combination", date:"20-12-2023", image:BlogPostImg,tags: ['web3', 'psql']},
    {name: "The Synergy of Web3 and the AI-Internet: A Powerful Combination", date:"20-12-2023", image:BlogPostImg,tags: ['web3', 'java']}
  ]
  
  const itemsPerPage = 3;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
  };

  useEffect(()=>{
    console.log("LENGTH " + data.length)
  }, [])

  return (
    <>
      <Navbar/>
      <div className="center-container-alt">
        <div className="blog-section flex flex-col mt-24 sh-p-12-alt-n relative md:pt-28 md:pb-28 md:pr-20 md:pl-20 lg:pt-40 lg:pb-40 lg:pr-96 lg:pl-96">
          <h1 className="career-banner-header airdrop-banner-header">
            Blog
          </h1>
        </div>
      </div>
      <MediaSection/>
      <div className="flex flex-col justify-center items-center">
        <div className="post-item-bg flex justify-center items-center w-auto lg:w-11/12 md:w-full flex-col mt-24 relative md:pt-8 md:pb-8 md:pr-20 md:pl-20 lg:pt-8 lg:pb-12 lg:pr-44 lg:pl-44">
          <div className="flex flex-col space-y-4 lg:space-y-12 md:space-y-12 p-4">
            <div className="flex flex-col p-4 lg:flex-row md:flex-row justify-between items-start	lg:items-center md:items-center">
              <h1 className="blog-header">
                Our Posts
              </h1>
              <div className="space-x-4 blog-text-box">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 blog-search-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" className="blog-input-box" placeholder="Search by articles"/>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-4 gap-4 lg:gap-4 md:gap-4">
               {data.slice(0, visibleItems).map((item, index) => (
                  <a href="/article" className="blog-post-card flex flex-col">
                    <img src={item.image}/>
                    <h1 className="blog-post-card-header pr-4 pl-4 pt-4">
                      {item.name}
                    </h1>
                    <h1 className="blog-post-card-date p-4">
                      {item.date}
                    </h1>
                    <svg className="pl-4 pr-8" xmlns="http://www.w3.org/2000/svg" width="328" height="2" viewBox="0 0 328 2" fill="none">
                      <path d="M0 1H328" stroke="#E6EBF4"/>
                    </svg>
                    <div className="flex flex-row pl-4 space-x-2 pt-2">
                      {item.tags.map((tag, index) => (
                        <div key={index} className="blog-tag">
                          <h1 className="blog-tag-text">{tag}</h1>
                        </div>
                      ))} 
                    </div>
                  </a>
               ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            {visibleItems < data.length ? 
              <button onClick={handleLoadMore} className="blog-load-button">
                <h1 className="blog-load-text">load more</h1>
              </button>
              :null
            }
          </div>
        </div>
       
      </div>
     
      <DownloadSection/>
      <Footer/>
    </>
  )
}