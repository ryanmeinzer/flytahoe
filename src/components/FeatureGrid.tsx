import { Box, Typography, Grid } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RecyclingIcon from '@mui/icons-material/Recycling';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function FeatureGrid() {
  return (
    <Box sx={{ my: 4, textAlign: 'center', color: 'grey.500' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} sm={2} display="flex" flexDirection="column" alignItems="center" sx={{ px: 2 }}>
          <SpeedIcon sx={{ fontSize: 40 }} />
          <Typography variant="subtitle1">Faster</Typography>
        </Grid>
        <Grid item xs={6} sm={2} display="flex" flexDirection="column" alignItems="center" sx={{ px: 2 }}>
          <AttachMoneyIcon sx={{ fontSize: 40 }} />
          <Typography variant="subtitle1">Cheaper</Typography>
        </Grid>
        <Grid item xs={6} sm={2} display="flex" flexDirection="column" alignItems="center" sx={{ px: 2 }}>
          <RecyclingIcon sx={{ fontSize: 40 }} />
          <Typography variant="subtitle1">Greener</Typography>
        </Grid>
        <Grid item xs={6} sm={2} display="flex" flexDirection="column" alignItems="center" sx={{ px: 2 }}>
          <WaterIcon sx={{ fontSize: 40 }} />
          <Typography variant="subtitle1">Bluer</Typography>
        </Grid>
        <Grid item xs={6} sm={2} display="flex" flexDirection="column" alignItems="center" sx={{ px: 2 }}>
          <AirIcon sx={{ fontSize: 40 }} />
          <Typography variant="subtitle1">Smoother</Typography>
        </Grid>
        <Grid item xs={6} sm={2} display="flex" flexDirection="column" alignItems="center" sx={{ px: 2 }}>
          <VolumeOffIcon sx={{ fontSize: 40 }} />
          <Typography variant="subtitle1">Quieter</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
