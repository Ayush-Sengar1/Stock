import React from 'react'

export default function Pricing() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-4 p-2 m-3'>
          <h1>Unbeatable pricing</h1>
          <p className='mt-2'>we pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a className='mt-3' href='' style={{textDecoration:"none"}} >See pricing <i class=" fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-1 m-3'></div>
        <div className='col-6'>
          <div className='row text-center '>
            <div className='col p-3 border'>
              <h1 className='mb-3'>₹0</h1>
              <p>Free equity delivery and <br/>direct mutual funds</p>
            </div>
            <div className='col p-3 border'>
              <h1 className='mb-3'>₹20</h1>
              <p>Intraday and F&O</p>
              <p></p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
 