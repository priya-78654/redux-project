//import { addToCart } from '../Constants'

export const addToCart = data => {
  return {
    type: addToCart,
    data: data
  }
}

export const removeToCart = data => {
  return {
    type: 'removeToCart',
    data: data
  }
}
