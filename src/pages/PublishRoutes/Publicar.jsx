import React from "react";
import PageContainer from "../../components/container/PageContainer";
import fondo from "../../assets/fondos/fondo.jpg"; // Importa imagen de fondo


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
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          width: "100%",
        }}
      >
        <h1 style={textStyle}>Publish Routes</h1>
      </div>
    </PageContainer>
  );
}

export default Sendero;