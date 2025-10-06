import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProjectCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
  },
}));

const projectsData = [
  {
    title: 'UA Nav Access',
    subtitle: 'AI-Powered Campus Navigation for Visually Impaired',
    description: 'Built an AI navigation assistant with FastAPI, OCR, and Gemma Vision LLM. Integrated OpenStreetMap APIs and a screen-reader-friendly chatbot UI, improving navigation for 20+ students and reducing completion time by 25%.',
    technologies: ['FastAPI', 'OCR', 'Gemma VLM', 'Accessibility'],
    link: 'https://www.github.com/Sahana2699/Capstone-Improving-Nav-of-UA'
  },
  {
    title: 'Formula 1 Racing Analysis',
    subtitle: 'Data Analysis & Visualization',
    description: 'Ingested multi-season F1 data using f1dataR and tidyverse. Benchmarked driver/team performance by circuit and built a Shiny dashboard with lap-time heatmaps and race traces.',
    technologies: ['R', 'Shiny', 'Data Viz', 'f1dataR'],
    link: 'https://www.github.com/Sahana2699/Analysis-of-Formula-1-racing-data'
  },
  {
    title: 'Loan Default Risk Prediction',
    subtitle: 'Machine Learning Classification',
    description: 'Built and compared 4 ML models (Logistic Regression, Decision Trees) on 1,000+ German credit entries. Improved F1 score by 22% through feature engineering and k-fold cross-validation.',
    technologies: ['Python', 'scikit-learn', 'Feature Engineering'],
    link: 'https://www.github.com/Sahana2699/loan_risk_prediction'
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectCard>
                <CardActionArea
                  component={project.link ? 'a' : 'div'}
                  href={project.link || undefined}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noopener noreferrer' : undefined}
                  sx={{ height: '100%' }}
                >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
                    {project.subtitle}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech, idx) => (
                      <Chip key={idx} label={tech} size="small" sx={{ mb: 1 }} />
                    ))}
                  </Stack>
                </CardContent>
                </CardActionArea>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;