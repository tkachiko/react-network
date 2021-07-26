import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({ dialogs, messages }) => {
  const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  const messagesElemnts = messages.map(message => <Message message={message.message} id={message.id} />);

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElemnts}</div>
      </div>
    </div>
  );
};

export default Dialogs;
