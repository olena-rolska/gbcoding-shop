import React, {useContext} from 'react'
import products from '../../data/products'
import Cart from '../cart'
import {CartContext} from '../cart/context'

export default function Store() {
  const cartCtx = useContext(CartContext)
  return (
    <div>
    {products.map(product => (
      <div>
        <div>
          <img 
            src={`/images/${product.sku}.jpg`} 
            alt={product.name} 
            width={100}
          />
        </div>
      <div>{product.name}</div>
      <div><button onClick={() => cartCtx.addToCart(product)}>Add to cart</button></div>
    </div>
  ))}
    <Cart stripeToken='pk_test_Gw166heMsl4PMvVG5KubBBSx00mKdHG01c' />
  </div>
  )
}