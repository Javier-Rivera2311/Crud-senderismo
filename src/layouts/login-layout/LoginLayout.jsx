import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet,Navigate } from "react-router-dom";

function LoginLayout() {
  const [loading, isLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {

    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }

    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        isAuthenticated ? (
        <>
        <Outlet />
      </>
        ) : (
          // Redirige al usuario a la página de inicio de sesión si no está autenticado
          <Navigate to="/auth/Login" />
        )
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default LoginLayout;