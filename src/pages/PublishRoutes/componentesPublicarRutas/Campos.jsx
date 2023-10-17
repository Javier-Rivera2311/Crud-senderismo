import React from "react";
import { useState } from 'react';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Nombre de la ruta:</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />

        <label>Descripción de la ruta:</label>
        <textarea value={comentario} onChange={handleComentarioChange} />

        <label>Selecciona la dificultad de la ruta:</label>
        <select value={opcionSeleccionada} onChange={handleOpcionChange}>
          <option value="opcion1">Principiante</option>
          <option value="opcion2">Intermedio</option>
          <option value="opcion3">Experto</option>
          <option value="opcion4">Dios</option>
        </select>

        <label>Tipo de ruta:</label>
        <select value={opcionSeleccionada} onChange={handleOpcionChange}>
          <option value="opcion1">Rural</option>
          <option value="opcion2">Urbana</option>
          <option value="opcion3">Montañosa</option>
          <option value="opcion4">Te lleva a conocer a Dios</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioFuncional;

