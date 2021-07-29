import React from 'react';
import PropTypes from 'prop-types';

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters, onChange }) {
  return (
    <div>
      FilterViewer
    </div>
  );
}

export default FilterViewer;