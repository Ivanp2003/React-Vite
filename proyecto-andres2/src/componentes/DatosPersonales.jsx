import React from "react";
import "../estilos/datosPersonales.css";

const DatosPersonales = () => {
    return (
        <div className="datos-personales-container">
            <h2>Datos Personales</h2>
            <img
                src="/imagenes-public/Foto.jpg" 
                alt="Foto personal"
                className="datos-personales-img"
            />
            <p><strong>Nombres:</strong> Iván Andrés Panchi Chávez</p>
            <p><strong>Dirección:</strong> Alpahuasi E3-13 y Pisque Quito, Ecuador</p>
            <p><strong>Teléfono:</strong> +593 98 551 0920</p>
            <p><strong>Correo Electrónico:</strong> andrespanchichavez@gmail.com</p>
        </div>
    );
};

export default DatosPersonales;
