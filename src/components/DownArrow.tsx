import React from 'react';
import { Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DownArrow() {
    return (
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
    )
}