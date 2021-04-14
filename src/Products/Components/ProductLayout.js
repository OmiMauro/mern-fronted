import React from 'react'
import Bulma from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import Loading from './Loading'
const ProductLayout = () => {
  return (
    <>
      <Header title='Lista de productos' />
      <AddButton />
      <Loading />
    </>
  )
}

export default ProductLayout
