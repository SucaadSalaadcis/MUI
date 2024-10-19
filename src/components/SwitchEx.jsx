// Import necessary React and Material-UI components
import React from 'react';
import Switch from '@mui/material/Switch'; // Switch component

export default function SwitchEx() {
    return (
        <div>
            {/* A switch that is initially on */}
            <Switch aria-label='Switch 1' defaultChecked color='secondary' />

            {/* A switch that is initially off */}
            <Switch aria-label='Switch 2' />

            {/* A disabled switch that is on */}
            <Switch aria-label='Switch 3' disabled defaultChecked />

            {/* A disabled switch that is off */}
            <Switch aria-label='Switch 4' disabled />
        </div>
    );
}
