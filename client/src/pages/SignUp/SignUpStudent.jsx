import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Col, Container, Image, ProgressBar, Row, Form } from "react-bootstrap";

import imgRegisterStudents from "../../assets/imgRegisterStudents.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import * as EstudianteServer from "../vistas/EstudianteServer";

const SignUpStudent = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        
    
    });
    //datos que se van a capturar en el formulario
    const initialState = [{id: 0, nombre:"",  apellido_pat: "", apellido_mat: "", sexo: "", matricula: "",
                          correo_pers: "", correo_inst: "", telefono: "", nombre_programa:"", usuario:"",contraseña:"" }];

    const [estudiante, setEstudiante] = useState(initialState);
    //captura los datos de los campos
    const handleInputChange = async (event) => {
        const value = event.target.value;

        // asignar valor a usuario y contraseña
        const usuario = value;
        const contraseña = value;

        setFormData({
            ...formData,
            [event.target.name]: value,
            usuario: usuario,
            contraseña: contraseña
        });

        //Se asegura que los campos coincidan con nombre de cada campo del formulario
        setEstudiante({ ...estudiante, [event.target.name]: event.target.value });
    };
    const user = {
        Usuario: estudiante.matricula,
        Contraseña: estudiante.matricula
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setStep(step + 1);

        // obtener usuario y contraseña del estado de estudiante
        const { matricula } = estudiante;
        const usuario = matricula;
        const contraseña = matricula;

        try {
            const res = await EstudianteServer.registroEstudiante(estudiante);
            
            if (!res.ok) {
                throw new Error('Registro enviado correctamente');
            }

            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    const progressValue = (step / 3)* 100;

    
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
                                        <p>Registro de Estudiantes</p>
                                    </div>
                                    <Image src={imgRegisterStudents} className='d-none d-md-block' fluid />
                                </Card>
                            </Col>
                            <Col md={6} className="text-center">
                                {step === 1 && (
                                    <Row className='py-3'>
                                        <div className="text-center text-muted lead">
                                            <p>Paso {step}</p>
                                        </div>
                                        <h4 lg={3} className='text-muted mb-4'>Información personal</h4>
                                        <hr />
                                        <Col className="px-5 pt-4">
                                            <Form onSubmit={handleSubmit} className='px-4'>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Control name={"nombre"} value={estudiante.nombre} onChange={handleInputChange} className='text-muted' required placeholder='Nombre(s)' />
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Control name={"apellido_pat"} value={estudiante.apellido_pat} onChange={handleInputChange} className='text-muted' required placeholder='Apellido Paterno' />
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Control name={"apellido_mat"} value={estudiante.apellido_mat} onChange={handleInputChange} className='text-muted' required placeholder='Apellido Materno' />
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Select required className='text-muted' name={"sexo"} value={estudiante.sexo} onChange={handleInputChange}>
                                                            <option value='' disabled selected>Género</option>
                                                            <option value="Femenino">Femenino</option>
                                                            <option value="Masculino">Masculino</option>
                                                            <option value="Otro">Otro</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Control className='text-muted' name={"correo_pers"} value={estudiante.correo_pers} onChange={handleInputChange} type="email" required placeholder='Correo Personal' />
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Control className='text-muted' name={"telefono"} value={estudiante.telefono} onChange={handleInputChange} required placeholder='Teléfono de Contacto' />
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
                                        <h4 lg={3} className='text-muted mb-4'>Información escolar</h4>
                                        <hr />
                                        <Col className="px-5 pt-4">
                                            <Form onSubmit={handleSubmit} className='px-4'>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Control className='text-muted' required placeholder='Matrícula' name={"matricula"} value={estudiante.matricula} onChange={handleInputChange} />
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Control className='text-muted' name={"correo_inst"} value={estudiante.correo_inst} onChange={handleInputChange} type="email" required placeholder='Correo institucional' />
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg className='pb-4'>
                                                        <Form.Select required className='text-muted' name={"nombre_programa"} value={estudiante.nombre_programa} onChange={handleInputChange}>
                                                            <option value='' disabled selected>Programa educativo</option>
                                                            <option value="INGENIERÍA AGROINDUSTRIAL">INGENIERÍA AGROINDUSTRIAL</option>
                                                            <option value="INGENIERÍA EN SOFTWARE">INGENIERÍA EN SOFTWARE</option>
                                                            <option value="INGENIERÍA EN ANIMACIÓN Y EFECTOS VISUALES">INGENIERÍA EN ANIMACIÓN Y EFECTOS VISUALES</option>
                                                            <option value="INGENIERÍA EN ENERGÍA">INGENIERÍA EN ENERGÍA</option>
                                                            <option value="INGENIERÍA EN LOGÍSTICA Y TRANSPORTE">INGENIERÍA EN LOGÍSTICA Y TRANSPORTE</option>
                                                            <option value="INGENIERÍA EN NANOTECNOLOGÍA">INGENIERÍA EN NANOTECNOLOGÍA</option>
                                                            <option value="INGENIERÍA EN SISTEMAS AUTOMOTRICES">INGENIERÍA EN SISTEMAS AUTOMOTRICES</option>
                                                            <option value="INGENIERÍA EN TECNOLOGÍA AMBIENTAL">INGENIERÍA EN TECNOLOGÍA AMBIENTAL</option>
                                                            <option value="INGENIERÍA FINANCIERA">INGENIERÍA FINANCIERA</option>
                                                            <option value="INGENIERÍA MECATRÓNICA">INGENIERÍA MECATRÓNICA</option>
                                                        </Form.Select>
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
                                {step > 2 && (
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
                                <ProgressBar now={progressValue} className='p-0 mb-4'/>
                            </div>
                        </Row>
                    </Row>
                </div>
            </Container>
        </>
    )

}


export default SignUpStudent;