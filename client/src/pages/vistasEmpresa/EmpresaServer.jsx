import { json } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/backend/empresas/";

export const listEmpresas = async () => {
    return await fetch(API_URL);
};

export const registroEmpresa = async (nuevaEmpresa) => {
    try {
        // Verificar si los datos son válidos antes de enviar la solicitud a la API
        if (nuevaEmpresa?.telefono?.toString().length !== 10) {
            throw new Error('El número de teléfono debe tener 10 dígitos');
        }
        if (!/\S+@\S+\.\S+/.test(nuevaEmpresa.correo)) {
            throw new Error('El correo electrónico no tiene el formato correcto');
        }
        if (!/\S+@\S+\.\S+/.test(nuevaEmpresa.correo_enlace)) {
            throw new Error('El correo electrónico de enlace no tiene el formato correcto');
        }

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nombre": String(nuevaEmpresa.nombre).trim(),
                "rfc": String(nuevaEmpresa.rfc).trim(),
                "titular": String(nuevaEmpresa.titular).trim(),
                "cargo": String(nuevaEmpresa.cargo).trim(),
                "nombre_enlace": String(nuevaEmpresa.nombre_enlace).trim(),
                "correo_enlace": String(nuevaEmpresa.correo_enlace).trim(),
                "correo": String(nuevaEmpresa.correo).trim(),
                "telefono": String(nuevaEmpresa.telefono).trim(),
                "telefono_enlace": String(nuevaEmpresa.telefono_enlace).trim(),
                "entidad": String(nuevaEmpresa.entidad),
                "ciudad": String(nuevaEmpresa.ciudad).trim(),
                "colonia": String(nuevaEmpresa.colonia).trim(),
                "codigo_postal": parseInt(nuevaEmpresa.codigo_postal),
                "calle": String(nuevaEmpresa.calle).trim(),
                "numero": String(nuevaEmpresa.numero).trim(),
                "estado": Boolean(nuevaEmpresa.estado),
                "usuario": String(nuevaEmpresa.usuario).trim(),
                "contraseña": String(nuevaEmpresa.contraseña).trim()
            })
        });

        if (!response.ok) {
            throw new Error(`Empresa resitrada con esxito: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        throw new Error(`Error al registrar la empresa: ${error.message}`);
    }

};