import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const StudentProfile = () => {
    const user = {
        nombre: 'JUAN MANUEL',
        apellido_p: 'FUENTES',
        apellido_m: 'SARMIENTO',
        correo_p: 'JMANUELFSARMIENTO@GMAIL.COM',
        telefono: '9621464390',
        genero: 'MASCULINO',
        matricula: '203453',
        correo_i: '203453@UPTAPACHULA.EDU.MX',
        programa_e: 'INGENIERÍA EN SOFTWARE'
    };

    return (
        <>
            <div className='d-flex justify-content-center'>
                <Container className='pt-5 mx-5'>
                    <h1 className='display-4 mb-5'>Datos del Alumno</h1>
                       <hr />
                    <div>
                        <Row className='pt-4'>
                            <Col lg={3} className='text-muted mb-4'>INFORMACIÓN PERSONAL</Col>
                            <Col>
                                <Row>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Nombre(s)</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.nombre} />
                                    </Form.Group>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Apellido paterno</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.apellido_p} />
                                    </Form.Group>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Apellido materno</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.apellido_m} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Correo personal</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.correo_p} />
                                    </Form.Group>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.telefono} />
                                    </Form.Group>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Género</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.genero} />
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className='py-3'>
                            <Col lg={3} className='text-muted mb-4'>INFORMACIÓN ESCOLAR</Col>
                            <Col>
                                <Row>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Matrícula</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.matricula} />
                                    </Form.Group>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Correo Institucional</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.correo_i}/>
                                    </Form.Group>
                                    <Form.Group as={Col} lg className='pb-4'>
                                        <Form.Label>Programa Educativo</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={user.programa_e} />
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
                                    <Button type="submit" variant='link' className='text-decoration-none text-muted pe-5'>CANCELAR</Button>
                                    <Button type="submit">ACTUALIZAR</Button>
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

export default StudentProfile;