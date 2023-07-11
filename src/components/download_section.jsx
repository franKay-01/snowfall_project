import ApplePlayImg from "../assets/apple_store_img.png"
import GooglePlayImg from "../assets/google_play_img.png"
import DownloadPhoneImg from "../assets/download_phone.png"

export default function DownloadSection() {
  return (
    <div className="center-container-alt">
      <div className="share-section bg-c-black grid grid-cols-2 mt-24 sh-p-12 relative mb-8">
        <div className="flex flex-col justify-center space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="203" height="57" viewBox="0 0 203 57" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4936 14.4551C11.819 13.9958 12.1271 13.558 12.4297 13.1281C12.8024 12.5986 13.1666 12.0811 13.5438 11.5507C12.0062 9.9063 11.2587 8.00564 11.6645 5.72058C11.9635 3.94806 12.9885 2.62401 14.3339 1.4708C16.1919 2.98706 17.1743 4.86636 17.1102 7.32226C17.0912 7.7027 17.3941 8.10007 17.6869 8.48421L17.6871 8.48452C17.7229 8.53155 17.7586 8.57838 17.7936 8.62496C18.2207 5.65652 19.5234 3.30739 21.9793 1.66301C23.7518 0.467087 25.9941 -0.0240933 28.1297 0.274886C28.0656 2.83757 27.126 5.0372 25.2467 6.78837C23.346 8.53953 21.061 9.24427 18.4983 9.15885C18.4876 9.19088 18.4823 9.22826 18.4769 9.26563C18.4716 9.303 18.4663 9.34037 18.4556 9.37241C18.5372 9.39467 18.6189 9.42467 18.6996 9.45435C18.8512 9.51006 18.9996 9.56461 19.139 9.56461C21.6376 9.35105 23.5596 10.3975 25.1186 12.2768C23.0044 15.053 19.0963 16.2916 15.4017 13.4086C15.1302 13.7819 14.8647 14.1552 14.5767 14.5603L14.5766 14.5603L14.5766 14.5604C14.3209 14.9199 14.0473 15.3046 13.736 15.7364C16.32 14.8181 18.4983 15.2879 20.463 16.7401C18.9254 20.3279 15.295 22.0363 11.3655 20.3279C11.0665 21.1394 10.7675 21.9295 10.4686 22.7197C12.6682 21.4811 14.8251 21.3529 17.0675 22.2499C16.7044 25.8163 13.6079 28.7847 9.2513 28.08C9.21498 28.4432 9.1748 28.8102 9.13241 29.1975L9.1324 29.1975C9.07508 29.7212 9.0137 30.2819 8.95232 30.9203C10.7462 28.9129 12.8177 28.1654 15.2522 28.4644C15.8929 32.2443 13.8428 34.8924 9.20858 36.1951L9.27206 36.5983L9.27207 36.5984C9.38059 37.2886 9.49646 38.0256 9.65705 38.9714C10.853 36.5368 12.6896 35.2982 15.1028 34.9138C16.7899 38.3094 15.3377 41.7263 11.2374 43.9473L11.2376 43.9477C11.6006 44.7377 11.9636 45.5278 12.4333 46.5313C12.9458 43.8405 14.398 42.1961 16.6404 41.1924C18.6264 43.5842 19.1817 47.8553 15.1028 50.9733C16.8823 52.7732 18.6226 54.5536 20.3988 56.3707L20.6339 56.6112C20.3528 56.6112 20.0703 56.6125 19.7866 56.6138L19.785 56.6138H19.785C18.9268 56.6178 18.0565 56.6219 17.1743 56.5898C16.9607 56.5898 16.7044 56.3763 16.5336 56.1841C15.7341 55.3285 14.9438 54.4636 14.1506 53.5957C13.7362 53.1421 13.3209 52.6877 12.9031 52.2333C8.41842 53.899 5.23643 52.7458 3.48526 48.8163C5.36456 47.3001 7.39335 46.9584 10.1482 47.7486C9.91122 47.2127 9.67919 46.7017 9.44972 46.1964L9.44965 46.1963C9.2036 45.6544 8.9605 45.1191 8.7174 44.5666C6.53912 45.0577 4.53169 44.7588 2.78052 43.3066C1.39241 42.1534 0.730379 40.6371 0.4314 38.9073C2.1185 38.1171 4.51033 37.8182 7.17979 39.5693C7.10291 39.108 7.02603 38.6536 6.94914 38.1991C6.83382 37.5174 6.71851 36.8358 6.60319 36.1311C4.44627 36.0457 2.60968 35.2768 1.28563 33.5257C0.239199 32.1376 -0.102492 30.7281 0.0256421 28.4644C2.5029 28.1654 4.61711 28.8915 6.36828 30.963C6.49641 29.703 6.60319 28.5925 6.70997 27.482C1.96901 25.9444 0.986648 21.5238 2.35341 18.3631C4.53169 18.4913 6.0693 19.5804 7.86318 22.2926C7.97631 21.9889 8.08778 21.6869 8.19898 21.3856L8.19911 21.3853C8.4867 20.6061 8.77247 19.8319 9.08045 19.0465C7.20115 17.9147 6.02659 16.2703 5.74896 14.0707C5.53541 12.2341 6.15472 10.611 7.22251 9.11614C9.55027 10.1199 11.0238 11.807 11.4936 14.4551ZM187.898 34.7805C190.347 35.1851 192.178 36.3775 193.392 38.5922C193.541 37.7617 193.69 36.9312 193.839 36.0155C191.625 35.76 189.879 34.8656 188.686 33.013C187.792 31.6076 187.579 30.0531 187.728 28.4347C189.751 28.1153 191.816 28.4773 194.031 30.7771C193.979 30.1612 193.926 29.6099 193.874 29.0585L193.874 29.0577C193.841 28.7134 193.808 28.369 193.776 28.0089C191.518 28.3709 189.559 27.8811 187.92 26.3266C186.834 25.3045 186.195 23.9416 185.939 22.2594C188.047 21.3437 189.921 21.3437 192.562 22.8343C192.242 21.9187 191.966 21.1308 191.646 20.279C189.666 21.1734 187.707 21.2585 185.769 20.3003C184.236 19.555 183.277 18.2773 182.575 16.7654C184.193 15.3387 185.854 15.0406 189.133 15.5729C189.109 15.5313 189.085 15.4903 189.062 15.4499L189.062 15.4493L189.062 15.4491C188.942 15.2418 188.832 15.0517 188.707 14.8915C188.51 14.6071 188.305 14.3228 188.097 14.0342L188.096 14.0335L188.095 14.0319C187.945 13.8242 187.794 13.6144 187.643 13.4009C183.661 16.4247 179.87 14.8063 177.933 12.2723C178.763 11.2928 179.657 10.3558 180.914 9.9938C181.57 9.8029 182.253 9.68553 182.944 9.56679C183.486 9.47361 184.033 9.37958 184.576 9.24849C182.021 9.2059 179.721 8.54578 177.826 6.77834C175.952 5.0322 174.994 2.86017 174.93 0.283552C178.997 -0.35528 184.427 2.24264 185.173 8.56707C185.748 8.18377 186.003 7.73659 185.982 6.99129C185.897 4.69149 186.94 2.90276 188.686 1.47604C191.838 3.79713 192.604 8.22636 189.495 11.4844C189.82 11.9502 190.151 12.4161 190.495 12.9016L190.496 12.9019C190.828 13.3706 191.174 13.8575 191.54 14.3804C192.008 11.7612 193.456 10.079 195.735 9.05684C197.949 11.7186 198.12 16.3182 193.946 18.98C194.329 20.0235 194.713 21.0669 195.16 22.2594C196.288 19.8957 198.12 18.5967 200.611 18.2347C202.187 21.8974 200.547 25.7729 196.863 27.0932L196.853 27.0969C196.496 27.2226 196.246 27.3109 196.31 27.7959C196.424 28.6329 196.504 29.4869 196.596 30.4641L196.596 30.4647L196.629 30.8197C198.333 28.818 200.419 28.0727 202.89 28.3283C203.528 31.6289 201.399 35.8026 196.416 36.0155C196.318 36.5849 196.219 37.1655 196.118 37.7631C196.022 38.3278 195.923 38.9078 195.82 39.5078C197.971 37.9533 200.206 37.8469 202.528 38.7199C202.059 42.8085 199.163 44.8527 194.287 44.4907C193.928 45.2934 193.556 46.0962 193.148 46.9758C193.047 47.1929 192.944 47.4147 192.839 47.6423C195.309 46.7479 197.502 47.1738 199.504 48.6431C198.29 51.965 194.351 54.3074 190.092 52.0502C189.841 52.3434 189.584 52.6319 189.326 52.9211L189.325 52.9214C188.815 53.4933 188.301 54.0686 187.834 54.6907C186.812 56.0749 185.556 56.7563 183.831 56.4582C183.504 56.3988 183.178 56.4119 182.844 56.4252C182.699 56.431 182.553 56.4369 182.404 56.4369C183.315 55.5156 184.216 54.5995 185.121 53.6784C186.057 52.7259 186.999 51.7682 187.962 50.7939C186.003 49.431 184.981 47.7275 184.853 45.5341C184.747 43.8732 185.386 42.4252 186.323 41.0836C188.345 41.7224 189.517 43.1066 190.645 46.2581C190.847 45.822 191.039 45.4125 191.23 45.003L191.231 45.0018L191.231 45.0006C191.423 44.591 191.614 44.1815 191.816 43.7454C189.666 42.9362 188.175 41.5308 187.536 39.3375C187.11 37.8043 187.323 36.2924 187.898 34.7805ZM48.8016 21.4202C48.2112 24.2197 45.7165 25.9907 42.6505 25.9907C38.8036 25.9907 36.1185 23.2675 36.1185 18.9065C36.1185 14.6216 38.8417 11.765 42.7457 11.765C45.7546 11.765 48.116 13.6313 48.6302 16.4498H46.6306C46.0974 14.6216 44.5548 13.5932 42.6886 13.5932C39.8701 13.5932 38.08 15.7071 38.08 18.8874C38.08 22.1439 39.9463 24.1625 42.6886 24.1625C44.6691 24.1625 46.2878 23.058 46.8211 21.4202H48.8016ZM52.8896 17.6686C53.4419 16.4879 54.9463 16.0689 56.4698 16.3927V17.9543H55.5748C53.8799 17.9543 52.9277 19.0588 52.9277 20.8489V25.7812H51.1376V16.4879H52.7944L52.8896 17.6686ZM62.7735 27.9903C61.7641 30.6374 59.2123 30.2184 58.0887 29.9137L58.1077 28.4855H59.2885C60.2406 28.4855 60.85 28.4855 61.3071 27.1714L61.6118 26.3145L57.6507 16.4689H59.5741L62.4497 24.0292L65.192 16.4689H67.0774L62.7735 27.9903ZM70.6609 29.9518H68.9279V16.4689H70.5085L70.6228 18.1447C71.2512 16.8688 72.5652 16.2022 74.0506 16.2022C76.7168 16.2022 78.3545 18.2018 78.3736 21.0584C78.4117 23.8959 76.812 26.0288 74.0506 26.0288C72.5652 26.0288 71.2893 25.3813 70.6609 24.2006V29.9518ZM73.6888 17.84C71.8606 17.84 70.7751 19.1921 70.7751 21.1346C70.7751 23.0389 71.8606 24.4101 73.6888 24.4101C75.517 24.4101 76.5835 23.0389 76.5835 21.1346C76.5835 19.2112 75.517 17.84 73.6888 17.84ZM83.2096 17.9543V25.7812H81.4386V17.9543H79.6104V16.4689H81.4386V13.5552H83.2096V16.4689H85.0188V17.9543H83.2096ZM90.9786 26.0098C88.122 26.0098 86.2177 23.915 86.2177 21.1155C86.2177 18.3161 88.122 16.2213 90.9786 16.2213C93.8352 16.2213 95.7395 18.3161 95.7395 21.1155C95.7395 23.915 93.8352 26.0098 90.9786 26.0098ZM90.9786 17.821C89.1885 17.821 88.0268 19.2112 88.0268 21.1155C88.0268 23.0199 89.1885 24.4101 90.9786 24.4101C92.7687 24.4101 93.9304 23.0199 93.9304 21.1155C93.9304 19.2112 92.7687 17.821 90.9786 17.821ZM109.312 26.0098C105.522 26.0098 102.894 23.1913 102.894 18.9445C102.894 14.7549 105.541 11.765 109.579 11.765C112.607 11.765 114.873 13.5171 115.349 16.1642H113.445C112.873 14.4121 111.388 13.5361 109.541 13.5361C106.646 13.5361 104.78 15.7261 104.78 18.9826C104.78 22.3153 106.741 24.2387 109.464 24.2387C111.578 24.2387 113.806 22.9818 113.806 20.5061V19.8396H109.198V18.2018H115.539V25.8003H113.997L113.864 23.934C113.064 25.1909 111.293 26.0098 109.312 26.0098ZM122.285 26.0098C119.429 26.0098 117.525 23.915 117.525 21.1155C117.525 18.3161 119.429 16.2213 122.285 16.2213C125.142 16.2213 127.046 18.3161 127.046 21.1155C127.046 23.915 125.142 26.0098 122.285 26.0098ZM122.285 17.821C120.495 17.821 119.334 19.2112 119.334 21.1155C119.334 23.0199 120.495 24.4101 122.285 24.4101C124.076 24.4101 125.237 23.0199 125.237 21.1155C125.237 19.2112 124.076 17.821 122.285 17.821ZM131.174 11.765V25.7812H129.384V11.765H131.174ZM141.28 24.0483C140.652 25.3813 139.319 26.0098 137.871 26.0098C135.167 26.0098 133.529 23.9911 133.529 21.1536C133.529 18.2971 135.186 16.2022 137.948 16.2022C139.376 16.2022 140.633 16.8497 141.242 17.9924V11.765H142.975V25.7812H141.395L141.28 24.0483ZM135.339 21.0965C135.339 23.0199 136.386 24.3911 138.214 24.3911C140.042 24.3911 141.128 23.0389 141.128 21.0965C141.128 19.1921 140.042 17.821 138.214 17.821C136.386 17.821 135.339 19.1921 135.339 21.0965ZM149.735 26.0098C147.069 26.0098 145.317 24.0864 145.317 21.1346C145.317 18.1257 147.107 16.2022 149.716 16.2022C152.363 16.2022 154.02 18.1257 154.02 21.0965V21.744H147.05C147.164 23.5531 148.212 24.4863 149.754 24.4863C151.049 24.4863 152.097 23.8197 152.363 22.8676H154.039C153.62 24.7719 151.887 26.0098 149.735 26.0098ZM149.678 17.7067C148.193 17.7067 147.126 18.697 147.069 20.5442H152.249C152.211 18.6208 151.125 17.7067 149.678 17.7067ZM158.167 20.8489V25.7622H156.377V16.4689H157.995L158.186 17.8971C158.795 16.8116 159.976 16.2022 161.271 16.2022C163.785 16.2022 164.851 17.7638 164.851 20.0872V25.7812H163.061V20.4871C163.061 18.3161 161.937 17.84 160.814 17.84C159.424 17.84 158.167 18.7541 158.167 20.8489ZM57.8148 33.0126H59.7001V40.7253L65.8894 33.0126H68.1936L63.4518 38.9162L68.1556 46.7812H65.8894L62.1949 40.4968L59.7001 43.62V46.8003H57.8148V33.0126ZM72.042 34.041C72.042 34.6885 71.5468 35.1836 70.8993 35.1836C70.2519 35.1836 69.7758 34.6885 69.7758 34.041C69.7758 33.3935 70.2519 32.8984 70.8993 32.8984C71.5468 32.8984 72.042 33.3935 72.042 34.041ZM71.8134 46.7812H70.0233V37.4689H71.8134V46.7812ZM77.2585 38.9543V46.7812H75.4874V38.9543H73.6592V37.4689H75.4874V34.5552H77.2585V37.4689H79.0676V38.9543H77.2585ZM83.7081 38.9543V46.7812H81.937V38.9543H80.1088V37.4689H81.937V34.5552H83.7081V37.4689H85.5172V38.9543H83.7081ZM91.3614 48.9903C90.3521 51.6374 87.8002 51.2184 86.6766 50.9137L86.6957 49.4855H87.8764C88.8286 49.4855 89.438 49.4855 89.895 48.1714L90.1997 47.3145L86.2386 37.4689H88.1621L91.0377 45.0292L93.78 37.4689H95.6653L91.3614 48.9903ZM111.683 45.0673V46.7622L102.428 46.7812V45.1054C108.16 41.4871 109.703 39.4304 109.703 37.3355C109.703 35.4693 108.56 34.4599 106.846 34.4599C105.094 34.4599 104.009 35.5835 104.199 37.6403H102.428C102.18 34.7266 104.009 32.765 106.884 32.765C109.703 32.765 111.55 34.5933 111.55 37.2975C111.55 40.2112 109.341 42.4583 105.494 45.0673H111.683ZM119.296 47.0479C115.754 47.0479 113.64 44.1913 113.64 39.9255C113.64 35.6407 115.83 32.765 119.296 32.765C122.838 32.746 124.952 35.6407 124.952 39.9255C124.952 44.1913 122.781 47.0479 119.296 47.0479ZM119.296 34.4409C116.878 34.4409 115.487 36.4976 115.487 39.9255C115.487 43.3153 116.878 45.353 119.296 45.372C121.715 45.372 123.105 43.3153 123.105 39.9255C123.105 36.4976 121.715 34.4409 119.296 34.4409ZM129.733 46.7812V36.3072H126.667V34.8408C128.647 34.8408 129.542 34.1743 129.923 33.0126H131.561V46.7812H129.733ZM139.133 47.0098C136.448 47.0098 134.601 45.5434 134.22 43.3915H136.143C136.562 44.8197 137.628 45.372 139.171 45.372C141.704 45.372 142.808 43.3343 142.77 40.3254C142.047 41.7347 140.542 42.4774 138.904 42.4774C136.219 42.4774 134.086 40.592 134.086 37.6974C134.086 34.7646 136.162 32.765 139.095 32.765C142.58 32.765 144.579 35.5264 144.579 39.8874C144.579 44.7626 142.237 47.0098 139.133 47.0098ZM139.095 34.4409C137.343 34.4409 135.915 35.6597 135.915 37.6403C135.915 39.6018 137.305 40.8777 139.095 40.8967C140.885 40.9158 142.275 39.6208 142.275 37.6593C142.275 35.6597 140.847 34.4409 139.095 34.4409Z" fill="#E6EBF4"/>
          </svg>
          <h1 className="share-section-header">Time to Download your trusted Crypto Investment App</h1>
          <h1 className="share-section-sub">Gain access to high-yield stablecoin vaults and generate interest in real-time via DeFi</h1>
          <div className="flex flex-row space-x-4 mt-4">
            <img src={ApplePlayImg} alt=""/>
            <img src={GooglePlayImg} alt=""/>
          </div>
        </div>
        <div className="grid justify-center items-center download-img-position">
          <img className="share-section-image" src={DownloadPhoneImg} alt=""/>
        </div>          
      </div>
    </div>
  )
}

