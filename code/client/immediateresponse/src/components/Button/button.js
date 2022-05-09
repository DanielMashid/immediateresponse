import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useStyles from './styles'


 function TextButtons() {
    const classes = useStyles();

  return (
    <Stack direction="row" spacing={2}>
    <Button variant="contained" style={{ background: '#9E1C22' ,color : "white",width:"250px", fontSize: "15px"}}>התחבר</Button>
    </Stack>
  );
}
export default TextButtons