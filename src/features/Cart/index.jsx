import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selector';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);
  return <div>CartFeature {cartTotal}</div>;
}

export default CartFeature;
