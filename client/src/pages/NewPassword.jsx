import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Col, Container, Form, Image, InputGroup, Modal, Row, ToggleButton } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";

import logoUpTap from '../assets/logoUpTap.png';
import imgNewPassword from '../assets/imgNewPassword.svg';

const NewPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            setShowModal(true);
        }
    };

    return (
        <>
            <Container>
                <div className="divContainer p-3">
                    <Row className="rowContainer p-3 bg-light">
                        <Link to="/" className="text-muted text-decoration-none m-3"><FontAwesomeIcon icon={faArrowRightFromBracket} className='me-1' /> Regresar</Link>
                        <Row className='align-items-center justify-content-center m-0'>
                            <Col className="p-0 m-0">
                                <Card body className='p-lg-4 mx-xl-5 border-0 bg-transparent p-0 m-0'>
                                    <div className='mb-5 text-center'>
                                        <h1 className='display-5 text-center text-muted'>NUEVA CONTRASEÑA</h1>
                                    </div>
                                    <Image src={imgNewPassword} className='d-none d-md-block my-5' fluid />
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card body className='p-0 m-0 border-0 bg-transparent'>
                                    <div className='text-center'>
                                        <Image src={logoUpTap} fluid className="w-75" />
                                    </div>
                                    <div className="mt-4 text-center text-muted lead pt-3 mb-5">
                                        <p>Ingrese una nueva contraseña para su cuenta</p>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className='mb-4 mt-5 pt-3'>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faKey} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Nueva contraseña"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    required
                                                />
                                                <ToggleButton
                                                    id='toggle-check'
                                                    type='checkbox'
                                                    variant='outline-secondary'
                                                    checked={showPassword}
                                                    onChange={(e) => setShowPassword(e.currentTarget.checked)}>
                                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                                </ToggleButton>
                                            </InputGroup>
                                        </div>
                                        <InputGroup className="mb-5">
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faKey} />
                                            </InputGroup.Text>
                                            <Form.Control
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Confirmar nueva contraseña"
                                                value={confirmPassword}
                                                onChange={handleConfirmPasswordChange}
                                                required
                                            />
                                            <ToggleButton
                                                id='toggle-check'
                                                type='checkbox'
                                                variant='outline-secondary'
                                                checked={showPassword}
                                                onChange={(e) => setShowPassword(e.currentTarget.checked)}>
                                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                            </ToggleButton>
                                        </InputGroup>
                                        <div className="d-grid mb-3 text-center pt-2cd">
                                            <Button variant="primary" type="submit" className="btn-primary">
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
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-muted h5">Nueva contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>Su contraseña ha sido modificada con éxito.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        <Link to={"/"} className='text-decoration-none text-white'>Volver al inicio</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default NewPassword;