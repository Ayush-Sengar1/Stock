import React from 'react'

export default function Education() {
  return (
    <div className='contanier m-5'>
      <div className='row align-items-center p-5'>
        <div className='col-6'><img src='media/images/education.svg'/></div>
        <div className='col-6 p-3'>
          <h1>Free and open market education</h1>
          <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a style={{textDecoration:"none"}} href='' >Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <p className='mt-4 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a style={{textDecoration:"none"}} href=''>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>    
    </div>
  )
}
