import React from 'react'
import copyRight from '../assets/copyright.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="leftDiv">
        <img src={copyRight} alt="" />
        <p>Talup 2023. All rights reserved</p>
      </div>
      <div className="rightDiv">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
