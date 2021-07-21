import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  return (
    <div>
      <TextField fullWidth />
    </div>
  );
}

export default InputField;