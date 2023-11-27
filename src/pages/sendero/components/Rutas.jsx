import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rutas.css';

function Rutas() {
  const [values, setValues] = useState({
    usuario: '',
    ubicaciones_agregadas: '',
    fecha: '',
    guia: ''
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/user/RealizarRuta', {
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
        width: "100%"
      }}>
      <form className="form" onSubmit={handleSubmit} style={{ maxWidth: 500, padding: "20px"}}>
        <p id="heading">Publish Route</p>

        <div className="field">
          <input 
            autoComplete="off" 
            placeholder="Ingrese el nombre de usuario" 
            name='usuario'
            onChange={e => setValues({ ...values, usuario: e.target.value })} 
            className="input-field" 
            type="text" 
          />
        </div>

        <div className="field">
          <input 
            autoComplete="off" 
            placeholder="Ingrese las ubicaciones agregadas" 
            name='ubicaciones_agregadas'
            onChange={e => setValues({ ...values, ubicaciones_agregadas: e.target.value })} 
            className="input-field" 
            type="text" 
          />
        </div>

        <div className="field">
          <input 
            autoComplete="off" 
            placeholder="Ingrese la fecha" 
            name='fecha'
            onChange={e => setValues({ ...values, fecha: e.target.value })} 
            className="input-field" 
            type="date" 
          />
        </div>
        <div className="field">
  <input 
    autoComplete="off" 
    placeholder="Ingrese el guía" 
    name='guia'
    onChange={e => setValues({ ...values, guia: e.target.value })} 
    className="input-field" 
    type="text" 
  />
</div>

<div className="btn">
  <button className="button1">Publish Route</button>
</div>

</form>
</div>
);
}
export default Rutas;
