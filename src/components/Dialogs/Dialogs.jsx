import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({
  dialogs,
  messages,
  mewMessage,
  sendNewMessage,
  updateNewMessageText,
  isAuth,
}) => {
  const dialogsElements = dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  const messagesElemnts = messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  const sendMessage = () => {
    sendNewMessage();
  };

  const onMessageChange = e => {
    let text = e.target.value;
    updateNewMessageText(text);
  };

  if (!isAuth) return <Redirect to='/login' />;

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div>
          <div className={styles.messages}>{messagesElemnts}</div>
          <div className={styles.inputBlock}>
            <textarea
              onChange={onMessageChange}
              value={mewMessage}
              placeholder='Enter your message'
              className={styles.textarea}
            />
            <div className={styles.buttonWrapper}>
              <input
                onClick={sendMessage}
                type='button'
                value='Send'
                className={styles.button}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
