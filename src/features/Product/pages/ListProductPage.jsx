import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';

ListProductPage.propTypes = {

};

function ListProductPage(props) {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item>Left Column</Grid>
          <Grid item>Right Column</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListProductPage;