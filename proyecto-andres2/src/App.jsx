// App.jsx
import React, { useState } from "react";
import DatosPersonales from "./componentes/DatosPersonales";
import EstudiosRealizados from "./componentes/EstudiosRealizados";
import HerramientasUtilizadas from "./componentes/HerramientasUtilizadas";
import DeportesFavoritos from "./componentes/DeportesFavoritos";
import FormularioRegistro from "./componentes/FormularioRegistro";

const App = () => {
  // Estados para Número de crédito y Docente
  const [credito, setCredito] = useState("");
  const [docente, setDocente] = useState("");

  return (
    <div>
      <DatosPersonales />
      <EstudiosRealizados />
      <HerramientasUtilizadas />
      <DeportesFavoritos />

      {/* Pasamos el estado y las funciones de actualización como props */}
      <FormularioRegistro
        credito={credito}
        setCredito={setCredito}
        docente={docente}
        setDocente={setDocente}
      />
    </div>
  );
};

export default App;
