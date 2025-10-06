import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-scroll';
import { styled } from '@mui/material/styles';
import Galaxy from '../Animations/Galaxy/Galaxy' // Adjust the path based on where you place the Galaxy component

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  paddingTop: theme.spacing(10),
  overflow: 'hidden',
  // Optional: Add a subtle gradient overlay for better text readability
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 46, 0.5) 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  }
}));

const GalaxyBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
});

const ContentWrapper = styled(Container)({
  position: 'relative',
  zIndex: 2,
});

const Hero = () => {
  return (
    <HeroSection id="about">
      <GalaxyBackground>
        <Galaxy 
          density={1.2}
          glowIntensity={0.4}
          saturation={0.3}
          hueShift={220}
          mouseRepulsion={true}
          mouseInteraction={true}
          repulsionStrength={2.5}
          twinkleIntensity={0.4}
          rotationSpeed={0.05}
          speed={0.8}
          transparent={true}
        />
      </GalaxyBackground>
      
      <ContentWrapper maxWidth="lg">
        <Box sx={{ maxWidth: '800px' }}>
          <Typography
            variant="h"
            sx={{
              mb: 2,
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                from: {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            Sahana Santhosh
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: 'text.secondary',
              mb: 3,
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
              '@keyframes fadeInUp': {
                from: {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            AI/ML Engineer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              mb: 4,
              color: 'text.primary',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
              '@keyframes fadeInUp': {
                from: {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            Building intelligent solutions with machine learning. Specialized in predictive maintenance, 
            anomaly detection, and accessible AI applications. M.S. in Information Science with hands-on 
            experience deploying ML pipelines and APIs.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              animation: 'fadeInUp 0.8s ease-out 0.6s both',
              '@keyframes fadeInUp': {
                from: {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="contained" size="large">
                Get In Touch
              </Button>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="outlined" size="large">
                View Projects
              </Button>
            </Link>
          </Stack>
        </Box>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;