import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    listStyleType: 'none',
    '& > li': {
      margin: 0,
      padding: theme.spacing(1),
    }
  }
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => '',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemoveable: true,
    onRemove: true,
    onToggle: true,
  },
  {
    id: 2,
    getLabel: (filters) => '',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemoveable: true,
    onRemove: true,
    onToggle: true,
  },
  {
    id: 3,
    getLabel: (filters) => '',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemoveable: true,
    onRemove: true,
    onToggle: true,
  },
  {
    id: 4,
    getLabel: (filters) => '',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemoveable: true,
    onRemove: true,
    onToggle: true,
  },
]


FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();
  return (
    <div>
      <Box component="ul" className={classes.root}>
        {
          
        }
      </Box>
    </div>
  );
}

export default FilterViewer;