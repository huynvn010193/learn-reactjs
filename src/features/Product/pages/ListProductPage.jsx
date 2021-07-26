import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

ListProductPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 auto',
    marginLeft: '5px',
  },
}));

function ListProductPage(props) {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left} spacing={1}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>Right Column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListProductPage;
