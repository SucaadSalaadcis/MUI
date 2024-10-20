import React from 'react';
import Typography from '@mui/material/Typography';

//  Typography refers to a component used to display text with predefined styles, such as headings, body text, captions, etc

export default function TypographyEx() {
    return (
        <div>
            {/* Headings */}
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>

            {/* Subtitle and Body text */}
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            <Typography variant="body1">
                This is body text, which is typically used for long-form content.
            </Typography>
            <Typography variant="body2">
                This is body2, usually used for smaller sections of text.
            </Typography>

            {/* Caption and Overline */}
            <Typography variant="caption">This is a caption text.</Typography>
            <Typography variant="overline">Overline text</Typography>
        </div>
    );
}
