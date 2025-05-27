import React from 'react'

export default function Team() {
  return (
    <div className='container mb-5'>
        <div className='row text-center fs-2 my-3 py-5'>
            <h1>
                People
            </h1>
        </div>
        <div className='container mx-4 px-5'>
                    <div className="row align-items-center">
            <div className='col-5 text-center '>
                <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%" , width:"61%" , marginBottom:"1.6rem"}}  />
                <h3 className='text-muted fs-5 my-2'>Nithin Kamath</h3>
                <h4 className='text-muted my-3' style={{fontSize:"1rem"}}>Founder, CEO</h4>
            </div>
            <div className='col-7'>
                <p style={{fontSize:"1.2rem"}} >Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p> <br/>
                <p style={{fontSize:"1.2rem"}} >He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p><br/>
                <p style={{fontSize:"1.2rem"}} >Playing basketball is his zen.</p><br/>
                <p style={{fontSize:"1.2rem"}} >Connect on <a style={{textDecoration:"none"}} href='https://nithinkamath.me/'>Homepage</a> / <a style={{textDecoration:"none"}} href='https://tradingqna.com/u/nithin/summary'>TradingQnA</a> / <a style={{textDecoration:"none"}} href='https://x.com/Nithin0dha'>Twitter</a></p>
            </div>
        </div>
        </div>
    </div>
  )
}
