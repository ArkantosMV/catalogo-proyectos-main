import React from 'react'
import { Container } from 'react-bootstrap'
import FormRegister from './Components/Form'


const CompanyRegister = () => {

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Container className='pt-5 mx-5'>
          <h1 className='display-4 mb-5'>Nuevo Proyecto</h1>
          <hr />
          <FormRegister />
        </Container>
      </div >
    </>
  )
}

export default CompanyRegister