import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Col, Container, Image, ProgressBar, Row, Form } from "react-bootstrap";

import imgRegisterCompany from "../../assets/imgRegisterCompany.svg"

import * as EmpresaServer from "../vistasEmpresa/EmpresaServer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SignUpCompany = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
   
  });

  //datos que se van a capturar en el formulario
  //datos que se van a capturar en el formulario
  const initialState = [{
    id: 0, nombre: null, rfc: null, titular: null, cargo: null, correo: null,
    nombre_enlace: null, correo_enlace: null, telefono: null,telefono_enlace: null, entidad: null, ciudad: null
    , colonia: null, codigo_postal: null, calle: null, numero: null, estado: "", usuario:null ,contraseña: null
  }];

  const [empresa, setEmpresa] = useState(initialState);
  //captura los datos de los campos
  const handleInputChange = async (event) => {
    const value = event.target.value;
    const usuario = event.target.name === "rfc" ? value : empresa.usuario;
    const contraseña = event.target.name === "rfc" ? value : empresa.contraseña;

    // asignar valor a usuario y contraseña


    setFormData({
      ...formData,
      [event.target.name]: value,
      usuario: usuario,
      contraseña: contraseña
    });

    //Se asegura que los campos coincidan con nombre de cada campo del formulario
    setEmpresa({ ...empresa, [event.target.name]: event.target.value });
  };
  const user = {
    Usuario: empresa.rfc,
    Contraseña: empresa.rfc
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStep(step + 1);

    // obtener usuario y contraseña del estado de la empresa

    try {
      const res = await EmpresaServer.registroEmpresa(empresa);

      if (!res.ok) {
        throw new Error('Registro enviado correctamente');
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const progressValue = (step / 4) * 100;

  return (
    <>
      <Container>
        <div className="divContainer p-3">
          <Row className="d-flex rowContainer p-3 bg-light justify-content-center">
            <Link to="/" className="text-muted text-decoration-none m-3"><FontAwesomeIcon icon={faArrowRightFromBracket} className='me-1' /> Regresar</Link>
            <Row className='align-items-center justify-content-center px-5'>
              <Col md={6} className="p-0 m-0 text-center">
                <Card body className='p-0 p-md p-lg-4 m-0 border-0 bg-transparent'>
                  <div className='text-center'>
                    <h1 className='display-6 text-center text-muted pt-4'>CREAR CUENTA</h1>
                  </div>
                  <div className="text-center text-muted lead">
                    <p>Registro de Empresas</p>
                  </div>
                  <Image src={imgRegisterCompany} className='d-none d-md-block' fluid />
                </Card>
              </Col>
              <Col md={6} className="text-center">
                {step === 1 && (
                  <Row className='py-3'>
                    <div className="text-center text-muted lead">
                      <p>Paso {step}</p>
                    </div>
                    <h4 lg={3} className='text-muted mb-4'>Información general</h4>
                    <hr />
                    <Col className="px-5 pt-4">
                      <Form onSubmit={handleSubmit} className='px-4'>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"nombre"} value={empresa.nombre} onChange={handleInputChange} required placeholder='Nombre o razón social' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"rfc"} value={empresa.rfc} onChange={handleInputChange} required placeholder='RFC' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"titular"} value={empresa.titular} onChange={handleInputChange} required placeholder='Titular de la empresa' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"cargo"} value={empresa.cargo} onChange={handleInputChange} required placeholder='Cargo' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"telefono"} value={empresa.telefono} onChange={handleInputChange} required placeholder='Teléfono' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' type="email" name={"correo"} value={empresa.correo} onChange={handleInputChange} required placeholder='Correo electronico' />
                          </Form.Group>
                        </Row>
                        <div className='text-center'>
                          <Button variant="primary" type="submit">
                            Siguiente
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                )}
                {step === 2 && (
                  <Row className='py-3'>
                    <div className="text-center text-muted lead">
                      <p>Paso {step}</p>
                    </div>
                    <h4 lg={3} className='text-muted mb-4'>Información de enlace</h4>
                    <hr />
                    <Col className="px-5 pt-4">
                      <Form onSubmit={handleSubmit} className='px-4'>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"nombre_enlace"} value={empresa.nombre_enlace} onChange={handleInputChange} required placeholder='Nombre(s) y apellidos' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"telefono_enlace"} value={empresa.telefono_enlace} onChange={handleInputChange} required placeholder='Teléfono de contacto' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' type="email" name={"correo_enlace"} value={empresa.correo_enlace} onChange={handleInputChange} required placeholder='Correo electrónico' />
                          </Form.Group>
                        </Row>
                        <div className='text-center'>
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
                  <Row className='py-3'>
                    <div className="text-center text-muted lead">
                      <p>Paso {step}</p>
                    </div>
                    <h4 lg={3} className='text-muted mb-4'>Dirección</h4>
                    <hr />
                    <Col className="px-5 pt-4">
                      <Form onSubmit={handleSubmit} className='px-4'>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"entidad"} value={empresa.entidad} onChange={handleInputChange} required placeholder='Entidad federativa' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"ciudad"} value={empresa.ciudad} onChange={handleInputChange} required placeholder='Ciudad' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"codigo_postal"} value={empresa.codigo_postal} onChange={handleInputChange} required placeholder='Código postal' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"colonia"} value={empresa.colonia} onChange={handleInputChange} required placeholder='Colonia' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"calle"} value={empresa.calle} onChange={handleInputChange} required placeholder='Calle' />
                          </Form.Group>
                        </Row>
                        <Row>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Control className='text-muted' name={"numero"} value={empresa.numero} onChange={handleInputChange} required placeholder='Número' />
                          </Form.Group>
                        </Row>
                        <div className='text-center'>
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
                    <Row className='py-3'>
                      <div className="text-center text-muted lead">
                        <p>Paso {step}</p>
                      </div>
                      <h4 lg={3} className='text-muted mb-4'>Resumen</h4>
                      <hr />
                      <Col className="px-5">
                        <div className='text-center text-muted p-2 lead'>
                          <FontAwesomeIcon icon={faCircleCheck} className='fa-5x mb-3' style={{ color: '#28a745' }} />
                          <p style={{ fontWeight: '400' }}>
                            <span style={{ color: '#28a745' }}> ¡Felicidades!</span> Su cuenta ha sido creada correctamente.
                            <br /><br />
                            Ahora puede iniciar sesión utiilizando el siguiente <span style={{ color: '#901e78' }}>nombre de usuario</span> y <span style={{ color: '#901e78', fontWeight: '400' }}>contraseña:</span>
                          </p>
                        </div>
                        <div className="text-start px-5">
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control className='text-muted' readOnly defaultValue={user.Usuario} />
                          </Form.Group>
                          <Form.Group as={Col} lg className='pb-4'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control className='text-muted' readOnly defaultValue={user.Contraseña} />
                          </Form.Group>
                          <div className="text-center">
                            <Link to='/' className='text-decoration-none text-white'>
                              <Button className='m-4' variant="primary">
                                Iniciar Sesión
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
              <div className="px-4">
                <ProgressBar now={progressValue} className='p-0 mb-4' />
              </div>
            </Row>
          </Row>
        </div>
      </Container>
    </>
  )

}


export default SignUpCompany;