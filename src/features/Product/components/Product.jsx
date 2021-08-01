import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useHistory } from 'react-router-dom';
import { formatPrice } from 'utils';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnaiUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const history = useHistory();
  const handleClickProduct = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleClickProduct}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnaiUrl} alt={product.name} width="100%" />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 && `- ${product.promotionPercent}%`}
      </Typography>
    </Box>
  );
}

export default Product;
