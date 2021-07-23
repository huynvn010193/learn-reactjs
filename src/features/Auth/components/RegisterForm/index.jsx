import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'title is too short'),
  });
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div>
      <Avatar>
        <LockOpenOutlined></LockOpenOutlined>
      </Avatar>
      <Typography component="h3" variant="h5">
        Create An account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullname" form={form} label="Full Name" />
        <InputField name="email" form={form} label="Email" />
        <InputField name="password" form={form} label="Password" />
        <InputField name="retypePassword" form={form} label="Retype Password" />
      </form>
    </div>
  );
}

export default RegisterForm;
