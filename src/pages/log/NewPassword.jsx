import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewPassword.css';
import fondo1 from "../../assets/fondos/fondo.jpg";
import fondo2 from "../../assets/fondos/publicar.jpg";
import fondo3 from "../../assets/fondos/rutas.jpg";

const image = [fondo1, fondo2, fondo3]
function NewPassword() {
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
        <p id="heading">New Password</p>
        <div className="field">
        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input placeholder="New Password" className="input-field" type="password" />
        </div>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input placeholder="Confirm Password" className="input-field" type="password" />
        </div>
        <div className="btn">
          <Link to="/auth/login" className="button1 link-no-underline">Chanche password</Link>

        </div>
      </form></div>
  );
}

export default NewPassword;