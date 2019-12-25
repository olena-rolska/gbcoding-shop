import React from 'react'
import Layout from '../../components/layout'
import Cart from '../../components/cart'

export default function ViewCartPage() {
  return (
    <Layout title='Items in my cart'>
      <Cart stripeToken='pk_test_Gw166heMsl4PMvVG5KubBBSx00mKdHG01c'/>
    </Layout>
  );
}