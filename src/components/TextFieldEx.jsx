import * as React from 'react';

import TextField from '@mui/material/TextField';

export default function TextFieldEx() {
    return (
        <>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
            {/* another */}
            <div >
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    sx={{marginTop: '10px'}}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                    sx={{marginTop: '10px'}}
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                    sx={{marginTop: '10px'}}
                />
                <TextField id="outlined-search" label="Search field" type="search"    sx={{marginTop: '10px'}} />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    sx={{marginTop: '10px'}}
                />
            </div>


        </>
    );
}