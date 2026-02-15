import './App.css';
import React, {useState} from 'react';
import Inicio from "./components/Inicio";
import CrearTarea from "./components/CrearTarea";
import ListaTareas from "./components/ListaTareas"

function App() {
  // Estado que controla qué vista se muestra 
  const [vista, setVista] = useState("inicio");
  // Estado que almacena las tareas
  const [tareas, setTareas] = useState([]);

  // Función para agregar una nueva tarea
  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas,nuevaTarea]);
    setVista("lista");
  };

  // Renderizado condicional
  if (vista === "crear") {
    return <CrearTarea onAgregar={agregarTarea} onVolver={() => setVista("inicio")} />;
  }
   if (vista === "lista") {
    return <ListaTareas tareas={tareas} onVolver={() => setVista("inicio")} />;
  }

  return (
    < Inicio onCrear={() => setVista("crear")} onVerLista={() => setVista("lista")}/>
  );
}

export default App;
