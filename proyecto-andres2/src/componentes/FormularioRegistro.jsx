import React, { useState } from 'react';
import '../estilos/formularioRegistro.css';

const FormularioRegistro = ({ credito, setCredito, docente, setDocente }) => {
    // Estados locales para los demás campos
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [carrera, setCarrera] = useState('');
    const [materia, setMateria] = useState('');
    const [fecha, setFecha] = useState('');

    const [mensaje, setMensaje] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que se recargue la página
        setMensaje(
            `¡Gracias, ${nombre}!\nTus datos han sido registrados.\nMateria: ${materia}\nFecha: ${fecha}\nNúmero de crédito: ${credito}\nDocente: ${docente}`
        );
    };

    return (
        <div className="formulario-container">
            <h2>Registro de Estudiante</h2>
            <form onSubmit={handleSubmit}>
                {/* Campo de nombre */}
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresa tu nombre"
                    />
                </label>

                {/* Campo de correo */}
                <label>
                    Correo electrónico:
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="Ingresa tu correo"
                    />
                </label>

                {/* Campo de carrera */}
                <label>
                    Carrera:
                    <input
                        type="text"
                        value={carrera}
                        onChange={(e) => setCarrera(e.target.value)}
                        placeholder="Ingresa tu carrera"
                    />
                </label>

                {/* Campo de materia */}
                <label>
                    Materia:
                    <input
                        type="text"
                        value={materia}
                        onChange={(e) => setMateria(e.target.value)}
                        placeholder="Ingresa la materia"
                    />
                </label>

                {/* Campo de fecha */}
                <label>
                    Fecha de inscripción:
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </label>

                {/* Campo de número de crédito */}
                <label>
                    Número de crédito:
                    <input
                        type="number"
                        value={credito}
                        onChange={(e) => setCredito(e.target.value)}
                        placeholder="Ingresa el número de crédito"
                    />
                </label>

                {/* Campo de docente */}
                <label>
                    Docente:
                    <input
                        type="text"
                        value={docente}
                        onChange={(e) => setDocente(e.target.value)}
                        placeholder="Ingresa el nombre del docente"
                    />
                </label>

                {/* Botón de envío */}
                <button type="submit">Registrar</button>
            </form>

            {/* Mensaje de confirmación */}
            {mensaje && (
                <div className="mensaje-confirmacion">
                    {mensaje}
                </div>
            )}
        </div>
    );
};

export default FormularioRegistro;
