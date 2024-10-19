
import React from 'react';
import Box from '@mui/material/Box'; // For layout structure
import Stack from '@mui/material/Stack'; // To arrange items in a row
import Slider from '@mui/material/Slider'; // Slider component
import VolumeDown from '@mui/icons-material/VolumeDown'; // Volume down icon
import VolumeUp from '@mui/icons-material/VolumeUp'; // Volume up icon

export default function SimpleSlider() {
  return (
    <Box sx={{ width: 200 }}> {/* Container with fixed width */}
      <Stack 
        spacing={2} 
        direction="row" 
        sx={{ alignItems: 'center', marginBottom: 1 }}
      >
        {/* Volume down icon */}
        <VolumeDown />
        
        {/* A simple slider initialized to 50 */}
        <Slider aria-label="Volume" defaultValue={50} />

        {/* Volume up icon */}
        <VolumeUp />
      </Stack>

      {/* A second slider, disabled for demonstration */}
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
