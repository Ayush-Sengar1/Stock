import React from 'react'

export default function Hero() {
  return (
    <div className='contanier'>
        <div className='text-center my-5 py-5'>
            <h1 style={{fontSize:"3rem", width:"0 auto"}}>Zerodha Products</h1>
            <p style={{fontSize:"1.3rem"}}>Sleek, modern and intuitive trading platforms</p>
            <p style={{fontSize:"1.3rem"}}>Check out our <a style={{textDecoration:"none"}} href=''>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
        <hr/>
    </div>
  )
}
