import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'title is too short'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    console.log('Todo', values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      TodoForms
      <InputField name="title" form={form} label="Todo" />
    </form>
  );
}

export default TodoForm;
