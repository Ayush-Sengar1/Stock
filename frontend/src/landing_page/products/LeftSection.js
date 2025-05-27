import React from 'react'

export default function LeftSection({image ,title , content , link1 , link2 }) {
  return (
    <div className='container align-items-center my-4 py-5'> 
      <div className='row '>
        <div className='col-7 px-5'><img src={image}/></div>
        <div className='col-5 px-4'>
            <h1 className=' mb-5'>{title}</h1>
            <p className='fs-5 mb-5'>{content}</p>
            <a href=''>{link1}</a>
            <a className='mx-5 px-1' href=''>{link2}</a>
            <div className='mt-4'>
                <a href=''><img style={{borderRadius:".7rem"}} src='media/images/googlePlayBadge.svg'/></a>
                <a className='mx-5' href=''><img style={{borderRadius:".7rem"}} src='media/images/appstoreBadge.svg'/></a>
            </div>
        </div>
      </div>
    </div>
  )
}
