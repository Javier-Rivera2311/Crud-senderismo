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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 195, 0)" class="bi bi-backpack2-fill" viewBox="0 0 16 16">
          <path d="M5 13h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5z"/>
          <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v1.191l-1.17.585A1.5 1.5 0 0 0 0 11.118V13.5A1.5 1.5 0 0 0 1.5 15h1c.456.607 1.182 1 2 1h7c.818 0 1.544-.393 2-1h1a1.5 1.5 0 0 0 1.5-1.5v-2.382a1.5 1.5 0 0 0-.83-1.342L14 9.191V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
        </svg>
        <input 
          autoComplete="off" 
          placeholder="Ingrese el nombre de la ruta" 
          name='nombre'
          onChange={e => setValues({ ...values, nombre: e.target.value })} 
          className="input-field" 
          type="text" 
        />
      </div>

      <div className="field">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 195, 0)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
        </svg>
        <PlacesAutocomplete
          value={values.ubicacion}
          onChange={ubicacion => setValues({ ...values, ubicacion })}
          onSelect={ubicacion => {
            setValues({ ...values, ubicacion });
            geocodeByAddress(ubicacion)
              .then(results => getLatLng(results[0]))
              .then(latLng => console.log('Success', latLng))
              .catch(error => console.error('Error', error));
          }}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='input-field'>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 195, 0)" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      <select 
        className="select-ruta" 
        onChange={e => setValues({ ...values, dificultad: e.target.value })}
      >
        <option value="" disabled selected>Select Dificultad</option>
        {dificultadOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      </div>

      <div className="field">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 195, 0)" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
        <select 
          className="select-ruta" 
          onChange={e => setValues({ ...values, tipo_de_ruta: e.target.value })}
        >
          <option value="" disabled selected>Select Tipo de Ruta</option>
          {tipoRutaOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 195, 0)" class="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
          <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
        </svg>
        <textarea 
          placeholder="Ingresar comentarios" 
          name='comentario'
          onChange={e => setValues({ ...values, comentario: e.target.value })} 
          className="input-field" 
          style={{ fontSize: "16px", padding: "8px", resize: "none"}} 
        />
      </div>

      <div className="btn">
        <button className="button1">Publish Route</button>
      </div>

</form>
</div>
);
    }
export default Campos;