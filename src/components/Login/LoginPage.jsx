import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from './../redux/auth-reducer';
import LoginForm from './LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = props => {
  if (props.isAuth) {
    return <Redirect to='/profile' />;
  }
  return (
    <div className={styles.loginForm}>
      <h1>Sign in</h1>
      <LoginForm login={login} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, null)(LoginPage);
