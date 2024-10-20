import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

export default function TooltipEx() {
    return (
        <Tooltip title="Delete" sx={{marginLeft: '10px', color: 'red'}} >
            <DeleteIcon />
        </Tooltip>
    );
}