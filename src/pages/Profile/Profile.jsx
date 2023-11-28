import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Avatar, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import fondo1 from "../../assets/fondos/fondo.jpg";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('authToken'));
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  return (
    <Box 
      component="main" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="80vh"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        style={{ 
          backgroundImage: `url(${fondo1})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'brightness(30%)',
          zIndex: -1
        }}
      />
      <Paper style={{ padding: '30px',  borderRadius: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <Avatar>{name.charAt(0)}</Avatar>
        <Typography variant="h5" style={{ marginTop: '20px' }}>
          {name}
        </Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {email}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/auth/newpassword" style={{ marginTop: '20px' }}>
          Cambiar contraseña
        </Button>
      </Paper>
    </Box>
  );
};

export default Profile;