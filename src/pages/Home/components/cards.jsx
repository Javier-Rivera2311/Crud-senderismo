import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function Cards() {
    const cardStyle = {
        margin: "1rem",
        minWidth: "275px",
        maxWidth: "400px",
        border: "5px solid #ffeb3b",
        boxShadow: "none",
        transition: "all 0.5s cubic-bezier(0.23, 1, 0.320, 1)",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, maiores deleniti qui dignissimos, itaque at distinctio repudiandae placeat eum temporibus delectus ratione ipsa alias quod ducimus nam? At, delectus atque!
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
            suficiente agua, comida, ropa y calzado adecuados, y un mapa o GPS
            para no perderte. También es importante informar a alguien de tu ruta
            y hora estimada de regreso, por si ocurre algún imprevisto.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;