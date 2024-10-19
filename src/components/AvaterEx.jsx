import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarEx() {
    return (
        // Stack: Aligns the avatars in a horizontal row with space between them (spacing={2})
        <Stack Stack direction="row" spacing={2} >
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/3d-icon-travel-with-man_23-2151037420.jpg?t=st=1729343612~exp=1729347212~hmac=62b49122a48a756e6c2a77db41b3f2447b308578b5fc5b9db333adb47d7b210d&w=740" />
            <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?t=st=1729343668~exp=1729347268~hmac=88ed48473f2f20c6b2fe9fce08b502be13269c47a2a0a9bc0c319c2b634c52b4&w=740" />
            <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg?t=st=1729343711~exp=1729347311~hmac=ef2222576d66c8ecfe10d3c513c4b5cb791bcf66d3aee508fe2eae9d6d3d67ef&w=740" />
        </Stack >
    );
}