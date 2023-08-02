import React from 'react'

function Home (props) {
  console.log('home', props.data)
  return (
    <div>
      <h1>Hello from home</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://n4.sdlcdn.com/imgs/f/n/r/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg' />
        </div>
        <div className='text-wrapper item'>
          <span>Iphone</span>
          <span>Price $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: 'iphone 13' })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
