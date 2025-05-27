import React from 'react'

export default function Hero() {
  return (
    <div className='bg-primary'>
        <div className='container'>
            <div className='row p-5'>
                <div className='col text-left px-5 '><h4 className='text-white fw-normal'>Support Portal</h4></div>
                <div className='col px-5'><a className='text-white link-offset-3 fs-5 ' style={{display:"block" , textAlign:"right"}} href=''>Track tickets</a></div>
            </div>
        </div>
        <div className='row mx-5 px-2'>
          <div className='col-7 mx-5 px-5'>
           <div className='px-4'> <h4 className='text-white  mx-5 px-5 fs-4 fw-normal'>Search for an answer or browse help topics to create a ticket</h4></div>
            <form className='my-5 px-5'>
              <input className='mx-5 px-5' style={{width:"80%" , height:"4rem" , borderRadius:".6rem" ,border:"none" ,fontSize:"1.1rem"}} type='text' name='issue' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/>
            </form>
            <div className='m-5 px-4'>
            <span><a className='text-white link-offset-3 fs-5 mx-3' style={{ textAlign:"right"}} href=''>Track account opening</a></span>
            <span><a className='text-white link-offset-3 fs-5 mx-3' style={{ textAlign:"right"}} href=''> Track segment activation</a></span>
            <span><a className='text-white link-offset-3 fs-5 mx-3' style={{ textAlign:"right"}} href=''>Intraday margins</a></span>
            <span className=''><a className='text-white link-offset-3 fs-5 mx-3' style={{ textAlign:"right" , display:"inline-block" , lineHeight:"4rem" }} href=''>Kite user manual</a></span>
            </div>
          </div>
          <div className='col'>
            <h2 className='text-white fs-4 my-3' >Featured</h2>
            <p className='text-white px-4'>1. <a className='text-white fs-5 link-offset-3' style={{lineHeight:"2.4rem"}} href=''>Latest Intraday leverages and Square-off timings</a></p>
            <p className='text-white px-4'>2. <a className='text-white fs-5 link-offset-3' style={{lineHeight:"2.4rem"}} href=''>Offer for sale (OFS) – May 2025</a></p>
          </div>
        </div>
    </div>
  )
}
