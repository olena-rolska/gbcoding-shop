import React, {useState, useEffect} from 'react'

const items = [
  {
    sku: 'sku_GIHjIqgoy0NRrw', 
    quantity: 1, 
    price: 95600, 
    name: 'Laptop Xiaomi RedmiBook 14 i7 10th 8/512Gb/MX250 Silver'
  },
  {
    sku: 'sku_GIHhqA7QGTfpaG', 
    quantity: 1, 
    price: 1100, 
    name: 'Table Lamp DeLux TF-06 New 60W E27 Black'},
  {
    sku: 'sku_GIHeSj0h00PAx1', 
    quantity: 1, 
    price: 33200, 
    name: 'VR Glasses Oculus Go'
  }
]

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

export default function Cart({stripeToken}) {
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe
      (stripeToken))
  }, [stripeToken])

  function checkout() {
    stripe.redirecetToCheckout({
      items: items.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      })),
      sucessUrl: 'https://your-website.com/success',
      cancelUrl: 'https://your-website.com/canceled'
    })
  }

  return <div>
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Image
          </th>
          <th>
            Quantity
          </th>
          <th>
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
        <tr>
          <td>{item.name}</td>
          <td><img src={`/images/${item.sku}.jpg`} alt={item.name} width={100}/></td>
          <td>{item.quantity}</td>
          <td>{formatPrice(item.price)}</td>
        </tr>
      ))}
      <tr>
        <td  style={{textAlign: 'right'}} colspan={3}>Total:</td>
        <td>{formatPrice(totalPrice(items))}</td>
      </tr>
      <tr>
        <td  style={{textAlign: 'right'}} colspan={4}>
          <button onClick={checkout}>Checkout now with Stripe</button>
        </td>
        <td>{formatPrice(totalPrice(items))}</td>
      </tr>
      </tbody>
    </table>
  </div>
}