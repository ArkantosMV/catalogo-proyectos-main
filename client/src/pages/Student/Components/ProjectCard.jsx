import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col, Form } from "react-bootstrap";

const ProjectCard = ({ nombre, objetivo, justificacion, proceso, vacantes, modalidad, asesor, empresa, entidad, ciudad, calle, numero, colonia, cp, titular, cargo, telefono, correo, onSelect }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    const [vacanciesLeft, setVacanciesLeft] = useState(vacantes);

    const handleVacancy = () => {
        onSelect({ nombre });
        handleClose();
        setVacanciesLeft(vacanciesLeft - 1);
    };

    if (vacanciesLeft === 0) {
        return null;
    }

    return (
        <Card className="my-3 mx-2 p-0" style={{ maxWidth: '290px', minWidth: '290px', minHeight: '263px' }}>
            <Card.Header className="pt-3 pb-2">
                <Card.Title as='h6'>{nombre}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <span className="fw-bold">
                        {empresa}
                    </span>
                    <br />
                    {ciudad}, {entidad}
                    <br /><br />
                    <span className="fw-bold">
                        {proceso}
                    </span>
                    <br />
                    Modalidad: {modalidad}
                    <br />
                    Vacantes disponibles: {vacanciesLeft}

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
                                        <Form.Control className='text-muted' readOnly defaultValue={justificacion} as="textarea" rows={5} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Titular</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={titular} />
                                    </Form.Group>
                                    <Form.Group lg className=''>
                                        <Form.Label>Cargo</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={cargo} />
                                    </Form.Group>
                                </Row>
                            </Col>

                            <Col lg={5} className='px-5'>
                                <Row className='pt-4'>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Asesor</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={asesor} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={telefono} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Correo Electrónico</Form.Label>
                                        <Form.Control className='text-muted' readOnly defaultValue={correo} />
                                    </Form.Group>
                                    <Form.Group lg className='pb-4'>
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control className='text-muted' readOnly as="textarea" rows={2} defaultValue={`${ciudad}, ${entidad}. ${calle} ${numero}, ${colonia} ${cp}`}>
                                        </Form.Control>
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="mt-4">
                    {vacanciesLeft > 0 ? (
                        <button className="btn btn-primary" onClick={handleVacancy}>
                            Seleccionar Proyecto
                        </button>
                    ) : (
                        <button className="btn btn-secondary" disabled>
                            No Disponible
                        </button>
                    )}
                </Modal.Footer>
            </Modal>
        </Card>
    );
};

export default ProjectCard;