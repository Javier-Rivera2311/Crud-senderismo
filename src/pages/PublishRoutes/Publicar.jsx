import React from "react";
import PageContainer from "../../components/container/PageContainer";
import publicar from "../../assets/fondos/publicar.jpg"; // Importa imagen de fondo
import Campos from "./componentesPublicarRutas/Campos.jsx";


function Sendero() {
  const textStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    marginTop: 0,
  };

  return (
    <PageContainer title="Publish" description="Publish Routes">

      <div
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
          height: "80vh",
          width: "100%",
          marginTop: 0,
        }}
      >
        {/*Foto de <a href="https://unsplash.com/es/@karlarobinson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Karla Robinson</a> en <a href="https://unsplash.com/es/fotos/LtzOguTv0kU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  */}
        <h1 style={textStyle}>Publish Routes</h1>
        <h2 style={{
          fontSize: "24px", 
          color: "white", 
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
          marginTop: 0,
          }}>Aqui podrás publicar una nueva ruta</h2>
        <Campos />
      </div>
    </PageContainer>
    
  );
}

export default Sendero;