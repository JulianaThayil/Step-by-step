import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        
      </Container>
    </React.Fragment>
  );
}