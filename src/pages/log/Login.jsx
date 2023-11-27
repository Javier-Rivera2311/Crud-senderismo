import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import fondo1 from "../../assets/fondos/fondo.jpg";
import fondo2 from "../../assets/fondos/publicar.jpg";
import fondo3 from "../../assets/fondos/rutas.jpg";


const image = [fondo1, fondo2, fondo3]
function Login() {

  const [Values, setValues] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/user/login2', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Values)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success === true){
        // Guarda el token, el nombre y el correo electrónico en el almacenamiento local
        localStorage.setItem('authToken', JSON.stringify({
          token: data.token,
          name: data.name,
          email: data.email
        }));
        alert('Inicio de sesión exitoso');
        navigate('/');
      }else{
        alert('Correo electrónico o contraseña incorrectos');
      }
    })
    .catch(err => console.log(err));
  }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
    };
  
    useEffect(() => {
      const interval = setInterval(changeImage, 5000); // Cambiar la imagen cada 5 segundos
      return () => clearInterval(interval);
    }, []);
    

  
    return (
    <div
    className="image-container"
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${image[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%"
      }}>
      <form className="form" onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
        <p id="heading">Login</p>

          <div className="field">
          <input autoComplete="off" placeholder="Enter Email" name='email'
          onChange={e => setValues({...Values, email: e.target.value})}className="input-field" type="email" />
          </div>

          <div className="field">
  <input 
    autoComplete="off" 
    placeholder="Enter Password" 
    name='password'
    onChange={e => setValues({...Values, password: e.target.value})}
    className="input-field" 
    type={showPassword ? "text" : "password"} 
  />
  <button type="button" onClick={() => setShowPassword(!showPassword)} className='eye-button'>
    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
  </button>
</div> 
        <div className="btn">
          {/*<button className="button1"onClick={handleClick}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>*/}
          <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          
          <Link to="/auth/register" className="button2 link-no-underline">Sign Up</Link>
        </div>
        <Link to="/auth/newpassword" className="button3 link-no-underline">Forgot Password?</Link>
      </form></div>
  );
}

export default Login;
