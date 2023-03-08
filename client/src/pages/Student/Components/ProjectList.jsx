import React from 'react'
import { Container, Row } from 'react-bootstrap'

import Projects from './Projects'
import ProjectCard from './ProjectCard'
import NoProject from './NoProject'

const decreaseVacancies = (project) => {
  const updatedProjects = Projects.map((p) => {
    if (p.nombre === project.nombre) {
      return {
        ...p,
        vacantes: p.vacantes - 1
      };
    }
    return p;
  });
  return updatedProjects;
};

const ProjectList = ({ programa }) => {
  const filteredProjects = Projects.filter(
    (project) => project.programa === programa
  );

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Container className='pt-5 mx-5'>
          <h1 className='display-4 mb-5'>Catálogo de Proyectos</h1>
          <hr />
          <div>
            <Row className='pt-4'>
              <div className="d-flex flex-wrap px-5">
                {filteredProjects.length === 0 ? (
                  <NoProject />
                ) : (
                  filteredProjects.map((project) =>
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
                      empresa={project.empresa}
                      ciudad={project.ciudad}
                      entidad={project.entidad}
                      calle={project.calle}
                      numero={project.numero}
                      colonia={project.colonia}
                      cp={project.cp}
                      titular={project.titular}
                      cargo={project.cargo}
                      telefono={project.telefono}
                      correo={project.correo}
                      onSelect={decreaseVacancies}
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

export default ProjectList