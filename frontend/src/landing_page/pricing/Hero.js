import React from 'react'

export default function Hero() {
  return (
    <div className='container'>
        <div className='row text-center my-5 py-5'>
            <h1 style={{fontSize:"3.5rem"}} className='my-4'>Charges</h1>
            <p style={{fontSize:"1.6rem"}} className='text-muted mb-5'>List of all charges and taxes</p>
        </div>
        <div className='row text-center'>
            <div className='col'><img style={{width:"70%"}} src='media/images/pricingEquity.svg'/><h2 className='my-4 fs-2'>Free equity delivery</h2> <h3 style={{fontSize:'1.1rem'}} className='text-muted px-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h3></div>
            <div className='col'><img style={{width:"70%"}} src='media/images/intradayTrades.svg'/><h2 className='my-4 fs-2'>Intraday and F&O trades</h2><h3 style={{fontSize:'1.1rem'}} className='text-muted px-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h3></div>
            <div className='col'><img style={{width:"70%"}} src='media/images/pricingMF.svg'/><h2 className='my-4 fs-2'>Free direct MF</h2><h3 style={{fontSize:'1.1rem'}} className='text-muted px-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h3></div>
        </div>
    </div>
  )
}
