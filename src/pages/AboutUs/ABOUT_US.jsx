import React from 'react';
import PageContainer from '../../components/container/PageContainer';
import fondo from '../../assets/fondos/fondo.jpg'; // Importa imagen de fondo
import { Box, Typography } from '@mui/material';

function About_us() {
  return (
    <PageContainer title="About us" description="About us">
      <Box
        sx={{
          backgroundImage: `url(${fondo})`,
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '30px',
            borderRadius: '20px',
          }}
        >
          <Typography variant="h4" color="white" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" color="white">
            Somos un grupo de estudiantes de la Universidad de Valparaíso, Chile. comprometidos en el desarrollo de una aplicación de rutas de senderismo. Nuestro objetivo es bastante simple: crear una herramienta práctica y fácil de usar que facilite a los amantes del senderismo la búsqueda y división de rutas. Creemos en la utilidad de la tecnología para conectar a las personas con la naturaleza y nos esforzamos por desarrollar una aplicación que mejore la experiencia del senderismo.
            En el corazón de nuestro proyecto yace la pasión por explorar senderos. La aplicación que estamos creando tiene como propósito principal proporcionar una guía eficaz para aquellos que disfrutan de la aventura al aire libre, ya sean principiantes o expertos.
          </Typography>
          <Box mt={2}>
          <Typography variant="body1" color="white">
          Nuestra misión es enriquecer tu experiencia de senderismo a través de la tecnología, sin grandes alardes, solo con el deseo de facilitar y mejorar tu conexión con la naturaleza. Te invitamos a unirte a nosotros en esta emocionante aventura. ¡Bienvenido a nuestra comunidad de amantes del senderismo!
          </Typography>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default About_us;