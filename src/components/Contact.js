import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const contactData = [
  {
    icon: <EmailIcon sx={{ fontSize: 30 }} />,
    title: 'Email',
    value: 'santhoshsahana99@gmail.com',
    link: 'mailto:santhoshsahana99@gmail.com',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 30 }} />,
    title: 'Phone',
    value: '+1 (520) 230-6890',
    link: 'tel:+15202306890',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 30 }} />,
    title: 'LinkedIn',
    value: 'Connect on LinkedIn',
    link: 'https://linkedin.com/in/sahana-santhosh', // Update with actual URL
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 30 }} />,
    title: 'GitHub',
    value: 'View GitHub Profile',
    link: 'https://github.com/Sahana2699', // Update with actual URL
  },
];

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Let's Connect
        </Typography>
        <Grid container spacing={3}>
          {contactData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                component="a"
                href={item.link}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  '&:hover': {
                    background: 'rgba(139, 92, 246, 0.1)',
                    transform: 'translateY(-5px)',
                  },
                  width: 290,
                }}
              >
                <Avatar
                  sx={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                    width: 56,
                    height: 56,
                    mr: 2,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    {item.value}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;