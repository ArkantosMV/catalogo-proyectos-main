import React from 'react'
import { Container } from 'react-bootstrap'

const StudentHome = () => {
  const user = {
    nombre: 'JUAN',
    apPat: 'FUENTES',
    apMat: 'SARMIENTO',
    matricula: '203453',
    carrera: 'INGENIERÍA EN SOFTWARE'
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '85vh' }}>
        <Container className='py-5 mx-2'>
          <div>
            <h1 className="text-center display-6 py-5" style={{ fontWeight: '600' }}>TE DAMOS LA BIENVENIDA, <span className='purple'>{user.nombre} {user.apPat} {user.apMat}</span></h1>
            <h3 className="text-center display-6 mb-3">MATRÍCULA: <span className='purple'>{user.matricula}</span></h3>
            <h3 className="text-center display-6 mb-5">{user.carrera}</h3>
          </div>
        </Container>
      </div>
    </>
  )
}

export default StudentHome