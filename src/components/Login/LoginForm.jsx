import { Form } from 'formik';
import Checkbox from '../common/FormsControls/Checkbox';
import TextInput from '../common/FormsControls/TextInput';
import styles from './LoginPage.module.css';

const LoginForm = ({ captchaUrl, error, status }) => {
  return (
    <>
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
        <div className={styles.captcha}>
          {captchaUrl && <img src={captchaUrl} alt='' />}
        </div>
        <div>
          {captchaUrl && (
            <TextInput type='text' name='captcha' placeholder='Enter captcha' />
          )}
        </div>
        <div className={styles.formSummaryError}>
          {status}
          {error}
        </div>
        <button type='submit'>Sign in</button>
      </Form>
    </>
  );
};
export default LoginForm;
