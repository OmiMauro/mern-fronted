import React, { useState } from 'react'
import { Modal } from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'
const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Header title='Lista de productos' />
      <AddButton onClick={() => { setIsModalOpen(true) }} />
      <ListProducts />
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Head>
            Agregar un producto
          </Modal.Card.Head>
          <Modal.Card.Body>
            Formulario de datos
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  )
}

export default ProductLayout
/* hook es una funcion que nos permite utilizar caracteristicas de React, manejar un estado.
useState permite manejar un estado en un compononente function
Retorna dos valores,
isLoading almacena el valor si la aplicacion se esta cargando o no
setIsLoading es una function que actualiza el estado
*/
