import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Aquí puedes poner el código que quieres que se ejecute cuando el componente se monta
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem('Token');
    navigate('/');
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <button onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </div>
  );    
}

export default Logout;