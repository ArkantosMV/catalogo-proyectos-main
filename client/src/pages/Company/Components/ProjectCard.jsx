import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col, Form } from "react-bootstrap";

const ProjectCard = ({ nombre, objetivo, justificacion, programa, proceso, vacantes, periodo, modalidad, asesor }) => {
    const [show, setShow] = useState(false);

    return (
        <Card className="my-3 mx-2 p-0" style={{ maxWidth: '290px', minWidth: '290px', minHeight: '263px', maxHeight: '263px' }}>
            <Card.Header className="pt-3 pb-2">
                <Card.Title>{nombre}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{objetivo}</Card.Text>
                <div className="text-center">
                    <Button variant="primary" onClick={() => setShow(true)}>Más Información</Button>
                </div>
            </Card.Body>

            <Modal show={show} onHide={() => setShow(false)} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {nombre}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col lg={7} className='px-5'>
                                <Row className='pt-4'>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Objetivo</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={objetivo} as='textarea' rows={2} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Justificación</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={justificacion} as="textarea" rows={5}/>
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Programa Educativo</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={programa} />
                                    </Form.Group>
                                    <Form.Group lg className=''>
                                        <Form.Label>Proceso</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={proceso} />
                                    </Form.Group>
                                </Row>
                            </Col>

                            <Col lg={5} className='px-5'>
                                <Row className='pt-4'>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Vacantes</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={vacantes} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Periodo</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={periodo} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Modalidad</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={modalidad} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Asesor Laboral</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={asesor} />
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="mt-4">
                    <Button onClick={() => setShow(false)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
};

export default ProjectCard;