import React from "react";
import "../estilos/estudiosRealizados.css";

const EstudiosRealizados = () => {
    return (
        <section className="section">
            <div className="estudios-realizados-container">
                <h1>Estudios Realizados</h1>
                <ol className="estudios-lista">
                    <li>Bachillerato en Ciencias</li>
                    <li>Certificación en curso de idiomas B1</li>
                    <li>Tecnología Superior en Desarrollo de Software</li>
                </ol>
            </div>
        </section>
    );
};

export default EstudiosRealizados;
