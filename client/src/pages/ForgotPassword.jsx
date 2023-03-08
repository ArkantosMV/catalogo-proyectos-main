import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Col, Container, Form, Image, InputGroup, Modal, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import logoUpTap from '../assets/logoUpTap.png';
import imgForgotPassword from '../assets/imgForgotPassword.svg';


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your password reset logic here
        console.log(`Email for password reset: ${email}`);
        if (validateEmail(email)) {
            setShow(true);
        }
    };

    const validateEmail = (email) => {
        return email.includes("@");
    };

    return (
        <>
            <Container>
                <div className="divContainer p-3">
                    <Row className="rowContainer p-3 bg-light">
                        <Link to="/" className="text-muted text-decoration-none m-3 me-1">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className='me-1' /> Regresar
                        </Link>
                        <Row className='align-items-center justify-content-center m-0'>
                            <Col className="p-0 m-0">
                                <Card body className='border-0 bg-transparent p-0 m-0'>
                                    <div className='mb-4 text-center'>
                                        <h1 className='display-5 text-center mt-5 text-muted'>REESTABLECER CONTRASEÑA</h1>
                                    </div>
                                    <Image src={imgForgotPassword} className='d-none d-md-block' fluid />
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card body className='border-0 bg-transparent'>
                                    <div className='text-center'>
                                        <Image src={logoUpTap} fluid className="w-75" />
                                    </div>
                                    <div className="mt-4 text-center text-muted lead pt-3 mb-5">
                                        <p>Ingrese el correo electrónico asociado con su cuenta y le enviaremos un enlace para que pueda cambiar su contraseña</p>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <div className="mb-4">
                                                <InputGroup>
                                                    <InputGroup.Text>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Correo electrónico"
                                                        value={email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </InputGroup>
                                            </div>
                                        </Form.Group>
                                        <div className="d-grid mb-5 text-center pt-2cd">
                                            <Button variant="primary" type="submit" className='btn-primary' onClick={() => setShow(false)}>
                                                Enviar
                                            </Button>
                                        </div>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Row>
                </div>
            </Container>
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-muted h5">Reestablecer Contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify">
                    Si <span style={{ color: '#019741', fontWeight: '600' }}>{email}</span> coincide con la dirección de correo electrónico de su cuenta, se le enviará un enlace para que pueda continuar con el proceso.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default ForgotPassword;
