import React from "react";
import { Table, Button, Form, Container, Row } from "react-bootstrap";
import CompanyList from "./Components/CompanysList";

const AdminCompanys = () => {

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Container className='pt-5 mx-5'>
          <h1 className='display-4 mb-5'>Empresas</h1>
          <hr />
          <div>
            <Row className='pt-4'>
              <div className="container">
                <Table striped bordered hover responsive>
                  <thead className="text-muted text-center">
                    <tr >
                      <th>Nombre</th>
                      <th>RFC</th>
                      <th>Teléfono</th>
                      <th>Titular</th>
                      <th>Cargo</th>
                      <th>Nombre enlace</th>
                      <th>Teléfono enlace</th>
                      <th>Correo enlace</th>
                      <th>Dirección</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CompanyList.map((dataItem) => (
                      <tr key={dataItem.rfc}>
                        <td>{dataItem.nombre}</td>
                        <td>{dataItem.rfc}</td>
                        <td>{dataItem.tel_c}</td>
                        <td>{dataItem.titular}</td>
                        <td>{dataItem.cargo}</td>
                        <td>{dataItem.nombre_e}</td>
                        <td>{dataItem.tel_e}</td>
                        <td>{dataItem.correo_e}</td>
                        <td>{dataItem.ciudad}, {dataItem.entidad}. {dataItem.calle}, {dataItem.numero}, {dataItem.colonia} {dataItem.cp} </td>
                        <td>
                          <Form.Check
                            type="switch"
                            id={`status-switch-${dataItem.rfc}`}
                            label=""
                            checked={dataItem.estado}
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

export default AdminCompanys