import React from "react";
import PageContainer from "../../components/container/PageContainer";
import fondo from "../../assets/fondos/fondo.jpg"; // Importa imagen de fondo
import Cards from "../../pages/Home/components/cards.jsx";

function Home() {
  const textStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  };

  return (
    <PageContainer title="Pagina inicio" description="Home">

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
          height: "65vh",
          width: "100%",
        }}
      >
        <h1 style={textStyle}>Hiking Routes in Chile</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cards />
      </div>

    </PageContainer>
  );
}

export default Home;

