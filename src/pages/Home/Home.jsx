import React from "react";
import PageContainer from "../../components/container/PageContainer";
import fondo from "../../assets/fondos/fondo.jpg"; // Importa tu imagen de fondo

function Home() {
  const textStyle = {
    fontSize: "4rem", // Tamaño de fuente más grande
    fontWeight: "bold", // Fuente en negrita
    color: "white", // Color del texto
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Sombra del texto
    textAlign: "center", // Alineación centrada
  };

  return (
    <PageContainer title="Pagina inicio" description="aaaaaaaaaaaaaaaaa">
      {/* Utiliza CSS para establecer la imagen de fondo */}
      <div
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir todo el contenedor
          backgroundPosition: "center", // Centra la imagen
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1 style={textStyle}>Rutas de Senderismo en Chile</h1>
      </div>
    </PageContainer>
  );
}

export default Home;
