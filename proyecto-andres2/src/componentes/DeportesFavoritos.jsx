import React from "react";
import "../estilos/deportesFavoritos.css";

// Importa las imágenes explícitamente
import futbol from "../imagenes-src/futbol.jpg";
import mma from "../imagenes-src/mma.jpg";
import natacion from "../imagenes-src/natacion.jpg";
import esports from "../imagenes-src/esports.jpg";

const DeportesFavoritos = () => {
    return (
        <section className="section gallery">
            <h1>Deportes Favoritos</h1>
            <div className="gallery-item">
                <img src={futbol} alt="Fútbol" />
                <p>Fútbol</p>
            </div>
            <div className="gallery-item">
                <img src={mma} alt="Artes Marciales Mixtas" />
                <p>Artes Marciales Mixtas</p>
            </div>
            <div className="gallery-item">
                <img src={natacion} alt="Natación" />
                <p>Natación</p>
            </div>
            <div className="gallery-item">
                <img src={esports} alt="E sports" />
                <p>E sports</p>
            </div>
        </section>
    );
};

export default DeportesFavoritos;
