import { Form, Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({ dialogs, messages, sendNewMessage, isAuth }) => {
  const dialogsElements = dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  const messagesElemnts = messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  if (!isAuth) return <Redirect to='/login' />;

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div>
          <div className={styles.messages}>{messagesElemnts}</div>
          <div className={styles.inputBlock}>
            <Formik
              initialValues={{ message: '' }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                sendNewMessage(values.message);
                resetForm({ values: '' });
                setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Form>
                  <div>
                    <textarea
                      name='message'
                      onChange={handleChange}
                      value={values.message}
                      placeholder='Enter your message'
                      className={styles.textarea}
                    />
                  </div>
                  <div className={styles.buttonWrapper}>
                    <input onSubmit={handleSubmit} type='submit' value='Send' />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
