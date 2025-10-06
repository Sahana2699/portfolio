import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';

const skillsData = [
  {
    title: 'Languages',
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['Python', 'SQL', 'R', 'HTML5', 'CSS3'],
  },
  {
    title: 'ML/AI',
    icon: <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['scikit-learn', 'TensorFlow', 'PyTorch', 'Transformers', 'VLMs', 'OpenAI API'],
  },
  {
    title: 'Data & Visualization',
    icon: <BarChartIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Frameworks & Tools',
    icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['FastAPI', 'Flask', 'Docker', 'Git', 'MongoDB', 'MySQL'],
  },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Technical Skills
        </Typography>
        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {category.icon}
                    <Typography variant="h4" sx={{ ml: 2, color: 'primary.main' }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {category.skills.map((skill, idx) => (
                      <Chip key={idx} label={skill} sx={{ mb: 1 }} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;