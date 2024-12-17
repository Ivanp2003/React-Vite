import React from "react";
import DatosPersonales from "./componentes/DatosPersonales";
import EstudiosRealizados from "./componentes/EstudiosRealizados";
import HerramientasUtilizadas from "./componentes/HerramientasUtilizadas";
import DeportesFavoritos from "./componentes/DeportesFavoritos";

const App = () => {
  return (
    <div>
      <DatosPersonales /> 
      <EstudiosRealizados />
      <HerramientasUtilizadas />
      <DeportesFavoritos />
    </div>
  );
};

export default App;
