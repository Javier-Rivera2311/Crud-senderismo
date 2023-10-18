import React from "react";
import { useState } from 'react';
import './fondo.css'

function FormularioFuncional() {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('opcion1');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
    
  };

  const handleOpcionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Haz creado una ruta!!!');
  }

  return (
    <div className="card shadow">
      <div 
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: "20px",
        borderRadius: "10px",
        
      }}>
        <form onSubmit={handleFormSubmit} style={{display: "flex", flexDirection: "column",}}>
          <label style={{frontsize: '2m'}}>Nombre de la ruta:</label>
          <input type="text" value={nombre} onChange={handleNombreChange} /><br/>

          <label>Descripción de la ruta:</label>
          <textarea value={comentario} onChange={handleComentarioChange} /><br/>

          <label>Selecciona la dificultad de la ruta:</label>
          <select value={opcionSeleccionada} onChange={handleOpcionChange}>
            <option value="opcion1">Principiante</option>
            <option value="opcion2">Intermedio</option>
            <option value="opcion3">Experto</option>
            <option value="opcion4">Te lleva a conocer a Dios</option>
          </select><br/>

          <label>Tipo de ruta:</label>
          <select value={opcionSeleccionada} onChange={handleOpcionChange}>
            <option value="opcion5">Rural</option>
            <option value="opcion6">Urbana</option>
            <option value="opcion7">Montañosa</option>
          </select><br/>

          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default FormularioFuncional;

