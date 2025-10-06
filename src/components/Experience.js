import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '2px',
    background: 'linear-gradient(180deg, #8b5cf6 0%, #ec4899 100%)',
  },
}));

const TimelineItem = styled(Paper)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  background: 'rgba(139, 92, 246, 0.05)',
  borderLeft: '3px solid #8b5cf6',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-3.5rem',
    top: '1.5rem',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#8b5cf6',
    border: '3px solid #1a1a2e',
  },
}));

const experienceData = [
  {
    title: 'ML Engineer Intern',
    company: 'SEMCOG Technologies',
    location: 'Las Vegas, AZ, USA',
    date: 'Sep 2025 – Present',
    responsibilities: [
      'Built and deployed end-to-end ML pipelines for classification, anomaly detection, forecasting, and recommendations',
      'Integrated models into FastAPI/Flask microservices for real-time inference',
      'Engineered data preprocessing and ETL workflows using SQL, MongoDB, and pandas',
      'Collaborated with AI Engineering, Data Science, and Analytics teams to deliver scalable, responsible AI solutions',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'UTTHUNGA Technologies Pvt. Ltd.',
    location: 'Bengaluru, India',
    date: 'Sep 2023 – Mar 2024',
    responsibilities: [
      'Contributed to AI-driven industrial and enterprise solutions using Python and ML libraries',
      'Built end-to-end ML pipelines including data cleaning, model training, validation, and optimization',
      'Developed POC models for predictive maintenance and anomaly detection on sensor data',
      'Evaluated models with 90%+ accuracy using confusion matrices, precision/recall and AUC',
    ],
  },
  {
    title: 'AI ML Intern',
    company: 'Technologics Global Pvt. Ltd.',
    location: 'Bengaluru, India',
    date: 'Aug 2022 – Sep 2022',
    responsibilities: [
      'Completed mini-projects in Python covering supervised and unsupervised learning',
      'Improved model accuracy through preprocessing and algorithm tuning',
      'Participated in workshops on model deployment and evaluation metrics',
    ],
  },
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Professional Experience
        </Typography>
        <TimelineContainer>
          {experienceData.map((exp, index) => (
            <TimelineItem key={index} elevation={0}>
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 1 }}>
                {exp.title}
              </Typography>
              <Typography variant="h6" sx={{ color: 'secondary.main', mb: 0.5 }}>
                {exp.company}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                {exp.location} | {exp.date}
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {exp.responsibilities.map((resp, idx) => (
                  <Typography component="li" key={idx} sx={{ mb: 1, color: 'text.primary' }}>
                    {resp}
                  </Typography>
                ))}
              </Box>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </Box>
  );
};

export default Experience;