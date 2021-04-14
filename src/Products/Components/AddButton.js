import React from 'react'
import Bulma, { Section, Container, Button } from 'react-bulma-components'

const AddButton = () => {
  return (
    <Section>
      <Container>
        <div className='is-pulled-right'>
          <Button class='is-primary'>Agregar</Button>
        </div>
      </Container>
    </Section>
  )
}

export default AddButton
