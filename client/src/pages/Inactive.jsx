import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

import imgInactive from '../assets/imgInactive.svg';
import logoUpTap from '../assets/logoUpTap.png';

const Inactive = () => {
    return (
        <>
            <Container>
                <div className='divContainer'>
                    <Row className='rowContainer align-items-center justify-content-center p-lg-5 bg-light'>
                        <Col md={6}>
                            <Card body className='p-0 p-md p-lg-4 m-0 border-0 bg-transparent'>
                                <div className='text-center'>
                                    <h1 className='display-5 text-center pt-4 text-muted'>¡UPS!</h1>
                                </div>
                                <Image src={imgInactive} className='d-none d-md-block' fluid />
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card body className='border-0 bg-transparent'>
                                <div className="text-center pt-4">
                                    <Link to="/">
                                        <Image src={logoUpTap} className='w-50 pb-3 ' fluid />
                                    </Link>
                                </div>
                                <div className="mt-3 text-center text-muted p-2 lead">
                                    <p>Lo sentimos, el proceso que desea realizar no se encuentra disponible en este momento</p>
                                    <br />
                                    <p>Manténgase atento a la información proporcionada por los administrativos y en el <Link to={'http://www.uptapachula.edu.mx/'} target='_blank' rel="noopener noreferrer" className='text-decoration-none' style={{ color: '#019741', fontWeight: '400' }}>sitio web</Link> de la Universidad</p>
                                    <br />
                                    <p style={{ color: '#721F65', fontWeight: '600' }}>¡Vuelva pronto!</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )

}


export default Inactive;