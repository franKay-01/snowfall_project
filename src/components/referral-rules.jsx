// import ReferralBackgroundImg from "../assets/referral-share-earn.png"
// import ApplePlayImg from "../assets/apple_store_img.png"
// import GooglePlayImg from "../assets/google_play_img.png"

export default function ReferralRule() {
  return (
    <div className="relative w-ful rounded-sm overflow-hidden mt-8  grid mb-12">
      <h3 className="text-md text-center justify-center md:text-2xl lg:text-4xl">Rules for a referral program</h3>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div style={{
            width: "100%",
            height: "22.5rem",
            flexShrink: 0,
            borderRadius: "24px",
            background:"#F5F8FA"
          }}>
            <div>
              <p style={{
                color: "#414A5B",
                fontSize: "1.5rem",
                fontFamily: "Satoshi",
                fontWeight: 700,
                lineHeight:"1.75rem"
              }}>Users must have an <span className="text-emerald-400">active account</span> with the platform</p>
            </div>
          </div>
          <div style={{
            width: "100%",
            height:" 22.5rem",
            flexShrink: 0,
            borderRadius: "24px",
            background: "#F5F8FA"
          }}>02</div>
        </div>
        <div>
          <div style={{
            width: "100%",
            height: "22.5rem",
            flexShrink: 0,
            borderRadius: "24px",
            background: "#F5F8FA"
          }}>03</div>
        </div>

      </div>
    </div>
  )
}

