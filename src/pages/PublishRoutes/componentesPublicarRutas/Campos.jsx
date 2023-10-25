import React from "react";
import { useForm } from "react-hook-form";
import "./fondo.css"
import Select from 'react-select';

function Campos() {
  const { register, handleSubmit, setValue } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    alert("Ruta publicada con éxito");
  };

  const dificultad = [
    { value: 'Principiante', label: 'Principiante' },
    { value: 'Intermedio', label: 'Intermedio' },
    { value: 'Experto', label: 'Experto' },
    { value: 'Dios', label: 'Te reune con tu creador' }
  ];

  const tipo_ruta = [
    { value: 'Rural', label: 'Rural' },
    { value: 'Montañosa', label: 'Montañosa' },
    { value: 'Urbana', label: 'Urbana' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#171717',
      color: 'rgb(0, 255, 200)',
      border: 'none',
      borderBottom: state.isFocused ? '#fff' : '#fff',
      boxShadow: 'none',
      '&:hover': {
        borderBottom: state.isFocused ? '#fff' : '#fff',
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(0, 255, 200)' : '#171717',
      border: 'none',
      color: state.isSelected ? '#171717' : 'rgb(0, 255, 200)',
      '&:hover': {
        backgroundColor: state.isSelected ? '#333' : '#333',
        color: state.isSelected ? 'rgb(0, 255, 200)' : 'rgb(0, 255, 200)',
      }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: 'rgb(0, 255, 200)'
    })
  };

  

  return (
    <div class="card">
      <div class="card2">
        <form class="form" onSubmit={handleSubmit(onSubmit)}>
          <p id="heading">Formulario</p>
          <div class="field">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z"/>
            </svg>
            <input maxLength={25} type="text" class="input-field" placeholder="Nombre de la Ruta" {...register("nombre")} />
          </div>
          <div class="field">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"/>
            </svg>
            <input maxLength={100} type="text" class="input-field" placeholder="Comentarios de la Ruta" {...register("comentario")} />
          </div>
          <div class="field">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/>
            </svg>
            <Select className="select-field"
              
              options={dificultad}
              onChange={(selectedOption) => setValue("dificultad", selectedOption.value)}
              isMulti = {false}
              placeholder="Dificultad de la Ruta"
              styles={customStyles}
            />
          </div>
          <div class="field">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14ZM4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4Zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5Z"/>
              <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6.002 6.002 0 0 1 4-5.659ZM7 2v.083a6.04 6.04 0 0 1 2 0V2a1 1 0 0 0-2 0Zm1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5Z"/>
            </svg>
            <Select className="select-field"
              options={tipo_ruta}
              onChange={(selectedOption) => setValue("tipo_ruta", selectedOption.value)}
              isMulti = {false}
              placeholder="Tipo de Ruta"
              styles={customStyles}
            />
          </div>
          <div class="btn">
            <button class="button1" type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enviar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Campos;