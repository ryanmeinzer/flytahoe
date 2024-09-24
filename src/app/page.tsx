"use client"

import * as React from 'react';
import { Container, Box, Grid, Typography, Paper, Divider } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LaunchListForm from '@/components/LaunchListForm';
import FeatureGrid from '@/components/FeatureGrid';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('ref') || '';

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        sx={{
          pt: { xs: 2, sm: 2 },
          width: '100%',
        }}
      >
        <Typography variant="h2" sx={{ mb: { xs: 4, sm: 2 }, fontWeight: 'bold', mt: { xs: 4, sm: 2 } }}>
          FlyTahoe
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: 'grey.500' }}>
          N ↔ S Lake Tahoe E-Foil Boat Transit
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" sx={{ p: 2, opacity: 0.5, my: { xs: .5, sm: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Early Discount <EventBusyIcon color="disabled" />
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="h6" gutterBottom>
                Early 2024 | 50% Off
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" sx={{ p: 2, my: { xs: .5, sm: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Advance Discount <EventAvailableIcon color="action" />
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Now | 25% Off
                </Typography>
                <LaunchListForm referralCode={referralCode} />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" sx={{ p: 2, opacity: 0.5, my: { xs: .5, sm: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Standard Ticket <EventBusyIcon color="disabled" />
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="h6" gutterBottom>
                2025 | Full Price
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <FeatureGrid />
        {/* <DownArrow /> */}
      </Box>
        {/* <ProblemSolution /> */}
    </Container>
  );
}
