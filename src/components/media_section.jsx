export default function MediaSection({status}) {
  return (
    <div className={`${status ? 'bg-slate-100' : 'bg-white'} flex flex-col pl-4 md:pt-8 md:justify-center md:items-center ${status ? 'lg:pb-32':'lg:pb-8'} md:pb-12 md:flex-col lg:flex-col lg:space-y-14 md:space-y-14 mt-24`}>
      <div className={`${status ? 'grid' : 'flex justify-between w-auto lg:w-9/12 md:w-auto'} grid-cols-1 lg:grid-cols-2 md:ml-0 lg:ml-8`}>
        <h1 className="snowball-heading">Snowball in the Media</h1>
        <div className={`hidden ${status ? 'lg:grid' : 'lg:hidden'} lg:justify-center`}>
          <button className="snowball-button">
            <h1 className="snowball-button-text">
              show all
            </h1>
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row md:flex-col md:space-y-8 lg:space-y-0 lg:justify-normal md:justify-center md:items-center lg:space-x-8">
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
  )
}

