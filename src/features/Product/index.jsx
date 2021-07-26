import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListProductPage from './pages/ListProductPage';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      Product Feature
      <Switch>
        <Route path={match.url} exact component={ListProductPage} />
      </Switch>
    </div>
  );
}

export default ProductFeature;