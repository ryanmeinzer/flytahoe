"use client"

import React, { Suspense } from 'react';
import { Container, Box } from '@mui/material';
import DashboardForm from '@/components/DashboardForm';
import { useSearchParams } from 'next/navigation';

const ReferralForm = () => {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('ref') || '';

  return <DashboardForm referralCode={referralCode} />;
};

export default function Dashboard() {
  return (
    <Container>
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Suspense fallback={<div>Loading...</div>}> 
          <ReferralForm />
        </Suspense>
      </Box>
    </Container>
  )
}
