import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    listStyleType: 'none',
    padding: 0,
    '& > li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemoveable: false,
    onRemove: () => { },
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khyến mãi',
    isActive: () => true,
    isVisible: (filters) => !!filters.isPromotion,
    isRemoveable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: (filters) => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte'),
    isRemoveable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 4,
    getLabel: (filters) => `Danh mục ${filters.catName}`,
    isActive: (filters) => true,
    isVisible: (filters) => !!filters.catName,
    isRemoveable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters[`category.id`];
      delete newFilters.catName;
      return newFilters;
    },
    onToggle: true,
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();
  const { category } = useSelector((state) => state.category);

  console.log({ category, filters });

  const newFiltersCat = useMemo(() => {
    return !!filters['category.id']
      ? { ...filters, catName: category.find((item) => item.id === Number(filters['category.id']))?.name }
      : { ...filters };
  }, [filters, category]);

  const visibleFilter = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(newFiltersCat));
  }, [newFiltersCat]);

  return (
    <div>
      <Box component="ul" className={classes.root}>
        {visibleFilter.map((x) => (
          <li key={x.id}>
            <Chip
              label={x.getLabel(newFiltersCat)}
              color={x.isActive(newFiltersCat) ? 'primary' : 'default'}
              clickable={Boolean(!x.isRemoveable)}
              onClick={
                x.isRemoveable
                  ? null
                  : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(newFiltersCat);
                    onChange(newFilters);
                  }
              }
              onDelete={
                x.isRemoveable
                  ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(newFiltersCat);
                    onChange(newFilters);
                  }
                  : null
              }
            />
          </li>
        ))}
      </Box>
    </div>
  );
}

export default FilterViewer;
