import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
import fondo1 from "../../assets/fondos/fondo.jpg";
import fondo2 from "../../assets/fondos/publicar.jpg";
import fondo3 from "../../assets/fondos/rutas.jpg";

const image = [fondo1, fondo2, fondo3]
function RegisterForm() {
  const navigate =useNavigate();
  const [Values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

  // Verificar si la contraseña cumple con los requisitos
  // eslint-disable-next-line no-useless-escape
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"|,.<>/?]).{6,}$/;
  if (!passwordRegex.test(Values.password)) {
    alert('La contraseña debe tener al menos una mayúscula, una minúscula, un número, un carácter especial y ser de al menos 6 caracteres');
    return;
  }

    fetch('http://localhost:4000/user/ingresar', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Values)
    })
    .then(res => {
      if (res.status === 200) {
        console.log('Registration successful');
        // Redirigir al usuario a la página de inicio de sesión después de registrarse
        navigate('/auth/login');
      } else {
        console.log('Registration failed');
        alert('Este correo ya esta registrado')
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
      <form onSubmit={handleSubmit} className="form" style={{
        maxWidth: 500
      }}>
        <p id="heading">Register</p>
        <div className="field">
          <input autoComplete="off" placeholder="Enter Name" name='name'
          onChange={e => setValues({...Values, name: e.target.value})} className="input-field" type="text" />
          </div>

          <div className="field">
          <input autoComplete="off" placeholder="Enter Email" name='email'
          onChange={e => setValues({...Values, email: e.target.value})} className="input-field" type="email" />
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
  <button type="button" onClick={() => setShowPassword(!showPassword)}className='eye-button'>
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </button>
</div> 

<div className="field">
  <input 
    autoComplete="off" 
    placeholder="Confirm Password" 
    name='confirmPassword'
    onChange={e => setValues({...Values, confirmPassword: e.target.value})}
    className="input-field" 
    type={showConfirmPassword ? "text" : "password"} 
  />
  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}className='eye-button'>
    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
  </button>
</div>
        {/* botones */}
        <div className="btn">
          <button type='submit' className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
        <Link to="/auth/login" className="button2 link-no-underline">Do you already have an account? Sign in </Link>
      </form>
    </div>
  );
}

export default RegisterForm;