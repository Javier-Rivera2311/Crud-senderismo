import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
  const [showNewPassword, setShowNewPassword] = useState(false); // Agrega esta línea
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Agrega esta línea

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (Values.newpassword !== Values.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    fetch('http://localhost:4000/user/changePassword', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Values)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success === true){
        alert('Cambio de contraseña exitoso');
        navigate('/');
      }else{
        alert('error al cambiar la contraseña');
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
        <p id="heading">Change Password</p>

          <div className="field">
          <input autoComplete="off" placeholder="Enter Email" name='email'
          onChange={e => setValues({...Values, email: e.target.value})}className="input-field" type="email" />
          </div>
          <div className="field">
  <input 
    autoComplete="off" 
    placeholder="New Password" 
    name='newpassword'
    onChange={e => setValues({...Values, password: e.target.value})}
    className="input-field" 
    type={showNewPassword ? "text" : "password"} 
  />
  <button type="button" onClick={() => setShowNewPassword(!showNewPassword) }className='eye-button'>
    <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
  </button>
</div> 

<div className="field">
  <input 
    autoComplete="off" 
    placeholder="Confirm new Password" 
    name='confirmPassword'
    onChange={e => setValues({...Values, password: e.target.value})}
    className="input-field" 
    type={showConfirmPassword ? "text" : "password"} 
  />
  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}className='eye-button'>
    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
  </button>
</div>

        <div className="btn">
          <button className="button1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Link 
            to={localStorage.getItem('authToken') ? "/profile" : "/auth/login"} 
            className="button1 link-no-underline"
          >
            {localStorage.getItem('authToken') ? "Back to profile" : "Back to Sign in"}
          </Link>
        </div>

        </form>
        </div>
        );

        }

export default NewPassword;