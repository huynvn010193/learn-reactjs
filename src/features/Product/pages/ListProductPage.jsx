import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

ListProductPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
    marginLeft: '5px',
  },
}));

function ListProductPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log('Faile to fecth product List', error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListProductPage;
