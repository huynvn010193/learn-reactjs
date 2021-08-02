import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { categoryAct } from './../../services/categorySlice';
import { unwrapResult } from '@reduxjs/toolkit';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    '& > li': {
      marginTop: theme.spacing(1),
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
        transition: 'all .25s',
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const resultCategory = await dispatch(categoryAct());
      setCategoryList(unwrapResult(resultCategory));
    })();
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
