import React from 'react'

export default function Hero() {
  return (
    <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
            <h1 className='mt-5'>Invest in  everyhting</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='p-2 btn btn-primary mt-2 mb-5' style={{width: "15%", margin:"0 auto"}}>Signup Now</button>
        </div>

    </div>
  )
}
