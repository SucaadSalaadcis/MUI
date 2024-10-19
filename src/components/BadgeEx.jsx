import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeEx() {
  return (
    <Badge badgeContent={10} color="secondary">
      <MailIcon color="action" />
    </Badge>
  );
}