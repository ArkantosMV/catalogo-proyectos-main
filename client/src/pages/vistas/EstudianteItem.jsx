import React from "react";


const EstudianteItem=({estudiante})=>{
    //console.log(props.estudiante);
    //console.log(estudiante);
    return (
        <div className="col-md-4">
            <div className="card card-body">
                <h2 className="card-tittle">{estudiante.nombre}</h2>
                <p className="card-text">ID Estudiante: <strong>{estudiante.id}</strong></p>
                <p className="card-text">Apellido Paterno: <strong>{estudiante.apellido_pat}</strong></p>
                <p className="card-text">Apellido Materno: <strong>{estudiante.apellido_mat}</strong></p>
                <p className="card-text">Género: <strong>{estudiante.sexo}</strong></p>
                <p className="card-text">Matricula: <strong>{estudiante.matricula}</strong></p>
                <p className="card-text">Correo Personal: <strong>{estudiante.correo_pers}</strong></p>
                <p className="card-text">Correo Institucional: <strong>{estudiante.correo_inst}</strong></p>
                <p className="card-text">Apellido Paterno: <strong>{estudiante.apellido_pat}</strong></p>
                <p className="card-text">Telefono: <strong>{estudiante.telefono}</strong></p>
                <p className="card-text">Activo: <strong>{estudiante.estado}</strong></p>
                <p className="card-text">ID Usuario: <strong>{estudiante.id_usuario}</strong></p>
                <p className="card-text">Programa Educativo: <strong>{estudiante.id_programa}</strong></p>
            </div>
        </div>

    );
};

export default EstudianteItem;