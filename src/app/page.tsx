import * as React from 'react';
import { Container, Box, Grid, Typography, Paper, Divider, Icon } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LaunchListForm from '@/components/LaunchListForm';
import FeatureGrid from '@/components/FeatureGrid';

export default function Home() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={{ xs: 'auto', sm: '100vh' }}
        textAlign="center"
        sx={{ pt: { xs: 2, sm: 0 } }}
      >
        <Typography variant="h2" sx={{ mb: { xs: 4, sm: 2 }, fontWeight: 'bold', mt: { xs: 4, sm: 0 } }}>
          FlyTahoe
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: 'grey.500' }}>
          N ↔ S Lake Tahoe E-Foil Boat Transit
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" sx={{ p: 2, opacity: 0.5, my: { xs: 2, sm: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
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
            <Paper variant="outlined" sx={{ p: 2, my: { xs: 2, sm: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Advance Discount <EventAvailableIcon color="action" />
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Now | 25% Off
                </Typography>
                <LaunchListForm />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" sx={{ p: 2, opacity: 0.5, my: { xs: 2, sm: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
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
        <Box sx={{
          position: 'absolute',
          bottom: { xs: '10%', sm: 20 },
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-10px)' },
            '60%': { transform: 'translateY(-5px)' },
          },
          display: { xs: 'none', sm: 'block' }
        }}>
          <KeyboardArrowDownIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: 'white' }} />
        </Box>
      </Box>
      <Divider sx={{ mt: 2, mb: { xs: 4, sm: 4 } }} />
      <Box sx={{ p: { xs: 2, sm: 4 }, textAlign: 'left' }}>
        <Typography variant="h5" gutterBottom>
          <Icon component={ErrorOutlineIcon} sx={{ verticalAlign: 'middle', mr: 1, color: 'red' }} />
          Problem
        </Typography>
        <Typography variant="body1" gutterBottom>
          There's no North to South Lake Tahoe service covering the 20 miles; impractical due to fuel and noise pollution, seasickness, and inefficiency
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          <Icon component={CheckCircleOutlineIcon} sx={{ verticalAlign: 'middle', mr: 1, color: 'green' }} />
          Solution
        </Typography>
        <Typography variant="body1">
          Electric hydrofoil speed boat; supports 'Keep Tahoe Blue', quiet, stable, fast, efficient, and profitable
        </Typography>
      </Box>
    </Container>
  );
}
