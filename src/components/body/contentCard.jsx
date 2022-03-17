import * as React from 'react';
import Card from '@mui/material/Card';

export default function MediaCard({children}) {
  return (
    <Card sx={{ maxHeight: 550, maxWidth: 400}}>
        {children}
    </Card>
  );
}
