import React, { useEffect, useState } from 'react';
import * as EmpresaServer from './EmpresaServer';
import EmpresaItem from './EmpresaItem';
const EmpresaList = () => {
    const [empresas, setEmpresas] = useState([]);

    const listEmpresas = async () => {
        try {
            const res = await EmpresaServer.listEmpresas();
            const data = await res.json();
            setEmpresas(data.empresas);
        } catch (error) {
            console.log("Error al obtener la lista de estudiantes:", error);
        }
    };

    useEffect(() => {
        listEmpresas();
    }, []);

    return (
        <div className="row">
            {empresas.map((empresa) => (
                <div className="row" key={empresa.id}>
                    <EstudianteItem empresa={empresa} />
                </div>


            ))}
        </div>
    );
};

export default EstudianteList;
