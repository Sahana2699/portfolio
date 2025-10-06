import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: 'rgba(10, 10, 10, 0.95)',
        borderTop: '1px solid rgba(139, 92, 246, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
          © {new Date().getFullYear()} Sahana Santhosh. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;