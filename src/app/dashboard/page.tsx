import React from 'react';
import { Container, Box } from '@mui/material';
import DashboardForm from '@/components/DashboardForm';

export default function Dashboard() {
  return (
    <Container>
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <DashboardForm />
      </Box>
    </Container>
  )
}
