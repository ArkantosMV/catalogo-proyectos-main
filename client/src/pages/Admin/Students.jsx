import React from 'react'
import { Button, Container, Form, Row, Table } from 'react-bootstrap'
import StudentsList from './Components/StudentsList'

const AdminStudents = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <Container className='pt-5 mx-5'>
                    <h1 className='display-4 mb-5'>Estudiantes</h1>
                    <hr />
                    <div>
                        <Row className='pt-4'>
                            <div className="container">
                                <Table striped bordered hover responsive>
                                    <thead className="text-muted text-center">
                                        <tr >
                                            <th>Nombre Completo</th>
                                            <th>Genero</th>
                                            <th>Correo Personal</th>
                                            <th>Teléfono</th>
                                            <th>Matrícula</th>
                                            <th>Correo Institucional</th>
                                            <th>Programa</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {StudentsList.map((dataItem) => (
                                            <tr key={dataItem.matricula}>
                                                <td>{dataItem.nombre} {dataItem.app} {dataItem.apm}</td>
                                                <td>{dataItem.genero}</td>
                                                <td>{dataItem.correop}</td>
                                                <td>{dataItem.tel}</td>
                                                <td>{dataItem.matricula}</td>
                                                <td>{dataItem.correoi}</td>
                                                <td>{dataItem.programa}</td>
                                                <td>
                                                    <Form.Check
                                                        type="switch"
                                                        id={`status-switch-${dataItem.rfc}`}
                                                        label=""
                                                        checked={dataItem.estado}
                                                        onChange={() => handleStatusToggle(dataItem)}
                                                    />
                                                </td>
                                                <td className="text-center">
                                                    <Button variant="primary" className="mb-2">Edit</Button>
                                                    <Button variant="secondary">Delete</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AdminStudents