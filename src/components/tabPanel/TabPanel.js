import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={'Box'}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
