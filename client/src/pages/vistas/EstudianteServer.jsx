import { json } from "react-router-dom";

const API_URL ="http://127.0.0.1:8000/backend/estudiantes/";

export const listEstudiantes = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`Error al obtener datos de la API: ${response.status}`);
    }
    return response.json();
};

export const registroEstudiante = async (nuevoEstudiante) => {
    try {
        // Verificar si los datos son válidos antes de enviar la solicitud a la API
        if (nuevoEstudiante.telefono.toString().length !== 10) {
            throw new Error('El número de teléfono debe tener 10 dígitos');
        }
        if (!/\S+@\S+\.\S+/.test(nuevoEstudiante.correo_pers)) {
            throw new Error('El correo electrónico personal no tiene el formato correcto');
        }
        if (!/\S+@\S+\.\S+/.test(nuevoEstudiante.correo_inst)) {
            throw new Error('El correo electrónico institucional no tiene el formato correcto');
        }

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nombre": String(nuevoEstudiante.nombre).trim(),
                "apellido_pat": String(nuevoEstudiante.apellido_pat).trim(),
                "apellido_mat": String(nuevoEstudiante.apellido_mat).trim(),
                "sexo": String(nuevoEstudiante.sexo).trim(),
                "matricula": parseInt(nuevoEstudiante.matricula),
                "correo_pers": String(nuevoEstudiante.correo_pers).trim(),
                "correo_inst": String(nuevoEstudiante.correo_inst).trim(),
                "telefono": String(nuevoEstudiante.telefono).trim(),
                "estado": Boolean(nuevoEstudiante.estado),
                "nombre_programa": String(nuevoEstudiante.nombre_programa).trim(),
                "usuario": String(nuevoEstudiante.usuario).trim(),
                "contraseña": String(nuevoEstudiante.contraseña).trim()
            })
        });

        if (!response.ok) {
            throw new Error(`Estudiante resitrado con esxito: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        throw new Error(`Error al registrar el estudiante: ${error.message}`);
    }
};