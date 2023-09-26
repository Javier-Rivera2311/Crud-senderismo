import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function Cards() {
  const cardStyle = {
    margin: "1rem",
    minWidth: "275px",
    maxWidth: "400px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            ¿Qué es Hiking Routes in Chile?
          </Typography>
          <Typography variant="body1">
            Hiking Routes in Chile es una aplicación web que permite a los
            usuarios compartir sus rutas de senderismo favoritas con otros
            usuarios.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            ¿Cómo funciona?
          </Typography>
          <Typography variant="body1">
            Los usuarios pueden crear una cuenta y luego iniciar sesión para
            acceder a la aplicación. Una vez que hayan iniciado sesión, pueden
            agregar nuevas rutas de senderismo, ver las rutas de otros usuarios,
            editar y eliminar sus rutas y ver su perfil.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Sugerencias antes de comenzar una ruta
          </Typography>
          <Typography variant="body1">
            Antes de comenzar una ruta de senderismo, asegúrate de llevar
            suficiente agua y comida, ropa y calzado adecuados, y un mapa o GPS
            para no perderte. También es importante informar a alguien de tu ruta
            y hora estimada de regreso, por si ocurre algún imprevisto.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;