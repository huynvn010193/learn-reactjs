import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
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
  progess: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email').email('Please enter a valid email address'),
    password: yup.string().required('Please enter your password'),
  });
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    //form.reset();
  };

  const { isSubmitting, errors, touched } = form.formState;
  console.log("🚀 ~ file: index.jsx ~ line 64 ~ LoginForm ~ touched", touched)
  const isTouched = touched && Object.keys(touched).length > 0;
  const hasError = errors && Object.keys(errors).length > 0;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progess} />}

      <Avatar className={classes.avatar}>
        <LockOpenOutlined></LockOpenOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Sign in
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" form={form} label="Email" />
        <PasswordField name="password" form={form} label="Password" />
        <Button
          disabled={isSubmitting || hasError || !isTouched}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
