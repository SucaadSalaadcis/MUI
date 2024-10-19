import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export default function CheckBoxEx() {



    return (
        <div>

            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>

            <Checkbox label='' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox
                label=''
                color='secondary'
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
            />

            {/* label placement  top , start, bottom, end */}
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="top"
                    control={<Checkbox />}
                    label="Top"
                    labelPlacement="start"
                />
            </FormGroup>
        </div>
    );
}