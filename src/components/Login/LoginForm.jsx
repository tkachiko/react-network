import { Form } from 'formik';
import Checkbox from '../common/FormsControls/Checkbox';
import TextInput from '../common/FormsControls/TextInput';

export const LoginForm = () => {
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
        <button type='submit'>Submit</button>
      </Form>
    </>
  );
};
