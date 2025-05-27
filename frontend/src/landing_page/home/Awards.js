import React from 'react'

function Awards () {
    return ( 

        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'><img src='media/images/largestBroker.svg'/></div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all reatil order volumes in india daily by trading and investing in:</p>
                    
                    <div className='row mt-1'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivates</p></li>
                                <li><p>Currency derivates</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img style={{width:"80%" , margin:"0 auto" , display:"block"}} src='media/images/pressLogos.png'/> 
                    
                </div>
            </div>
        </div>

     );
}

export default Awards;