import React from "react";
import PageContainer from "../../components/container/PageContainer";
import ru from "../../assets/fondos/rutas.jpg"; // Importa imagen de fondo
import Rutas from "./components/Rutas.jsx";

function Sendero() {
  const textStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  };

  return (
    <PageContainer title="Rutas de senderismo" description="Rutas">

      <div
        style={{
          backgroundImage: `url(${ru})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          marginTop: 0,
        }}
      >

        <h1 style={textStyle}>llena el formulario para que otros usuarios te acompañen</h1>
        <Rutas />
      </div>
    </PageContainer>
  );
}

export default Sendero;