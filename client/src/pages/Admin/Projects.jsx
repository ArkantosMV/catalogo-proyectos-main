import React, { useState } from "react";
import { Table, Button, Modal, Form, Container, Row } from "react-bootstrap";
import ProjectsList from "./Components/ProjectsList";

const AdminProjects = () => {

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Container className='pt-5 mx-5'>
          <h1 className='display-4 mb-5'>Proyectos</h1>
          <hr />
          <div>
            <Row className='pt-4'>
              <div className="container">
                <Table striped bordered hover responsive>
                  <thead className="text-muted text-center">
                    <tr >
                      <th>Nombre</th>
                      <th>Programa</th>
                      <th>Proceso</th>
                      <th>Vacantes</th>
                      <th>Periodo</th>
                      <th>Modalidad</th>
                      <th>Asesor</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ProjectsList.map((dataItem) => (
                      <tr key={dataItem.nombre}>
                        <td>{dataItem.nombre}</td>
                        <td>{dataItem.programa}</td>
                        <td>{dataItem.proceso}</td>
                        <td>{dataItem.vacantes}</td>
                        <td>{dataItem.periodo}</td>
                        <td>{dataItem.modalidad}</td>
                        <td>{dataItem.asesor}</td>
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
                          <Button variant="primary" className="me-2">Edit</Button>
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

export default AdminProjects