import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({
  dialogs,
  messages,
  sendMessage,
  mewMessage,
  updateNewMessageText,
}) => {
  const dialogsElements = dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElemnts = messages.map(message => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageElement = React.createRef();

  const sendNewMessage = () => {
    sendMessage(mewMessage);
  };

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    updateNewMessageText(text);
  };

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div>
          <div className={styles.messages}>{messagesElemnts}</div>
          <div className={styles.inputBlock}>
            <textarea
              onChange={onMessageChange}
              ref={newMessageElement}
              value={mewMessage}
              className={styles.textarea}
            />
            <div className={styles.buttonWrapper}>
              <input
                onClick={sendNewMessage}
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
