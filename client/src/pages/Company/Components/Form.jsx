import React, { useState } from 'react'
import { Form, Button, Card, ProgressBar, Row, Col } from "react-bootstrap";

import { faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FormRegister = () => {

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setStep(step + 1);
    };

    const progressValue = (step / 4) * 100;

    return (
        <>
            <Card className='my-4'>
                <Card.Header as="h4" className='px-3 py-3 text-muted'>Paso {step}</Card.Header>
                <Card.Body>
                    {step === 0 && (
                        <Row className='align-items-center justify-content-center'>
                            <Form onSubmit={handleSubmit}>
                                <Card body className='border-0 bg-transparent'>
                                    <div className="text-center mt-5 text-muted p-2 lead">
                                        <FontAwesomeIcon icon={faClock} className='fa-5x mb-5' style={{ color: '#721F65' }} />
                                        <h3 lg={3} className='text-muted mb-4'>¿ESTÁS LISTO PARA CREAR UN NUEVO PROYECTO?</h3>
                                        <hr className='mx-5' />
                                        <p style={{ color: '#721F65', fontWeight: '600' }}>¡Vamos a empezar!</p>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <Button variant="primary" type="submit" className='px-5 py-2 my-3'>
                                            Iniciar
                                        </Button>
                                    </div>
                                </Card>
                            </Form>
                        </Row>
                    )}
                    {step === 1 && (
                        <Row className='p-4'>
                            <h4 lg={3} className='text-muted mb-4'>DESCRIPCIÓN</h4>
                            <hr />
                            <Col>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Nombre del Proyecto</Form.Label>
                                            <Form.Control className='text-muted' required placeholder='NOMBRE DEL PROYECTO' />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Objetivo</Form.Label>
                                            <Form.Control className='text-muted' required placeholder='OBJETIVO GENERAL DEL PROYECTO A REALIZAR' />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Justificación</Form.Label>
                                            <Form.Control as="textarea" rows={3} className='text-muted' required placeholder='JUSTIFICACIÓN DEL PROYECTO' />
                                        </Form.Group>
                                    </Row>
                                    <div className='d-flex justify-content-end'>
                                        <Button variant="primary" type="submit">
                                            Siguiente
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    )}
                    {step === 2 && (
                        <Row className='p-4'>
                            <h4 lg={3} className='text-muted mb-4'>REQUERIMIENTOS</h4>
                            <hr />
                            <Col>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Programa Educativo</Form.Label>
                                            <Form.Select required className='text-muted'>
                                                <option value='' disabled selected>PROGRAMA EDUCATIVO AL CUAL VA DIRIGIDO EL PROYECTO</option>
                                                <option value="1">INGENIERÍA AGROINDUSTRIAL</option>
                                                <option value="2">INGENIERÍA EN SOFTWARE</option>
                                                <option value="3">INGENIERÍA EN ANIMACIÓN Y EFECTOS VISUALES</option>
                                                <option value="4">INGENIERÍA EN ENERGÍA</option>
                                                <option value="5">INGENIERÍA EN LOGÍSTICA Y TRANSPORTE</option>
                                                <option value="6">INGENIERÍA EN NANOTECNOLOGÍA</option>
                                                <option value="7">INGENIERÍA EN SISTEMAS AUTOMOTRICES</option>
                                                <option value="8">INGENIERÍA EN TECNOLOGÍA AMBIENTAL</option>
                                                <option value="9">INGENIERÍA FINANCIERA</option>
                                                <option value="10">INGENIERÍA MECATRÓNICA</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Proceso</Form.Label>
                                            <Form.Select required className='text-muted'>
                                                <option value='' disabled selected>PROCESO QUE SOLICITA</option>
                                                <option value="1">ESTANCIA</option>
                                                <option value="2">ESTADÍA</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Vacantes</Form.Label>
                                            <Form.Select required className='text-muted'>
                                                <option value='' disabled selected>NÚMERO DE ESTUDIANTES PARA REALIZAR EL PROYECTO</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <div className='d-flex justify-content-end'>
                                        <Button onClick={() => setStep(step - 1)} variant='link' className='text-decoration-none text-muted me-4'>
                                            Regresar
                                        </Button>
                                        <Button variant="primary" type="submit">
                                            Siguiente
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    )}
                    {step === 3 && (
                        <Row className='p-4'>
                            <h4 lg={3} className='text-muted mb-4'>MÁS INFORMACIÓN</h4>
                            <hr />
                            <Col>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Periodo</Form.Label>
                                            <Form.Select required className='text-muted'>
                                                <option value='' disabled selected>PERIODO DE CONVOCATORIA</option>
                                                <option value="1">ENERO-ABRIL</option>
                                                <option value="2">MAYO-AGOSTO</option>
                                                <option value="3">SEPTIEMBRE-DICIEMBRE</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Modalidad</Form.Label>
                                            <Form.Select required className='text-muted'>
                                                <option value='' disabled selected>MODALIDAD DEL PROYECTO</option>
                                                <option value="1">PRESENCIAL</option>
                                                <option value="2">DISTANCIA</option>
                                                <option value="3">MIXTA</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} lg className='pb-4'>
                                            <Form.Label>Asesor Laboral</Form.Label>
                                            <Form.Control rows={3} className='text-muted' required placeholder='NOMBRE COMPLETO DEL ASESOR ASIGNADO POR LA EMPRESA PARA EL SEGUIMIENTO DEL PROYECTO' />
                                        </Form.Group>
                                    </Row>
                                    <div className='d-flex justify-content-end'>
                                        <Button onClick={() => setStep(step - 1)} variant='link' className='text-decoration-none text-muted me-4'>
                                            Regresar
                                        </Button>
                                        <Button variant="primary" type="submit">
                                            Siguiente
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    )}
                    {step > 3 && (
                        <>
                            <div className='p-4 text-center'>
                                <h4 lg={3} className='text-muted mb-4'>RESUMEN</h4>
                                <hr />
                                <FontAwesomeIcon icon={faCircleCheck} className='fa-5x mt-5 mb-3' style={{ color: '#28a745' }} />
                                <div className='mt-3 text-center text-muted p-2 lead'>
                                    <p style={{ fontWeight: '400' }}>
                                        <span style={{ color: '#28a745' }}> ¡Felicidades!</span> Su proyecto ha sido creado correctamente.
                                        <br />
                                        Ahora puede gestionar su proyecto en el apartado de <Link to='/CompanyProject' className='text-decoration-none' style={{ color: '#901e78', fontWeight: '400' }}>Proyectos</Link> que se encuentra en la barra lateral.
                                    </p>
                                </div>
                                <Button className='m-4' variant="primary">
                                    <Link to='/CompanyHome' className='text-decoration-none text-white'>Regresar al Inicio</Link>
                                </Button>
                                <Button type="submit" variant='link' className='text-decoration-none text-muted' onClick={() => setStep(0)} >
                                    Crear otro Proyecto
                                </Button>
                            </div>
                        </>
                    )}
                </Card.Body>
            </Card>
            <ProgressBar now={progressValue} className='mb-5' />
        </>
    )
}

export default FormRegister;