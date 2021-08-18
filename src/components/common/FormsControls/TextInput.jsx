import { Field, useField } from 'formik';
import styles from './FormsControls.module.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field className={meta.touched && meta.error ? `${styles.inputError}` : `${styles.textInput}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className={styles.error}>{meta.error}</span>
      ) : null}
    </>
  );
};

export default TextInput;