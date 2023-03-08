import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';

const StudentProject = () => {
  const project = {
    nombre: 'Desarrollo de Sistema de Administración de Ventas',
    empresa: 'Software Inc',
    proceso: 'Estancia',
    ciudad: 'Tapachula',
    entidad: 'Chiapas',
    modalidad: 'Presencial',
    objetivo: 'Desarrollar e implentar un sistema de administración de ventas para optimizar los procesos de gestión de ventas de servicios académicos',
    justificacion: 'Garantizar una información certera, oportuna, rápida y correcta para la organización manifiesta en un eficiente manejo de la información para así lograr una satisfacción plena de los clientes y de esta manera la empresa poder llevar un buen manejo y manipulación de sus inventarios, balances, facturas, clientes, productos, proveedores, entre otros',
    titular: 'Carlos Horacio García Quintanilla',
    cargo: 'Director General',
    asesor: 'John Man Doe',
    telefono: '962 289 9278',
    correo: 'CarlosHGarciaQ@SoftwareInc.com',
    direccion: 'Tapachula, Chiapas. Primera Oriente 4, Centro 30700'
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Container className='pt-5 mx-5'>
          <h1 className='display-4 mb-5'>Mi Proyecto</h1>
          <hr />
          <div>
            <Row className='pt-4'>
              <Card className="my-3 mx-2 p-0">
                <Card.Header className="pt-3 pb-2">
                  <Card.Title as='h6'>{project.nombre}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Objetivo: {project.objetivo}
                    <br/><br/>
                    Justificación: {project.justificacion}
                    <br/><br/>
                    <span className="fw-bold">
                      {project.empresa}
                    </span>
                    <br />
                    {project.ciudad}, {project.entidad}
                    <br /><br />
                    <span className="fw-bold">
                      {project.proceso}
                    </span>
                    <br />
                    Modalidad: {project.modalidad}
                    <br />

                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="text-center">
                    <Button variant="primary" onClick={() => setShow(true)}>Más Información</Button>
                  </div>
                </Card.Footer>

                <Modal show={show} onHide={() => setShow(false)} centered size="xl">
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      {project.nombre}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="show-grid">
                    <Container>
                      <Row>
                        <Col lg={7} className='px-5'>
                          <Row className='pt-4'>
                            <Form.Group lg className='pb-4'>
                              <Form.Label>Objetivo</Form.Label>
                              <Form.Control className='text-muted' readOnly defaultValue={project.objetivo} as='textarea' rows={2} />
                            </Form.Group>
                            <Form.Group lg className='pb-4'>
                              <Form.Label>Justificación</Form.Label>
                              <Form.Control className='text-muted' readOnly defaultValue={project.justificacion} as="textarea" rows={5} />
                            </Form.Group>
                            <Form.Group lg className='pb-4'>
                              <Form.Label>Titular</Form.Label>
                              <Form.Control className='text-muted' readOnly defaultValue={project.titular} />
                            </Form.Group>
                            <Form.Group lg className=''>
                              <Form.Label>Cargo</Form.Label>
                              <Form.Control className='text-muted' readOnly defaultValue={project.cargo} />
                            </Form.Group>
                          </Row>
                        </Col>

                        <Col lg={5} className='px-5'>
                          <Row className='pt-4'>
                            <Form.Group lg className='pb-4'>
                              <Form.Label>Asesor</Form.Label>
                              <Form.Control className='text-muted' readOnly defaultValue={project.asesor} />
                            </Form.Group>
                            <Form.Group lg className='pb-4'>
                              <Form.Label>Teléfono</Form.Label>
                              <Form.Control className='text-muted' readOnly defaultValue={project.telefono} />
                            </Form.Group>
                            <Form.Group lg className='pb-4'>
                              <Form.Label>Correo Electrónico</Form.Label>
                              <Form.Control className='text-muted' readOnly defaultValue={project.correo} />
                            </Form.Group>
                            <Form.Group lg className='pb-4'>
                              <Form.Label>Dirección</Form.Label>
                              <Form.Control className='text-muted' readOnly as="textarea" rows={2} defaultValue={project.direccion}>
                              </Form.Control>
                            </Form.Group>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleClose}>Cerrar</Button>
                  </Modal.Footer>
                </Modal>
              </Card>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default StudentProject;