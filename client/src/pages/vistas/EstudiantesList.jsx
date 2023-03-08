import React, { useEffect, useState } from 'react';
import * as EstudianteServer from './EstudianteServer';
import EstudianteItem from './EstudianteItem';
const EstudianteList = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    const listEstudiantes = async () => {
        try {
            const res = await EstudianteServer.listEstudiantes();
            const data = await res.json();
            setEstudiantes(data.estudiantes);
        } catch (error) {
            console.log("Error al obtener la lista de estudiantes:", error);
        }
    };

    useEffect(() => {
        listEstudiantes();
    }, []);

    return (
        <div className="row">
            {estudiantes.map((estudiante) => (
                <div className="row" key={estudiante.id}>
                    <EstudianteItem estudiante={estudiante}/>
                </div>


            ))}
        </div>
    );
};

export default EstudianteList;
