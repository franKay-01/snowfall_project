import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ArticleMainImg from "../assets/article_main.png"
import BlogPostImg from "../assets/blog_post.png"
import DownloadSection from "../components/download_section";

export default function Blog(){
  return (
    <>
      <Navbar/>
      <div className="pl-4 mt-28 pb-4 lg:pb-4 md:pb-4 lg:pl-20 md:pl-12 pt-4">
        <button className="article-return-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.467713 14.8592C-0.155904 15.4885 -0.155904 16.5089 0.467713 17.1382L8.11939 24.86C8.74301 25.4894 9.75409 25.4894 10.3777 24.86C11.0013 24.2307 11.0013 23.2103 10.3777 22.581L5.45251 17.6107L30.4031 17.6102C31.2851 17.6102 32 16.8887 32 15.9987C32 15.1087 31.2851 14.3872 30.4031 14.3872L5.45164 14.3876L10.3777 9.41638C11.0013 8.78705 11.0013 7.7667 10.3777 7.13736C9.75409 6.50803 8.74301 6.50803 8.11939 7.13736L0.467713 14.8592Z" fill="#414A5B"/>
          </svg>
        </button>
      </div>
      <div className='flex flex-col justify-center items-start w-auto lg:w-9/12 md:w-auto pl-4 lg:pl-56 md:pl-12'>
        <div className="flex flex-row space-x-2">
          <div className="blog-tag">
            <h1 className="blog-tag-text">Web3</h1>
          </div>
          <div className="blog-tag">
            <h1 className="blog-tag-text">Web3.5</h1>
          </div>
        </div>
        <h1 className="article-main-header">
        The Synergy of Web3 and the AI-Internet: A Powerful Combination
        </h1>
      </div>
      <div className="p-8">
        <img src={ArticleMainImg} alt=""/>
      </div>
      <div className='flex flex-col justify-center article-section-p '>
        <h1 className="article-text">
          It is a misconception to view Web3 and AI as separate entities. In reality, they are mutually beneficial, enhancing each other's capabilities. Building both Web3 and AI technologies is the logical step forward.  The oversimplification and misunderstanding of "Web3," "blockchain," and "crypto" can be attributed to the failure to recognize their shared fundamental feature. At their core, these technologies employ innovative systems of distributed record-keeping and incentives to address the fundamental issue of human trust concerning information. They enable communities of untrusting individuals to collectively maintain open data records, allowing for the distribution and sharing of valuable or sensitive information without the need for intermediaries.  Web3, crypto, and blockchain tackle the challenge of ensuring the security of valuable information in a decentralized environment—an issue that has persisted since the inception of the internet. In the age of AI, where uncertainty surrounding information is skyrocketing, this challenge becomes even more urgent.
        </h1>
        <h1 className="article-sub-header">Misconceptions and Origins</h1>
        <h1 className="article-text">
          Why do many people fail to grasp the all-encompassing significance of this new data architecture, whether they are entrepreneurs jumping from one trend to another or policymakers who see crypto solely as a tool for money-laundering? One can trace this misunderstanding back to the origins of cryptocurrency, particularly with the creation of Bitcoin. <br></br> <br></br> In those early days, the focus should have been on information sharing, data protection, and privacy—the core concerns of the cypherpunks whose mailing list Satoshi Nakamoto used to introduce the Bitcoin white paper in October 2008. However, this is not a critique of Satoshi. The founder merely presented one of the information solutions that the cypherpunks had contemplated for years: a cryptography-based digital currency. Satoshi recognized that money, despite its vital importance to society, is essentially a form of information. Money is not a tangible entity but rather a standardized symbol representing value. It requires a complex, institutionalized system to instill confidence and prevent abuse. However, money is not the only type of valuable information necessitating institutional coordination.
        </h1>
        <span className="flex flex-row mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7121 6.66099C43.7291 6.80397 43 7.64679 43 8.64016V39.126C43 39.7659 43.3062 40.3671 43.8237 40.7435L59.8237 52.3798C61.1456 53.3412 63 52.3969 63 50.7624V6.31289C63 5.09374 61.9186 4.15823 60.7121 4.33372L44.7121 6.66099ZM18.7121 10.4457C17.7291 10.5886 17 11.4315 17 12.4248V46.2217C17 46.8616 17.3062 47.4628 17.8237 47.8392L33.8237 59.4755C35.1456 60.4369 37 59.4926 37 57.8581V10.0976C37 8.87841 35.9186 7.9429 34.7121 8.11838L18.7121 10.4457Z" fill="#E6EBF4"/>
          </svg>
          <span className="article-gradient-text p-0.5 text-left font-normal inline-block from-black via-sky-700 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
            Bitcoin, in my view, served as a prototype for a much larger idea.
          </span>
        </span>
        <h1 className="article-sub-header">Setbacks and Dangers</h1>
        <h1 className="article-text">
          Why do many people fail to grasp the all-encompassing significance of this new data architecture, whether they are entrepreneurs jumping from one trend to another or policymakers who see crypto solely as a tool for money-laundering? One can trace this misunderstanding back to the origins of cryptocurrency, particularly with the creation of Bitcoin. <br></br> <br></br> In those early days, the focus should have been on information sharing, data protection, and privacy—the core concerns of the cypherpunks whose mailing list Satoshi Nakamoto used to introduce the Bitcoin white paper in October 2008. However, this is not a critique of Satoshi. The founder merely presented one of the information solutions that the cypherpunks had contemplated for years: a cryptography-based digital currency. Satoshi recognized that money, despite its vital importance to society, is essentially a form of information. Money is not a tangible entity but rather a standardized symbol representing value. It requires a complex, institutionalized system to instill confidence and prevent abuse. However, money is not the only type of valuable information necessitating institutional coordination.
        </h1>
      </div>
      <div className='flex flex-col justify-center items-start w-auto lg:w-10/12 md:w-auto pl-4 lg:pl-56 md:pl-12 mb-12'>
        <h1 className="article-sub-header">Featured Posts</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-4 lg:p-0 md:p-4 gap-4 lg:gap-4 md:gap-4">
          <div className="blog-post-card flex flex-col">
            <img src={BlogPostImg}/>
            <h1 className="blog-post-card-header pr-4 pl-4 pt-4">
              The Synergy of Web3 and the AI-Internet: A Powerful Combination
            </h1>
            <h1 className="blog-post-card-date p-4">
              March 8, 2023
            </h1>
            <svg className="pl-4 pr-8" xmlns="http://www.w3.org/2000/svg" width="328" height="2" viewBox="0 0 328 2" fill="none">
              <path d="M0 1H328" stroke="#E6EBF4"/>
            </svg>
            <div className="flex flex-row pl-4 pt-2">
              <div className="blog-tag">
                <h1 className="blog-tag-text">Web3</h1>
              </div>
            </div>
          </div>
          <div className="blog-post-card flex flex-col">
            <img src={BlogPostImg}/>
            <h1 className="blog-post-card-header pr-4 pl-4 pt-4">
              The Synergy of Web3 and the AI-Internet: A Powerful Combination
            </h1>
            <h1 className="blog-post-card-date p-4">
              March 8, 2023
            </h1>
            <svg className="pl-4 pr-8" xmlns="http://www.w3.org/2000/svg" width="328" height="2" viewBox="0 0 328 2" fill="none">
              <path d="M0 1H328" stroke="#E6EBF4"/>
            </svg>
            <div className="flex flex-row pl-4 pt-2">
              <div className="blog-tag">
                <h1 className="blog-tag-text">Web3</h1>
              </div>
            </div>
          </div>
          <div className="blog-post-card flex flex-col">
            <img src={BlogPostImg}/>
            <h1 className="blog-post-card-header pr-4 pl-4 pt-4">
              The Synergy of Web3 and the AI-Internet: A Powerful Combination
            </h1>
            <h1 className="blog-post-card-date p-4">
              March 8, 2023
            </h1>
            <svg className="pl-4 pr-8" xmlns="http://www.w3.org/2000/svg" width="328" height="2" viewBox="0 0 328 2" fill="none">
              <path d="M0 1H328" stroke="#E6EBF4"/>
            </svg>
            <div className="flex flex-row pl-4 pt-2">
              <div className="blog-tag">
                <h1 className="blog-tag-text">Web3</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadSection/>
      <Footer/>
    </>
  )
}