"use client"

import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogContent } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

interface LaunchListFormProps {
  referralCode?: string | string[];
}

const LaunchListForm: React.FC<LaunchListFormProps> = ({ referralCode }) => {

  console.log('referralCode:', referralCode)

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

    const actionURL = `https://getlaunchlist.com/s/0TxzcS/?ref=${referralCode}`;

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
        <Box component="form" className="launchlist-form-popup" onSubmit={handleSubmit} sx={{ my: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            sx={{ mb: 2 }}
          />
          <Box>
            <Grid
              container
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Button type="submit" variant="contained" disabled={isButtonDisabled}>
                  Claim Discount Code
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="iframe-dialog-title"
        fullWidth={true}
        maxWidth={false}
      >
        <DialogContent
        sx={{padding: 0}}
        >
          <iframe 
          className="launchlist-iframe" 
          src={iframeSrc} 
          style={{ width: '100%', height: '95vh', border: 'none'}}
          >
          </iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LaunchListForm;
