import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../../components/container/PageContainer";
import img from "../../assets/fondos/404.jpg"; // Importa tu imagen de fondo

const Error = () => (
  <PageContainer title="Error" description="Página de error">
    <Box
      display="flex"
      flexDirection="column"
      height="75vh"
      textAlign="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Typography align="center" variant="h1" sx={{ color: "white" }}>
          404
        </Typography>
        <Typography align="center" variant="h4" sx={{ color: "white" }}>
          This page could not be found.
        </Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/"
          disableElevation
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  </PageContainer>
);

export default Error;
