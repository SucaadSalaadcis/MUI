import * as React from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { ButtonGroup, IconButton } from '@mui/material';

export default function ButtonsEx() {
    return (
        <div>
            <Button variant="text" color="secondary">Text</Button>
            <Button variant="contained" color="success">Contained</Button>
            <Button variant="outlined" color="error">Outlined</Button>
            <Button disabled>Disabled</Button>
            {/* hoos malahan */}
            <Button variant="contained" disableElevation> Disable elevation </Button>

            {/* sizes */}
            <span style={{ marginLeft: '10px' }}>

                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </span>

            {/* with icon */}
            <div style={{ marginTop: '10px' }}>

                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>

                {/* icon btns */}
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton co lor="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>

            {/* btn group */}
            <ButtonGroup variant="outlined"    orientation="vertical">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            </div>




        </div>
    );
}