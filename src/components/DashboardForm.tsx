"use client"

import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogContent } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const DashboardForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [iframeSrc, setIframeSrc] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Simplified regex for email validation
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (!validateEmail(emailInput) && emailInput.length > 0) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const isButtonDisabled = !email || !!emailError;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('email', email);

    const actionURL = 'https://getlaunchlist.com/s/0TxzcS';

    fetch(actionURL, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.ok) {
        setIframeSrc(data.embeddedLink);
        setDialogOpen(true);
      } else {
        console.error("Error:", data.error);
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          component="form"
          className="launchlist-form-popup" 
          onSubmit={handleSubmit}
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            borderRadius: 2,
            boxShadow: 3  // Adjust for a subtle shadow effect
          }}
        >
          <TextField
            focused
            fullWidth
            label="Enter Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
            sx={{ mb: 2, width: '100%' }}  
          />
          <Grid
            container
            spacing={2}  // Reduced spacing for a more compact layout
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}> 
              <Button type="submit" variant="contained" disabled={isButtonDisabled} fullWidth>
                View Your Dashboard
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="iframe-dialog-title"
        fullWidth={true}
        maxWidth={false}
      >
        <DialogContent sx={{ padding: 0 }}>
          <iframe 
            className="launchlist-iframe"
            src={iframeSrc}
            style={{ width: '100%', height: '95vh', border: 'none' }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashboardForm;
