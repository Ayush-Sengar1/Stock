 import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
 
 export default function ProductPage() {
   return (
     <div>
       <Hero/>
       <LeftSection image={"/media/images/kite.png"} title={"Kite"} content={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} link1={"Try demo "} link2={"Learn more "} />
       <RightSection image={"media/images/console.png"} title={"Console"} content={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} link1={"Learn more"} />
       <LeftSection image={"media/images/coin.png"} title={"Coin"} content={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} link1={"Coin"}/>
       <RightSection image={"media/images/kiteconnect.png"} title={"Kite Connect API"} content={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} link1={"Kite Connect"} />
        <LeftSection image={"media/images/varsity.png"} title={"Varsity mobile"} content={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}/>
       <Universe/>

     </div>
   )
 }
 