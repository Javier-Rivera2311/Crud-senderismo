import React, { useEffect } from "react";
import PageContainer from "../../components/container/PageContainer";
import publicar from "../../assets/fondos/publicar.jpg"; // Importa imagen de fondo
import { Box } from "@mui/material";
import { Navigate } from 'react-router-dom';

const Logout = () => {
  useEffect(() => {
    // Elimina el token de autenticación y el nombre de usuario del almacenamiento local
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');

    // Redirige al usuario a la página de inicio de sesión
    <Navigate to="/" replace />;
  }, []);

  return (
    <PageContainer title="Logout" description="Sale de cuenta">
      <Box>
        <h1>Se vienen cositas Uwu</h1>
      </Box>

      <Box 
        style={{
          backgroundImage: `url(${publicar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "65vh",
          width: "100%",
        }}
      >
        <h1>Publicar</h1>
      </Box>
    </PageContainer>
  );
}

export default Logout;