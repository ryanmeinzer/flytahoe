import * as React from 'react';
import { Box, TextField, Typography, Button, Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          textAlign="center"
        >
          <Typography variant="h4" component="h1" sx={{ mb: 6 }}>
            FlyTahoe
          </Typography>
        </Box>
      </Container>
    </>
  );
}
