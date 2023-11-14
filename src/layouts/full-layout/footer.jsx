import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black" ,py:4}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">
              COMPANY
            </Typography>
            <Typography variant="body2" gutterBottom color="white">
              123 Street
            </Typography>
            <Typography variant="body2" gutterBottom color="white">
              City, Chile
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">
              ABOUT US
            </Typography>
            <Typography variant="body2" gutterBottom color="white">
              ABOUT US
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">
              COMMUNITY
            </Typography>
            <Typography variant="body2" gutterBottom color="white">
              Routes
            </Typography>
            <Typography variant="body2" gutterBottom color="white">
              Publish routes
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">
              Connect with us
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a href="https://www.facebook.com/" style={{ color: "white" }}>
                Facebook
              </a>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a href="https://twitter.com/?lang=es" style={{ color: "white" }} translate="no" >
                Twitter
              </a>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a href="https://www.instagram.com/" style={{ color: "white" }}>
                Instagram
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;