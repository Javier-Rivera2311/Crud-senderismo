import React from "react";
import { useForm } from "react-hook-form";
import "./fondo.css"

function Campos() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Ruta publicada con éxito");

  };

  return (
    
    <div className= "card shadow">
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", }}>
        <label>Nombre de la ruta:</label>
        <input type="text" {...register("nombre")} />

        <label>Descripción de la ruta:</label>
        <textarea style={{resize:"none"}} {...register("comentario")} />

        <label>Selecciona la dificultad de la ruta:</label>
        <select {...register("dificultad")}>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Experto">Experto</option>
          <option value="TellevaaconoceraDios">Te lleva a conocer a Dios</option>
        </select>

        <label>Tipo de ruta:</label>
        <select {...register("tipo")}>
          <option value="Rural">Rural</option>
          <option value="Urbana">Urbana</option>
          <option value="Montañosa">Montañosa</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </div>
    
  );
}

export default Campos;