import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  const dialogs = [
    { id: 1, name: 'Emmett' },
    { id: 2, name: 'Marty' },
    { id: 3, name: 'Lorraine' },
    { id: 4, name: 'George' },
    { id: 5, name: 'Jennifer' },
    { id: 6, name: 'Einstein' },
  ];

  const messages = [
    { id: 1, message: 'Great Scott!' },
    { id: 2, message: 'Nobody calls me chicken!' },
  ];

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
