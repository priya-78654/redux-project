import React from 'react'

function Header (props) {
  return (
    <div>
      <div className='add-to-cart'>
        <span className='cart-count'>{props.data}</span>
        <img src='https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png' />
      </div>
    </div>
  )
}

export default Header
