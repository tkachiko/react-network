import Checkbox from '../common/FormsControls/Checkbox';
import TextInput from '../common/FormsControls/TextInput';
import styles from './LoginPage.module.css';

const LoginForm = ({ captchaUrl, error, status }) => {
  return (
    <div className={styles.loginPage}>
       <h1 className={styles.heading}>Sign in</h1>
       <div className={styles.loginForm}>
        <div className={styles.formSummaryError}>
          {status}
          {error}
        </div>
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
          autoComplete='password'
        />
        <div className={styles.checkBoxContainer}>
        <span>Remember me</span>
        <Checkbox name='rememberMe' />
        </div>
        <div className={styles.captcha}>
          {captchaUrl && <img src={captchaUrl} alt='' />}
        </div>
        <div>
          {captchaUrl && (
            <TextInput type='text' name='captcha' placeholder='Enter captcha' />
          )}
        </div>
       </div>
        <button type='submit'>Sign in</button>
    </div>
  );
};
export default LoginForm;
