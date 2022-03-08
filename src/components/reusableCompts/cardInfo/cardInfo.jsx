import React, { useState } from 'react';
import DropDown from '../dropdown/DropDown';
import './cardInfo.css'



const CardInfo = ({viewIcon, header, text, arroDownIcon, children,}) => {
  return (
  <div className='card-box'>
    <div className='card-content1'>
        <div className='card-header'>
            {viewIcon}
          <span className='card-content-span1'>{header}</span>
        </div>
        <div className='card-header'>
          <DropDown />
          {/* <span className='card-content-span2' style={{marginLeft: '30px'}}>{text}</span>
          {arroDownIcon} */}
        </div>
    </div>
    <div className='card-content2'>
        {children}
    </div>
  </div>
  )
}

export default CardInfo