import React from 'react'

export default function Universe() {
  return (
    <div className='container'>
    <h4 className='text-center text-muted my-5'>Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href=''>Zerodha.tech</a> blog.</h4>
    <h1 className='text-center fs-1 my-4 pt-5'>The Zerodha Universe</h1>
    <h5 className='text-muted text-center'>Extend your trading and investment experience even further with our partner platforms</h5>
    <div className='contanier'>
        <div className='row mt-5 align-items-center text-center'>
            <div className='col my-4'><img style={{width:"70%"}} src='media/images/smallcaseLogo.png'/><p className="p-5" >Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p></div>
            <div className='col my-4'><img style={{width:"40%"}} src='media/images/dittoLogo.png'/><p className="p-5" >Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p></div>
            <div className='col my-4'><img style={{width:"70%"}} src='media/images/goldenpiLogo.png'/><p className="p-5" >Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p></div>
        </div>
                <div className='row align-items-center text-center'>
            <div className='col my-4'><img style={{width:"70%"}} src='media/images/sensibullLogo.svg'/><p className="p-5" >Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p></div>
            <div className='col my-4'><img style={{width:"50%"}} src='media/images/streakLogo.png'/><p className="p-5" >Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p></div>
            <div className='col my-4'><img style={{width:"70%"}} src='media/images/zerodhaFundhouse.png'/><p className="p-5" >Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p></div>
        </div>
    </div>
    </div>
  )
}


