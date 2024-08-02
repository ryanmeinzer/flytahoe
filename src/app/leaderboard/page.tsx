import React from 'react';
import { Box } from '@mui/material';

const Leaderboard: React.FC = () => {
    return (
      <Box sx={{ width: '100%', height: '100vh' }}>
        <iframe
          src="https://getlaunchlist.com/w/e/0TxzcS/leaderboard"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            overflow: 'auto'
          }}
          allowFullScreen
        ></iframe>
      </Box>
    );
  };
  
  export default Leaderboard;