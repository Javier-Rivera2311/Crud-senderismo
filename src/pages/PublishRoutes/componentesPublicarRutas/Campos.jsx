import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./fondo.css"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function Campos() {
  const [values, setValues] = useState({
    nombre: '',
    ubicacion: '',
    dificultad: null,
    tipo_de_ruta: null,
    comentario: ''
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/user/publicarRuta', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success === true){
        alert('Publicación exitosa');
        navigate('/');
      }else{
        alert('Hubo un error en la publicación');
      }
    })
    .catch(err => console.log(err));
  }

  const dificultadOptions = [
    { value: 'Principiante', label: 'Principiante' },
    { value: 'Intermedio', label: 'Intermedio' },
    { value: 'Experto', label: 'Experto' },
    { value: 'Dios', label: 'Te reúne con tu creador' }
  ];

  const tipoRutaOptions = [
    { value: 'Rural', label: 'Rural' },
    { value: 'Montañosa', label: 'Montañosa' },
    { value: 'Urbana', label: 'Urbana' },
  ];
  
 
  
  return (
    <div
      className="image-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `fondo.jpg`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "80%"
      }}>
      <form className="form" onSubmit={handleSubmit} style={{ maxWidth: 500, padding: "20px"}}>
        <p id="heading">Publish Route</p>

        <div className="field">
          <input autoComplete="off" placeholder="Ingrese el nombre de la ruta" name='nombre'
            onChange={e => setValues({ ...values, nombre: e.target.value })} className="input-field" type="text" />
        </div>

        <div className="field">
        <PlacesAutocomplete
  value={values.ubicacion}
  onChange={ubicacion => setValues({ ...values, ubicacion })}
  onSelect={ubicacion => {
    setValues({ ...values, ubicacion }); // Asegúrate de que estás actualizando el estado aquí
    geocodeByAddress(ubicacion)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }}
>
  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    <div>
      <input
        {...getInputProps({
          placeholder: 'Ingresar ubicación',
          className: 'input-field',
        })}
      />
      <div>
        {loading && <div>Loading...</div>}
        {suggestions.map(suggestion => {
          const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
          return (
<div {...getSuggestionItemProps(suggestion, { className })}>
  <span>{suggestion.description}</span>
</div>
          );
        })}
      </div>
    </div>
  )}
</PlacesAutocomplete>
</div>

<div className="field">
  <select className="full-width" onChange={e => setValues({ ...values, dificultad: e.target.value })}>
    <option value="" disabled selected>Select Dificultad</option>
    {dificultadOptions.map(option => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ))}
  </select>
</div>

<div className="field">
  <select className="full-width" onChange={e => setValues({ ...values, tipo_de_ruta: e.target.value })}>
    <option value="" disabled selected>Select Tipo de Ruta</option>
    {tipoRutaOptions.map(option => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ))}
  </select>
</div>

        <div className="field">
          <textarea placeholder="Ingresar comentarios" name='comentario'
            onChange={e => setValues({ ...values, comentario: e.target.value })} className="input-field" style={{ fontSize: "16px", padding: "8px" }} />
        </div>

        <div className="btn">
          <button className="button1">Publish Route</button>
        </div>
      </form>
    </div>
  );
}

export default Campos;
