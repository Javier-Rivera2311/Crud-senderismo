import React from 'react';
import ruta1 from '../../assets/rutas/ruta1.jpeg';
import ruta2 from '../../assets/rutas/ruta2.jpeg';

const tarjetasDeRutas = [
  {
    imagen: ruta1,
    titulo: 'Mirador Torres del Paine',
    dificultad: 'Dificultad: Media',
    ubicacion: 'Ubicación: Lorem Ipsum',
    descripcion: 'Descripción: Lorem Ipsum',
  },
  {
    imagen: ruta2,
    titulo: 'Salto de Apoquindo',
    dificultad: 'Dificultad: Fácil',
    ubicacion: 'Ubicación: Lorem Ipsum',
    descripcion: 'Descripción: Lorem Ipsum',
  },
];

function App() {
  return (
    <div>
      {tarjetasDeRutas.map((ruta, index) => (
        <div key={index} className="card">
          <img src={ruta.imagen} alt={ruta.titulo} />
          <h2>{ruta.titulo}</h2>
          <p>{ruta.dificultad}</p>
          <p>{ruta.ubicacion}</p>
          <p>{ruta.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
