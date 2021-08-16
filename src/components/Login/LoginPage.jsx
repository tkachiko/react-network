import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { LoginForm } from './LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = props => {
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div className={styles.loginForm}>
      <h1>Login</h1>
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
          setTimeout(() => {
            console.log('Logging in as', values.email);
            setSubmitting(false);
          }, 400);
        }}
      >
        <LoginForm />
      </Formik>
    </div>
  );
};

export default LoginPage;
