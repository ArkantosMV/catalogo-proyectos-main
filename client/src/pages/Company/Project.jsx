import React from 'react'
import { Container, Row } from 'react-bootstrap'

import Projects from './Components/Projects'
import ProjectCard from './Components/ProjectCard'
import NoProject from './Components/NoProject'

const CompanyProject = () => {

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Container className='pt-5 mx-5'>
          <h1 className='display-4 mb-5'>Lista de Proyectos</h1>
          <hr />
          <div>
            <Row className='pt-4'>
              <div className="d-flex flex-wrap px-5">
                {Projects.length === 0 ? (
                  <NoProject />
                ) : (
                  Projects.map((project) =>
                    <ProjectCard
                      key={project.nombre}
                      nombre={project.nombre}
                      objetivo={project.objetivo}
                      justificacion={project.justificacion}
                      programa={project.programa}
                      proceso={project.proceso}
                      vacantes={project.vacantes}
                      periodo={project.periodo}
                      modalidad={project.modalidad}
                      asesor={project.asesor}
                    />
                  )
                )}
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CompanyProject