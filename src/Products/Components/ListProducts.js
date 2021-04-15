import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { getProducts } from '../services/index'

const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts () {
      const response = await getProducts()
      if (response.status === 200) {
        setProducts(response.data.products)
      }
      console.log(products)

      setIsLoading(false)
    }
    loadProducts()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (!products.length) {
    return 'You don\'t have products!'
  }
  return ('mostrar listado')
}
export default ListProducts
