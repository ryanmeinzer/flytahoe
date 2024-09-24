"use client"

import React from 'react';
import { Container, Box } from '@mui/material';
import DashboardForm from '@/components/DashboardForm';
import { useSearchParams } from 'next/navigation';

export default function Dashboard() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('ref') || '';

  return (
    <Container>
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <DashboardForm referralCode={referralCode} />
      </Box>
    </Container>
  )
}
