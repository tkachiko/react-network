import { Form, Formik } from 'formik';
import styles from './Dialogs.module.css';

const DialogForm = ({ sendMessage, activeDialogId }) => {
  return (
    <>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          sendMessage(values.message, activeDialogId);
          resetForm({ values: '', activeDialogId });
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          >
            <div className={styles.textareaBlock}>
              <textarea
                name='message'
                onChange={handleChange}
                value={values.message}
                placeholder='Enter your message'
                className={styles.textarea}
              />
              <div className={styles.buttonWrapper}>
                <input
                  onSubmit={handleSubmit}
                  onKeyDown={onkeydown}
                  type='submit'
                  value='Send'
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DialogForm;
