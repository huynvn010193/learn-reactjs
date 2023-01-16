import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailProductPage from './pages/DetailPage';
import ListProductPage from './pages/ListProductPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  
  
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} component={ListProductPage} exact/>
        <Route path={`${match.url}/:productId`} component={DetailProductPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
