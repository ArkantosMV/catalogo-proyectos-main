import React from 'react'
import { Container } from 'react-bootstrap';

const AdminHome = () => {
  const user = {
    nombre: 'ADMIN'
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '85vh' }}>
        <Container className='py-5 mx-2'>
          <div>
            <h1 className="text-center display-6 py-5 lh-base" style={{ fontWeight: '600' }}>TE DAMOS LA BIENVENIDA, <span className='purple'>{user.nombre}</span></h1>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AdminHome