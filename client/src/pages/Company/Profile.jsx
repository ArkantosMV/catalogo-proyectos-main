import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const CompanyProfile = () => {
  const user = {
    nombre: 'UNIVERSIDAD POLITECNICA DE TAPACHULA',
    rfc: 'UPT101105P97',
    tel_c: '962 689 0090',
    titular: 'JHONNY ROBERT MIS MAY',
    cargo: 'RECTOR',
    nombre_e: 'MARÍA CRISTINA RODRIGO RAMOS',
    tel_e: 'EXT. 4',
    correo_e: 'VINCULACION@UPTAPACHULA.EDU.MX',
    entidad: 'CHIAPAS',
    ciudad: 'TAPACHULA',
    cp: '30830',
    colonia: 'SC',
    calle: 'CARRETERA TAPACHULA - PUERTO MADERO KM. 24 + 300',
    numero: 'SN'
  };

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Container className='pt-5 mx-5'>
          <h1 className='display-4 mb-5'>Información de la Empresa</h1>
          <hr />
          <div>
            <Row className='pt-4'>
              <Col lg={3} className='text-muted mb-4'>INFORMACIÓN GENERAL</Col>
              <Col>
                <Row>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Nombre o Razón Social</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.nombre} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>RFC</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.rfc} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Teléfono de Contacto</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.tel_c} />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Titular</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.titular} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.cargo} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                  </Form.Group>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row className='py-3'>
              <Col lg={3} className='text-muted mb-4'>INFORMACIÓN DE ENLACE</Col>
              <Col>
                <Row>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.nombre_e} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Teléfono de Oficina</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.tel_e} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.correo_e} />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row className='py-3'>
              <Col lg={3} className='text-muted mb-4'>DIRECCIÓN</Col>
              <Col>
                <Row>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Entidad Federativa</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.entidad} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.ciudad} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Código Postal</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.cp} />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Colonia</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.colonia} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Calle</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.calle} />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Número</Form.Label>
                    <Form.Control className='text-muted' readOnly defaultValue={user.numero} />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row className='py-3'>
              <Col lg={3} className='text-muted mb-4'>CAMBIAR CONTRASEÑA</Col>
              <Col>
                <Row>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Contraseña actual</Form.Label>
                    <Form.Control placeholder="CONTRASEÑA ACTUAL" />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-4'>
                    <Form.Label>Nueva contraseña</Form.Label>
                    <Form.Control placeholder="NUEVA CONTRASEÑA" />
                  </Form.Group>
                  <Form.Group as={Col} lg className='pb-5'>
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control placeholder="CONFIRMAR CONTRASEÑA" />
                  </Form.Group>
                </Row>
                <div className='d-flex justify-content-end'>
                  <Button type="submit" variant='link' className='text-decoration-none text-muted me-5'>CANCELAR</Button>
                  <Button type="submit" variant='secondary'>ACTUALIZAR</Button>
                </div>
              </Col>
            </Row>
            <hr />
          </div>
        </Container>
      </div>
    </>
  )
}

export default CompanyProfile;