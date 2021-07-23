import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullname: yup.string().required('Please enter your fullname')
      .test('should has at least two words', 'Please enter at least two words.',
        (value) => {
          return value.split(' ').length >= 2;
        }
      ),
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
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOpenOutlined></LockOpenOutlined>
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.title}>
        Create An account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullname" form={form} label="Full Name" />
        <InputField name="email" form={form} label="Email" />
        <PasswordField name="password" form={form} label="Password" />
        <PasswordField name="retypePassword" form={form} label="Retype Password" />
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
