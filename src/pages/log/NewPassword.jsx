import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './NewPassword.css';
import fondo1 from "../../assets/fondos/fondo.jpg";
import fondo2 from "../../assets/fondos/publicar.jpg";
import fondo3 from "../../assets/fondos/rutas.jpg";

const image = [fondo1, fondo2, fondo3]
function NewPassword() {
 
  const [Values, setValues] = useState({
    email: '',
    newpassword: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/user/cambiar_password', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Values)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success === true){
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
          <label htmlFor="email"><strong>email:</strong></label>
          <input autoComplete="off" placeholder="Enter Email" name='email'
          onChange={e => setValues({...Values, email: e.target.value})}className="input-field" type="email" />
          </div>

          <div className="field">
          <label htmlFor="newpassword"><strong>new Password:</strong></label>
          <input autoComplete="off" placeholder="Enter Password" name='password'
          onChange={e => setValues({...Values, password: e.target.value})}className="input-field" type="password" />
          </div> 
          <div className="field">
          <label htmlFor="confirmpassword"><strong>confirm Password:</strong></label>
          <input autoComplete="off" placeholder="Enter Password" name='password'
          onChange={e => setValues({...Values, password: e.target.value})}className="input-field" type="password" />
          </div> 
        <div className="btn">
          {/*<button className="button1"onClick={handleClick}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>*/}
          <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          
          <Link to="/auth/login" className="button2 link-no-underline">Sign in</Link>
        </div>
      </form></div>
  );
}

export default NewPassword;