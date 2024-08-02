import * as React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

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
  
          <Box mt={4}>
            {/* <Button variant="contained" color="primary" size="large">
              Claim Discount
            </Button> */}
          </Box>

          <Box className="launchlist-widget" data-key-id="0TxzcS" data-height="180px" mt={4}></Box>
          
          <Typography variant="body2" sx={{ mt: 2 }}>
            *no payment required
          </Typography>
        </Box>
      </Container>
  );
}
