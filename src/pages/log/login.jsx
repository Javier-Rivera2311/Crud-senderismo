import React, { useState, useEffect } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css';
import fondo1 from "../../assets/fondos/fondo.jpg";
import fondo2 from "../../assets/fondos/publicar.jpg";
import fondo3 from "../../assets/fondos/rutas.jpg";

const image = [fondo1, fondo2, fondo3]
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      <form className="form" style={{
        maxWidth: 500
      }}>
        <p id="heading">login</p>

          <div className="field">
          <label htmlFor="email"><strong>email:</strong></label>
          <input autoComplete="off" placeholder="Enter Email" name='email'
          className="input-field" type="email" />
          </div>

          <div className="field">
          <label htmlFor="password"><strong>Password:</strong></label>
          <input autoComplete="off" placeholder="Enter Password" name='password'
          className="input-field" type="password" />
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