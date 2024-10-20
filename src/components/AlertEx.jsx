import * as React from 'react';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

export default function AlertEx() {
    return (
        <div sx={{ width: '100%'}}  spacing={2}>
            <Alert variant="filled" severity="success">
                This is an outlined success Alert.
            </Alert>
            <Alert variant="outlined" severity="info">
                This is an outlined info Alert.
            </Alert>
            <Alert variant="filled" severity="warning">
                This is an outlined warning Alert.
            </Alert>
            <Alert variant="outlined" severity="error">
                This is an outlined error Alert.
            </Alert>

            <Alert
                sx={{marginBottom: '30px'}}
                severity="success"
                action={
                    <Button color="primary" size="large">
                        UNDO
                    </Button>
                }>

                This Alert uses a Button component for its action.
            </Alert>
        </div>
    );
}