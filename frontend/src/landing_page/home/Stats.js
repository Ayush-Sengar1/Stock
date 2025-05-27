import React from 'react'

export default function Stats() {
  return (
    <div className='container p-5'>
      <div className='row p-5'> 
        <div className='col-6 p-5'>
          <h1 className='fs-1 mb-5'>Trust with confidence</h1>
          <h2 className='fs-3'>Customer first-always</h2>
          <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5+ lakh crores worth of equity investments</p>
          <h2 className='fs-3'>No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. HIgh quality apps that you use at your pace, the way you like.</p>
          <h2 className='fs-3'>The Zerodha univese</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ finetechstartups offer you tailored services specific to your needs.</p>
          <h2 className='fs-3'>Do better with money</h2>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6'>
          <img className='m-5' style={{width:"80%"}} src='media/images/ecosystem.png'/>
          <div className='text-center'>
            <a href='' style={{textDecoration:"none"}} className='mx-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href='' style={{textDecoration:"none"}} >Try Kite demo</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}
