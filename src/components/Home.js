import React from 'react'

function Home() {
  return (
    <div>
      <div className='add-to-cart'>
        <img src="https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png"/>

      </div>
      <h1>Hello from home</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src="https://n4.sdlcdn.com/imgs/f/n/r/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg" />
        </div>
        <div className='text-wrapper item'>
          <span>
            Iphone
          </span>
          <span>
            Price $1000.00
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home