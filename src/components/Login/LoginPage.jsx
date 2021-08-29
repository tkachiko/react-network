import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { login } from './../../redux/auth-reducer';
import LoginForm from './LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = ({ isAuth, captchaUrl, error, login }) => {
  if (isAuth) {
    return <Redirect to='/profile' />;
  }
  return (
    <div className={styles.loginForm}>
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captcha: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting, setFieldError, setStatus }) => {
          login(
            values.email,
            values.password,
            values.rememberMe,
            values.captcha,
            setSubmitting,
            setFieldError,
            setStatus,
          );
          console.log('Logging in as', values.email);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, status }) => (
          <LoginForm
            captchaUrl={captchaUrl}
            error={error}
            isSubmitting={isSubmitting}
            status={status}
          />
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => ({
  captchaUrl: state.auth.captchaUrl,
  error: state.auth.error,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginPage);
