import React from "react";
import PageContainer from "../../components/container/PageContainer";
import rutas from "../../assets/fondos/rutas.jpg"; // Importa imagen de fondo
import Ruta from "../..//pages/sendero/components/rutas.jsx";

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
          backgroundImage: `url(${rutas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        {/* agregar Foto de <a href="https://unsplash.com/es/@hansjuergen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hans-Jürgen Weinhardt</a> en <a href="https://unsplash.com/es/fotos/5RwAkpugU98?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */}
        <h1 style={textStyle}>Routes</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Ruta />
      </div>

    </PageContainer>
  );
}

export default Sendero;