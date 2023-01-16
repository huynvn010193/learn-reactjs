import { Card, CardContent } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';

const HomePage = () => {
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            millionaire: '',
            money: 0,
            description: ''
          }}
          onSubmit = {() => {}}
        >
          <Form autoComplete="off">
            <Field name="firstName" component={TextField} label="First Name" />
            <Field name="lastName" component={TextField} label="First Name" />
            <Field 
              name="millionaire"
              component={CheckboxWithLabel}
              type="checkbox"
              Label={{ label: 'I am a millionaire' }}
            / >
            <Field name="money" component={TextField} label="All the money I have" />
            <Field name="firstName" component={TextField} label="First Name" />
          </Form>
        </Formik>
      </CardContent>
    </Card>
  )
}

export default HomePage;