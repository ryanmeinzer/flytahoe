"use client"

import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

const LaunchListForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [iframeSrc, setIframeSrc] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

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
        // Update iframe source
        setIframeSrc(data.embeddedLink);
        // Open dialog
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
      <form className="launchlist-form-popup" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Join Waitlist
        </Button>
      </form>

      {/* Dialog with iframe */}
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="iframe-dialog-title"
        fullWidth={true}
        maxWidth='lg'  // Adjust based on your content needs
      >
        <DialogTitle id="iframe-dialog-title">Welcome to the Waitlist!</DialogTitle>
        <DialogContent>
          <iframe className="launchlist-iframe" src={iframeSrc} style={{ width: '100%', height: '500px' }} frameBorder="0"></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LaunchListForm;
