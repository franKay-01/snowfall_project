import { useState } from "react"

export default function MediaSection({status}) {
  const [isHovered, setIsHovered] = useState(false)
  const [visibleDivId, setVisibleDivId] = useState(null);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const handleMouseEnter = (id) => {
    setVisibleDivId(id);
  };

  const handleMouseLeave = () => {
    setVisibleDivId(null);
  };

  return (
    <div className={`${status ? 'bg-slate-100' : 'bg-white'} flex flex-col pl-4 md:pt-8 md:justify-center md:items-center ${status ? 'lg:pb-32':'lg:pb-8'} md:pb-12 md:flex-col lg:flex-col lg:space-y-14 md:space-y-14 mt-24`}>
      <div className={`${status ? 'flex justify-between w-auto' : 'flex justify-between w-auto lg:w-9/12 md:w-auto'} faq-position grid-cols-1 lg:grid-cols-2 md:ml-0 lg:ml-0`}>
        <h1 className="snowball-heading">Snowball in the Media</h1>
        <div className={`hidden ${status ? 'lg:grid' : 'lg:hidden'}`}>
          <button className="snowball-button">
            <h1 className="snowball-button-text">
              show all
            </h1>
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row md:flex-col md:space-y-8 lg:space-y-0 lg:justify-normal md:justify-center md:items-center lg:space-x-8">
        <div className="snowball-media-lg snowball-media-1 relative">
          <div class="grid content-between overlay-card p-4 lg:p-12 md:p-12" onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
            <div className="snowball-media-top-button">
              <h1 className="snowball-media-top-button-text">podcast</h1>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="snowball-media-bottom-text">
                Snowball Podcast #2 Available now!
              </h1>
              <h1 className="snowball-media-bottom-date">March 9, 2023</h1>
              <div className={`flex ${visibleDivId === 1 ? 'lg:flex' : 'hidden'} md:hidden snowball-media-article-button space-x-4`}>
                <h1 className="snowball-media-article-button-text">Read article</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4.2766 3.32234C4.2766 3.78285 4.64665 4.14468 5.09894 4.14468H10.6958L2.74053 12.1C2.41982 12.4207 2.41982 12.9388 2.74053 13.2595C3.06125 13.5802 3.57932 13.5802 3.90003 13.2595L11.8553 5.30418V10.9011C11.8553 11.3533 12.2254 11.7234 12.6777 11.7234C13.1299 11.7234 13.5 11.3533 13.5 10.9011V3.32234C13.5 2.87005 13.1299 2.5 12.6777 2.5H5.09894C4.64665 2.5 4.2766 2.87005 4.2766 3.32234Z" fill="#F5F8FA"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="snowball-media-n-lg snowball-media-2 relative">
            <div class="grid content-between overlay-card p-8" onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={()=>handleMouseLeave(2)}>
              <div className="snowball-media-top-button">
                <h1 className="snowball-media-top-button-text">news</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="snowball-media-bottom-text-n">
                Snowball: Automating Cryptocurrency Investing
                </h1>
                <h1 className="snowball-media-bottom-date">March 8, 2023</h1>
                <div className={`flex ${visibleDivId === 2 ? 'lg:flex' : 'hidden'} md:hidden snowball-media-article-button space-x-4`}>
                  <h1 className="snowball-media-article-button-text">Read article</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.2766 3.32234C4.2766 3.78285 4.64665 4.14468 5.09894 4.14468H10.6958L2.74053 12.1C2.41982 12.4207 2.41982 12.9388 2.74053 13.2595C3.06125 13.5802 3.57932 13.5802 3.90003 13.2595L11.8553 5.30418V10.9011C11.8553 11.3533 12.2254 11.7234 12.6777 11.7234C13.1299 11.7234 13.5 11.3533 13.5 10.9011V3.32234C13.5 2.87005 13.1299 2.5 12.6777 2.5H5.09894C4.64665 2.5 4.2766 2.87005 4.2766 3.32234Z" fill="#F5F8FA"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snowball-media-n-lg snowball-media-3 relative">
            <div class="grid content-between overlay-card p-8" onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={()=>handleMouseLeave(3)}>
              <div className="snowball-media-top-button">
                <h1 className="snowball-media-top-button-text">news</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="snowball-media-bottom-text-n">
                Republic: Invest in Snowball Money
                </h1>
                <h1 className="snowball-media-bottom-date">March 7, 2023</h1>
                <div className={`flex ${visibleDivId === 3 ? 'lg:flex' : 'hidden'} md:hidden snowball-media-article-button space-x-4`}>
                  <h1 className="snowball-media-article-button-text">Read article</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.2766 3.32234C4.2766 3.78285 4.64665 4.14468 5.09894 4.14468H10.6958L2.74053 12.1C2.41982 12.4207 2.41982 12.9388 2.74053 13.2595C3.06125 13.5802 3.57932 13.5802 3.90003 13.2595L11.8553 5.30418V10.9011C11.8553 11.3533 12.2254 11.7234 12.6777 11.7234C13.1299 11.7234 13.5 11.3533 13.5 10.9011V3.32234C13.5 2.87005 13.1299 2.5 12.6777 2.5H5.09894C4.64665 2.5 4.2766 2.87005 4.2766 3.32234Z" fill="#F5F8FA"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

