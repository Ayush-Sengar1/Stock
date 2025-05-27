import React from 'react'

export default function CreateTicket() {
  return (
    <div className='container'>
      <div className='row my-5 text-muted' style={{fontSize:"1.5rem"}}>To create a ticket, select a relevant topic</div>
      <div className='row'>
        <div className='col'>
            <h2 className='fs-5 py-3'><i class="fa fa-plus-circle" aria-hidden="true"></i> <span className='mx-3'>Account Opening</span></h2> 
            <a style={{textDecoration: "none", display:"block" , marginBottom:".7rem"}} href=''>Resident individual</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Minor</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Non Resident Indian (NRI)</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Company, Partnership, HUF and LLP</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Glossary</a>
      </div>
      <div className='col'>
            <h2 className='fs-5 py-3'><i class="fa fa-user-o" aria-hidden="true"></i> <span className='mx-3'>Your Zerodha Account</span></h2>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Your Profile</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Account modification</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Client Master Report (CMR) and Depository Participant (DP))</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Nomination</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Transfer and conversion of securities</a>
      </div>
       <div className='col'>
            <h2 className='fs-5 py-3'><i class="fa fa-bar-chart" aria-hidden="true"></i> <span className='mx-3'>Vite</span></h2>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>IPO</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Trading FAQs</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Margin Trading Facility (MTF) and Margins</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Chats and Orders</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Alerts and Nudges</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>General</a><br/>
      </div>
      </div>

      <div className='row'>
        <div className='col'>
            <h2 className='fs-5 py-3'><i class="fa fa-briefcase" aria-hidden="true"></i><span className='mx-3'>Funds</span></h2>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Add money</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}}  href=''>Withdraw money</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Add bank accounts</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>eMandates</a>  
        </div>
        <div className='col'>
            <h2 className='fs-5 py-3'><i class="fa fa-circle-o-notch" aria-hidden="true"></i><span className='mx-3'>Vite</span></h2>
            <a style={{textDecoration : "none" , display:"block" , marginBottom:".7rem"}} href=''>Portfolio</a>
            <a style={{textDecoration : "none" , display:"block" , marginBottom:".7rem"}} href=''>Corporate actions</a>
            <a style={{textDecoration : "none" , display:"block" , marginBottom:".7rem"}} href=''>Funds statement</a>
            <a style={{textDecoration : "none" , display:"block" , marginBottom:".7rem"}} href=''>Reports</a>
            <a style={{textDecoration : "none" , display:"block" , marginBottom:".7rem"}} href=''>Profile</a>
            <a style={{textDecoration : "none" , display:"block" , marginBottom:".7rem"}} href=''>Segments</a>  
        </div>
        <div className='col'>
            <h2 className='fs-5 py-3'><i class="fa fa-circle-o" aria-hidden="true"></i><span className='mx-3'>Coin</span></h2>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Understanding mutual funds and Coin</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Coin app</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Coin web</a>
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>Transactions and reports</a>       
            <a style={{textDecoration : "none", display:"block" , marginBottom:".7rem"}} href=''>National Pension Scheme (NPS)</a>                   
        </div>
    </div>
    </div>
  )
}

