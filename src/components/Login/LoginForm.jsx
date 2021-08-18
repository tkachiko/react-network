import { Form, Formik } from 'formik';
import Checkbox from '../common/FormsControls/Checkbox';
import TextInput from '../common/FormsControls/TextInput';
import * as Yup from 'yup';
import { login } from './../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = props => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          props.login(values.email, values.password, values.rememberMe);
          setSubmitting(false);
        }}
      >
        <Form>
          <TextInput
            label='Email'
            name='email'
            type='email'
            placeholder='jane@formik.com'
          />
          <TextInput
            label='Password'
            name='password'
            type='password'
            placeholder='Password'
          />
          <Checkbox name='rememberMe'>Remember me</Checkbox>
          <button type='submit'>Sign in</button>
        </Form>
      </Formik>
    </>
  );
};

export default connect(null, { login })(LoginForm);
