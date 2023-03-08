import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import imgNoProjectCompany from '../../../assets/imgNoProjectsCompany.svg'

const NoProject = () => {
    return (
        <>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <div className='text-center'>
                        <h1 className='display-5 text-center text-muted'>¡UPS!</h1>
                    </div>
                    <Col lg={6}>
                        <Card body className='p-0 p-md m-0 border-0 bg-transparent'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <Image src={imgNoProjectCompany} className='d-none d-md-block' fluid style={{ maxHeight: '500px' }} />
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card body className='border-0 bg-transparent'>
                            <div className="text-center">
                                <Link to="/">
                                </Link>
                            </div>
                            <div className="text-center text-muted p-2 lead">
                                <p>Parece ser que usted aún no cuenta con ningún proyecto registrado</p>
                                <br />
                                <p style={{ color: '#721F65', fontWeight: '600' }}>¡Vamos a agregar uno!</p>
                                <br />
                                <Link to='/CompanyRegister'><Button variant='primary'>Registrar Proyecto</Button></Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NoProject