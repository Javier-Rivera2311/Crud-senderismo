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
    <div class="card">
      <div>
        <form onSubmit={handleFormSubmit}>
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
            <option value="opcion1">Rural</option>
            <option value="opcion2">Urbana</option>
            <option value="opcion3">Montañosa</option>
          </select><br/>

          <button type="submit">Enviar</button><br/>
        </form>
      </div>
    </div>
  );
}

export default FormularioFuncional;

