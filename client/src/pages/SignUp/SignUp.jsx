import React from "react";
import { Link } from "react-router-dom";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import * as EstudianteServer from "../vistas/EstudianteServer";
import * as EmpresaServer from "../vistasEmpresa/EmpresaServer";
const SignUp = () => {
    const[step, setStep] = useState(1);
    const [formData, setFormData] = useState({

    });
    //datos que se van a capturar en el formulario
    const initialState = {
        id_usuario:""
    };

    const [estudiante, setEstudiante] = useState(initialState);
    const [empresa, setEmpresa] = useState(initialState);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,

        });
        //Se asegura que los campos coincidan con nombre de cada campo del formulario
        setEstudiante({ ...estudiante, [event.target.name]: event.target.value });
        setEmpresa({...empresa,[event.target.name]: event.target.value});
        //console.log(event.target.name);
        //console.log(event.target.value);
    };

//al presionar el boton siguiente se hace el envió de los datos y muestra en consola
    const handleSubmit = async (event) => {
        event.preventDefault();
        setStep(step + 1);
        try {
            let res;
            res = await EstudianteServer.registroEstudiante(estudiante);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        try {
            let res;
            res = await EmpresaServer.registroEmpresa(empresa);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const progressValue = (step / 3) * 100;

    return (
        <>
            <Form onSubmit={handleSubmit}>
            <Container >
                <div className="divContainer p-3">
                    <Row className="rowContainer p-3 bg-light">
                        <Link to="/" className="text-muted text-decoration-none m-3"><FontAwesomeIcon icon={faArrowRightFromBracket} className='me-1' /> Regresar</Link>
                        <div className='text-center'>
                            <h1 className='display-5 text-center text-muted pt-4'>CREAR CUENTA</h1>
                        </div>
                        <div className="text-center text-muted lead">
                            <p>Seleccione el tipo de cuenta correspondiente</p>
                        </div>
                        <Row className='align-items-center justify-content-center p-5'>
                            <Col md={6} className="p-0 m-0 text-center">
                                <Link to={'/SignUpStudent'}>
                                        <Button type="submit" className="p-5 rowContainer" name="id_usuario" value={estudiante.id_usuario} onChange={handleInputChange} variant="light" style={{minHeight:'400px', minWidth:'420px'}}>
                                        <Row>
                                            <div className="text-center text-muted lead mt-4">
                                                    <p name="id_usuario" value={estudiante.id_usuario} onChange={handleInputChange} className="h3">Estudiante</p>
                                            </div>
                                        </Row>
                                        <Row className="px-5">
                                            <Card className='p-0 p-md p-lg-4 m-0 border-0 bg-transparent'>
                                                    <FontAwesomeIcon name="id_usuario" value={estudiante.id_usuario} onChange={handleInputChange} icon={faGraduationCap} className='fa-10x' style={{ color: '#28a745' }} />
                                            </Card>
                                        </Row>
                                    </Button>
                                </Link>
                            </Col>
                            <Col md={6} className="p-0 m-0 text-center">
                                <Link to={'/SignUpCompany'}>
                                    <Button type="submit" className="p-5 rowContainer" name="id_ususario" value={estudiante.id_usuario}  onChange={handleInputChange} variant="light" style={{minHeight:'400px', minWidth:'420px'}}>
                                        <Row>
                                            <div className="text-center text-muted lead mt-4">
                                                <p className="h3">Empresa</p>
                                            </div>
                                        </Row>
                                        <Row className="px-5">
                                            <Card className='p-0 p-md p-lg-4 m-0 border-0 bg-transparent'>
                                                <FontAwesomeIcon icon={faBriefcase} className='fa-10x' style={{ color: '#901e78' }} />
                                            </Card>
                                        </Row>
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                       
                    </Row>
                </div>
            </Container>
            </Form>
        </>
    )

}


export default SignUp;