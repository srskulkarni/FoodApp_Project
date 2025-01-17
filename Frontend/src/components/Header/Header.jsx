import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'

const Header = () => {
  return (
    <div className="header_img" style={{
      height: '35vw',
      margin: '40px auto',
      background: `url(${assets.header_img}) no-repeat center center`,
      backgroundSize: 'cover',
      borderRadius: '50px',
    }}>
      <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here! </h2>
        <a href='#explore-menu' className= 'button'> View Menu </a>
      </div>
    </div>
    </div>
  )
}

export default Header
