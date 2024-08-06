import React from 'react';
import { Box, Typography, Divider, Icon } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; 

export default function ProblemSolution() {
    return (
        <>
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
        </>
    )
}