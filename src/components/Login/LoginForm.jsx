import { Form, Formik } from 'formik';
import Checkbox from '../common/FormsControls/Checkbox';
import TextInput from '../common/FormsControls/TextInput';
import * as Yup from 'yup';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import styles from './LoginPage.module.css';

const LoginForm = ({login}) => {
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
        onSubmit={(values, { setSubmitting, setFieldError, setStatus }) => {
          login(values.email, values.password, values.rememberMe, setSubmitting, setFieldError, setStatus);
          setSubmitting(false);
        }}
      >
        {({ status }) => (
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
          <div className={styles.formSummaryError}>{status}</div>
          <button type='submit'>Sign in</button>
        </Form>
        )}
      </Formik>
    </>
  );
};

export default connect(null, { login })(LoginForm);
