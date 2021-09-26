import { Redirect } from 'react-router-dom';
import DialogForm from './DialogForm';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({
  dialogs,
  messages,
  sendMessage,
  isAuth,
  findCompanion,
  activeDialogId,
  companionName,
}) => {
  const dialogsElements = dialogs.map(dialog => (
    <DialogItem
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
      activeDialogId={activeDialogId}
    />
  ));
  const messagesElemnts = messages.map(message => (
    <Message
      message={message.message}
      key={message.id}
      id={message.id}
      author={findCompanion(message.authorId)}
    />
  ));

  if (!isAuth) return <Redirect to='/login' />;

  return (
    <>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItemsWrapper}>
          <div className={styles.dialogsItems}>{dialogsElements}</div>
        </div>
        <div className={styles.dialogsBlockWrapper}>
          {activeDialogId ? (
            <>
              <div className={styles.messagesHeading}>
                <h4>Dialog with &#160;</h4>
                <span className={styles.name}>{companionName}</span>
              </div>
              <div className={styles.messagesList}>{messagesElemnts}</div>
              <div className={styles.inputBlock}>
                <DialogForm
                  sendMessage={sendMessage}
                  activeDialogId={activeDialogId}
                />
              </div>
            </>
          ) : (
            <div>
              <h4>Chose the dialog</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dialogs;
