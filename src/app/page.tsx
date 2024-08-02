import * as React from 'react';
import { Container, Box, Grid, Typography, Paper, Divider } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';

export default function Home() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
      >
        <Typography variant="h2" sx={{ mb: 6, fontWeight: 'bold' }}>
          FlyTahoe
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" sx={{ p: 2, opacity: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
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
            <Paper variant="outlined" sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Advance Discount <EventAvailableIcon color="action" />
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Now | 25% Off
                </Typography>
              </Box>
              <Box className="launchlist-widget" data-key-id="0TxzcS" data-height="150px" />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" sx={{ p: 2, opacity: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
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
      </Box>
    </Container>
  );
}
