import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('authToken'));
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  return (
    <Box component="main" display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Paper style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar>{name.charAt(0)}</Avatar>
        <Typography variant="h5" style={{ marginTop: '20px' }}>
          {name}
        </Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {email}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Profile;