import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('Register successfully !!!', { variant: 'success', autoHideDuration: 2000 });
    } catch (error) {
      console.log('Failed to register', error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
