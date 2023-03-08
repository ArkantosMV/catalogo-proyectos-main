import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Container, Alert, Row, Col, Image, Card, InputGroup, ToggleButton } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import logoUpTap from '../assets/logoUpTap.png';
import imgLogin from '../assets/imgLogin.svg';

import '../styles/App.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "203453" && password === "203453") {
      window.location.href = "/StudentHome";
    } else if (username === "Universidad Politécnica de Tapachula" && password === "UPT101105P97") {
      window.location.href = "/CompanyHome";
    } else if (username === "Admin" && password === "Admin") {
      window.location.href = "/AdminHome"; 
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <Container>
        <div className='divContainer'>
          <Row className='rowContainer align-items-center justify-content-center m-3 bg-light p-xl-3'>
            <Col md={6}>
              <Card body className='p-0 p-lg-4 m-0 border-0 bg-transparent '>
                <div className='mb-4 text-center'>
                  <h1 className='display-4 text-center mb-2 mt-5 text-muted'>INICIO DE SESIÓN</h1>
                  <p className='text-muted text-center mb-2'>Catálogo de Proyectos para Estancias y Estadías</p>
                </div>
                <Image src={imgLogin} className='d-none d-md-block' fluid />
              </Card>
            </Col>
            <Col md={6}>
              <Card body className='py-sm-5 p-0 p-md p-lg-4 m-0 border-0 bg-transparent'>
                <div className='text-center my-5'>
                  <Image src={logoUpTap} fluid className='w-75' />
                </div>
                <Form onSubmit={handleSubmit}>
                  <div className='mb-4 mt-5 pt-3'>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        type='text'
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className='mb-2'>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Contraseña"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <ToggleButton
                        id='toggle-check'
                        type='checkbox'
                        variant='outline-secondary'
                        style={{}}
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.currentTarget.checked)}>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                      </ToggleButton>
                    </InputGroup>
                  </div>
                  <div className='mb-5'>
                    <Link to='/ForgotPassword' className='small text-muted text-decoration-none'>¿Olvidó su contraseña?</Link>
                  </div>
                  <div className="d-grid mb-3 text-center">
                    <Button variant="primary" type="submit" className='btn-primary'>
                      Iniciar Sesión
                    </Button>
                  </div>
                </Form>
                <div>
                  <p className='small text-muted text-decoration-none text-center mb-5'>¿Aún no tiene una cuenta? <Link to='/SignUp' className='text-decoration-none link' style={{ color: '#721F65', fontWeight: '600' }}>Regístrese</Link></p>
                </div>
                {showError && (
                  <Alert variant="danger" style={{ marginTop: '1rem' }}>
                    Incorrect email or password.
                  </Alert>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Login;