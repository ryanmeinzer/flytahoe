import * as React from 'react';
import { Box, TextField, Typography, Button, Container, Grid } from '@mui/material';

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
        <Typography variant="h4" sx={{ mb: 6 }}>
          FlyTahoe
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Early Discount
            </Typography>
            <Typography variant="h6" gutterBottom>
              Early 2024 | 50% Off
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h4" gutterBottom>
              Advance Discount
            </Typography>
            <Typography variant="h6" gutterBottom>
              Now | 25% Off
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h4" gutterBottom>
              Standard Ticket
            </Typography>
            <Typography variant="h6" gutterBottom>
              2025 | Full Price
            </Typography>
          </Grid>
        </Grid>
        <Container>
          <Box className="launchlist-widget" data-key-id="0TxzcS" data-height="180px"></Box>
        </Container>
      </Box>
    </Container>
  );
}
